import React, { useEffect, useRef, useState } from "react";

const Animation = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observers = sectionRefs.map((ref, index) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(index);
          }
        });
      }, options);

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    const handleScroll = () => {
      if (sectionRefs[activeSection].current) {
        const section = sectionRefs[activeSection].current;
        const rect = section.getBoundingClientRect();
        const progress = 1 - rect.bottom / window.innerHeight;
        setScrollProgress(Math.max(0, Math.min(1, progress)));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const getImageTransform = (sectionIndex) => {
    if (sectionIndex !== activeSection) return "translateY(0)";
    return `translateY(${scrollProgress * -50}%)`;
  };

  const getSectionStyle = (sectionIndex) => {
    if (sectionIndex !== activeSection) return {};

    if (scrollProgress > 0.8) {
      return {
        transform: `translateY(-${(scrollProgress - 0.8) * 500}%)`,
        transition: "transform 0.5s ease-out",
      };
    }
    return {};
  };

  const getStickyTextStyle = (sectionIndex) => {
    if (sectionIndex !== activeSection) return {};
    if (scrollProgress < 0.8) {
      return {
        position: "sticky",
        top: "50%",
        transform: "translateY(-50%)",
      };
    }
    return {};
  };

  const textStyles = {
    heading: {
      fontFamily: "Poor Story",
      fontStyle: "normal",
      fontSize: "clamp(40px, 5vw, 96px)",
      lineHeight: "normal",
    },
    subheading: {
      fontFamily: "Poor Story",
      fontStyle: "normal",
      fontSize: "clamp(26px, 4vw, 48px)",
      lineHeight: "normal",
    },
    paragraph: {
      fontFamily: "Poor Story",
      fontStyle: "normal",
      fontSize: "clamp(26px, 3vw, 48px)",
      lineHeight: "normal",
    },
  };

  return (
    <div className="bg-customRed text-white">
      {/* First Section */}
      <section
        id="home"
        ref={sectionRefs[0]}
        className="relative min-h-screen"
        style={getSectionStyle(0)}
      >
        <div
          className="absolute inset-0 bg-center bg-cover opacity-20"
          style={{
            backgroundImage: "url('/images/No-bg-Hero.png')",
            marginTop: "clamp(20px, 4vw, 100px)",
            transform: getImageTransform(0),
            transition: "transform 0.3s ease-out",
          }}
        />
        <div className="relative flex flex-col justify-center items-center min-h-screen">
          <div
            className="flex flex-col items-center justify-center px-4"
            style={getStickyTextStyle(0)}
          >
            <h2 style={textStyles.subheading} className="text-[#FFF] mb-4">
              Our Story
            </h2>
            <h1 style={textStyles.heading} className="text-center mb-4">
              Why #LiveToExpress
            </h1>
            <p style={textStyles.paragraph} className="text-center">
              Because everyone has something unique, and the world deserves to
              see it.
            </p>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section
        id="how"
        ref={sectionRefs[1]}
        className="relative min-h-screen lg:h-[120vh] md:min-h-screen"
        style={getSectionStyle(1)}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 lg:scale-125"
          style={{
            backgroundImage: "url('/images/No-bg-why.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transform: getImageTransform(1),
            transition: "transform 0.3s ease-out",
          }}
        />
        <div className="relative flex flex-col justify-center items-center min-h-screen md:gap-8 lg:gap-12">
          <div
            className="flex flex-col items-center justify-center px-4 md:px-8"
            style={getStickyTextStyle(1)}
          >
            <h1 style={textStyles.heading} className="text-center mb-4">
              How does it help?
            </h1>
            <p style={textStyles.paragraph} className="text-center">
              By building a space where expression is celebrated, and
              individuality is valued.
            </p>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section
        id="about"
        ref={sectionRefs[2]}
        className="relative min-h-screen"
        style={getSectionStyle(2)}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/images/No-bg-Help.png')",
            backgroundSize: "cover",
            transform: getImageTransform(2),
            transition: "transform 0.3s ease-out",
          }}
        />
        <div className="relative flex flex-col justify-center items-center min-h-screen">
          <div
            className="flex flex-col items-center justify-center px-4"
            style={getStickyTextStyle(2)}
          >
            <h1 style={textStyles.heading} className="text-center mb-4">
              What is it?
            </h1>
            <p style={textStyles.paragraph} className="text-center">
              It's not just a movement; it's a place where people feel free to
              be <br />
              themselves, connecting with others who share their passion for
              creativity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Animation;
