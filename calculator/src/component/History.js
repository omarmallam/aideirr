import React from "react";
import "./History.css";

export default function History({ history, onSelectHistory, isOpen, toggleHistory }) {
  return (
    <div className={`history-panel ${isOpen ? "open" : "closed"}`}>
      <div className="history-header">
        <h3>Calculation History</h3>
        <button className="toggle-history" onClick={toggleHistory}>
          {isOpen ? "Hide" : "Show"}
        </button>
      </div>
      {isOpen && (
        <div className="history-list">
          {history.length === 0 ? (
            <p className="empty-history">No calculations yet</p>
          ) : (
            <ul>
              {history.map((item, index) => (
                <li key={index} onClick={() => onSelectHistory(item)}>
                  <span className="history-expression">{item.expression}</span>
                  <span className="history-result">{item.result}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}