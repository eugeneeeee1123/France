#!/usr/bin/env node
// Message gate for messages/fr.json, en.json, zh.json (ARCHITECTURE-INDEX §4,
// §10 and DESIGN-LOCK voice rules). Exits with code 1 when any check fails:
//   1. the three key sets differ;
//   2. ICU placeholders ({name}) differ between locales for the same key;
//   3. a value contains an em-dash (U+2014), an exclamation mark (ASCII or
//      full-width U+FF01) or an emoji;
//   4. the digit sequence 290 appears anywhere under messages/ or src/
//      (R.I.F. canon: the warhead figure is 700, never the real-world one).
// Usage: npm run check:messages

import { readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const messagesDir = join(root, "messages");
const locales = ["fr", "en", "zh"];
const reference = locales[0];
const failures = [];

function flatten(value, prefix, out) {
  if (value !== null && typeof value === "object" && !Array.isArray(value)) {
    for (const [key, child] of Object.entries(value)) {
      flatten(child, prefix ? `${prefix}.${key}` : key, out);
    }
  } else {
    out.set(prefix, value);
  }
  return out;
}

const flat = {};
for (const locale of locales) {
  const file = join(messagesDir, `${locale}.json`);
  let parsed;
  try {
    parsed = JSON.parse(readFileSync(file, "utf8"));
  } catch (error) {
    console.error(`check:messages: cannot read ${relative(root, file)}: ${error.message}`);
    process.exit(1);
  }
  flat[locale] = flatten(parsed, "", new Map());
}

// 1. Key parity (fr.json is the reference set).
const referenceKeys = [...flat[reference].keys()];
for (const locale of locales.slice(1)) {
  const keys = new Set(flat[locale].keys());
  for (const key of referenceKeys) {
    if (!keys.has(key)) failures.push(`${locale}.json: missing key ${key}`);
  }
  for (const key of keys) {
    if (!flat[reference].has(key)) {
      failures.push(`${locale}.json: extra key ${key} (not in ${reference}.json)`);
    }
  }
}

// 2. ICU placeholders per key (argument names, including plural/select args).
const placeholderPattern = /\{\s*([A-Za-z0-9_]+)\s*[,}]/g;
function placeholders(value) {
  if (typeof value !== "string") return "";
  return [...value.matchAll(placeholderPattern)]
    .map((match) => match[1])
    .sort()
    .join(",");
}
for (const key of referenceKeys) {
  const expected = placeholders(flat[reference].get(key));
  for (const locale of locales.slice(1)) {
    if (!flat[locale].has(key)) continue;
    const actual = placeholders(flat[locale].get(key));
    if (actual !== expected) {
      failures.push(
        `${locale}.json: placeholder mismatch at ${key} (${reference}: {${expected}} vs ${locale}: {${actual}})`,
      );
    }
  }
}

// 3. Voice rules per value.
// Text symbols that Unicode classes as pictographic but are not emoji in copy.
const allowedPictographs = new Set(["©", "®", "™"]);
const emojiPattern = /\p{Extended_Pictographic}|\p{Regional_Indicator}|️|⃣/u;
function hasEmoji(value) {
  for (const char of value) {
    if (allowedPictographs.has(char)) continue;
    if (emojiPattern.test(char)) return true;
  }
  return false;
}
for (const locale of locales) {
  for (const [key, value] of flat[locale]) {
    if (typeof value !== "string") {
      failures.push(`${locale}.json: ${key} is not a string`);
      continue;
    }
    if (value.includes("—")) failures.push(`${locale}.json: em-dash (U+2014) at ${key}`);
    if (value.includes("!") || value.includes("！")) {
      failures.push(`${locale}.json: exclamation mark at ${key}`);
    }
    if (hasEmoji(value)) failures.push(`${locale}.json: emoji at ${key}`);
  }
}

// 4. No 290 anywhere in messages/ or src/ (text files only; icons are binary).
const textExtensions = new Set([".json", ".ts", ".tsx", ".js", ".mjs", ".css", ".md", ".svg", ".txt"]);
function walk(dir, out) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, out);
    else if (textExtensions.has(extname(name))) out.push(path);
  }
  return out;
}
const forbiddenDigits = "290";
for (const file of [...walk(messagesDir, []), ...walk(join(root, "src"), [])]) {
  readFileSync(file, "utf8")
    .split(/\r?\n/)
    .forEach((line, index) => {
      if (line.includes(forbiddenDigits)) {
        failures.push(`${relative(root, file)}:${index + 1}: contains ${forbiddenDigits}`);
      }
    });
}

if (failures.length > 0) {
  console.error(`check:messages failed (${failures.length} problem${failures.length === 1 ? "" : "s"}):`);
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exit(1);
}
console.log(
  `check:messages ok: ${referenceKeys.length} keys in ${locales.length} locales, placeholders aligned, no em-dash, exclamation mark, emoji or ${forbiddenDigits} in messages/ or src/.`,
);
