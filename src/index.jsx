import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Rules from "./pages/Rules";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Rules" element={<Rules />} />
        {/* Add routes for "Matches", "Members", and "About" */}
      </Routes>
    </Router>
  </React.StrictMode>
);
