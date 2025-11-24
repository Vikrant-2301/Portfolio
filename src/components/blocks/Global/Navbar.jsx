"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import MobileNav from "@/components/MobileNav/page";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Digital", href: "/web-dev" },
  { name: "Archive", href: "/archive" },
  { name: "Contact", href: "/contact" },
];

// Utility component for the live clock
const LiveClock = () => {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <span className="opacity-0">00:00</span>;
  return <span>{time} IST</span>;
};

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll state for aesthetic changes
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  // Scroll Progress Bar Logic
  const scrollProgress = useTransform(scrollY, [0, 5000], ["0%", "100%"]);
  // Note: 5000 is arbitrary estimate; for precise page progress we'd need document height,
  // but for a visual indicator this usually suffices or we can use useScroll({ target: container }) context.
  // A simpler full-page progress:
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-white/10 py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center relative">
          {/* --- LEFT: LOGO & STATUS --- */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="relative z-[100] group flex flex-col leading-none"
            >
              <span className="text-xl md:text-2xl font-black tracking-tighter text-white mix-blend-difference">
                VIKRANT.
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-400 group-hover:text-white transition-colors">
                Portfolio
              </span>
            </Link>

            {/* Desktop Status Indicator */}
            <div className="hidden md:flex items-center gap-2 border-l border-white/20 pl-6 mix-blend-difference">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-mono uppercase text-gray-400">
                Available
              </span>
            </div>
          </div>

          {/* --- CENTER: NAVIGATION LINKS (Desktop) --- */}
          <div className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`group relative overflow-hidden h-5 flex flex-col justify-center items-center ${
                  pathname === link.href
                    ? "opacity-100"
                    : "opacity-60 hover:opacity-100"
                } transition-opacity duration-300`}
              >
                {/* Animation Wrapper */}
                <div className="relative flex flex-col items-center transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[120%]">
                  <span className="text-sm font-medium uppercase tracking-widest text-white">
                    {link.name}
                  </span>
                  {/* Duplicate text for slide-up effect */}
                  <span className="absolute top-[120%] left-0 text-sm font-medium uppercase tracking-widest text-white">
                    {link.name}
                  </span>
                </div>

                {/* Active State Dot */}
                {pathname === link.href && (
                  <motion.div
                    layoutId="active-dot"
                    className="absolute -bottom-1 w-1 h-1 bg-white rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* --- RIGHT: TIME & MOBILE TRIGGER --- */}
          <div className="flex items-center gap-6">
            <div className="hidden md:block text-right font-mono text-xs text-gray-400 mix-blend-difference">
              <LiveClock />
              <div className="text-[9px] uppercase tracking-widest opacity-60">
                Local Time
              </div>
            </div>

            {/* Mobile Nav Integration */}
            <div className="md:hidden relative z-[100]">
              <MobileNav />
            </div>
          </div>

          {/* --- BOTTOM PROGRESS BAR --- */}
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent origin-left"
          />
        </div>
      </motion.nav>
    </>
  );
}
