import { useState, useEffect, useRef } from "react";
import HeadingWithUnderline from "../UIElements/HeadingWithUnderline";

const What = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const playerRef = useRef(null);

  // Function to toggle mute
  const toggleMute = () => {
    setIsMuted(!isMuted);

    // Handle YouTube player if it exists
    if (window.YT && playerRef.current) {
      if (isMuted) {
        playerRef.current.unMute();
      } else {
        playerRef.current.mute();
      }
    }
  };

  // Initialize YouTube API
  useEffect(() => {
    // Load YouTube API script
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Setup YouTube player once API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("youtube-player", {
        videoId: "41O_MydqxTU", // Replace with your YouTube video ID
        playerVars: {
          autoplay: 1,
          loop: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
          enablejsapi: 1,
          modestbranding: 1,
          mute: 1, // Start muted
          playsinline: 1,
          playlist: "41O_MydqxTU", // Required for looping
        },
        events: {
          onReady: (event) => {
            event.target.mute();
            event.target.playVideo();
          },
          onStateChange: (event) => {
            // Restart video when it ends
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo();
            }
          },
        },
      });
    };

    // Cleanup function
    return () => {
      // Remove the global callback
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  // Choose which video implementation to use - YouTube or Google Drive
  const videoImplementation = (
    // OPTION 1: YOUTUBE EMBED
    <div className="absolute inset-0 pointer-events-none">
      <div className="relative w-full h-full">
        <div
          id="youtube-player"
          className="absolute inset-0 w-full h-full"
        ></div>
      </div>
    </div>

    // OPTION 2: GOOGLE DRIVE VIDEO
    // <video
    //   className="absolute inset-0 object-cover w-full h-full"
    //   autoPlay
    //   loop
    //   muted={isMuted}
    //   playsInline
    // >
    //   <source src="https://drive.google.com/uc?export=download&id=YOUR_GOOGLE_DRIVE_FILE_ID" type="video/mp4" />
    //   Your browser does not support the video tag.
    // </video>
  );

  return (
    <div className="relative bg-black">
      {/* Added heading with underline - left aligned */}
      <h1
        className={`whitespace-nowrap overflow-hidden text-ellipsis 
             text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl 
             font-bold text-center max-w-full text-white`}
        style={{
          fontFamily: "'Poor Story', cursive",
          lineHeight: "1.9",
        }}
      >
        Art in Motion
      </h1>

      <div className="flex flex-col items-start p-4 w-full">
        {/* Container for both video and content */}
        <div className="relative w-full min-h-screen sm:h-screen overflow-hidden">
          {/* Background Video */}
          {videoImplementation}

          {/* Overlay to allow interaction with buttons */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          {/* Marquee Text with Top and Bottom Borders */}
          <div className="absolute bottom-24 w-full overflow-hidden border-t-2 border-b-2 border-white py-3 bg-black bg-opacity-40">
            <div className="marquee-container">
              <div className="marquee-text">
                <p
                  className="text-white text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap"
                  style={{
                    fontFamily: "Poor Story",
                    fontWeight: "800",
                    letterSpacing: "1px",
                  }}
                >
                  EXPERIENCE THE FREEDOM TO BE YOURSELF • CREATIVITY WITHOUT
                  LIMITS • JOIN THE MOVEMENT
                </p>
              </div>
            </div>
          </div>

          {/* Audio Control Button */}
          <button
            onClick={toggleMute}
            className="absolute bottom-6 right-6 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all z-10"
          >
            {isMuted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-8 sm:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-8 sm:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            )}
          </button>
        </div>

        {/* CSS for marquee animation */}
        <style jsx>{`
          @keyframes marquee-right-to-left {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          @keyframes marquee-left-to-right {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          .marquee-container {
            width: 100%;
            overflow: hidden;
          }

          .marquee-text {
            display: inline-block;
            white-space: nowrap;
            animation: marquee-right-to-left 15s linear infinite;
          }

          .marquee-text:nth-child(2) {
            animation: marquee-left-to-right 15s linear infinite;
            animation-delay: 15s;
          }
        `}</style>
      </div>
    </div>
  );
};

export default What;
