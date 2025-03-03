import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleSuccess } from '../util';
import FirstBanner from './FirstBanner/FirstBanner';
import { ToastContainer } from 'react-toastify';

function Home() {
  const isLoggedIn = localStorage.getItem("token");


  const [loggedInUser, setLoggedInUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    setLoggedInUser(user ? user : '');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('Logging out...');
    setLoggedInUser('');
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <img src="/user.png" style={{height: '40px'}} alt="user" />
          <h1 style={{color: 'red', fontSize:'20px'}}>{loggedInUser}'s Feed</h1>
        </>
      ) : null}
      <FirstBanner />
      <ToastContainer />
    </div>
  );
}

export default Home;