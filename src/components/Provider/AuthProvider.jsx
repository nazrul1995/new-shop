import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.config';

const AuthProvider = ({ children }) => {

  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  //console.log(user)
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
    });
    return ()=>{
        unsubscribe();
    }
  },[])

  const googleSignIn = ()=>{
    return signInWithPopup(auth, googleProvider)
  }

  const logIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email,password)
  }
  const logOut = () =>{
    return signOut(auth)
  }
  const authData = {
    user,
    createUser,
    setUser,
    googleSignIn,
    logIn,
    logOut
  };

  return (
    <AuthContext value={authData}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;
