import React from "react";
export function WhyHowWhat({ why, how, what }) {
  const row = (label, text) => (
    <div style={{ display: "flex", gap: "20px", padding: "14px 0", borderTop: "1px solid var(--border-hairline)" }}>
      <div style={{ width: "70px", flexShrink: 0, fontFamily: "var(--font-sans-ui)", fontSize: "11px", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--color-gold)" }}>{label}</div>
      <div style={{ fontFamily: "var(--font-serif-body)", fontSize: "var(--text-body)", color: "var(--text-primary)", lineHeight: "var(--leading-body)" }}>{text}</div>
    </div>
  );
  return (
    <div>
      {row("Why", why)}
      {row("How", how)}
      {row("What", what)}
    </div>
  );
}
