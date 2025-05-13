import React from "react";
import "./ThemeToggle.css";

export default function ThemeToggle({ isDarkTheme, toggleTheme }) {
  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme} className="theme-toggle-button">
        {isDarkTheme ? "☀️ Light" : "🌙 Dark"}
      </button>
    </div>
  );
}