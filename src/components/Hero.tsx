import CTAButton from "./CTAButton";
import HeroImageCarousel from "./HeroImageCarousel";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-20 bg-gradient-to-r from-yellow-100 to-blue-50">
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-snug">
          Wholesales and Retailers Top Shop in Azamgarh
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700">
          Since 1982, Azmi Electricals has been trusted for high-quality electrical products in wholesale and retail.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <CTAButton href="tel:+919125565573" color="blue">Call Now</CTAButton>
          <CTAButton href="https://wa.me/919125565573" color="green">WhatsApp</CTAButton>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
          <HeroImageCarousel />
        </div>
      </div>

    </section>
  );
}
