"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = ["Home", "Services", "About", "Work", "Contact"];

export default function NavHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (item: string) => {
    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#080c14]/90 backdrop-blur-xl border-b border-white/8 shadow-lg shadow-black/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 h-16">
          {/* Logo */}
          <button onClick={() => scrollTo("Home")} className="flex items-center gap-2.5 cursor-pointer">
            <div className="relative w-9 h-9 flex-shrink-0">
              <Image src="/mplds.png" alt="MPLDS" fill className="object-contain" priority />
            </div>
            <span className="text-white font-bold text-base tracking-tight">
              MPL<span className="text-blue-400">DS</span>
            </span>
          </button>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 cursor-pointer"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            onClick={() => scrollTo("Contact")}
            className="hidden md:block bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 cursor-pointer"
          >
            Get Started
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-[#080c14]/98 backdrop-blur-xl border-b border-white/10 px-5 py-4 flex flex-col gap-1"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-left w-full px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium transition-colors cursor-pointer"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollTo("Contact")}
              className="mt-2 w-full py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-colors cursor-pointer"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
