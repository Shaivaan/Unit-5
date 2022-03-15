import { createContext, useState } from "react";


export const AuthContext = createContext();
export const AuthContextProvider = ({children})=>{
    const [isAuth,setAuth] = useState(false);
    const toggleAuth = ()=>{
        setAuth(!isAuth);
    }
   return <AuthContext.Provider value = {{isAuth,toggleAuth}}>{children}</AuthContext.Provider>
}