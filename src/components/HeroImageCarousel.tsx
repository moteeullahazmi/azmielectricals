"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = ["/shop1.jpg", "/shop2.jpg", "/shop3.jpg"];

export default function HeroImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000); // Change every 2.5 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] rounded-xl overflow-hidden shadow-lg">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Azmi Electricals Shop ${index + 1}`}
          fill
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          priority={index === 0} // First image loads faster
          loading={index === 0 ? "eager" : "lazy"}
        />
      ))}
    </div>
  );
}
