import React, { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import MultiFormPage from "./components/Forms/MultiFormPage";
import Slider from "./components/HomePage/Slider";
import Footer from "./components/Footer/Footer";
import One from "./components/HomePage/One";
import Two from "./components/HomePage/Two";

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
                <div ref={homePageRef}>
                  <HomePage />
                </div>
                <div ref={oneRef}>
                  <One />
                </div>
                <div ref={twoRef}>
                  <Two />
                </div>
                <div ref={sliderRef}>
                  <Slider />
                </div>
                <div ref={formRef}>
                  <MultiFormPage />
                </div>
                <Footer />
              </>
            }
          />
          <Route path="/one" element={<One />} />
          <Route path="/two" element={<Two />} />
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
