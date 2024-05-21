import { createContext, useContext, useState } from "react";

// import React from 'react'
export const AuthContext = createContext();
export default function AuthProvider({ children }) {
    const AuthUser = localStorage.getItem("Users");
    const [authuser, setAuthUser] = useState(
        AuthUser? JSON.parse( AuthUser):undefined
    );
    return(
        <AuthContext.Provider value={[authuser,setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
  
}
export const useAuth = () => useContext(AuthContext);
