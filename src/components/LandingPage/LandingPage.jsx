// LandingPage.tsx

import Navbar from "../Navbar/Navbar"
import HomePage from "../Pages/HomePage"

const LandingPage = () => {
  return (
    <div className="relative min-h-screen bg-customRed text-white font-poorstory overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-20 z-0"
        style={{
            backgroundImage: "url('/images/No-bg-Hero.png')",
        }}
      ></div>

      {/* Content on top */}
      <div className="relative z-10">
        <Navbar />
        <HomePage />
      </div>
    </div>
  );
};

export default LandingPage;
