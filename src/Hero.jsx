import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import './App.css';
import img from './image/erasebg-transformed.png';
import { section } from 'framer-motion/m';

function App() {
  const typedRef = useRef(null);

  // Use effect to initialize Typed.js
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Frontend Developer', 'Web Developer', 'React Developer', 'Java'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id='home'>
    <div className="container">
      {/* Animated Text Section */}
      <motion.div
        animate={{ x: [-1000, 0, 0] }}
        transition={{ duration: 2, delay: 0.4 }}
        className="text"
      >
        <h3>
          I'm Ankit Kumar,
          <br />
          A <span ref={typedRef}></span>
        </h3>
        <button className="btn1" id="hbtn">Contact Me</button>

        {/* Social Media Icons */}
        <motion.div
          className="social-media"
          animate={{ y: [-1000, 0, 0] }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <div className="link-icon" >
            <a href="#" ><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </motion.div>
      </motion.div>

      {/* Profile Image Animation */}
      <motion.div 
        animate={{ y: [700, 0, 0] }}
        transition={{ duration: 2, delay: 0.5 }}
        className="image"
      >
        <img src={img} alt="Profile" />
      </motion.div>
    </div>
    </section>
  );
}

export default App;
