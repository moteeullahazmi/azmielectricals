"use client";

import Image from "next/image";
import { FaPhone, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import SectionTitle from "@/components/SectionTitle";

export default function Contact() {
  const contacts = [
    {
      name: "Wasiullah Azmi",
      phone: "+919125565573",
      whatsapp: "+919125565573",
      photo: "/cofounder1.png",
      address: "Bindra Bazar, Azamgarh, Uttar Pradesh, India",
    },
    {
      name: "Khalilullah Sheikh Azmi",
      phone: "+918853636143",
      whatsapp: "+918853636143",
      photo: "/cofounder2.png",
      address: "Bindra Bazar, Azamgarh, Uttar Pradesh, India",
    },
  ];

  return (
    <section className="px-4 sm:px-6 md:px-12 py-12 bg-gray-50">
      <SectionTitle title="Contact Us" />
      <p className="text-center text-gray-700 mb-12">
        Reach out to us for wholesale and retail inquiries.
      </p>

      {/* Boxes for each brother */}
      <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto mb-8">
        {contacts.map((c, i) => (
          <div
            key={i}
            className="flex-1 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center gap-4"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg">
              <Image
                src={c.photo}
                alt={c.name}
                width={112}
                height={112}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="font-semibold text-blue-900 text-lg">{c.name}</h3>

            <div className="flex flex-wrap gap-2 justify-center">
              <a
                href={`tel:${c.phone}`}
                className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <FaPhone /> Call
              </a>
              <a
                href={`https://wa.me/${c.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>

            <div className="flex items-center gap-2 text-gray-700 mt-2 text-center">
              <FaMapMarkerAlt /> <p>{c.address}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Map */}
      <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.123456789!2d83.1834567!3d26.060123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399b5abcd1234567%3A0x1234567890abcdef!2sAzmi%20Electricals%2C%20Azamgarh!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
