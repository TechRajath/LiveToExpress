import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import db from "../../FirebaseConfig/firebase-config";
// eslint-disable-next-line react/prop-types
const ModalGrid = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleNavigation = (section) => {
    setIsMenuOpen(false);
    if (location.pathname === "/") {
      scrollToSection(section.toLowerCase());
    } else {
      navigate("/");

      setTimeout(() => {
        scrollToSection(section.toLowerCase());
      }, 100);
    }
  };
  const validateEmail = (email) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubscribe = async () => {
    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    try {
      await db.collection("subscribers").add({
        email: email,
        subscribedAt: new Date(),
      });
      setIsSubmitted(true);
      setError("");
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
    setIsLoading(false);
  };

  return (
    <div>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-8 py-4 border-b-2 ${
          isMenuOpen
            ? "bg-transparent  text-customRed"
            : "bg-transparent text-white"
        }`}
        style={{
          fontFamily: "Poor Story",
          height: "80px", // Navbar height
        }}
      >
        <span
          className={`
    text-center 
    text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 
    font-bold tracking-wider
    bg-clip-text text-transparent 
    transition-all duration-500 ease-in-out
    bg-white
  `}
          style={{
            fontFamily: "Poor Story",
            lineHeight: "normal",
          }}
        >
          #LiveToExpress
        </span>

        <button
          onClick={toggleMenu}
          className={`text-center text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-white border-l-2 pl-4 flex items-center justify-center`}
          style={{
            borderColor: "white",
            borderLeftWidth: "2px",
            height: "80px", // Adjusted height to match navbar height
          }}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Modal */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black text-white overflow-hidden"
          style={{
            fontFamily: "Poor Story",
            animation: "slideUpIn 0.3s ease-out forwards",
          }}
        >
          <div className="h-[calc(100vh-80px)] mt-20 overflow-y-auto md:overflow-hidden relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full h-full border-t-4 border-white md:h-[calc(100vh-80px)]">
              <div
                className="outlined-text hover:outline-hover transition-all duration-300 border border-white flex justify-start md:justify-center items-center text-5xl sm:text-7xl md:text-8xl lg:text-[11vw] font-black leading-none text-white font-[Poor Story] p-8 md:p-4 md:pl-4 cursor-pointer"
                onClick={() => handleScroll("how")}
              >
                HOW
              </div>

              <div
                className="outlined-text hover:outline-hover transition-all duration-300 border border-white flex justify-start md:justify-center items-center text-5xl sm:text-7xl md:text-8xl lg:text-[11vw] font-black leading-none text-white font-[Poor Story] p-8 md:p-4 md:pl-4 cursor-pointer"
                onClick={() => handleScroll("about")}
              >
                ABOUT
              </div>

              <div
                className="outlined-text hover:outline-hover transition-all duration-300 border border-white flex justify-start md:justify-center items-center text-5xl sm:text-7xl md:text-8xl lg:text-8xl font-black leading-none text-white font-[Poor Story] p-8 md:p-4 md:pl-4 cursor-pointer"
                onClick={() => handleNavigation("slider")}
              >
                <span>CREATIVE CORNER</span>
              </div>

              <div
                className="outlined-text hover:outline-hover transition-all duration-300 border border-white flex justify-start md:justify-center items-center text-5xl sm:text-7xl md:text-8xl lg:text-[11vw] font-black leading-none text-white font-[Poor Story] p-8 md:p-4 cursor-pointer"
                onClick={() => handleNavigation("form")}
              >
                JOIN US
              </div>

              <div className="border border-white flex flex-col justify-center items-start p-4">
                {isSubmitted ? (
                  <div className="w-full bg-black px-2 py-3 text-base text-white">
                    Successfully subscribed!
                  </div>
                ) : (
                  <div className="w-full max-w-md flex flex-row items-center justify-start gap-2">
                    <input
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      className="flex-1 min-w-0 bg-black border-b-2 border-white px-2 py-3 focus:outline-none text-base placeholder-white text-white font-black"
                    />
                    <button
                      onClick={handleSubscribe}
                      disabled={isLoading}
                      className="whitespace-nowrap py-3 px-4 text-white border border-white text-sm rounded bg-black hover:bg-white hover:text-black transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed font-black"
                    >
                      {isLoading ? "Subscribing..." : "Subscribe"}
                    </button>
                  </div>
                )}
                {error && <p className="text-white text-sm mt-1">{error}</p>}
              </div>

              <div className="border border-white flex flex-col sm:flex-row justify-start md:justify-center items-center text-lg sm:text-xl font-extrabold p-6 md:p-4 pl-12 md:pl-4 space-y-4 sm:space-y-0 cursor-pointer">
                <a
                  href="#"
                  className="hover:underline mx-4 text-center text-white font-black"
                >
                  MINIMALIST INSTITUTE
                </a>
              </div>
            </div>

            <div className="absolute top-[40%] md:left-1/2 right-4 md:right-auto transform -translate-y-1/2 md:-translate-x-1/2 md:-translate-y-1/2 pointer-events-none">
              <div
                className="text-black text-center font-bold w-32 h-24 md:w-56 md:h-48 flex justify-center items-center bg-newGreen"
                style={{
                  borderRadius: "80%",
                  transform: "rotate(-15deg) scale(1.2, 0.8)",
                }}
              >
                <span
                  className="transform rotate-0 text-lg md:text-xl lg:text-3xl"
                  style={{ fontFamily: "Poor Story" }}
                >
                  SOME NEW INFO
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add the CSS animation for slide-up effect */}
      <style jsx>{`
        @keyframes slideUpIn {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ModalGrid;
