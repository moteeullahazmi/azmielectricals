import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Azmi Electricals - Bindra Bazar, Azamgarh",
  description:
    "Professional Electrical Shop in Azamgarh since 1982. Trusted for Wholesale & Retail Electrical Goods.",
  keywords: [
    "Electrical Shop Azamgarh",
    "Azmi Electricals",
    "Bindra Bazar Electricals",
    "Wholesale Electricals",
    "Retail Electrical Goods",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
