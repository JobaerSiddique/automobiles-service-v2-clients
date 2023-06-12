import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
   const [user,setUser]=useState('')
   const [loading,setLoading]=useState()
   
   const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
   }

   const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }

   const logOut=()=>{
    setLoading(true)
    return signOut(auth)
   } 
   
   useEffect(()=>{
    const unscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=> unscribe()
   },[])

   const GoogleProvider = new GoogleAuthProvider();
   const googleLogIn=()=>{
    setLoading(true)
    return signInWithPopup(auth, GoogleProvider)
   }

   const updateUser=(userInfo)=>{
   
    return updateProfile(auth.currentUser,userInfo)
   }
   
   const authInfo={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleLogIn,
        updateUser
   }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;