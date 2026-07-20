import { useState } from "react";
import longestSubstring from "../utils/longestSubstring";

function LongestSubstring() {

    const [text, setText] = useState("");

    const [result, setResult] = useState({
        substring: "",
        length: 0
    });

    function handleAnalyze() {

        const analysis = longestSubstring(text);

        setResult(analysis);

    }

    return (

        <div>

            <h2>
                Longest Substring Analyzer
            </h2>

            <input
                type="text"
                placeholder="Enter some text..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button onClick={handleAnalyze}>
                Analyze
            </button>

            <hr />

            <h3>Results</h3>

            <p>
                <strong>Longest Substring:</strong> {result.substring}
            </p>

            <p>
                <strong>Length:</strong> {result.length}
            </p>

        </div>

    );

}

export default LongestSubstring;