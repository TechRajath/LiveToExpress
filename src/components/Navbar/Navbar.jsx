import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
          isMenuOpen ? "bg-white text-customRed" : "bg-customRed text-white"
        }`}
        style={{
          fontFamily: "Poor Story",
          height: "80px", // Navbar height
        }}
      >
        <span
          className="text-center text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl"
          style={{
            color: isMenuOpen ? "#DB0026" : "#FFF",
            fontFamily: "Poor Story",
            lineHeight: "normal",
          }}
        >
          #LiveToExpress
        </span>
        <button
          onClick={toggleMenu}
          className={`text-center text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl ${
            isMenuOpen ? "text-[#DB0026]" : "text-white"
          } border-l-2 pl-4 flex items-center justify-center`}
          style={{
            borderColor: isMenuOpen ? "#DB0026" : "white",
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
          className="fixed inset-0 z-40 bg-white text-red-600"
          style={{ fontFamily: "Poor Story" }}
        >
          <div className="h-[calc(100vh-80px)] mt-20 overflow-y-auto md:overflow-hidden relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full h-full border-t-4 border-red-600 md:h-[calc(100vh-80px)]">
              <div
                className="border border-red-600 flex justify-start md:justify-center items-center text-5xl sm:text-7xl md:text-8xl lg:text-[11vw] font-normal leading-none text-[#DB0026] font-[Poor Story] p-8 md:p-4 md:pl-4 cursor-pointer"
                onClick={() => handleScroll("how")}
              >
                HOW
              </div>

              <div
                className="border border-red-600 flex justify-start md:justify-center items-center text-5xl sm:text-7xl md:text-8xl lg:text-[11vw] font-normal leading-none text-[#DB0026] font-[Poor Story] p-8 md:p-4 md:pl-4 cursor-pointer"
                onClick={() => handleScroll("about")}
              >
                ABOUT
              </div>

              <div
                className="border border-red-600 flex justify-start md:justify-center items-center text-5xl sm:text-7xl md:text-8xl lg:text-8xl font-normal leading-none text-[#DB0026] font-[Poor Story] p-8 md:p-4 md:pl-4 cursor-pointer"
                onClick={() => handleNavigation("slider")}
              >
                <span>CREATIVE CORNER</span>
              </div>

              <div
                className="border border-red-600 flex justify-start md:justify-center items-center text-5xl sm:text-7xl md:text-8xl lg:text-[11vw] font-normal leading-none text-[#DB0026] font-[Poor Story] p-8 md:p-4 cursor-pointer"
                onClick={() => handleNavigation("form")}
              >
                JOIN US
              </div>

              <div className="border border-red-600 flex flex-col justify-center items-start p-4">
                {isSubmitted ? (
                  <div className="w-full bg-white px-2 py-3 text-base text-red-600">
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
                      className="flex-1 min-w-0 bg-white border-b-2 border-red-600 px-2 py-3 focus:outline-none text-base placeholder-red-600"
                    />
                    <button
                      onClick={handleSubscribe}
                      disabled={isLoading}
                      className="whitespace-nowrap py-3 px-4 text-red-600 border border-red-600 text-sm rounded bg-white hover:bg-red-700 hover:text-white transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? "Subscribing..." : "Subscribe"}
                    </button>
                  </div>
                )}
                {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
              </div>

              <div className="border border-red-600 flex flex-col sm:flex-row justify-start md:justify-center items-center text-lg sm:text-xl font-extrabold p-6 md:p-4 pl-12 md:pl-4 space-y-4 sm:space-y-0 cursor-pointer">
                <a href="#" className="hover:underline mx-4 text-center">
                  MINIMALIST INSTITUTE
                </a>
                <a href="#" className="hover:underline mx-4 text-center">
                  PIGEONPOST
                </a>
              </div>
            </div>

            <div className="absolute top-[40%] md:left-1/2 right-4 md:right-auto transform -translate-y-1/2 md:-translate-x-1/2 md:-translate-y-1/2 pointer-events-none">
              <div
                className="bg-[#DB0026] text-white text-center font-bold w-32 h-24 md:w-56 md:h-48 flex justify-center items-center"
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
    </div>
  );
};

export default ModalGrid;
