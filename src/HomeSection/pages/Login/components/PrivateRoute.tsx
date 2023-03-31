import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

export default function PrivateRoute({component:Component, ...rest}:any) {
    const [auth, setAuth ] = useState(false) 
    const navigate = useNavigate()
    useEffect (() =>{
        const token = localStorage.getItem("token")
        if(token){
            setAuth(true)
        }
    }, [])
  return (
    <Routes>

        <Route
        {...rest}
        render={(props:any)=>{
            auth ? <Component {...props} /> : navigate("/login")
        }}
        ></Route>
    </Routes>
  )
}
