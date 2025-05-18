import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/blocks/Global/Navbar";
import Footer from "@/components/blocks/Global/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vikrant Portfolio",
  description: "My works",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* Portal target for mobile navigation */}
        <div id="mobile-nav-root"></div>
      </body>
    </html>
  );
}