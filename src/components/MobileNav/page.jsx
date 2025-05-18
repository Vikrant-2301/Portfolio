"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";
import { createPortal } from "react-dom";
import {
  HamburgerMenuIcon,
  Cross1Icon,
  ChevronDownIcon,
} from "@radix-ui/react-icons";

// Navigation data
const currentCompetitions = [
  {
    title: "The Social Hub: Reimagining Community Spaces",
    href: "/competitions/socialhub",
    isLive: true,
  },
];

const pastCompetitions = [
  {
    title: "ARCHIVEDA: Design Beyond Books",
    href: "/competitions/archiveda",
  },
  {
    title: "ARCHITOPIA: Architect's Dream House",
    href: "/competitions/architopia",
  },
];

const featured = [
  {
    title: "ARCHIVEDA: Design Beyond Books",
    href: "/featured/archiveda",
  },
  {
    title: "ARCHITOPIA: Architect's Dream House",
    href: "/featured/architopia",
  },
];

const more = [
  { title: "Certificate", href: "/competitions/get-certificate" },
  { title: "Gallery", href: "/gallery" },
  { title: "Career", href: "/career" },
];

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Resources", href: "/products" },
  {
    title: "Competitions",
    children: [...currentCompetitions, ...pastCompetitions],
  },
  { title: "Featured", children: featured },
  { title: "Contact", href: "/contact" },
  { title: "More", children: more },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const overlayRef = useRef(null);
  const startTouchY = useRef(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      gsap.fromTo(
        overlayRef.current,
        { y: "-100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.6, ease: "power4.out" }
      );
      body.style.overflow = "hidden";
    } else {
      gsap.to(overlayRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power4.inOut",
      });
      body.style.overflow = "";
    }

    return () => {
      body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleExpand = (title) => {
    setExpanded((prev) => (prev === title ? null : title));
  };

  const handleTouchStart = (e) => {
    startTouchY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    const currentY = e.touches[0].clientY;
    const diffY = currentY - startTouchY.current;

    if (diffY > 100) {
      setIsOpen(false);
    }
  };

  const renderOverlay = mounted
    ? createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={overlayRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] text-white flex flex-col overflow-y-auto"
              style={{
                backgroundColor: "rgba(33, 33, 33, 0.8)", // slightly less opaque for blur effect to be visible
                backdropFilter: "blur(15px)", // increase blur to 15px or more
                WebkitBackdropFilter: "blur(15px)", // for Safari support
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="absolute top-5 right-5 text-white"
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  transition={{ duration: 0.4 }}
                >
                  <Cross1Icon width={28} height={28} />
                </motion.div>
              </motion.button>

              {/* Content */}
              <div className="w-full flex flex-col px-4 pt-20 pb-10 sm:px-6 md:px-8 gap-6">
                {navItems.map((item, index) => (
                  <div key={index}>
                    <button
                      onClick={() =>
                        item.children
                          ? toggleExpand(item.title)
                          : setIsOpen(false)
                      }
                      className="w-full text-center text-4xl font-semibold hover:text-blue-400 transition"
                    >
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="w-full flex justify-between items-center"
                        >
                          <span className="text-4xl sm:text-4xl font-semibold">
                            {item.title}
                          </span>
                          {item.children && (
                            <motion.span
                              animate={{
                                rotate: expanded === item.title ? 180 : 0,
                              }}
                              transition={{ duration: 0.3 }}
                              className="ml-2"
                            >
                              <ChevronDownIcon width={28} height={28} />
                            </motion.span>
                          )}
                        </Link>
                      ) : (
                        <div className="flex justify-between items-center">
                          <span className="text-4xl sm:text-4xl font-semibold">
                            {item.title}
                          </span>
                          {item.children && (
                            <motion.span
                              animate={{
                                rotate: expanded === item.title ? 180 : 0,
                              }}
                              transition={{ duration: 0.3 }}
                              className="ml-2"
                            >
                              <ChevronDownIcon width={28} height={28} />
                            </motion.span>
                          )}
                        </div>
                      )}
                    </button>

                    <AnimatePresence>
                      {item.children && expanded === item.title && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-2 mt-2 pl-2 flex flex-col gap-4 max-h-60 overflow-y-auto border-l border-white/20"
                        >
                          {item.children.map((child, i) => (
                            <Link
                              key={i}
                              href={child.href}
                              onClick={() => setIsOpen(false)}
                              className="text-lg sm:text-2xl hover:text-blue-400 transition flex items-center"
                            >
                              {child.title}
                              {child.isLive && (
                                <span className="ml-3 px-2 py-0.5 text-sm bg-red-600 rounded-full">
                                  LIVE
                                </span>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Footer */}
                <p className="mt-8 text-base sm:text-lg text-center text-gray-400">
                  © {new Date().getFullYear()} DiscoverArch. All Rights
                  Reserved.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.getElementById("mobile-nav-root")
      )
    : null;

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        className="text-white"
        whileTap={{ scale: 0.9 }}
      >
        <HamburgerMenuIcon width={28} height={28} />
      </motion.button>

      {renderOverlay}
    </>
  );
}
