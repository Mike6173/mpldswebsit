"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";

const teamMembers = [
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    name: "Michael Lopez",
    role: "Founder & CEO",
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    name: "Sophia Reed",
    role: "Head of Paid Media",
  },
  {
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    name: "James Carter",
    role: "Lead Developer",
  },
  {
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    name: "Aria Thompson",
    role: "SEO Strategist",
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    name: "Derek Nguyen",
    role: "AI Automation Lead",
  },
  {
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    name: "Leila Hassan",
    role: "Creative Director",
  },
];

export default function TeamSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 flex max-w-5xl flex-col items-center px-6 text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wide mb-6">
            The Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Built by{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experts
            </span>
          </h2>
          <p className="max-w-2xl text-gray-400 text-lg">
            A dedicated team of marketers, developers, and data scientists — all focused on one thing: growing your business.
          </p>
        </motion.div>

        <div className="relative w-full">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-black to-transparent" />

          <Marquee className="[--gap:1.5rem]" pauseOnHover>
            {teamMembers.map((member) => (
              <div
                className="group flex w-56 shrink-0 flex-col"
                key={member.name}
              >
                <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-gray-900 border border-white/10 group-hover:border-blue-500/40 transition-colors duration-300">
                  <Image
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    fill
                    src={member.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 w-full p-3">
                    <h3 className="font-semibold text-white text-sm">{member.name}</h3>
                    <p className="text-blue-400 text-xs mt-0.5">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-20 max-w-3xl px-6 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="mb-8 font-medium text-xl text-white leading-relaxed">
            &ldquo;MPL Digital Services didn&apos;t just run our ads — they built us a complete growth engine. In 6 months we 4x&apos;d revenue.&rdquo;
          </p>
          <div className="flex flex-col items-center gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-blue-500/40">
              <Image
                alt="Client"
                className="h-full w-full object-cover"
                fill
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold text-white">Robert Brofsky</p>
              <p className="text-gray-500 text-sm">Director · Brofsky Marketing</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
