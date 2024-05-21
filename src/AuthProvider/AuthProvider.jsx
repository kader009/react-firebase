import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, Setuser] = useState(null)
  const [loading, SetLoading] = useState(true)
  const googleProvider = new GoogleAuthProvider();

  const Createuser = (email, password) => {
    SetLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Signin = (email, password) => {
    SetLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () =>{
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (Currentuser) => {
      Setuser(Currentuser)
      SetLoading(false)
      if (Currentuser) {
        console.log(Currentuser);
      }else{
        SetLoading(false)
      }
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = { googleLogin, Createuser, Signin, logOut, user, loading };
  
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
