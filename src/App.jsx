import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) || false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? "container dark" : "container"}>
      <div className="card">
        <h1>🌗 Theme Toggle App</h1>

        <div className="emoji">
          {darkMode ? "🌙" : "☀️"}
        </div>

        <h2>
          {darkMode ? "Dark Mode Enabled" : "Light Mode Enabled"}
        </h2>

        <p>
          Click the button below to switch between Light and Dark Mode.
        </p>

        <button onClick={toggleTheme}>
          {darkMode ? "☀ Switch to Light" : "🌙 Switch to Dark"}
        </button>

        <div className="status">
          Current Theme :
          <span>
            {darkMode ? " Dark 🌙" : " Light ☀️"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;