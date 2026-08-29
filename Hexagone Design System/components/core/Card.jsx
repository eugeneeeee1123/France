import React from "react";
export function Card({ children, padding = "24px", interactive = false }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: "var(--surface-card)", border: "1px solid " + (hover ? "var(--color-gold)" : "var(--surface-card-border)"),
        borderRadius: "var(--radius-md)", boxShadow: hover ? "0 24px 48px -24px rgba(0,0,0,0.7)" : "var(--shadow-card)",
        padding, fontFamily: "var(--font-sans-ui)", color: "var(--text-primary)",
        transform: hover ? "translateY(-2px)" : "translateY(0)",
        transition: "border-color 0.25s, box-shadow 0.3s, transform 0.3s var(--ease-monument)",
      }}
    >
      {children}
    </div>
  );
}
