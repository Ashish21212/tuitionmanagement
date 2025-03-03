// filepath: /c:/Users/ujlpd/OneDrive/Desktop/Loder/tms/tuitionmanagement/tuition-frontend/src/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Error from "./error";
import ProtectedRoutes from "./components/ProtectedRoutes";

const AppRoutes = () => {
  const isLoggedIn = localStorage.getItem("token");
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
     
        <Route path="/signup" element={<ProtectedRoutes element={<Signup />} />} />
        <Route path="/login" element={<ProtectedRoutes element={<Login />} />} />
        <Route path="*" element={<Error />} />
       
    </Routes>
  );
};

export default AppRoutes;
