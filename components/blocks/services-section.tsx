"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Share2,
  Target,
  Search,
  BarChart3,
  Bot,
  Database,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description:
      "High-converting websites and web apps built with modern tech. Fast, responsive, and designed to turn visitors into customers.",
    color: "from-blue-500/20 to-blue-600/10",
    border: "border-blue-500/20 hover:border-blue-500/50",
    iconColor: "text-blue-400",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Full-service social media management across all platforms. Content creation, scheduling, community management, and growth.",
    color: "from-purple-500/20 to-purple-600/10",
    border: "border-purple-500/20 hover:border-purple-500/50",
    iconColor: "text-purple-400",
  },
  {
    icon: Target,
    title: "Meta Ads (Facebook / Instagram)",
    description:
      "Data-driven Meta advertising campaigns built to maximize ROAS. Targeting, creative testing, and full funnel optimization.",
    color: "from-pink-500/20 to-pink-600/10",
    border: "border-pink-500/20 hover:border-pink-500/50",
    iconColor: "text-pink-400",
  },
  {
    icon: BarChart3,
    title: "Google Ads",
    description:
      "Search, display, shopping, and YouTube campaigns managed by certified experts. Every dollar tracked and optimized for ROI.",
    color: "from-yellow-500/20 to-yellow-600/10",
    border: "border-yellow-500/20 hover:border-yellow-500/50",
    iconColor: "text-yellow-400",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Technical SEO, on-page optimization, and link building strategies that drive organic traffic and rank you above competitors.",
    color: "from-green-500/20 to-green-600/10",
    border: "border-green-500/20 hover:border-green-500/50",
    iconColor: "text-green-400",
  },
  {
    icon: Database,
    title: "Data Projects",
    description:
      "Excel automation, Python scripting, SQL databases, and Power BI dashboards. Turn your data into business intelligence.",
    color: "from-cyan-500/20 to-cyan-600/10",
    border: "border-cyan-500/20 hover:border-cyan-500/50",
    iconColor: "text-cyan-400",
  },
  {
    icon: Bot,
    title: "AI Consulting & Automation",
    description:
      "Custom AI workflows, chatbots, and automation systems that save time, reduce costs, and scale your business operations.",
    color: "from-blue-400/20 to-indigo-600/10",
    border: "border-indigo-500/20 hover:border-indigo-500/50",
    iconColor: "text-indigo-400",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wide mb-6">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Full-Stack{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Services
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need to dominate your market online — under one roof.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`group relative p-6 rounded-2xl border bg-gradient-to-br ${service.color} ${service.border} backdrop-blur-sm transition-all duration-300 cursor-default`}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/[0.02]" />

                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 mb-4 ${service.iconColor}`}>
                  <Icon size={22} />
                </div>

                <h3 className="text-white font-semibold text-lg mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span>Learn more</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </motion.div>
            );
          })}

          {/* Wide CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: services.length * 0.08 }}
            className="md:col-span-2 lg:col-span-1 p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-white font-bold text-xl mb-3">Ready to scale?</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Let&apos;s build a custom strategy for your business. Free consultation, no commitment.
              </p>
            </div>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 cursor-pointer hover:scale-[1.02]"
            >
              Start a Project
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
