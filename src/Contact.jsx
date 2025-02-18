import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {


    const { ref, inView } = useInView({
        triggerOnce: true, // Animation sirf ek baar trigger hoga
        threshold: 0.4, // Jab 20% section viewport me aayega, tab animation hoga
      });
  return (
    <section id='contact'>
      <h2 className="contact-h2">Get In Touch</h2>
      <div className="lineses"></div>
      <motion.div
    ref={ref}
   className="contact"
    initial={{ opacity: 0, x: -28 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.7, ease: "easeOut" }} >
      <div className="container-contact">
         <motion.div
    ref={ref}
   className="right"
    initial={{ opacity: 0, x: -28 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.7, ease: "easeOut" }}>

        <div className="data" id="data">
            <i className="fas fa-envelope"></i>
            <h2>Email</h2>
            <p>ankityadav12044@gmail.com</p>
          </div>
          <div className="data" id="datas">
            <i className="fas fa-phone"></i>
            <h2>Phone</h2>
            <p>+91 7292875008</p>
          </div>
          <div className="data"  id="datase">
            <i className="fas fa-location"></i>
            <h2>Address</h2>
            <p>Dhanbad, Jharia</p>
          </div>
        </motion.div>
        <motion.div
    ref={ref}
   className="contact-container"
    initial={{ opacity: 0, x: -28 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.7, ease: "easeOut" }}>
      <h2 className="contact-title">Get’s Tough</h2>
      <form className="contact-form">
        <div className="row">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <div className="row">
          <input type="text" placeholder="Subject" />
          <input type="email" placeholder="Email" />
        </div>
        <textarea placeholder="Your message"></textarea>
        <button type="submit" className="cbtn">Send Message</button>
      </form>
    </motion.div>
    </div>
    </motion.div>
    </section>
  );
};

export default Contact;
