// src/components/Login.js
import React, { useState, useEffect } from "react";
import { signInWithGoogle, logOut, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Login = () => {
  const [user, setUser] = useState(null);

  // Check if user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && currentUser.email.endsWith("@bga.ge")) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); // Cleanup listener
  }, []);

  return (
    <div>
      <h2>Google Login</h2>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button onClick={logOut}>Log Out</button>
        </div>
      ) : (
        <button onClick={signInWithGoogle}>Sign In with Google</button>
      )}
    </div>
  );
};

export default Login;
