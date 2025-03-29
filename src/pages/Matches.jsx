import React from "react";
import matches from "../Matches.js";
import Header from "../components/Header.jsx";
import { motion } from "framer-motion";

function Matches() {
  return (
    <div className="matchespage">
      <Header />

      <div whileHover={{ scale: 1.1 }} className="matchesbackground">
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {matches.length > 0 ? (
            matches.map((el) => (
              <motion.div whileHover={{ scale: 1.1 }} className="match-card" key={el.id}>
                <h1>{`${el.homeTeam} VS ${el.awayTeam}`}</h1>
                <h2>{` ${el.date}, ${el.time}`}</h2>
                <h3>{el.location}</h3>
              </motion.div>
            ))
          ) : (
            <h1>No matches available</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Matches;
