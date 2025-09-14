"use client";

import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Footer from "@/components/Footer";

interface Product {
  name: string;
  image: string;
  description: string;
}

const products: Product[] = [
  { name: "Wiring & Cables", image: "/products/wires.png", description: "High-quality copper wires and extension cords" },
  { name: "Switches & Sockets", image: "/products/switch.png", description: "Durable modular switches and sockets" },
  { name: "LED Lighting", image: "/products/led.png", description: "Energy-efficient LED bulbs and tube lights" },
  { name: "Fans & Appliances", image: "/products/fans.png", description: "Ceiling fans, table fans, and more" },
  { name: "Tools & Accessories", image: "/products/tools.png", description: "Screwdrivers, pliers, fuses, and connectors" },
  { name: "Other Electrical Accessories", image: "/products/others.png", description: "MCBs, relays, conduit pipes, and more" },
];

const whatsappNumber = "919125565573"; // Tumhara WhatsApp number

export default function Products() {
  return (
    <section className="px-4 sm:px-6 md:px-12 py-12 bg-gray-50">
      <SectionTitle title="Our Products" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {products.map((product, index) => {
          const waMessage = encodeURIComponent(`Hello! I want to order ${product.name}. Please share rates and availability.`);
          const waLink = `https://wa.me/${whatsappNumber}?text=${waMessage}`;

          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col"
            >
              <div className="relative w-full h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-blue-900">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-2 flex-1">{product.description}</p>
                <div className="mt-4 flex gap-2">
                  <a
                    href={`tel:${whatsappNumber}`}
                    className="flex-1 text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Call Now
                  </a>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer/>
    </section>
  );
}
