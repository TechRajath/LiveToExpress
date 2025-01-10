const CreativeCorner = () => {
  const images = [
    "https://imgs.search.brave.com/QYaR1RdnARVxli274TpZk8luB48-TqMQ29tLoftKurc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbmZs/dWVuY2VybWFya2V0/aW5naHViLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/Ny9qdWxpYW4tZ2xh/bmRlci1naWYuZ2lm.gif",
    "https://imgs.search.brave.com/zqDuxRgz7KXas0Sm0imqrgM5UJhtNVrXyVPRDacMKbE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zaG90/a2l0LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvYmItcGx1Z2lu/L2NhY2hlL3Bob3Rv/LXRvLXBhaW50aW5n/LWxhbmRzY2FwZS0w/NzdhYTJiNTY2NmU5/OTg4M2I5ZTU0OWI2/NTM3YmU0ZC16eWJy/YXZneDJxNDcuanBn",
    "https://imgs.search.brave.com/rKsyW2T083lyvhfBdlyZz_ppzhwhyFeZapVNXWsqK-4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/MDYxMjU4Ni9waG90/by9mZW1hbGUtYXJ0/aXN0LXdvcmtzLW9u/LWFic3RyYWN0LW9p/bC1wYWludGluZy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/M054SEJPODEwMUJu/SGJBMTQ0b3dNdDMy/UzNVSXpyaVdsVlNj/dmVZd05fcz0",
    "https://imgs.search.brave.com/rKsyW2T083lyvhfBdlyZz_ppzhwhyFeZapVNXWsqK-4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/MDYxMjU4Ni9waG90/by9mZW1hbGUtYXJ0/aXN0LXdvcmtzLW9u/LWFic3RyYWN0LW9p/bC1wYWludGluZy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/M054SEJPODEwMUJu/SGJBMTQ0b3dNdDMy/UzNVSXpyaVdsVlNj/dmVZd05fcz0",
    "https://imgs.search.brave.com/TUsK8Cgyea1tRHW9N5psDzlD-URs67b7_BGJyb5qjQU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbmZs/dWVuY2VybWFya2V0/aW5naHViLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/Ny9jaHJpcy1waGls/bGlwcy1naWYuZ2lm.gif",
  ];

  return (
    <div className="bg-customRed w-full py-8 px-4 md:py-12 md:px-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-['Poor_Story'] text-center mb-8">
        CREATIVE CORNER
      </h1>

      <div className="w-full overflow-hidden">
        <div className="flex gap-6 p-4 min-w-max animate-scroll">
          {images.map((src, index) => (
            <div key={index} className="relative rounded">
              <div className="border-2 border-white rounded p-2">
                <img
                  src={src}
                  alt={`Creative work ${index + 1}`}
                  className="w-56 h-64 md:w-64 md:h-80 object-cover rounded"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <p
        className="text-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl"
        style={{
          fontFamily: "Poor Story",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal",
        }}
      >
        Creative explorations done by ...
      </p>
    </div>
  );
};

export default CreativeCorner;
