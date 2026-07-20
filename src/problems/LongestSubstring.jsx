import { useState } from "react";
import longestSubstring from "../utils/longestSubstring";

function LongestSubstring() {
  const [text, setText] = useState("");

  const result = longestSubstring(text);

  const uniqueCharacters = [...new Set(text)];

  return (
    <div className="container">
      <h1>🚀 Smart Text Analyzer</h1>

      <p className="subtitle">
        LeetCode #3 - Longest Substring Without Repeating Characters
      </p>

      <div className="card">
        <h3>Enter Text</h3>

        <input
          className="text-input"
          type="text"
          placeholder="Try typing abcabcbb..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="card">
        <h3>Longest Substring</h3>

        <div className="highlight-box">
          {result.substring || "Start typing..."}
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

        <p>Algorithm: Sliding Window (O(n))</p>
      </div>

      <div className="card">
        <h3>Unique Characters</h3>

        <div className="badge-container">
          {uniqueCharacters.length === 0 ? (
            <p>No characters yet.</p>
          ) : (
            uniqueCharacters.map((char, index) => (
              <span key={index} className="badge">
                {char}
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default LongestSubstring;