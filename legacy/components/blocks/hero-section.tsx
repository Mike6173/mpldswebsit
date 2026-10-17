"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const StarshipShader = dynamic(
  () => import("@/components/ui/starship-shader").then((m) => m.StarshipShader),
  { ssr: false }
);

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* 3D Shader Background */}
      <div className="absolute inset-0 z-0">
        {mounted && <StarshipShader />}
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-navy/40 bg-navy/10 text-white text-sm font-medium tracking-wide backdrop-blur-sm">
            Digital Marketing Agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          MPL{" "}
          <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
            Digital
          </span>
          <br />Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed"
        >
          We build digital systems that scale businesses online.
          Marketing, automation, and growth — engineered for results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.06, backgroundColor: "#3b82f6" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="px-8 py-3.5 bg-navy text-white font-semibold rounded-full cursor-pointer shadow-lg shadow-navy/25"
          >
            Get Started
          </motion.button>
          <motion.button
            onClick={() => {
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.06, borderColor: "rgba(255,255,255,0.4)", backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="px-8 py-3.5 border border-white/20 bg-white/5 text-white font-semibold rounded-full cursor-pointer backdrop-blur-sm"
          >
            View Services
          </motion.button>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
