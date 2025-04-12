import React, { useRef, useEffect, useState } from "react";

const HeadingWithUnderline = ({
  headingText,
  textColor = "text-white", // Default text color
  underLineColor = null, // Default null uses gradient
}) => {
  const headingRef = useRef(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    if (headingRef.current) {
      setTextWidth(headingRef.current.offsetWidth);
    }
  }, [headingText]);

  return (
    <div className="flex flex-col items-start p-6 w-full">
      <h1
        ref={headingRef}
        className={`whitespace-nowrap overflow-hidden text-ellipsis 
             text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl 
             font-bold text-left max-w-full ${textColor}`}
        style={{
          fontFamily: "'Poor Story', cursive",
          lineHeight: "1.2",
        }}
      >
        {headingText}
      </h1>
      <div
        className="relative mt-2"
        style={{ width: textWidth > 0 ? `${textWidth}px` : "100%" }}
      >
        <svg
          width="100%"
          height="10"
          viewBox={`0 0 ${textWidth || 300} 10`}
          preserveAspectRatio="none"
        >
          <path
            d={`M5 5 C${textWidth * 0.1} 8, ${textWidth * 0.2} 2, ${
              textWidth * 0.3
            } 5 C${textWidth * 0.4} 8, ${textWidth * 0.6} 2, ${
              textWidth * 0.8
            } 5 C${textWidth * 0.9} 8, ${textWidth * 0.95} 2, ${
              textWidth - 5
            } 5`}
            strokeWidth="6"
            strokeLinecap="round"
            stroke={underLineColor ? underLineColor : "url(#gradientLine)"}
            fill="none"
          />
          {!underLineColor && (
            <defs>
              <linearGradient
                id="gradientLine"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#2DD4BF" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          )}
        </svg>
      </div>
    </div>
  );
};

export default HeadingWithUnderline;
