"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion"; // Import AnimatePresence
import Banner from "@/components/blocks/Home/Banner";
import EnhancedAbout from "@/components/blocks/Home/about";
import HorizontalGallery from "@/components/blocks/Home/HorizontalGallery";
import BlueprintLoader from "@/components/ui/BlueprintLoader";

function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen w-full bg-[#050505]">
      {/* 1. Loader Logic Fixed: Wraps in AnimatePresence and checks !isLoaded */}
      <AnimatePresence mode="wait">
        {!isLoaded && <BlueprintLoader onComplete={() => setIsLoaded(true)} />}
      </AnimatePresence>

      {/* 2. Main Content */}
      <div
        className={`relative w-full overflow-x-hidden transition-opacity duration-1000 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Banner />
        <EnhancedAbout />
        <HorizontalGallery />
      </div>
    </div>
  );
}

export default HomePage;
