import PropTypes from 'prop-types';
import { createContext } from 'react';
import { app } from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) =>{
const googleProvider = new GoogleAuthProvider()

const Createuser = (email, password) =>{
  return createUserWithEmailAndPassword(auth, email, password)
}

const Signin = (email, password) =>{
  return signInWithEmailAndPassword(auth, email, password)
}

const googleLogin = () =>{
  return signInWithPopup(auth, googleProvider)
}


  const authInfo = {googleLogin, Createuser, Signin}
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}







AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;