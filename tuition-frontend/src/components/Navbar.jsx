import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
 
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Tuition Management System</div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          
            
            <Link to="/login" className="hover:text-gray-400">Login</Link>
            <Link to="/signup" className="hover:text-gray-400">Signup</Link>
           
          
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;