import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light'); // Track theme

  // Effect to change body background on theme switch
  useEffect(() => {
    if (theme === 'dark') {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }, [theme]); // Runs when theme changes

  // Effect to change styles based on theme
  useEffect(() => {
    if (theme === 'dark') {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';

       document.getElementById('line').style.backgroundColor="white";

       document.getElementById('hbtn').style.color= 'white';
       document.getElementById('hbtns').style.color= 'white';
     
      
       const button= document.getElementById('hbtn');
       button.style.borderColor="white";
           button.onmouseenter= function(){
             button.style.backgroundColor="white";
             button.style.color="black";
             button.style.border="2px solid blue";
       
           }
       
           button.onmouseleave = function(){
             button.style.backgroundColor="black";
             button.style.color="white";
             button.style.border="2px solid white";
       
           }

           const buttons= document.getElementById('hbtns');
buttons.style.borderColor="white";
    buttons.onmouseenter= function(){
      buttons.style.backgroundColor="white";
      buttons.style.color="black";
      buttons.style.border="2px solid blue";

    }

    buttons.onmouseleave = function(){
      buttons.style.backgroundColor="black";
      buttons.style.color="white";
      buttons.style.border="2px solid white";

    }

    
      document.getElementById('data').style.background="black";
      document.getElementById('data').style.border="3px solid white";
      document.getElementById('data').style.color="white";
      const dataElement = document.getElementById('data');

dataElement.onmouseover = function() {
  dataElement.style.background = " linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44)"; 
  dataElement.style.border="3px solid blue";
};

dataElement.onmouseout = function() {
  dataElement.style.background = "black"; 
  dataElement.style.border="3px solid white";
};


document.getElementById('datas').style.background="black";
document.getElementById('datas').style.border="3px solid white";
document.getElementById('datas').style.color="white";
const dataElements = document.getElementById('datas');

dataElements.onmouseover = function() {
dataElements.style.background = " linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44)"; 
dataElements.style.border="3px solid blue";
};

dataElements.onmouseout = function() {
dataElements.style.background = "black"; 
dataElements.style.border="3px solid white";
};


document.getElementById('datase').style.background="black";
document.getElementById('datase').style.border="3px solid white";
document.getElementById('datase').style.color="white";
const dataElementse = document.getElementById('datase');

dataElementse.onmouseover = function() {
dataElementse.style.background = " linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44)"; 
dataElementse.style.border="3px solid blue";
};

dataElementse.onmouseout = function() {
dataElementse.style.background = "black"; 
dataElementse.style.border="3px solid white";
};

      
  
      document.documentElement.style.setProperty('--mobile-bg', '#222');
      document.documentElement.style.setProperty('--mobile-text', 'navajowhite');

    } 
    
    else {

      

      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';

      

      document.getElementById('data').style.background="white";
     
      document.getElementById('data').style.background="#f3ecec";
     
      document.getElementById('data').style.color="black";
      const dataElement = document.getElementById('data');

dataElement.onmouseover = function() {
  dataElement.style.background = " linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44)"; 
  dataElement.style.border="2px solid blue";
};

dataElement.onmouseout = function() {
  dataElement.style.background = "#f3ecec"; 
  dataElement.style.border="2px solid white";
};


      // Reset for mobile
      document.documentElement.style.setProperty('--mobile-bg', 'white');
      document.documentElement.style.setProperty('--mobile-text', 'black');
    }
  }, [theme]);
  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`navbar ${theme}`}>
        <h3>ANKIT KUMAR</h3>
        <div className="ulli">
          <ul className="nav-links">
          <a href="#home">
              <li>Home</li>
            </a>
            <a href="#project">
              
              <li>Project</li>
            </a>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#skills">
              <li>Skills</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
            <div className="theme-selector">
              <label><i className="fa-solid fa-palette"></i></label>
              <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                <option value="light">Light Mode</option>
                <option value="dark">Dark Mode</option>
              </select>
            </div>
          </ul>
        </div>

        {/* Toggle Icon (Hamburger & Close) */}
        <i
          className={`menu-icon fa ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}
          id="hambar"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        ></i>
        
      </nav>
      

      {/* Mobile Navbar */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        
        <ul>
        <a href="#home"><li onClick={() => setIsMobileMenuOpen(false)}>Home</li></a>
        <a href="#project"> <li onClick={() => setIsMobileMenuOpen(false)}>Project</li></a>
        <a href="#about">  <li onClick={() => setIsMobileMenuOpen(false)}>About</li></a>
        <a href="#skills"><li onClick={() => setIsMobileMenuOpen(false)}>Skills</li></a>
        <a href="#contact"><li onClick={() => setIsMobileMenuOpen(false)}>Contact</li></a>
        </ul>
        <div className="theme-selector">
              <label> <i className="fa-solid fa-palette"></i> </label>
              <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                <option value="light">Light Mode</option>
                <option value="dark">Dark Mode</option>
              </select>
            </div>
      </div>

      <hr />
    </>
  );
}

export default App;
