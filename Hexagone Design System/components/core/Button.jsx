import React from "react";
export function Button({ children, variant = "primary", size = "md", disabled = false, onClick }) {
  const [state, setState] = React.useState("idle");
  const base = {
    fontFamily: "var(--font-sans-ui)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase",
    fontWeight: 600, border: "1px solid transparent", borderRadius: "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.4 : 1,
    transition: "background 0.2s, color 0.2s, box-shadow 0.3s var(--ease-monument), transform 0.15s var(--ease-monument)",
    fontSize: size === "sm" ? "12px" : size === "lg" ? "15px" : "13px",
    padding: size === "sm" ? "8px 16px" : size === "lg" ? "16px 32px" : "12px 24px",
    transform: state === "pressed" ? "scale(0.97)" : "scale(1)",
  };
  const variants = {
    primary: { background: state === "hover" ? "var(--color-gold-bright)" : "var(--color-gold)", color: "var(--color-navy)", boxShadow: state === "hover" ? "var(--shadow-glow-gold)" : "none" },
    secondary: { background: state === "hover" ? "rgba(239,180,75,0.08)" : "transparent", color: "var(--color-gold)", borderColor: "var(--border-hairline)" },
    ghost: { background: "transparent", color: state === "hover" ? "var(--color-gold)" : "var(--text-primary)" },
  };
  return (
    <button
      style={{ ...base, ...variants[variant] }}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setState("hover")}
      onMouseLeave={() => setState("idle")}
      onMouseDown={() => setState("pressed")}
      onMouseUp={() => setState("hover")}
    >
      {children}
    </button>
  );
}
