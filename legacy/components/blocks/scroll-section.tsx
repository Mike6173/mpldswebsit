"use client";

import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { motion } from "framer-motion";

export function ScrollSection() {
  return (
    <section id="work" className="bg-black">
      <ContainerScroll
        titleComponent={
          <div className="text-center px-4">
            <span className="inline-block px-4 py-1.5 rounded-full border border-navy/40 bg-navy/10 text-navy-light text-sm font-medium tracking-wide mb-6">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Build.{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Automate.
              </span>{" "}
              Scale.
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Digital marketing, automation, and growth systems built for modern businesses.
            </p>
          </div>
        }
      >
        <div className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80"
            alt="Digital marketing dashboard mockup"
            fill
            className="object-cover object-top rounded-xl"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl" />
          <motion.div
            className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
          >
            {[
              { label: "Avg. ROI Increase", value: "340%" },
              { label: "Leads Generated", value: "50K+" },
              { label: "Clients Scaled", value: "120+" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
                whileHover={{ scale: 1.05, borderColor: "rgba(59,130,246,0.4)" }}
                transition={{ duration: 0.2 }}
                className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center"
              >
                <div className="text-blue-400 font-bold text-xl md:text-2xl">{stat.value}</div>
                <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ContainerScroll>
    </section>
  );
}
