import React from "react";
export function Badge({ children, tone = "gold" }) {
  const tones = {
    gold: { background: "rgba(239,180,75,0.14)", color: "var(--color-gold)", border: "1px solid rgba(239,180,75,0.3)" },
    red: { background: "rgba(227,5,28,0.12)", color: "#ff5c6c", border: "1px solid rgba(227,5,28,0.35)" },
    muted: { background: "rgba(248,246,242,0.06)", color: "var(--text-muted)", border: "1px solid var(--border-hairline)" },
  };
  return (
    <span style={{
      fontFamily: "var(--font-sans-ui)", fontSize: "11px", letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase", padding: "4px 10px", borderRadius: "var(--radius-pill)",
      display: "inline-block", ...tones[tone],
    }}>
      {children}
    </span>
  );
}
