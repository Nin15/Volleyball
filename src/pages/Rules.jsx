import React from "react";
import Header from "../components/Header.jsx";
import "../App.css";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Rules({}) {
  const [zoom, setZoom] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [scale, setScale] = useState(1);
  const [screening, setScreening] = useState(false);


  const handleScreening = () => {
    setScreening((prev) => !prev);
  };
  const doZoom = (event) => {
    setZoom(true);
    setScrollPos(window.pageYOffset);
    event.preventDefault();
    setScale(1);
  };

  const closeZoom = (event) => {
    event.preventDefault();
    setZoom(false);
    setTimeout(() => {
      window.scrollTo(0, scrollPos);
    }, 0);
    setScale(0.9);
  };
  return (
    <div
      style={{
        backgroundImage: "url('./homebackground.jpg')",
        width: "100%",
        height: "100%",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
     

      }}
    >
      <div>
        <Header styles1="fixed" />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflowY: "auto",
            gap: "20px",
            top: "0",
            left: "0",
          }}
        >
          <div
            className="card"
            style={{
              marginTop: "150px",
              width: "1100px",
              height: "auto",
              backgroundColor: "rgba(255, 255, 255, 0.32)",
              fontSize: "25px",
              color: "rgb(55, 55, 55)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                justifyContent: "center",
                alignItems: "center",
                
              }}
            >
              <h1 style={{ color: "rgb(55, 55, 55)" }}>
                Key Volleyball Rules (2025-2028)
              </h1>
              <p>(Source: FIVB Official Volleyball Rules 2025-2028)</p>
              <motion.div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <h1>Scoring System</h1>
                <ul>
                  <li>Matches are played in a best-of-5 sets format.</li>
                  <li>Sets go up to 25 points (final set to 15).</li>
                  <li>A team must win by at least 2 points.</li>
                  <li>
                    The Rally Point System is used (a point is scored on every
                    rally, no matter who serves).
                  </li>
                </ul>
              </motion.div>
              <motion.div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <h1>Court & Positions</h1>
                <ul>
                  <li>The court is 18m x 9m, divided by a net.</li>

                  <img
                    onClick={doZoom}
                    src="./court.jpg"
                    alt="Court dimensions"
                    style={{
                      borderRadius: "20px",
                      cursor: "pointer",
                      height: "300px",
                      width: "450px",
                      marginBottom: "50px",
                      marginTop: "50px",
                    }}
                  />

                  <li>
                    Rotation: Players rotate clockwise after winning a point on
                    the opponent’s serve.
                  </li>
                  <li>
                    The Libero is a defensive specialist who cannot attack,
                    serve, or block.
                  </li>
                </ul>
              </motion.div>
              <motion.div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <h1>Service Rules</h1>
                <ul>
                  <li>
                    The server must stand behind the end line and serve within 8
                    seconds of the whistle.
                  </li>
                  <li>
                    Foot faults occur if the server steps on or over the end
                    line before hitting the ball.
                  </li>
                  <li>
                    Screening is illegal (teammates cannot block the opponent’s
                    view of the server).
                  </li>
                  <FontAwesomeIcon
                    onClick={handleScreening}
                    icon={faArrowDown}
                    style={{
                      cursor: "pointer",
                      "--fa-primary-color": "#4f4f4f",
                      "--fa-secondary-color": "#4f4f4f",
                    }}
                  />
                  {screening && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      exit={{ opacity: 0, x: 10 }}
                      style={{ margin: 0 }}
                    >
                      <p>
                        Screening in volleyball refers to a situation where the
                        serving team blocks the receiving team’s view of the
                        server or the ball before the serve is made. A screening
                        fault is only called if: The serving team’s front-row
                        players stand too close together and completely block
                        the receiver’s view of the server{" "}
                        <span
                          style={{
                            cursor: "text",
                            fontSize: "25px",
                            fontWeight: "bold",
                          }}
                        >
                          at the moment of contact.
                        </span>{" "}
                        The serving team raises their arms, jumps, or waves
                        excessively to deliberately distract the receiver. The
                        ball passes directly over the screening players, proving
                        that the receiver could not see the serve.
                      </p>
                    </motion.div>
                  )}
                </ul>{" "}
              </motion.div>
              <motion.div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <h1>Playing the Ball</h1>
                <ul>
                  <li>
                    Each team is allowed a maximum of three touches before
                    returning the ball.
                  </li>
                  <li>No double contact (except on the first hit).</li>
                  <li>
                    No catching, lifting, or throwing the ball—contact must be
                    clean.
                  </li>
                </ul>{" "}
              </motion.div>
              <motion.div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <h1>Net & Attack Rules</h1>
                <ul>
                  <li>Players cannot touch the net while making a play.</li>
                  <li>
                    Front-row players can attack from anywhere, but back-row
                    players must jump from behind the attack line.
                  </li>
                  <li>Blocking a serve is not allowed.</li>
                </ul>{" "}
              </motion.div>
              <motion.div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <h1>Substitutions & Timeouts</h1>
                <ul>
                  <li>Teams can make up to 6 substitutions per set.</li>
                  <li>Each team gets two 30-second timeouts per set.</li>
                </ul>{" "}
              </motion.div>
              <motion.div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <h1>Violations & Faults</h1>
                <ul>
                  <li>
                    A double contact (except on the first hit) is a fault.
                  </li>
                  <li>
                    A back-row player attacking from the front zone is illegal.
                  </li>
                  <li>
                    A ball touching the antenna or landing outside the boundary
                    lines is out.
                  </li>
                  <li>
                    Crossing the centerline under the net is only legal if it
                    doesn’t interfere with the opponent.
                  </li>
                </ul>
              </motion.div>
              <motion.div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <h1>Special Libero Rules</h1>
                <ul>
                  <li>
                    The Libero can replace any back-row player without counting
                    as a substitution.
                  </li>
                  <li>They cannot attack, serve, or block.</li>
                  <li>
                    If they set the ball using an overhand pass in the front
                    zone, teammates cannot attack it above net height.
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {zoom && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#00000088",
            width: "100%",
            height: "100dvh",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: "9999",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: scale }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, scale: scale }}
          >
            <img
              onClick={closeZoom}
              src="./court.jpg"
              alt="Court dimensions zoomed"
              style={{
                cursor: "pointer",
                opacity: 1,
                marginTop: "80px",
                backgroundColor: "#000000",
                borderRadius: "20px",
                height: "560px",
                width: "800px",

                zIndex: "1",
              }}
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}
