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
    </section>
  );
};

export default Contact;
