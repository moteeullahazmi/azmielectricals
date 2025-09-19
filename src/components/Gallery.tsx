import Image from "next/image";
import SectionTitle from "./SectionTitle";

const galleryImages = [
  { src: "/shop1.jpg", alt: "Shop Outside" },
  { src: "/shop2.jpg", alt: "Shop Inside" },
  { src: "/shop3.jpg", alt: "Products Display" },
  // add more images if needed
];

export default function Gallery() {
  return (
    <section className="px-4 sm:px-6 md:px-12 py-12 bg-gray-50">
      <SectionTitle title="Gallery" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {galleryImages.map((img, index) => (
          <div key={index} className="w-full aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
