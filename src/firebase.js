import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  setPersistence,
  browserLocalPersistence,
  deleteUser,
  reauthenticateWithPopup,
} from "firebase/auth";


// 🔹 Firebase Configuration 
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 🔹 Function to Sign In with Google (No Email Restriction)
const signInWithGoogle = async () => {
  try {
    await setPersistence(auth, browserLocalPersistence);

    const result = await signInWithPopup(
      auth,
      provider.setCustomParameters({ prompt: "select_account" })
    ); 
    console.log("User Signed In:", result.user);
    return result.user;
  } catch (error) {
    console.error("Sign-In Error:", error);
  }
};

// 🔹 Function to Delete the User Account


const deleteAccount = async () => {
  try {
    const user = auth.currentUser;
    if (user) {
      try {
        await deleteUser(user);
        console.log("User account deleted.");
      } catch (error) {
        if (error.code === "auth/requires-recent-login") {
          console.log("Re-authenticating user...");
          await reauthenticateWithPopup(user, provider);
          await deleteUser(user);
          console.log("User account deleted after re-authentication.");
        } else {
          throw error;
        }
      }
    } else {
      console.log("No user signed in.");
    }
  } catch (error) {
    console.error("Error deleting account:", error);
    alert("Error deleting account: " + error.message);
  }
};
// 🔹 Logout Function
const logOut = async () => {
  try {
    await signOut(auth);
    console.log("User logged out.");
  } catch (error) {
    console.error("Logout Error:", error);
  }
};

export { auth, signInWithGoogle, logOut, deleteAccount };
