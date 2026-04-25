"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const NAV_ITEMS = ["Home", "Services", "About", "Work", "Contact"];

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const scrollTo = (item: string) => {
    const id = item.toLowerCase();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-black/60 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10">
          <Image
            src="/mplds.png"
            alt="MPL Digital Services Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <span className="text-white font-bold text-lg tracking-tight hidden sm:block">
          MPL<span className="text-blue-400">DS</span>
        </span>
      </div>

      <ul
        className="relative mx-auto flex w-fit rounded-full border border-white/20 bg-white/5 backdrop-blur-sm p-1"
        onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      >
        {NAV_ITEMS.map((item) => (
          <Tab key={item} setPosition={setPosition} onClick={() => scrollTo(item)}>
            {item}
          </Tab>
        ))}
        <Cursor position={position} />
      </ul>

      <button
        onClick={() => {
          const el = document.getElementById("contact");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        className="hidden md:block bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 cursor-pointer"
      >
        Get Started
      </button>
    </header>
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
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white/80 hover:text-white mix-blend-difference md:px-4 md:py-2 md:text-sm transition-colors"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: { left: number; width: number; opacity: number } }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-white/20 md:h-9"
    />
  );
};

export default NavHeader;
