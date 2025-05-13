import React, { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";
import History from "./History";
import ThemeToggle from "./ThemeToggle";

export default function App() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  
  // History state
  const [history, setHistory] = useState([]);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  
  // Theme state (will implement in Feature 2)
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  const handleClick = buttonName => {
    const result = calculate(state, buttonName);
    
    // If equals is pressed and we have a valid calculation, add to history
    if (buttonName === "=" && state.next !== null) {
      const expressionParts = [];
      if (state.total !== null) expressionParts.push(state.total);
      if (state.operation !== null) expressionParts.push(state.operation);
      if (state.next !== null) expressionParts.push(state.next);
      
      const expression = expressionParts.join(" ");
      const calculationResult = result.total;
      
      if (calculationResult !== null) {
        setHistory([
          { expression, result: calculationResult },
          ...history
        ]);
      }
    }
    
    setState(result);
  };
  
  const toggleHistory = () => {
    setIsHistoryOpen(!isHistoryOpen);
  };
  
  const selectFromHistory = (historyItem) => {
    setState({
      total: historyItem.result,
      next: null,
      operation: null,
    });
  };
  
  // Theme toggler (will be used in Feature 2)
  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    document.body.classList.toggle("dark-theme", newTheme);
    localStorage.setItem("calculatorTheme", newTheme ? "dark" : "light");
  };
  
  return (
    <div className={`component-app ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <ThemeToggle isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <Display value={state.next || state.total || "0"} />
      <ButtonPanel clickHandler={handleClick} />
      <History 
        history={history}
        onSelectHistory={selectFromHistory}
        isOpen={isHistoryOpen}
        toggleHistory={toggleHistory}
      />
    </div>
  );
}