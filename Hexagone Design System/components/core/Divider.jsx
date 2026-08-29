import React from "react";
export function Divider({ inset = false }) {
  return <div style={{ height: "1px", background: "var(--border-hairline)", margin: inset ? "0 24px" : "0" }} />;
}
