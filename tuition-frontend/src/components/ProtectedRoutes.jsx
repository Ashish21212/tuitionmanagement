import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({element}) => {
    const isLoggedIn = localStorage.getItem("token");
  return (
    isLoggedIn ? <Navigate to="/" /> : element
  )
}

export default ProtectedRoutes