import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, logOut, deleteAccount, auth } from "../firebase";
import { motion } from "framer-motion";
const Registration = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        navigate("/Home");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async () => {
    const loggedInUser = await signInWithGoogle();
    if (loggedInUser) {
      setUser(loggedInUser);
      navigate("/Home");
    }
  };

  const handleLogout = async () => {
    await logOut();
    setUser(null);
  };

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

  return (
    <div
      style={{
        textAlign: "center",
        width: "100%",
        height: "100dvh",
      }}
    >
      {!user ? (
        <div
          style={{
            width: "100%",
            height: "100dvh",
            backgroundColor: "orange",
            display: "flex", 
            flexDirection: "column",
            justifyContent: "center", 
            alignItems: "center", 
          }}
        >
          <span style={{fontSize: "65px", fontWeight: "bold",}}>🏐 Welcome to the Volleyball Club 🏐</span>
          <p>Please sign in to continue</p>
          <motion.div whileHover={{ scale: 1.1 }}>
            <button
              style={{
                border: "none",
                cursor: "pointer",
                width: "200px",
                height: "30px",
                fontSize: "16px",
                backgroundColor: "white",
                color: "darkgray",
                borderRadius: "45px",
              }}
              onClick={handleLogin}
            >
              Sign in with Google
            </button>
          </motion.div>
        </div>
      ) : (
        <div>
          <h2>Welcome, {user.displayName}!</h2>
          <p>Email: {user.email}</p>
          <img
            src={user.photoURL}
            alt="Profile"
            width="50"
            style={{ borderRadius: "50%" }}
          />
          <br />

          <button
            onClick={handleLogout}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              fontSize: "16px",
            }}
          >
            Logout
          </button>
          <button
            onClick={handleDeleteAccount}
            style={{
              marginLeft: "10px",
              padding: "10px 20px",
              fontSize: "16px",
              background: "red",
              color: "white",
            }}
          >
            Delete Account
          </button>
        </div>
      )}
    </div>
  );
};

export default Registration;
