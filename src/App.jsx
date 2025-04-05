import React, { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import MultiFormPage from "./components/Forms/MultiFormPage";
import CreativeCorner from "./components/Pages/CreativeCorner";
import Footer from "./components/Footer/Footer";
import About from "./components/Pages/About";
import What from "./components/Pages/What";
import Animation from "./components/AnimationTest/Animation";
import LandingPage from "./components/LandingPage/LandingPage";

const AppContent = () => {
  const location = useLocation();
  const homePageRef = useRef(null);
  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const sliderRef = useRef(null);
  const formRef = useRef(null);

  React.useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      scrollToSection(hash.toLowerCase());
    }
  }, [location]);

  const scrollToSection = (section) => {
    switch (section) {
      case "home":
        homePageRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "one":
        oneRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "two":
        twoRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "slider":
        sliderRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "form":
        formRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* <Animation /> */}
                <div ref={homePageRef}>
                  <HomePage />
                </div>
                <div ref={oneRef}>
                  <About />
                </div>
                <div ref={twoRef}>
                  <What />
                </div>
                <div ref={sliderRef}>
                  <CreativeCorner />
                </div>
                <div ref={formRef}>
                  <MultiFormPage />
                </div>
                <Footer />
              </>
            }
          />
          <Route path="/About" element={<About />} />
          <Route path="/What" element={<What />} />
          <Route path="/form" element={<MultiFormPage />} />
        </Routes>
      </div>
    </>
  );
};

// Main App component just provides the Router context
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
