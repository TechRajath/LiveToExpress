import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [isVisible, setIsVisible] = useState(true);
  const artists = [
    { name: "Music", color: "#FF5A5F" },
    { name: "Visual Arts", color: "#3498DB" },
    { name: "Dance", color: "#F1C40F" },
    { name: "Photography", color: "#9B59B6" },
    { name: "Digital Art", color: "#2ECC71" },
    { name: "Sculpture", color: "#E67E22" },
    { name: "Poetry", color: "#1ABC9C" },
    { name: "Film", color: "#E74C3C" },
  ];
  const reversedMarqueeVariants = {
    animate: {
      x: [-2000, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };
  const marqueeVariants = {
    animate: {
      x: [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };
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
    <div className="relative min-h-screen bg-slate-900 flex justify-center items-center">
      {/* Flowing Art Words */}
      <section className="py-20 relative overflow-hidden">
        <motion.div
          variants={marqueeVariants}
          animate="animate"
          className="whitespace-nowrap"
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="inline-block">
              {artists.map((artist, index) => (
                <span
                  key={index}
                  className="text-8xl md:text-9xl font-bold mx-8 inline-block"
                  style={{ fontFamily: "Poor Story", color: artist.color }}
                >
                  {artist.name}
                </span>
              ))}
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={reversedMarqueeVariants}
          animate="animate"
          className="whitespace-nowrap mt-8"
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="inline-block">
              {[...artists].reverse().map((artist, index) => (
                <span
                  key={index}
                  className="text-8xl md:text-9xl font-bold mx-8 inline-block opacity-60"
                  style={{ fontFamily: "Poor Story", color: artist.color }}
                >
                  {artist.name}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
        <motion.div
          variants={marqueeVariants}
          animate="animate"
          className="whitespace-nowrap"
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="inline-block">
              {artists.map((artist, index) => (
                <span
                  key={index}
                  className="text-8xl md:text-9xl font-bold mx-8 inline-block"
                  style={{ fontFamily: "Poor Story", color: artist.color }}
                >
                  {artist.name}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default About;
