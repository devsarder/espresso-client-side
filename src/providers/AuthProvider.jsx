import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const createUser = (email,password )=>{
    return createUserWithEmailAndPassword(auth, email, password);
  }


  const userInfo = { 
    users,
    setUsers,
    createUser
  
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
