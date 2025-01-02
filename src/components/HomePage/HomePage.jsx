const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-customRed text-white font-poorstory overflow-hidden">
      {/* Background Image with opacity */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-20"
        style={{
          backgroundImage: "url('/images/No-bg-Hero.png')",
          marginTop: "80px",
        }}
      ></div>

      {/* Content Section */}
      <div className="relative flex flex-col justify-center items-center min-h-screen space-y-12">
        {/* Top Section */}
        <div className="flex justify-center -mt-16">
          {" "}
          {/* Adjusted margin */}
          <h2
            className="text-[#FFF] text-2xl sm:text-1xl md:text-lg lg:text-4xl font-semibold"
            style={{
              fontFamily: "Poor Story",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
            }}
          >
            Our Story
          </h2>
        </div>

        {/* Centered Title with Subtitle */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1
            className="text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-6xl"
            style={{
              fontFamily: "Poor Story",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            Why #LiveToExpress
          </h1>

          <p
            className="text-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl"
            style={{
              fontFamily: "Poor Story",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            Because everyone has something unique, and the world deserves to see
            it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
