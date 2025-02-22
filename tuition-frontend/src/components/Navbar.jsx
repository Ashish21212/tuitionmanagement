import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleSuccess } from '../util';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('Logging out...');
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Hamro Shikshya</div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="hover:text-gray-400">Login</Link>
              <Link to="/signup" className="hover:text-gray-400">Signup</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="hover:text-gray-400">Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;