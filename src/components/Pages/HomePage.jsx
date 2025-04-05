import React from "react";
const HomePage = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  // Array of background images
  const backgroundImages = [
    'https://static01.nyt.com/images/2023/01/18/multimedia/16old-new-01-gzfp/16old-new-01-gzfp-videoSixteenByNineJumbo1600.jpg',
    'https://www.kentpaulette.com/wp-content/uploads/bear-painting-abstract-animal-art-kent-paulette.jpg',
    'https://cdn1.realitytitbit.com/uploads/26/2023/01/GettyImages-884577768-1536x1024.jpg',
    'https://buenosairesstreetart.com/wp-content/uploads/2022/11/nia-fase-mexico-graffiti-buenos-aires-argentina-letras-3d-pieza-graffitera-mujer-artista.jpg'
  ];
  
  // Array of texts to display
  const headingTexts = [
    "Why #LiveToExpress",
    "Express Yourself",
    "Be Authentic",
    "Show Your Colors"
  ];
  
  // Effect to change the background and text every 4 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative min-h-screen text-white font-poorstory overflow-hidden">
      {/* Background Image with opacity */}
      <div
        className="absolute inset-0 bg-center bg-cover transition-opacity duration-1000"
        style={{
          backgroundImage: `url('${backgroundImages[currentIndex]}')`,
        }}
      ></div>

      {/* Content Section */}
      <div className="relative flex flex-col justify-center items-center min-h-screen px-4">
        {/* Centered Title */}
        <div className="flex flex-col items-center justify-center">
          <h1
            className="text-center text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold transition-all duration-1000"
            style={{
              fontFamily: "Poor Story",
            }}
          >
            {headingTexts[currentIndex]}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;