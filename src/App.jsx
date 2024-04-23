import { createRoot } from "react-dom/client";
import Home from "./Home";
import { useState } from "react";

const App = () => {
  const body = document.querySelector("body");
  const [isLightMode, setLightMode] = useState("false");
  const ToggleClass = () => {
    setLightMode(!isLightMode);
    body.classList.toggle("light");
  };

  return (
    <div>
      <header>
        <h1>GinaLeeAlfy</h1>
        <button
          aria-label="Light Mode Toggle Button"
          className="switch"
          onClick={ToggleClass}
        >
          <div className={isLightMode ? "circle" : "circle hidden"}></div>
          <div className={isLightMode ? "circle hidden" : "circle"}></div>
        </button>
      </header>
      <Home />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
