"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Volume2, VolumeX } from "lucide-react";

// Page Component required by react-pageflip
const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage bg-white shadow-lg border border-gray-200" ref={ref}>
      <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-[#f5f5f5]">
        <Image
          src={props.imagePath}
          alt={`Page ${props.number}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain"
          priority={props.number <= 4} // Preload first few pages
          quality={75}
        />
        {/* Subtle shadow overlay for realism */}
        <div className={`absolute inset-0 pointer-events-none ${props.number % 2 === 0 ? 'bg-gradient-to-r from-transparent to-black/5' : 'bg-gradient-to-l from-transparent to-black/5'}`}></div>
      </div>
    </div>
  );
});
Page.displayName = "Page";

export default function FlipbookViewer() {
  const flipBookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(24); // 24 images
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const containerRef = useRef(null);
  const audioRef = useRef(null);

  // Generate image paths from P1_2.webp to P1_25.webp
  const images = Array.from({ length: 24 }, (_, i) => `/assets/portfolio/PORTFOLIO/P1_${i + 2}.webp`);

  useEffect(() => {
    // We can use a simple generic paper flip sound, or just rely on the visual effect.
    // For now, we will toggle the sound state but since we don't have a sound file, 
    // we will simulate the logic.
    if (typeof window !== "undefined") {
      audioRef.current = new Audio('https://www.soundjay.com/misc/sounds/page-flip-01a.mp3');
    }
  }, []);

  const playFlipSound = useCallback(() => {
    if (soundEnabled && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  }, [soundEnabled]);

  const onPage = (e) => {
    setCurrentPage(e.data);
    playFlipSound();
  };

  const nextButtonClick = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext();
    }
  };

  const prevButtonClick = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Handle escape key for fullscreen
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`flex flex-col relative ${isFullscreen ? 'bg-black/95 h-screen w-screen p-4 md:p-8 z-50 fixed inset-0' : 'h-full w-full'}`}
    >
      {/* Top Toolbar */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10 z-10">
        <span className="text-sm text-gray-300 font-medium">Portfolio Flipbook</span>
        
        <div className="flex items-center gap-4">
          <span className="text-xs text-gray-400">
            Page {currentPage + 1} of {totalPages}
          </span>
          <button 
            onClick={() => setSoundEnabled(!soundEnabled)} 
            className="text-gray-400 hover:text-white transition-colors"
            title="Toggle Sound"
          >
            {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
          <button 
            onClick={toggleFullscreen} 
            className="text-gray-400 hover:text-white transition-colors"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
          </button>
        </div>
      </div>

      {/* Book Container */}
      <div className="flex-1 overflow-hidden bg-[#121212] flex items-center justify-center p-2 sm:p-4 relative custom-scrollbar">
        
        {/* Left Arrow */}
        <button 
          onClick={prevButtonClick}
          disabled={currentPage === 0}
          className="absolute left-2 md:left-8 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all disabled:opacity-30 disabled:hover:bg-white/10"
        >
          <ChevronLeft size={28} />
        </button>

        <div className="w-full h-full flex items-center justify-center">
          <HTMLFlipBook
            width={550}
            height={733}
            size="stretch"
            minWidth={300}
            maxWidth={800}
            minHeight={400}
            maxHeight={1000}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            onFlip={onPage}
            className="demo-book mx-auto shadow-2xl"
            ref={flipBookRef}
            usePortrait={true} // Switches to single page mode on mobile
          >
            {images.map((imgPath, index) => (
              <Page key={index} number={index + 1} imagePath={imgPath} />
            ))}
          </HTMLFlipBook>
        </div>

        {/* Right Arrow */}
        <button 
          onClick={nextButtonClick}
          disabled={currentPage >= totalPages - 1} // Actually pageFlip triggers differently based on single/double page, but this is a good estimate
          className="absolute right-2 md:right-8 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all disabled:opacity-30 disabled:hover:bg-white/10"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #1a1a1a; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #555; }
        /* Style for HTMLFlipbook inner wrapper if needed */
        .stf__wrapper { border-radius: 8px; overflow: hidden; }
      `}} />
    </div>
  );
}
