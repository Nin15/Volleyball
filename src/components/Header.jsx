import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { motion } from "framer-motion";
import { signInWithGoogle, logOut, deleteAccount, auth } from "../firebase";
export default function Header({ styles1, opacity }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleDeleteAccount = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      await deleteAccount();
      setUser(null);
      navigate("/");
    }
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: `${styles1}`,
      }}
    >
      <motion.div
        className="Headerspan"
        onClick={() => navigate("/Home")}
        whileHover={{ scale: 1.1 }}
      >
        Volleyball Club
      </motion.div>

      {user && (
        <div
          style={{
            marginRight: "20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src={user.photoURL}
            onClick={() => setIsMenuOpen(true)}
            alt="Profile"
            width="40"
            height="40"
            style={{
              borderRadius: "50%",
              cursor: "pointer",
              border: "1x solid black",
            }}
          />

          <motion.div
            onClick={logOut}
            whileHover={{ scale: 1.1 }}
            style={{
              padding: "5px 10px",
              fontSize: "14px",
              cursor: "pointer",
              borderRadius: "5px",
              border: "none",
              color: "white",
              backgroundColor: "black",
              opacity: "80%",
            }}
          >
            Logout
          </motion.div>
        </div>
      )}
      {isMenuOpen && (
        <div
          ref={menuRef}
          style={{
            position: "absolute",
            top: "80px",
            right: "20px",
            background: "black",
            padding: "20px",
            borderRadius: "10px",
            display: "flex",
            opacity: "70%",
          }}
        >
          <button
            onClick={handleDeleteAccount}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              color: "white",
              borderRadius: "20px",
              border: "none",
              backgroundColor: "rgb(255, 157, 0)",
              zIndex: "100",
            }}
          >
            Delete Account
          </button>
        </div>
      )}
    </header>
  );
}
