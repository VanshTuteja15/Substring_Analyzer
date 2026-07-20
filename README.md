# 🚀 Smart Text Analyzer

A modern React application inspired by **LeetCode #3 – Longest Substring Without Repeating Characters**. This project transforms a classic algorithm into an interactive text analysis tool with a clean dashboard interface.

---

## 📖 About

Smart Text Analyzer helps users analyze text in real time by finding the **longest substring without repeating characters** using the **Sliding Window** algorithm.

Instead of simply returning a number like the original LeetCode problem, this application provides an interactive dashboard that displays useful statistics about the entered text.

---

## ✨ Features

* 🔍 Real-time text analysis
* 🚀 Sliding Window algorithm (O(n))
* 📏 Displays the longest substring without repeating characters
* 📊 Shows substring length
* 🔠 Counts total characters
* 🧩 Counts unique characters
* 🔁 Counts duplicate characters
* 🏷️ Displays unique characters as badges
* 🌙 Dark Mode
* 📋 Copy longest substring to clipboard
* 🗑️ Clear input button
* 📱 Responsive design for desktop and mobile

---

## 🛠️ Built With

* React.js
* JavaScript (ES6+)
* CSS3
* Git & GitHub

---

## 📂 Project Structure

```text
src
│
├── components
│   └── (Reusable UI Components)
│
├── problems
│   └── LongestSubstring.jsx
│
├── utils
│   └── longestSubstring.js
│
├── App.js
├── index.js
└── index.css
```

---

## 💻 How to Run

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into the project:

```bash
cd substring-analyzer-react
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open your browser:

```text
http://localhost:3000
```

---

## 🧪 Example

### Input

```text
abcabcbb
```

### Output

```text
Longest Substring:
abc

Length:
3
```

---

## 🧠 Algorithm

This project uses the **Sliding Window** technique.

### Steps

1. Maintain two pointers (`left` and `right`).
2. Expand the window by moving `right`.
3. If a duplicate character is found, move `left` past the previous occurrence.
4. Track the longest valid substring during traversal.

---

## ⏱️ Complexity Analysis

| Metric           | Complexity       |
| ---------------- | ---------------- |
| Time Complexity  | **O(n)**         |
| Space Complexity | **O(min(n, m))** |

Where:

* **n** = length of the input string
* **m** = size of the character set

---

## 📸 Screenshots

You can add screenshots here after running the project.

Example:

```text
screenshots/
│
├── light-mode.png
├── dark-mode.png
└── mobile-view.png
```

---

## 🚀 Future Improvements

* Character frequency chart
* Search history
* Export analysis as PDF
* Word frequency analysis
* Theme customization
* Animated substring visualization
* Unit tests with Jest

---

## 🎯 Learning Outcomes

Through this project, I practiced:

* React Functional Components
* React Hooks (`useState`)
* Component-based architecture
* State management
* Conditional rendering
* Responsive UI design
* JavaScript ES6+
* Sliding Window algorithm
* Git workflow with incremental commits
* Writing reusable utility functions

---

## 📜 Original LeetCode Problem

**LeetCode #3 — Longest Substring Without Repeating Characters**

Given a string `s`, find the length of the longest substring without repeating characters.

This project extends the original problem by providing an interactive React interface instead of only returning the algorithm's result.

---

## 👨‍💻 Author

**Vansh Tuteja**

Software Development Student | React Developer | MERN Stack Enthusiast

---

If you found this project helpful, feel free to ⭐ the repository.
