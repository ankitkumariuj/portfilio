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
          <a href="https://www.linkedin.com/in/ankit-kumar-889aa6288/" ><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://github.com/ankitkumariuj/"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.instagram.com/ankit_yadav_1204/"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/people/Ankit-Kumar/pfbid0eThjyTeF5ooXbbbujDB9cm5o7NBvFuthp3z1Lg6R6npgXy77bvz3FMyuFjipcU3Ml/"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://wa.me/7272875008?text=Hello%20I%20need%20support"><i className="fa-brands fa-whatsapp"></i></a>
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
