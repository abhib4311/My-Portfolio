import React, { useState, useEffect } from "react";
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Parallax from './components/Parallax';
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  Routes, Navigate
} from "react-router-dom";
import About from "./components/About/About";
import Project from "./components/Project/Project";





function App() {

  return (

    <div className="App" >
      <NavBar />

      <Parallax />



      <Footer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>


    </div>

  );
}


export default App;
