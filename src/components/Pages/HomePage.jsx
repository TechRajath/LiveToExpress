import React from "react";
const HomePage = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Array of background images
  const backgroundImages = [
    "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/6871/images/24d3166-c8f2-b5e3-1405-1070bea48e_IMG_2342_copy.jpg",
    "https://media.mutualart.com/Images//2020_10/16/13/132832261/41b83a86-6ae5-45b3-ba0b-3ff0aa04b0f1.Jpeg",
    "https://engageart.org/wp-content/uploads/2018/01/angelina-litvin-37702ADJ.jpg",
    "https://realismtoday.com/wp-content/uploads/2023/03/contemporary-realism-art-Michael-Klein-Studio_shot3.jpg",
  ];

  // Array of texts to display
  const headingTexts = [
    "Why #LiveToExpress",
    "Express Yourself",
    "Be Authentic",
    "Show Your Colors",
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
