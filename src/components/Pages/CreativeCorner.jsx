import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CreativeCorner = () => {
  const scrollRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [centerIndex, setCenterIndex] = useState(0);

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

  // Calculate center index on scroll
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const containerWidth = slider.offsetWidth;
      const scrollPos = slider.scrollLeft + containerWidth / 2;
      const itemWidth =
        slider.querySelector(".carousel-item")?.offsetWidth || 0;
      const newCenterIndex = Math.round(scrollPos / (itemWidth + 24)); // 24 is gap
      setCenterIndex(Math.min(newCenterIndex, images.length - 1));
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, [images.length]);

  // Mouse handlers
  const handleMouseDown = (e) => {
    const slider = scrollRef.current;
    const startX = e.pageX - slider.offsetLeft;
    const scrollLeft = slider.scrollLeft;

    const handleMouseMove = (e) => {
      const x = e.pageX - slider.offsetLeft;
      const scroll = x - startX;
      slider.scrollLeft = scrollLeft - scroll;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      snapToCenter();
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    const slider = scrollRef.current;
    const startX = e.touches[0].pageX - slider.offsetLeft;
    const scrollLeft = slider.scrollLeft;

    const handleTouchMove = (e) => {
      e.preventDefault();
      const x = e.touches[0].pageX - slider.offsetLeft;
      const scroll = x - startX;
      slider.scrollLeft = scrollLeft - scroll;
    };

    const handleTouchEnd = () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      snapToCenter();
    };

    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);
  };

  const snapToCenter = () => {
    const slider = scrollRef.current;
    if (!slider) return;

    const containerWidth = slider.offsetWidth;
    const scrollPos = slider.scrollLeft + containerWidth / 2;
    const itemWidth = slider.querySelector(".carousel-item")?.offsetWidth || 0;
    const newCenterIndex = Math.round(scrollPos / (itemWidth + 24)); // 24 is gap

    if (newCenterIndex >= 0 && newCenterIndex < images.length) {
      const newScrollPos =
        newCenterIndex * (itemWidth + 24) - containerWidth / 2 + itemWidth / 2;
      slider.scrollTo({
        left: newScrollPos,
        behavior: "smooth",
      });
      setCenterIndex(newCenterIndex);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const newIndex = Math.max(centerIndex - 1, 0);
      const itemWidth =
        scrollRef.current.querySelector(".carousel-item")?.offsetWidth || 0;
      const scrollPos =
        newIndex * (itemWidth + 24) -
        scrollRef.current.offsetWidth / 2 +
        itemWidth / 2;

      scrollRef.current.scrollTo({
        left: scrollPos,
        behavior: "smooth",
      });
      setCenterIndex(newIndex);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const newIndex = Math.min(centerIndex + 1, images.length - 1);
      const itemWidth =
        scrollRef.current.querySelector(".carousel-item")?.offsetWidth || 0;
      const scrollPos =
        newIndex * (itemWidth + 24) -
        scrollRef.current.offsetWidth / 2 +
        itemWidth / 2;

      scrollRef.current.scrollTo({
        left: scrollPos,
        behavior: "smooth",
      });
      setCenterIndex(newIndex);
    }
  };

  return (
    <div className="bg-black w-full py-8 px-4 md:py-12 md:px-8 overflow-hidden">
      <h1
        className={`whitespace-nowrap overflow-hidden text-ellipsis 
             text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl 
             font-bold text-center max-w-full text-white mb-12`}
        style={{
          fontFamily: "'Poor Story', cursive",
          lineHeight: "1.2",
        }}
      >
        Creative corner
      </h1>

      <div className="relative group">
        {/* Navigation buttons */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-60 text-white rounded-full w-12 h-12 items-center justify-center hover:bg-opacity-80 transition-all"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-60 text-white rounded-full w-12 h-12 items-center justify-center hover:bg-opacity-80 transition-all"
        >
          <ChevronRight size={28} />
        </button>

        {/* Mobile navigation buttons */}
        <div className="flex md:hidden justify-center gap-8 mb-6">
          <button
            onClick={scrollLeft}
            className="bg-transparent text-white border border-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-white hover:text-black transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollRight}
            className="bg-transparent text-white border border-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-white hover:text-black transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto overflow-y-hidden touch-pan-x scrollbar-none"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className="flex gap-6 p-4 min-w-max items-center h-[32rem] md:h-[36rem]">
            {images.map((src, index) => (
              <div
                key={index}
                className={`carousel-item relative transition-all duration-500 ${
                  index === centerIndex
                    ? "scale-110 z-10"
                    : "scale-90 opacity-80"
                }`}
                style={{
                  transform:
                    index === centerIndex
                      ? "scale(1.1)"
                      : `perspective(1000px) rotateY(${
                          index < centerIndex ? "-10deg" : "10deg"
                        }) scale(0.9)`,
                  transition: "transform 0.5s ease, opacity 0.5s ease",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`border-2 ${
                    index === centerIndex ? "border-white" : "border-gray-600"
                  } rounded-xl overflow-hidden transition-all duration-300`}
                >
                  <img
                    src={src}
                    alt={`Creative work ${index + 1}`}
                    className={`w-64 h-80 md:w-80 md:h-96 object-cover transition-all duration-300 ${
                      hoveredIndex === index
                        ? "brightness-75"
                        : "brightness-100"
                    }`}
                    draggable="false"
                  />
                  <div
                    className={`absolute inset-0 flex items-end p-4 transition-all duration-500 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
                    }}
                  >
                    <p
                      className="text-white text-center font-medium text-lg mb-4"
                      style={{
                        fontFamily: "'Poor Story', cursive",
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
