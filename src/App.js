// import React, { useState } from "react";
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <NavBar />
      <Footer />
    </Router>



  );
}

export default App;
