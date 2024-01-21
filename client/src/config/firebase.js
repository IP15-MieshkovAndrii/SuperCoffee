import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged }from "firebase/auth";
import { useContext } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const AuthContext = createContext();

export const AuthContextProvider = props => {
  const [user, setUser] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(app), setUser, setError)
    return () => unsubscribe()
  }, [])
  return <AuthContext.Provider value={{ user, error }} {...props} />
}

export const useAuthState = () => {
  const auth = useContext(AuthContext);
  let isAuthenticated = false;
  let uid = '';
  if (auth && auth.user) {
    isAuthenticated = (auth?.user !== null);
    if(auth.user.uid) uid = auth.user.uid;
  };
  return { ...auth, isAuthenticated, uid}
}