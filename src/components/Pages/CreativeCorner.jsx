import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeadingWithUnderline from "../UIElements/HeadingWithUnderline";
const CreativeCorner = () => {
  const scrollRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const images = [
    "https://imgs.search.brave.com/QYaR1RdnARVxli274TpZk8luB48-TqMQ29tLoftKurc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbmZs/dWVuY2VybWFya2V0/aW5naHViLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/Ny9qdWxpYW4tZ2xh/bmRlci1naWYuZ2lm.gif",
    "https://imgs.search.brave.com/zqDuxRgz7KXas0Sm0imqrgM5UJhtNVrXyVPRDacMKbE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zaG90/a2l0LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvYmItcGx1Z2lu/L2NhY2hlL3Bob3Rv/LXRvLXBhaW50aW5n/LWxhbmRzY2FwZS0w/NzdhYTJiNTY2NmU5/OTg4M2I5ZTU0OWI2/NTM3YmU0ZC16eWJy/YXZneDJxNDcuanBn",
    "https://imgs.search.brave.com/rKsyW2T083lyvhfBdlyZz_ppzhwhyFeZapVNXWsqK-4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/MDYxMjU4Ni9waG90/by9mZW1hbGUtYXJ0/aXN0LXdvcmtzLW9u/LWFic3RyYWN0LW9p/bC1wYWludGluZy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/M054SEJPODEwMUJu/SGJBMTQ0b3dNdDMy/UzNVSXpyaVdsVlNj/dmVZd05fcz0",
    "https://imgs.search.brave.com/rKsyW2T083lyvhfBdlyZz_ppzhwhyFeZapVNXWsqK-4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/MDYxMjU4Ni9waG90/by9mZW1hbGUtYXJ0/aXN0LXdvcmtzLW9u/LWFic3RyYWN0LW9p/bC1wYWludGluZy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/M054SEJPODEwMUJu/SGJBMTQ0b3dNdDMy/UzNVSXpyaVdsVlNj/dmVZd05fcz0",
    "https://imgs.search.brave.com/TUsK8Cgyea1tRHW9N5psDzlD-URs67b7_BGJyb5qjQU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbmZs/dWVuY2VybWFya2V0/aW5naHViLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/Ny9jaHJpcy1waGls/bGlwcy1naWYuZ2lm.gif",
    "https://imgs.search.brave.com/QYaR1RdnARVxli274TpZk8luB48-TqMQ29tLoftKurc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbmZs/dWVuY2VybWFya2V0/aW5naHViLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/Ny9qdWxpYW4tZ2xh/bmRlci1naWYuZ2lm.gif",
    "https://imgs.search.brave.com/zqDuxRgz7KXas0Sm0imqrgM5UJhtNVrXyVPRDacMKbE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zaG90/a2l0LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvYmItcGx1Z2lu/L2NhY2hlL3Bob3Rv/LXRvLXBhaW50aW5n/LWxhbmRzY2FwZS0w/NzdhYTJiNTY2NmU5/OTg4M2I5ZTU0OWI2/NTM3YmU0ZC16eWJy/YXZneDJxNDcuanBn",
    "https://imgs.search.brave.com/rKsyW2T083lyvhfBdlyZz_ppzhwhyFeZapVNXWsqK-4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/MDYxMjU4Ni9waG90/by9mZW1hbGUtYXJ0/aXN0LXdvcmtzLW9u/LWFic3RyYWN0LW9p/bC1wYWludGluZy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/M054SEJPODEwMUJu/SGJBMTQ0b3dNdDMy/UzNVSXpyaVdsVlNj/dmVZd05fcz0",
    "https://imgs.search.brave.com/rKsyW2T083lyvhfBdlyZz_ppzhwhyFeZapVNXWsqK-4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/MDYxMjU4Ni9waG90/by9mZW1hbGUtYXJ0/aXN0LXdvcmtzLW9u/LWFic3RyYWN0LW9p/bC1wYWludGluZy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/M054SEJPODEwMUJu/SGJBMTQ0b3dNdDMy/UzNVSXpyaVdsVlNj/dmVZd05fcz0",
    "https://imgs.search.brave.com/TUsK8Cgyea1tRHW9N5psDzlD-URs67b7_BGJyb5qjQU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbmZs/dWVuY2VybWFya2V0/aW5naHViLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/Ny9jaHJpcy1waGls/bGlwcy1naWYuZ2lm.gif",
    "https://imgs.search.brave.com/QYaR1RdnARVxli274TpZk8luB48-TqMQ29tLoftKurc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbmZs/dWVuY2VybWFya2V0/aW5naHViLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/Ny9qdWxpYW4tZ2xh/bmRlci1naWYuZ2lm.gif",
    "https://imgs.search.brave.com/zqDuxRgz7KXas0Sm0imqrgM5UJhtNVrXyVPRDacMKbE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zaG90/a2l0LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvYmItcGx1Z2lu/L2NhY2hlL3Bob3Rv/LXRvLXBhaW50aW5n/LWxhbmRzY2FwZS0w/NzdhYTJiNTY2NmU5/OTg4M2I5ZTU0OWI2/NTM3YmU0ZC16eWJy/YXZneDJxNDcuanBn",
    "https://imgs.search.brave.com/rKsyW2T083lyvhfBdlyZz_ppzhwhyFeZapVNXWsqK-4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/MDYxMjU4Ni9waG90/by9mZW1hbGUtYXJ0/aXN0LXdvcmtzLW9u/LWFic3RyYWN0LW9p/bC1wYWludGluZy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/M054SEJPODEwMUJu/SGJBMTQ0b3dNdDMy/UzNVSXpyaVdsVlNj/dmVZd05fcz0",
    "https://imgs.search.brave.com/rKsyW2T083lyvhfBdlyZz_ppzhwhyFeZapVNXWsqK-4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/MDYxMjU4Ni9waG90/by9mZW1hbGUtYXJ0/aXN0LXdvcmtzLW9u/LWFic3RyYWN0LW9p/bC1wYWludGluZy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/M054SEJPODEwMUJu/SGJBMTQ0b3dNdDMy/UzNVSXpyaVdsVlNj/dmVZd05fcz0",
    "https://imgs.search.brave.com/TUsK8Cgyea1tRHW9N5psDzlD-URs67b7_BGJyb5qjQU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbmZs/dWVuY2VybWFya2V0/aW5naHViLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/Ny9jaHJpcy1waGls/bGlwcy1naWYuZ2lm.gif",
    "https://imgs.search.brave.com/QYaR1RdnARVxli274TpZk8luB48-TqMQ29tLoftKurc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbmZs/dWVuY2VybWFya2V0/aW5naHViLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/Ny9qdWxpYW4tZ2xh/bmRlci1naWYuZ2lm.gif",
    "https://imgs.search.brave.com/zqDuxRgz7KXas0Sm0imqrgM5UJhtNVrXyVPRDacMKbE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zaG90/a2l0LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvYmItcGx1Z2lu/L2NhY2hlL3Bob3Rv/LXRvLXBhaW50aW5n/LWxhbmRzY2FwZS0w/NzdhYTJiNTY2NmU5/OTg4M2I5ZTU0OWI2/NTM3YmU0ZC16eWJy/YXZneDJxNDcuanBn",
    "https://imgs.search.brave.com/rKsyW2T083lyvhfBdlyZz_ppzhwhyFeZapVNXWsqK-4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/MDYxMjU4Ni9waG90/by9mZW1hbGUtYXJ0/aXN0LXdvcmtzLW9u/LWFic3RyYWN0LW9p/bC1wYWludGluZy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/M054SEJPODEwMUJu/SGJBMTQ0b3dNdDMy/UzNVSXpyaVdsVlNj/dmVZd05fcz0",
    "https://imgs.search.brave.com/rKsyW2T083lyvhfBdlyZz_ppzhwhyFeZapVNXWsqK-4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/MDYxMjU4Ni9waG90/by9mZW1hbGUtYXJ0/aXN0LXdvcmtzLW9u/LWFic3RyYWN0LW9p/bC1wYWludGluZy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/M054SEJPODEwMUJu/SGJBMTQ0b3dNdDMy/UzNVSXpyaVdsVlNj/dmVZd05fcz0",
    "https://imgs.search.brave.com/TUsK8Cgyea1tRHW9N5psDzlD-URs67b7_BGJyb5qjQU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbmZs/dWVuY2VybWFya2V0/aW5naHViLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/Ny9jaHJpcy1waGls/bGlwcy1naWYuZ2lm.gif",
    "https://imgs.search.brave.com/QYaR1RdnARVxli274TpZk8luB48-TqMQ29tLoftKurc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbmZs/dWVuY2VybWFya2V0/aW5naHViLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/Ny9qdWxpYW4tZ2xh/bmRlci1naWYuZ2lm.gif",
    "https://imgs.search.brave.com/zqDuxRgz7KXas0Sm0imqrgM5UJhtNVrXyVPRDacMKbE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zaG90/a2l0LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvYmItcGx1Z2lu/L2NhY2hlL3Bob3Rv/LXRvLXBhaW50aW5n/LWxhbmRzY2FwZS0w/NzdhYTJiNTY2NmU5/OTg4M2I5ZTU0OWI2/NTM3YmU0ZC16eWJy/YXZneDJxNDcuanBn",
    "https://imgs.search.brave.com/rKsyW2T083lyvhfBdlyZz_ppzhwhyFeZapVNXWsqK-4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/MDYxMjU4Ni9waG90/by9mZW1hbGUtYXJ0/aXN0LXdvcmtzLW9u/LWFic3RyYWN0LW9p/bC1wYWludGluZy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/M054SEJPODEwMUJu/SGJBMTQ0b3dNdDMy/UzNVSXpyaVdsVlNj/dmVZd05fcz0",
    "https://imgs.search.brave.com/rKsyW2T083lyvhfBdlyZz_ppzhwhyFeZapVNXWsqK-4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/MDYxMjU4Ni9waG90/by9mZW1hbGUtYXJ0/aXN0LXdvcmtzLW9u/LWFic3RyYWN0LW9p/bC1wYWludGluZy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/M054SEJPODEwMUJu/SGJBMTQ0b3dNdDMy/UzNVSXpyaVdsVlNj/dmVZd05fcz0",
    "https://imgs.search.brave.com/TUsK8Cgyea1tRHW9N5psDzlD-URs67b7_BGJyb5qjQU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbmZs/dWVuY2VybWFya2V0/aW5naHViLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/Ny9jaHJpcy1waGls/bGlwcy1naWYuZ2lm.gif",
    "https://imgs.search.brave.com/QYaR1RdnARVxli274TpZk8luB48-TqMQ29tLoftKurc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbmZs/dWVuY2VybWFya2V0/aW5naHViLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/Ny9qdWxpYW4tZ2xh/bmRlci1naWYuZ2lm.gif",
    "https://imgs.search.brave.com/zqDuxRgz7KXas0Sm0imqrgM5UJhtNVrXyVPRDacMKbE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zaG90/a2l0LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvYmItcGx1Z2lu/L2NhY2hlL3Bob3Rv/LXRvLXBhaW50aW5n/LWxhbmRzY2FwZS0w/NzdhYTJiNTY2NmU5/OTg4M2I5ZTU0OWI2/NTM3YmU0ZC16eWJy/YXZneDJxNDcuanBn",
    "https://imgs.search.brave.com/rKsyW2T083lyvhfBdlyZz_ppzhwhyFeZapVNXWsqK-4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/MDYxMjU4Ni9waG90/by9mZW1hbGUtYXJ0/aXN0LXdvcmtzLW9u/LWFic3RyYWN0LW9p/bC1wYWludGluZy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/M054SEJPODEwMUJu/SGJBMTQ0b3dNdDMy/UzNVSXpyaVdsVlNj/dmVZd05fcz0",
    "https://imgs.search.brave.com/rKsyW2T083lyvhfBdlyZz_ppzhwhyFeZapVNXWsqK-4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/MDYxMjU4Ni9waG90/by9mZW1hbGUtYXJ0/aXN0LXdvcmtzLW9u/LWFic3RyYWN0LW9p/bC1wYWludGluZy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/M054SEJPODEwMUJu/SGJBMTQ0b3dNdDMy/UzNVSXpyaVdsVlNj/dmVZd05fcz0",
    "https://imgs.search.brave.com/TUsK8Cgyea1tRHW9N5psDzlD-URs67b7_BGJyb5qjQU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbmZs/dWVuY2VybWFya2V0/aW5naHViLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/Ny9jaHJpcy1waGls/bGlwcy1naWYuZ2lm.gif",
  ];
  const imageCaptions = [
    "Exploring abstract expressionism",
    "A journey through modern art",
    "Conceptual design experiment",
    "Fusion of traditional and digital media",
    "Color theory in practice",
    "Geometric abstraction study",
    "Minimalist composition",
  ];
  // Mouse handlers
  const handleMouseDown = (e) => {
    const slider = scrollRef.current;
    let startX = e.pageX - slider.offsetLeft;
    let scrollLeft = slider.scrollLeft;

    const handleMouseMove = (e) => {
      const x = e.pageX - slider.offsetLeft;
      const scroll = x - startX;
      slider.scrollLeft = scrollLeft - scroll;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    const slider = scrollRef.current;
    let startX = e.touches[0].pageX - slider.offsetLeft;
    let scrollLeft = slider.scrollLeft;

    const handleTouchMove = (e) => {
      e.preventDefault();
      const x = e.touches[0].pageX - slider.offsetLeft;
      const scroll = x - startX;
      slider.scrollLeft = scrollLeft - scroll;
    };

    const handleTouchEnd = () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };

    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black w-full py-8 px-4 md:py-12 md:px-8">
      <HeadingWithUnderline headingText="Creative Corner &#128161;" />

      <div className="flex justify-start gap-8 mb-6 ml-10">
        <button
          onClick={scrollLeft}
          className="bg-transparent text-white border-2 border-white rounded-full w-16 h-16 flex items-center justify-center hover:bg-white hover:text-black transition-all"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={scrollRight}
          className="bg-transparent text-white border-2 border-white rounded-full w-16 h-16 flex items-center justify-center hover:bg-white hover:text-black transition-all"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="w-full overflow-x-hidden overflow-y-hidden touch-pan-x scrollbar-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="flex gap-8 p-4 min-w-max">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`border-2 border-white ${
                  hoveredIndex === index ? "" : "rounded-lg"
                } p-2 transition-all duration-300`}
              >
                <img
                  src={src}
                  alt={`Creative work ${index + 1}`}
                  className={`w-80 h-96 md:w-96 md:h-112 object-cover ${
                    hoveredIndex === index ? "" : "rounded-lg"
                  } select-none transition-all duration-300`}
                  draggable="false"
                />
                <div
                  className={`absolute inset-x-0 bottom-0 bg-yellow-500 bg-opacity-70 flex items-center justify-center p-4 transition-all duration-500 ${
                    hoveredIndex === index
                      ? "h-24 opacity-100"
                      : "h-0 opacity-0"
                  }`}
                >
                  <p
                    className="text-black text-center font-medium text-lg"
                    style={{
                      fontFamily: "Poor Story",
                    }}
                  >
                    {imageCaptions[index % imageCaptions.length]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p
        className="font-['Poor_Story'] text-center text-white mt-6"
        style={{
          fontSize: "clamp(24px, 3vw, 48px)",
          lineHeight: "normal",
        }}
      >
        Creative explorations done by the individuals ...
      </p>
    </div>
  );
};

export default CreativeCorner;
