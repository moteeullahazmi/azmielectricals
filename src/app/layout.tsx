import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Azmi Electricals",
  description: "Electrical wholesales and retailers best shop in Azamgarh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
