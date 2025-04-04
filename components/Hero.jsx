import { useState, useEffect } from "react";

export default function Hero() {
  const images = [
    "/assets/Omnium 4.svg",
    "/assets/Omnium 3.svg",
    "/assets/Omnium 2.svg",
    "/assets/Omnium 1.svg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cycle images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex items-center justify-center transition-all duration-1000 ease-in-out">
      <img
        src={images[currentImageIndex]}
        alt="Logo"
        className="w-[200px] sm:w-[293.49px] h-[40px]"
        draggable="false"
        onDragStart={(e) => e.preventDefault()}
      />
    </div>
  );
}

