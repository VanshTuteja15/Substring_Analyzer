import { useState } from "react";
import longestSubstring from "../utils/longestSubstring";

function LongestSubstring() {
  const [text, setText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const result = longestSubstring(text);

  const uniqueCharacters = [...new Set(text)];

  function clearInput() {
    setText("");
  }

  async function copySubstring() {
    if (!result.substring) return;

    try {
      await navigator.clipboard.writeText(result.substring);
      alert("Substring copied!");
    } catch {
      alert("Unable to copy.");
    }
  }

  return (
    <div className={darkMode ? "container dark" : "container"}>
      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <h1>🚀 Smart Text Analyzer</h1>

      <p className="subtitle">
        LeetCode #3 - Longest Substring Without Repeating Characters
      </p>

      <div className="card">
        <h3>Enter Text</h3>

        <input
          className="text-input"
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="button-group">
          <button onClick={clearInput}>
            Clear
          </button>

          <button
            onClick={copySubstring}
            disabled={!result.substring}
          >
            Copy Result
          </button>
        </div>

        {text.length === 0 && (
          <p className="warning">
            Start typing to analyze your text.
          </p>
        )}
      </div>

      <div className="card">
        <h3>Longest Substring</h3>

        <div className="highlight-box">
          {result.substring || "No result"}
        </div>

        <p>
          <strong>Length:</strong> {result.length}
        </p>
      </div>

      <div className="card">
        <h3>Statistics</h3>

        <p>Total Characters: {text.length}</p>
        <p>Unique Characters: {uniqueCharacters.length}</p>
        <p>Duplicate Characters: {text.length - uniqueCharacters.length}</p>
        <p>Algorithm: Sliding Window O(n)</p>
      </div>

      <div className="card">
        <h3>Unique Characters</h3>

        <div className="badge-container">
          {uniqueCharacters.map((char, index) => (
            <span
              className="badge"
              key={index}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LongestSubstring;