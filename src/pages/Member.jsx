import React from "react";
import members from "../members.js";
import Header from "../components/Header.jsx";
import "../App.css";
import { motion } from "framer-motion";

export default function Member() {
  return (
    <div
      style={{
        backgroundImage: `url("/homebackground.jpg")`,
        width: "100vw", 
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        animation: "larger 0.15s ease-in-out forwards",
        overflowX: "hidden",
      }}
    >
      <Header />

      <motion.div
        whileHover={{ scale: 1.1 }}
        className="box"
        style={{
          width: "1000px",
          height: "auto",
          marginTop: "100px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          overflow: "hidden",
          padding: "20px",
          gap: "20px",
          color: "black",
          flexWrap: "wrap",
          borderRadius: "40px",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          zIndex: "2",
        }}
      >
        {members.map((member, index) => (
          <motion.div
            style={{ cursor: "pointer" }}
            className="card"
            key={index}
            whileHover={{ scale: 1.1 }}
          >
            <h1>{member.position}</h1>
            <div className="card1">
              <img className="img2" src={member.imgg} alt={`${member.name}`} />
              <h2>{member.name}</h2>
              <p>{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
