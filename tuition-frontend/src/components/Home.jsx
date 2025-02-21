import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { handleSuccess } from '../util';
import { ToastContainer } from 'react-toastify';



function Home() {
  const [loggedInUser, setLoggedInUser] = useState('');
  const navigate = useNavigate();
  useEffect(()=>{
    const user = localStorage.getItem('loggedInUser');
    setLoggedInUser(user ? user : '');
  },[])

  const handleLogout=()=>{
   
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('Logging out...')
    setTimeout(()=>{
       navigate('/login');
    },2000)
  }
  return (
    <div>
      
      {
        loggedInUser ?
        <><h1>Welcome {loggedInUser}! </h1><button onClick={handleLogout}>Logout</button></>:null
      }
   <ToastContainer/>
    </div>
  )
}

export default Home