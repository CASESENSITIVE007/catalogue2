"use client";

import { useEffect, useState } from "react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      type="button"
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      onClick={toggleTheme}
      className={`inline-flex items-center justify-center rounded-full text-on-surface hover:text-primary hover:bg-surface-container transition-colors ${className}`}
    >
      <span
        className="material-symbols-outlined text-[22px]"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {theme === "dark" ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
}
