const Footer = () => {
  return (
    <div className="bg-customRed flex flex-col justify-center items-center px-4 py-8">
      <div className="flex flex-col items-center space-y-8 w-full max-w-4xl">
        <div className="flex justify-center gap-8">
          <a
            href="#linkedin"
            className="text-white text-lg sm:text-xl md:text-2xl hover:underline"
            style={{ fontFamily: "Poor Story" }}
          >
            LinkedIn
          </a>
          <a
            href="#instagram"
            className="text-white text-lg sm:text-xl md:text-2xl hover:underline"
            style={{ fontFamily: "Poor Story" }}
          >
            Instagram
          </a>
          <a
            href="#youtube"
            className="text-white text-lg sm:text-xl md:text-2xl hover:underline"
            style={{ fontFamily: "Poor Story" }}
          >
            YouTube
          </a>
        </div>

        <div className="flex justify-center gap-8">
          <a
            href="#privacy"
            className="text-white text-lg sm:text-xl md:text-2xl hover:underline"
            style={{ fontFamily: "Poor Story" }}
          >
            Privacy
          </a>
          <a
            href="#terms"
            className="text-white text-lg sm:text-xl md:text-2xl hover:underline"
            style={{ fontFamily: "Poor Story" }}
          >
            Terms & Conditions
          </a>
        </div>

        <div className="text-center">
          <p
            className="text-white text-lg sm:text-xl md:text-2xl"
            style={{ fontFamily: "Poor Story" }}
          >
            Declaration: This is an example declaration for demonstration
            purposes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
