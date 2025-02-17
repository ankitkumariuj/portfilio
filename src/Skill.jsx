import React from "react";
import "./App.css"; // Ensure to add the styling
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function App() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4, // Trigger animation when 40% visible
  });

  const skills = [
    { name: "HTML5", img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
    { name: "CSS3", img: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
    { name: "JavaScript", img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "Bootstrap", img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
    { name: "ReactJS", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Firebase", img: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" },
    { name: "Npm", img: "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg" },
    { name: "Tailwind CSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Java", img: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
    { name: "NodeJs", img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "Git", img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" },
  ];

  return (
    <section id='skills'>
    <div className="bg">
      <motion.div
        ref={ref}
        className="skills-section"
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h3>Technical Skills</h3>
        <div className="lines"></div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <motion.img
                src={skill.img}
                alt={skill.name}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
    </section>
  );
}

export default App;
