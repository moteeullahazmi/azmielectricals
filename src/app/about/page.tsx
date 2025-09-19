"use client";

import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import SectionTitle from "@/components/SectionTitle";
import { useEffect } from "react";
import Footer from "@/components/Footer";

interface TeamMemberProps {
  photo: string;
  name: string;
  role: string;
}

function TeamMember({ photo, name, role }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg">
        <Image
          src={photo}
          alt={name}
          width={128}
          height={128}
          className="object-cover w-full h-full"
        />
      </div>
      <h4 className="mt-2 text-sm md:text-base font-semibold text-blue-900">{name}</h4>
      <p className="text-gray-600 text-xs md:text-sm">{role}</p>
    </div>
  );
}

export default function AboutUsWithReviews() {
  // Load Elfsight script for Google Reviews
  useEffect(() => {
    const scriptId = "elfsight-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="px-4 sm:px-6 md:px-12 py-12 bg-gray-50">
      <SectionTitle title="About Us" />

      {/* Two Column Box */}
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Left Side: Text + CTA */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Azmi Electrical Shop in Azamgarh Since 1980.
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Azmi Electricals was founded in 1980 by Late Hafiz Israr Ahmad. Today, it is proudly run by his sons, Wasiullah Azmi & Khalilullah Sheikh Azmi.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to provide trusted, affordable, and high-quality electrical products to wholesalers and retailers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <CTAButton href="tel:+919125565573" color="blue">Call Now</CTAButton>
            <CTAButton href="https://wa.me/919125565573" color="green">WhatsApp</CTAButton>
          </div>
        </div>

        {/* Right Side: Team Members */}
        <div className="md:w-1/2 p-6 flex justify-center items-center gap-6">
          <TeamMember photo="/founder.png" name="Late Hafiz Israr Ahmad" role="Founder" />
          <TeamMember photo="/cofounder1.png" name="Wasiullah Azmi" role="Co-Founder" />
          <TeamMember photo="/cofounder2.png" name="Khalilullah Sheikh Azmi" role="Co-Founder" />
        </div>
      </div>

      {/* Google Reviews Section */}
      <div className="mt-12 text-center">
        
        <div className="w-full max-w-4xl mx-auto">
          <div
            className="elfsight-app-b849dece-d183-46f7-b4a0-60cd4c44f509"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
      <Footer/>
    </section>
  );
}
