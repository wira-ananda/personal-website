import React from "react";
import ReactDOM from "react-dom/client";
import App from "./portfolio/App";
import "./portfolio/css/index.css";
import "./main.scss";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppCv from "./cv/js/Header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/curriculum-vitae" element={<AppCv />} />
      </Routes>
    </Router> */}
    <AppCv />
  </React.StrictMode>
);
