import React, { useState, useEffect } from 'react';
import './App.css';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import chat from './image/chat App.png';
import music from './image/music.jpeg';
import weather from './image/weather.png';
import car from './image/car.png';
import todo from './image/todo.jpeg';
import chatbot from './image/chatbot.png';
import code from './image/code.jpeg';
import { section } from 'framer-motion/client';

const projects = [
    { img: chat, title: "Chat Application", desc: "React.js and FireBase Real-Time Data Stores to Db" , github: "https://github.com/ankitkumariuj/AY-ChatApp" , demo: "https://ay-chatapp.netlify.app/"},
    { img: music, title: "Music Application", desc: "React.js, CSS, JioSaavn API to fetch songs & albums" , github: "https://github.com/ankitkumariuj/n-music" , demo: "https://n-musics.netlify.app/" },
    { img: weather, title: "Weather Application", desc: "React-based weather app using OpenWeatherMap API" , github: "https://github.com/ankitkumariuj/weather-App" , demo: "https://temp-weathers.netlify.app/" },
    { img: todo, title: "To-Do List", desc: "React-based to-do list with task management" , github: "https://github.com/ankitkumariuj/Todo-List" , demo: "https://ankitkumariuj.github.io/Todo-List/"},
    { img: car, title: "Car Renter", desc: "Basic buy-sell web platform using React and API integration" , github: "https://github.com/ankitkumariuj/AY-sell" , demo: "http://ay-sell.netlify.app"},
    { img: chatbot, title: "Chat-Bot", desc: "AI-powered chatbot using React and OpenAI API" , github: "https://github.com/ankitkumariuj/ChatBot" , demo: "http://ay-chatbots.netlify.app"},
    { img: code, title: "Code Editor", desc: "Online code editor with HTML, CSS, and JS support" , github: "https://github.com/ankitkumariuj/code-Editer" , demo: "http://code-editer.netlify.app"}
  ];

function ProjectCard({ img, title, desc, github ,demo}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section id='project'>
    <motion.div
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="project-img">
        <img src={img} alt={title} />
      </div>
      <div className="info">
        <p className='des'>{title}</p>
        <p className='des'>{desc}</p>
        <div className="project-link">
        <a href={demo} target="_blank" rel="noopener noreferrer">
        <i className='fas fa-external-link-alt'> <p> Live Demo</p></i></a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-github"> <p> GitHub</p></i>
        </a>
        </div>
      </div>
    </motion.div>
    </section>
    
  );
}

function App() {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleProjects(projects.length);
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <div style={{ height: "10px" }}></div>
      <motion.div
        className="project-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h3>Projects</h3>
        <div className="linesess"></div>

        {/* Show projects */}
        {projects.slice(0, isMobile ? visibleProjects : projects.length).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}

        {/* Show Load More button only on mobile */}
        {isMobile && visibleProjects < projects.length && (
          <center>
            <button className="load-more" onClick={handleLoadMore}>Load More</button>
          </center>
        )}

        {/* Fixed Loader */}
        {loading && (
          <div className="loader-overlay">
            <div className="loader"></div>
          </div>
        )}
      </motion.div>
    </>
  );
}

export default App;
