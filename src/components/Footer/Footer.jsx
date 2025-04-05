import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  // Split the text for letter-by-letter animation
  const text = "#LiveToExpress";
  const letters = Array.from(text);
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const socialLinks = [
    { name: "LinkedIn", href: "#linkedin", icon: "🔗" },
    { name: "Instagram", href: "#instagram", icon: "📸" },
    { name: "YouTube", href: "#youtube", icon: "🎬" }
  ];
  
  const legalLinks = [
    { name: "Privacy", href: "#privacy" },
    { name: "Terms & Conditions", href: "#terms" }
  ];

  return (
    <div className="relative bg-gradient-to-br from-purple-800 via-red-600 to-orange-500 overflow-hidden">
      {/* Animated background bubbles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white bg-opacity-10"
          style={{
            width: 100 + Math.random() * 200,
            height: 100 + Math.random() * 200,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, 1.1, 0.9, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Content container */}
      <div className="relative z-10 flex flex-col justify-center items-center px-4 py-16 md:py-24">
        {/* Main text animation */}
        <motion.div
          className="mb-12"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={item}
              className="inline-block text-7xl sm:text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-yellow-300"
              style={{ 
                fontSize: "clamp(2rem, 6vw, 8rem)",
                fontFamily: "Poor Story",
                textShadow: "0 0 10px rgba(255,255,255,0.5)",
                transform: `rotate(${(mousePosition.x / window.innerWidth - 0.5) * 5}deg)`,
                transition: "transform 0.2s ease"
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Social media links */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="flex items-center gap-2 text-white text-xl md:text-2xl hover:scale-110 transition-transform"
              style={{ fontFamily: "Poor Story" }}
              whileHover={{ 
                color: "#FFD700",
                textShadow: "0 0 8px rgba(255,215,0,0.8)"
              }}
            >
              <span className="text-2xl md:text-3xl">{link.icon}</span>
              {link.name}
            </motion.a>
          ))}
        </motion.div>

        {/* Legal links */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          {legalLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="text-white text-lg md:text-xl"
              style={{ fontFamily: "Poor Story" }}
              whileHover={{ 
                color: "#FFD700",
                textShadow: "0 0 8px rgba(255,215,0,0.8)"
              }}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>

        {/* Declaration */}
        <motion.div 
          className="text-center w-full max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <p
            className="text-white text-lg md:text-xl"
            style={{ fontFamily: "Poor Story" }}
          >
            Declaration: This is an example declaration for demonstration purposes.
          </p>
        </motion.div>

        {/* Audio waveform animation at bottom */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-12 flex items-end justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.6 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 md:w-2 mx-1 bg-white rounded-t-full"
              animate={{
                height: [
                  5 + Math.random() * 10,
                  15 + Math.random() * 30,
                  5 + Math.random() * 15,
                  25 + Math.random() * 30,
                  5 + Math.random() * 10
                ]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.05
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;