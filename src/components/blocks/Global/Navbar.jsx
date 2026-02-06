"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowUpRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "/about", id: "01" },
  { name: "Work", href: "/work", id: "02" },
  { name: "Digital", href: "/web-dev", id: "03" },
  { name: "Archive", href: "/archive", id: "04" },
  { name: "Contact", href: "/contact", id: "05" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // STRICT SCROLL LOCK
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100dvh"; // Lock to dynamic viewport height
      document.body.style.touchAction = "none"; // Disable touch scrolling
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* --- THE HEADER (Floating) --- */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 w-full z-[100] transition-all duration-500",
          scrolled
            ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/10 py-4"
            : "bg-transparent py-8",
        )}
      >
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 relative flex items-center justify-between">
          {/* Identity */}
          <Link
            href="/"
            className="group flex items-center gap-3 relative z-50"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-white text-black flex items-center justify-center font-bold text-xs md:text-sm tracking-tighter group-hover:scale-90 transition-transform duration-300 rounded-sm">
              VY
            </div>
            <div className="hidden md:flex flex-col leading-none">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white">
                Vikrant.
              </span>
              <span className="text-[9px] text-white/80 font-mono uppercase">
                Portfolio '26
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 lg:gap-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative py-2"
                >
                  <span
                    className={cn(
                      "text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300",
                      isActive
                        ? "text-white"
                        : "text-white/60 group-hover:text-white",
                    )}
                  >
                    {link.name}
                  </span>
                  <span
                    className={cn(
                      "absolute -left-3 top-1/2 -translate-y-1/2 text-white/0 text-xs font-light transition-all duration-300 group-hover:text-white group-hover:-left-2",
                      isActive && "text-white -left-2",
                    )}
                  >
                    [
                  </span>
                  <span
                    className={cn(
                      "absolute -right-3 top-1/2 -translate-y-1/2 text-white/0 text-xs font-light transition-all duration-300 group-hover:text-white group-hover:-right-2",
                      isActive && "text-white -right-2",
                    )}
                  >
                    ]
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-6 z-50 relative">
            <div
              className={cn(
                "hidden lg:flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest transition-opacity duration-300",
                scrolled ? "opacity-100" : "opacity-0",
              )}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-white/50">Available</span>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="group flex items-center gap-3 text-white focus:outline-none"
            >
              <span className="hidden md:block text-[10px] font-bold uppercase tracking-[0.2em] group-hover:opacity-70 transition-opacity">
                Menu
              </span>
              <div className="flex flex-col items-end gap-[4px] group-hover:gap-[6px] transition-all duration-300">
                <span className="w-6 h-[1px] bg-white group-hover:w-4 transition-all duration-300" />
                <span className="w-4 h-[1px] bg-white group-hover:w-6 transition-all duration-300" />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* --- FULLSCREEN OVERLAY (Responsive Dashboard) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            }}
            animate={{
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            }}
            exit={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            // IMPORTANT: h-[100dvh] handles mobile browser bars correctly
            className="fixed inset-0 z-[200] bg-[#050505] flex flex-col h-[100dvh] w-screen overflow-hidden"
          >
            {/* 1. Header Area (Shrinks on small screens) */}
            <div className="flex-none h-16 md:h-24 flex justify-between items-center px-6 md:px-12 border-b border-white/10">
              <span className="text-xl font-bold text-white tracking-tighter">
                Vikrant.
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group"
              >
                <span className="text-xs uppercase tracking-widest hidden md:block">
                  Close
                </span>
                <X
                  size={24}
                  className="group-hover:rotate-90 transition-transform duration-300"
                />
              </button>
            </div>

            {/* 2. Navigation Area (FLEX GROW + JUSTIFY EVENLY) */}
            <div className="flex-1 flex flex-col justify-center px-6 md:px-24 min-h-0">
              {/* min-h-0 is crucial for flex children scrolling/fitting issues */}
              <div className="flex flex-col h-full justify-evenly">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group w-full flex items-center justify-between border-b border-white/5 hover:border-white/20 transition-all duration-300 py-1 md:py-2"
                    >
                      <div className="flex items-baseline gap-4 md:gap-12">
                        <span className="text-[10px] md:text-xs font-mono text-gray-700 group-hover:text-white transition-colors">
                          /{link.id}
                        </span>
                        {/* FLUID TEXT: Uses viewport width (vw) but capped with clamp for perfect scaling */}
                        <span className="text-[8vw] md:text-[5vw] xl:text-[4vw] font-light uppercase tracking-tighter text-gray-500 group-hover:text-white group-hover:font-medium transition-all duration-300 leading-none">
                          {link.name}
                        </span>
                      </div>
                      <ArrowUpRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-white w-4 h-4 md:w-8 md:h-8" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 3. Footer Area (Compact on mobile) */}
            <div className="flex-none h-20 md:h-28 px-6 md:px-12 border-t border-white/10 bg-[#0a0a0a] flex items-center justify-between gap-4">
              {/* CV Button */}
              <a
                href="/assets/VIKRANT CV.pdf"
                download
                className="group relative flex-1 md:flex-none md:w-auto bg-white text-black h-10 md:h-14 px-6 md:px-8 rounded-full flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                <span className="relative z-10 font-bold uppercase tracking-widest text-[10px] md:text-sm flex items-center gap-2">
                  <Download size={14} className="md:w-4 md:h-4" />
                  Resume
                </span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </a>

              <div className="hidden md:flex items-center gap-8 text-white/30 font-mono text-xs uppercase tracking-widest">
                <span>New Delhi, IN</span>
                <span>© 2026</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
