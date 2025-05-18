"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "#about" },
  { title: "Activities", href: "#activities" },
  { title: "Must Visit", href: "#must-visit" },
  { title: "Gallery", href: "#gallery" },
  { title: "Contact", href: "#contact" },
];

function MobileNav() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (index) => {
    setActiveIndex(index);
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  const closeSheet = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button aria-label="Open Navigation Menu">
          <HamburgerMenuIcon className="w-6 h-6 mx-2" />
        </button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col h-full">
          {/* Scrollable Navigation Section */}
          <div className="flex flex-col my-auto justify-center items-center w-full px-4 space-y-4 overflow-y-auto">
            {navItems.map((item, index) => (
              <div key={index} className="w-full">
                <div
                  className={`py-2 px-4 text-left w-full text-xl cursor-pointer ${
                    activeIndex === index
                      ? "text-amber-950 font-bold"
                      : "text-amber-800"
                  }`}
                  onClick={() => handleClick(index)}
                  aria-expanded={openSubMenuIndex === index}
                >
                  {item.href ? (
                    <Link href={item.href} onClick={closeSheet}>
                      {item.title}
                    </Link>
                  ) : (
                    item.title
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <footer className="mt-auto text-center border-t py-2 text-sm text-gray-600">
            © {new Date().getFullYear()} All Rights Reserved
          </footer>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
