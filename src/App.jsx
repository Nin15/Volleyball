import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom"; 
import { auth } from "./firebase"; 
import Member from "./pages/Member";
import Matches from "./pages/Matches";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import About from "./pages/About";
import Registration from "./pages/Registration";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  // ✅ Track user authentication status
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe(); // Cleanup listener
  }, []);

  return (
    <div className="main-container">
      <Routes>
        {/* Login Page - Always Accessible */}
        <Route path="/" element={<Registration />} />

        {/* 🔒 Protect Routes: Redirect Unauthorized Users */}
        <Route path="/Home" element={user ? <Home /> : <Navigate to="/" />} />
        <Route
          path="/Member"
          element={user ? <Member /> : <Navigate to="/" />}
        />
        <Route
          path="/Matches"
          element={user ? <Matches /> : <Navigate to="/" />}
        />
        <Route path="/Rules" element={user ? <Rules /> : <Navigate to="/" />} />
        <Route path="/About" element={user ? <About /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
