import PropTypes from 'prop-types';
import { createContext } from 'react';
import { app } from '../firebase/firebase.config';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) =>{
const googleProvider = new GoogleAuthProvider()

const googleLogin = () =>{
  return signInWithPopup(auth, googleProvider)
}


  const authInfo = {googleLogin}
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}







AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;