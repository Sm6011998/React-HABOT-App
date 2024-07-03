import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()
const AuthManager = ({children}) => {
    const [auth,setAuth] = useState({
        user: null,
        token:"",

})

useEffect(()=>{
    const Response = localStorage.getItem("auth")
    
    if(Response){
        const PerseData = JSON.parse(Response)

        setAuth({
            ...auth,
            user:PerseData.user,
            token:PerseData.token
        })
    }
},[])

  return (
    <>
    <AuthContext.Provider value={[auth,setAuth]}>
        {children}
    </AuthContext.Provider>
    
    
    </>
  )
}

const UseAuth = ()=> useContext(AuthContext)

export {UseAuth, AuthManager} 