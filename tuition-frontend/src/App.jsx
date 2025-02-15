// filepath: /c:/Users/ujlpd/OneDrive/Desktop/Loder/tms/tuitionmanagement/tuition-frontend/src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import Signup from "./components/signup";
import Login from "./components/login";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <h1 className="text-red-950">hellooooooooooo</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
