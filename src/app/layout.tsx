import type { Metadata, Viewport } from "next";
import { Archivo_Black, Arimo, Red_Hat_Display } from "next/font/google";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
});

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Grow Medico | Digital Growth for Hospitals, Clinics & Doctors",
  description:
    "Grow Medico, a Yantra Media company, builds websites, Google Business Profiles, SEO/GEO/AEO and lead generation for hospitals, clinics and doctors.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${redHatDisplay.variable} ${arimo.variable} ${archivoBlack.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
