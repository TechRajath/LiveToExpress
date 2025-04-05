import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-forestGreen flex justify-center items-center">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1
          className="text-black text-6xl sm:text-9xl font-bold"
          style={{ fontFamily: "Poor Story" }}
        >
          WE CREATE A NEW SOUND. JOIN US.
        </h1>
      </motion.div>
    </div>
  );
};

export default About;
