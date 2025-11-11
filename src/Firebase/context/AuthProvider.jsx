import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase.config';

const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)

const  createUser = (email,password)=> {
  setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
const  signInUser = (email,password)=> {
  setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleAuthProvider)
  }

  const updateUser = (updateData) =>{
  return updateProfile(auth.currentUser, updateData);
}



  const logOut = () =>{
    setLoading[true]
    return signOut(auth);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
setUser(currentUser);
setLoading(false)
    });
    return () => {
      unsubscribe()
    }
  },[])

  const authInfo = {
    
 createUser,
 signInUser,
 signInWithGoogle,
 logOut,updateUser,
 user,
 setUser,
 loading,


  }
  return (
   <AuthContext value={authInfo}>
    {children}
   </AuthContext>
  );
};

export default AuthProvider;