import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
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
    <BrowserRouter>
      <header>
        <h1>
          <Link to="/">GinaLeeAlfy</Link>
        </h1>
        <button className="switch" onClick={ToggleClass}>
          <div className={isLightMode ? "circle" : "circle hidden"}></div>
          <div className={isLightMode ? "circle hidden" : "circle"}></div>
        </button>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
