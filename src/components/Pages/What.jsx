const What = () => {
  return (
    <div className="relative bg-customRed">
      {/* Container for both image and content */}
      <div className="relative w-full min-h-screen sm:h-screen ">
        {/* Background Image Container */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('/images/No-bg-Help.png')`,
            backgroundSize: "cover", // Ensure image covers entire area
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%",
            width: "100%",
          }}
        ></div>

        {/* Content Container */}
        <div className="relative flex flex-col justify-center items-center min-h-screen space-y-8 sm:space-y-12 py-10 sm:py-16">
          {/* Centered Title with Subtitle */}
          <div className="flex flex-col items-center justify-center space-y-4 px-4 sm:px-8">
            <h1
              className="text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-6xl"
              style={{
                fontFamily: "Poor Story",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
              }}
            >
              What is it?
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
              It’s not just a movement; it’s a place where people feel free to
              be themselves, connecting with others who share their passion for
              creativity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;
