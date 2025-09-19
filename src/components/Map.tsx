"use client";
import { useState, useEffect, useRef } from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

export default function Map() {
  const [showMap, setShowMap] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowMap(true);
            observer.disconnect(); // stop observing after showing
          }
        });
      },
      { threshold: 0.1 } // trigger when 10% of section is visible
    );

    if (mapRef.current) observer.observe(mapRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={mapRef}
      className="px-6 py-12 bg-gray-50 text-center"
    >
      <SectionTitle title="Find Us" />

      {!showMap && (
        <div className="relative mt-6 rounded-lg shadow h-96 w-full">
          <Image
            src="/image.png"
            alt="Azmi Electricals Location"
            fill
            className="object-cover rounded-lg"
          />
        </div>

      )}

      {showMap && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12483.056933517364!2d83.0113837871582!3d25.937046799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991b6e47420014d%3A0x45796b9e930313ce!2sAzmi%20Electricals!5e1!3m2!1sen!2sin!4v1757738077251!5m2!1sen!2sin"
          width="100%"
          height="400"
          className="mt-6 rounded-lg shadow"
          loading="lazy"
        ></iframe>
      )}
    </section>
  );
}
