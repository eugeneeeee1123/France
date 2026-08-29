import React from "react";
export function Tag({ children, active = false, onClick }) {
  return (
    <button onClick={onClick} style={{
      fontFamily: "var(--font-sans-ui)", fontSize: "12px", letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase", padding: "6px 14px", borderRadius: "var(--radius-pill)",
      border: "1px solid " + (active ? "var(--color-gold)" : "var(--border-hairline)"),
      background: active ? "rgba(239,180,75,0.14)" : "transparent",
      color: active ? "var(--color-gold)" : "var(--text-muted)", cursor: "pointer",
    }}>
      {children}
    </button>
  );
}
