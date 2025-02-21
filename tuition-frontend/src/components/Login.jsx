import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../util";



function Login() {
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setloginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 console.log(loginData);

 const handleSubmit = async (e) => {
  e.preventDefault();
  const {email, password} = loginData;

  if ( !email || !password) {
    return handleError("Email and password are required!");
  }  
  
  try{
      const url = "http://localhost:3000/users/login";
      const response = await fetch(url, {
         method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),

      });
      const result = await response.json();
      const {success, message,token, name, error} = result;
      if(success){
        handleSuccess(message);
        localStorage.setItem("token",token);
        localStorage.setItem("loggedInUser", name);
        setTimeout(()=>{
          navigate("/");
        },3000);
      }else if(error){
        const details = error?.details[0].message;
        handleError(details);
      }else if(!success){
        handleError(message);
      }
  }catch(err){
    handleError(err);
  }
 }

  

  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
             onChange={handleChange}
              type="email"
              placeholder="Email"
              name="email"
              value={loginData.email}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
             onChange={handleChange}
              type="password"
              placeholder="Password"
              name="password"
              value={loginData.password}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
          
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Signup
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;