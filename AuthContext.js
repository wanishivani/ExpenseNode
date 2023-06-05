import { useState } from "react";
import React from "react";
 const AuthContext = React.createContext({
   idToken:"[FIREBASE_ID_TOKEN]",
 IsLoggedIn: true,
 login:  (idToken)=>{},
logout:()=>{}

 });
 export  const AuthContextProvider = (props)=>{
    const [token,setToken]=useState('null')

    const userIsLoggedIn= !!token;
    const loginHandler=(token)=>{
     setToken(token)
    }
    const logoutHandler=()=>{
        setToken(null)
   }
   const contextValue={
      idToken:token,
       IsLoggedIn:userIsLoggedIn,
       login:loginHandler,
      logout:logoutHandler,
   }
   return(
   <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
   )
}
export  default AuthContext;
