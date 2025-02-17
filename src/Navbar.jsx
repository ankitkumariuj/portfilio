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
      document.body.style.color = 'navajowhite';


      
      document.getElementById('hbtn').style.border= '3px solid navajowhite';

      document.getElementById('hbtns').style.color="white";
    
      document.getElementById('hbtns').style.border= '3px solid navajowhite';
      // Mobile-specific styling
      document.documentElement.style.setProperty('--mobile-bg', '#222');
      document.documentElement.style.setProperty('--mobile-text', 'navajowhite');

    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';

      document.getElementById('hbtn').style.color="navajowhite";
      document.getElementById('hbtn').style.border= '3px solid black';

      document.getElementById('hbtns').style.color="navajowhite";
      document.getElementById('hbtns').style.border= '3px solid black';
     
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
