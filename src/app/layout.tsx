
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";


export const metadata = {
  title: "Azmi Electricals - Bindra Bazar, Azamgarh",
  description:
    "Professional Electrical Shop in Azamgarh since 1982. Trusted for Wholesale & Retail Electrical Goods.",
  keywords: [
    "Electrical Shop Azamgarh",
    "Azmi Electricals",
    "Bindra Bazar Electricals",
    "Wholesales Electricals",
    "Retail Electrical Goods",
    "Retail Shop",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 antialiased">
        <Navbar />
        <main>{children}</main>
        <SpeedInsights/>
      </body>
    </html>
  );
}
