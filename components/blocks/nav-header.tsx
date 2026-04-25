"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = ["Home", "Services", "About", "Work", "Contact"];

function NavHeader() {
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (item: string) => {
    const el = document.getElementById(item.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 py-4 bg-[#080c14]/80 backdrop-blur-md border-b border-white/5">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="relative w-9 h-9 flex-shrink-0">
            <Image src="/mplds.png" alt="MPL Digital Services Logo" fill className="object-contain" priority />
          </div>
          <span className="text-white font-bold text-base tracking-tight">
            MPL<span className="text-blue-400">DS</span>
          </span>
        </div>

        {/* Desktop pill nav */}
        <ul
          className="relative hidden md:flex w-fit rounded-full border border-white/20 bg-white/5 backdrop-blur-sm p-1"
          onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
        >
          {NAV_ITEMS.map((item) => (
            <Tab key={item} setPosition={setPosition} onClick={() => scrollTo(item)}>
              {item}
            </Tab>
          ))}
          <Cursor position={position} />
        </ul>

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
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[65px] left-0 right-0 z-40 md:hidden bg-[#080c14]/95 backdrop-blur-xl border-b border-white/10 px-5 py-4 flex flex-col gap-1"
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

const Tab = ({
  children,
  setPosition,
  onClick,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<{ left: number; width: number; opacity: number }>>;
  onClick?: () => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ width, opacity: 1, left: ref.current.offsetLeft });
      }}
      className="relative z-10 block cursor-pointer px-4 py-2 text-sm uppercase text-white/80 hover:text-white mix-blend-difference transition-colors"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: { left: number; width: number; opacity: number } }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-9 rounded-full bg-white/20"
    />
  );
};

export default NavHeader;
