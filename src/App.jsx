import React from 'react';
import './App.css';
import Navbar from "./Navbar"
import Hero from './Hero'
import Main from "./Main";
import About from './About';
import Skill from './Skill';
import Contact from "./Contact";
import Footer from './Footer'
function App() {
 

  return (
    <>
      <Navbar/>
        <Hero/>
        <Main/>
        <About/>
        <Skill/>
        <Contact/>
        <Footer/>
        </>
        
  );
}

export default App;
