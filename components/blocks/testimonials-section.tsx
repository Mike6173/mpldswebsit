"use client";

import React from "react";
import { motion } from "motion/react";
import { TestimonialsColumn, testimonials } from "@/components/ui/testimonials-columns-1";

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsSection() {
  return (
    <section className="bg-black py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 via-transparent to-transparent pointer-events-none" />

      <div className="container z-10 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wide mb-6">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 leading-tight">
            Results That{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Speak
            </span>
          </h2>
          <p className="text-center text-gray-400 text-lg">
            Real results from real businesses who trusted MPLDS to grow their digital presence.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
