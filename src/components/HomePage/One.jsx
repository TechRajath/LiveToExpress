const One = () => {
  return (
    <div className="relative min-h-[50vh] sm:min-h-screen bg-customRed">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('/images/No-bg-why.png')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
        }}
      ></div>

      {/* Content Container */}
      <div className="relative flex flex-col justify-center items-center min-h-[50vh] sm:min-h-screen space-y-6 sm:space-y-12">
        {/* Centered Title with Subtitle */}
        <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-4">
          <h1
            className="text-center text-white text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-6xl"
            style={{
              fontFamily: "Poor Story",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            How does it help?
          </h1>

          <p
            className="text-center text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl"
            style={{
              fontFamily: "Poor Story",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            By building a space where expression is celebrated, and
            individuality is valued.
          </p>
        </div>
      </div>
    </div>
  );
};

export default One;
