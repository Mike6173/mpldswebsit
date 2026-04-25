"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import * as Avatar from "@radix-ui/react-avatar";

export function RecentProjectSection() {
  return (
    <section id="work" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-2xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Recent{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Project
            </span>
          </h2>
        </motion.div>

        {/* Gradient border wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4 }}
          className="relative p-px rounded-3xl"
          style={{
            background: "linear-gradient(135deg, rgba(37,99,235,0.5) 0%, rgba(139,92,246,0.3) 40%, rgba(6,182,212,0.4) 100%)",
          }}
        >
          {/* Card inner */}
          <div
            className="relative rounded-3xl p-8 md:p-10 overflow-hidden"
            style={{ background: "rgba(8,12,20,0.92)", backdropFilter: "blur(20px)" }}
          >
            {/* Inner glow top */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

            {/* Floating orb inside card */}
            <div
              className="absolute -top-20 -right-20 w-56 h-56 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)", filter: "blur(30px)" }}
            />

            {/* Project header row */}
            <div className="flex items-start justify-between gap-4 flex-wrap mb-5">
              <div>
                <p className="text-blue-400/70 text-xs uppercase tracking-widest font-medium mb-1">
                  Web Design &amp; Development
                </p>
                <h3 className="text-2xl font-bold text-white">One Source Solutions</h3>
              </div>
              <a
                href="https://one-source-solutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-300 text-sm font-medium hover:bg-blue-500/20 hover:border-blue-400/60 hover:text-blue-200 transition-all duration-200 cursor-pointer flex-shrink-0"
              >
                one-source-solutions.com
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-6">
              A full website built for One Source Solutions Cleaning Services, serving the Long Island area. Designed to build trust, rank locally, and convert visitors into cleaning service bookings.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["Web Design", "Local SEO", "Lead Generation", "Mobile Responsive"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

            {/* Stars */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-7">
              &ldquo;It&apos;s Perfect. Thank you so much!&rdquo;
            </p>

            {/* Reviewer row */}
            <div className="flex items-center gap-3">
              <Avatar.Root className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <Avatar.Fallback className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600/40 to-violet-600/40 border border-blue-500/40 text-blue-200 font-bold text-sm">
                  B
                </Avatar.Fallback>
              </Avatar.Root>
              <div>
                <p className="text-white font-semibold text-sm">Brianna F.</p>
                <p className="text-gray-500 text-xs">One Source Solutions · Long Island, NY</p>
              </div>
              <div className="ml-auto">
                <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-medium">
                  Verified Client
                </span>
              </div>
            </div>

            {/* Inner glow bottom */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
