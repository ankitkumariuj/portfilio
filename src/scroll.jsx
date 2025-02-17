import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation sirf ek baar trigger hoga
    threshold: 0.2, // Jab 20% section viewport me aayega, tab animation hoga
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-10 bg-blue-500 text-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold">Scroll Down to See Me!</h2>
      <p>This content will animate when it comes into view.</p>
    </motion.div>
  );
};

export default AnimatedSection;
