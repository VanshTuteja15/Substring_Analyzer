import { useState } from "react";
import longestSubstring from "../utils/longestSubstring";

function LongestSubstring() {

    const [text, setText] = useState("");

    const result = longestSubstring(text);

    const uniqueCharacters = new Set(text);

    return (

        <div>

            <h2>
                Smart Text Analyzer 🚀
            </h2>

            <input
                type="text"
                placeholder="Start typing..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <hr />

            <h3>Analysis</h3>

            <p>
                <strong>Input Length:</strong> {text.length}
            </p>

            <p>
                <strong>Unique Characters:</strong> {uniqueCharacters.size}
            </p>

            <p>
                <strong>Longest Substring:</strong> {result.substring}
            </p>

            <p>
                <strong>Longest Length:</strong> {result.length}
            </p>

        </div>

    );

}

export default LongestSubstring;