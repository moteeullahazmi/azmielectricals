import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductsGrid from "@/components/ProductsGrid";
import Gallery from "@/components/Gallery";
import GoogleReviews from "@/components/GoogleReviews";
import Map from "@/components/Map";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <GoogleReviews />
      <Features />
      <ProductsGrid />
      <Gallery />
      <Map />
      <Footer/>
    </>
  );
}
