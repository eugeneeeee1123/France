import React from "react";
export function StatBlock({ value, label, size = "lg" }) {
  const valueSize = size === "sm" ? "22px" : "42px";
  return (
    <div style={{ fontFamily: "var(--font-sans-ui)", textAlign: "left", minWidth: 0 }}>
      <div style={{ fontFamily: "var(--font-display)", fontSize: valueSize, color: "var(--color-gold)", lineHeight: 1.1, wordBreak: "break-word" }}>{value}</div>
      <div style={{ fontSize: "12px", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-muted)", marginTop: "8px", lineHeight: 1.4 }}>{label}</div>
    </div>
  );
}
