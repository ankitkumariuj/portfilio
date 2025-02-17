import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./App.css";

function App() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation sirf ek baar trigger hoga
    threshold: 0.4, // Jab 20% section viewport me aayega, tab animation hoga
  });

  return (
    <section id='about'>
    <div className="app">
      <div style={{ height: "100px" }}></div> {/* Scroll ke liye empty space */}

      <motion.div
  ref={ref}
  className="container"
  initial={{ opacity: 0, y: 50 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
        <div className="text">
          <h3>About Me</h3>
          <div className="line"></div>
          <p>
            Hi, I'm Ankit Kumar, a passionate frontend developer with expertise
            in React.js, JavaScript, HTML, and CSS. I specialize in building
            dynamic, responsive, and user-friendly web applications. Currently,
            I’m in diploma.
          </p>
          <p>
            I enjoy learning new technologies, working with APIs, and building
            user-friendly web applications. Currently, I’m looking for frontend
            development internships to gain hands-on experience and enhance my
            skills.
          </p>
          <button className="btn2" id="hbtns">Contact Me</button>
        </div>
        <div className="images">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_LYQISI-unYLAFsQg_AwCDzwAhB7Ip2nk9A&s"
            alt=""
          />
        </div>
      </motion.div>

      <div style={{ height: "100px" }}></div> {/* Scroll ke liye empty space */}
    </div>
    </section>
  );
}

export default App;
