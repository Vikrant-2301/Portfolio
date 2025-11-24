"use client";
import { useState, useEffect } from "react";
import Banner from "@/components/blocks/Home/Banner";
import EnhancedAbout from "@/components/blocks/Home/about";
// MaterialLibrary import removed
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
    <div className="relative min-h-screen w-full">
      <BlueprintLoader onComplete={() => setIsLoaded(true)} />

      {/* Main Content Wrapper */}
      <div
        className={`relative w-full overflow-x-hidden bg-black text-white transition-opacity duration-1000 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* 1. Hero Banner */}
        <Banner />

        {/* 2. The Architect (About) */}
        <EnhancedAbout />

        {/* 3. Selected Projects (Materiality removed) */}
        <HorizontalGallery />
      </div>
    </div>
  );
}

export default HomePage;
