import React from "react";
import Header from "../components/Header.jsx";
import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  function NavigateButton() {
    const navigate = useNavigate();
  }
  const navigate = useNavigate();

  return (
    <div className="divbody">
      <Header />
      <div className="categories">
        <div onClick={() => navigate("/Rules")} className="divs">
          Rules
        </div>
        <div onClick={() => navigate("/Matches")} className="divs">
          Matches
        </div>
        <div onClick={() => navigate("/Member")} className="divs">
          Members
        </div>
      </div>
    </div>
  );
}
