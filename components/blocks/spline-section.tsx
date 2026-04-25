"use client";

import React from "react";
import { motion } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

export function SplineSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full min-h-[500px] rounded-3xl bg-black/80 border border-white/10 overflow-hidden">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

          <div className="flex flex-col md:flex-row h-full min-h-[500px]">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center"
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wide mb-6 w-fit">
                AI + Automation
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                AI + Automation{" "}
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Driven Marketing
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-8">
                We leverage cutting-edge AI systems and marketing automation to put your business growth on autopilot. From intelligent ad optimization to automated lead nurturing workflows — we build systems that scale without limits.
              </p>
            </motion.div>

            {/* Right 3D Robot */}
            <div className="flex-1 relative min-h-[400px]">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
