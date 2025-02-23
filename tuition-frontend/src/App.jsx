import React,{useState} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes";



const App = () => {


  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <Navbar 
      
    />
        <div className="flex-grow">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
