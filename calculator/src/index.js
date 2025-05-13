import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "./index.css";

// Initialize theme from localStorage
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("calculatorTheme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }
});

ReactDOM.render(<App />, document.getElementById("root"));