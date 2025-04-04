import { useState, useEffect } from "react";

export default function Hero() {
  const images = [
    "/assets/Omnium 3.svg",
    "/assets/Omnium 1.svg",
    "/assets/Omnium 2.svg",
    "/assets/Omnium 4.svg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Cycle images every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Fade in new image
      }, 500); // Match fade-out duration
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full">
      {/* Centered Logo */}
      <div className="h-full w-full flex items-center justify-center">
        <img
          src={images[currentImageIndex]}
          alt="Logo"
          className={`w-[200px] sm:w-[293.49px] h-[40px] transition-opacity duration-1000 ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          draggable="false"
          onDragStart={(e) => e.preventDefault()}
        />
      </div>

      {/* Footer */}
      <div className="absolute bottom-2 sm:bottom-0 w-full flex flex-col-reverse sm:flex-row items-center sm:items-end text-[5px] sm:text-[7px] 3xl:text-[10px] tracking-[1.5px]">
        {/* Centered text*/}
        <div className="w-full text-center sm:w-auto sm:absolute sm:left-1/2 sm:-translate-x-1/2 pb-[28px] 3xl:pb-[48px]">
          <p>© COPYRIGHT 2025 OMNIUM | ZIMO GROUP LIMITED. ALL RIGHTS RESERVED.</p>
        </div>

        {/* Image at the right corner */}
        <div className="sm:absolute sm:right-[30px] 3xl:right-[50px] pb-[10px] sm:pb-[30px] 3xl:pb-[50px]">
          <img
            src="/assets/ZIMO OFFICIAL LICENSED.svg"
            alt="logo"
            className="w-[90px] sm:w-[122.31px] h-[28px]"
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      </div>
    </div>
  );
}
