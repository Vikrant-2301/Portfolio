"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NavigationItems } from "./NaviagtionItems";
import MobileNav from "@/components/MobileNav/page";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="flex items-center justify-center">
      <div
        className="fixed top-3 z-50 flex justify-between items-center backdrop-blur-md transition-colors duration-500 ease-in-out"
        style={{
          width: "1461px",
          height: "48px",
          marginTop: "2px", // Added margin-top
          paddingLeft: "2rem", // Increased horizontal padding
          paddingRight: "2rem",
          borderRadius: "12px",
          backgroundColor: scrolled ? "rgba(33, 33, 33, 0.7)" : "transparent",
          color: "white",
          letterSpacing: "-0.16px",
          lineHeight: "24px",
        }}
      >
        {/* Logo */}
        <div className="flex space-x-8">
          <Link href="/" className="flex items-center" id="logo">
            <p
              style={{
                color: "white",
                fontWeight: 500,
              }}
            >
              My Portfolio
            </p>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavigationItems />
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex justify-center items-center z-50">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
