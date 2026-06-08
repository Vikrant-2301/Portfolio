import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/blocks/Global/Navbar";
import Footer from "@/components/blocks/Global/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { personalMeta } from "@/lib/data"; // Import data
import ScrollRibbon from "@/components/ui/ScrollRibbon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: `${personalMeta.name} | Portfolio`,
    template: `%s | ${personalMeta.name}`,
  },
  description: personalMeta.description,
  keywords: ["Architecture", "Web Development", "Next.js", "Design", "Portfolio", "Vikrant Yadav"],
  authors: [{ name: personalMeta.name }],
  openGraph: {
    title: personalMeta.name,
    description: personalMeta.description,
    url: 'https://vikrant-yadav.site',
    siteName: personalMeta.name,
    images: [
      {
        url: '/assets/og-image.png', // Add a 1200x630px image to public/assets
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#050505] text-white`}>
        <div className="grain-overlay" />
        <SmoothScroll>
          <ScrollRibbon />
          <Navbar />
          {/* UPDATED: Added bg-[#050505] here to ensure it covers the footer */}
          <main className="relative z-10 bg-[#050505] shadow-2xl">{children}</main>
          <Footer />
        </SmoothScroll>
        <div id="mobile-nav-root"></div>
      </body>
    </html>
  );
}