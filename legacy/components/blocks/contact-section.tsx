"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/xeevdgbr", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          business: form.business,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", business: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-navy/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="text-center mb-12"
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}
            className="inline-block px-4 py-1.5 rounded-full border border-navy/40 bg-navy/10 text-navy-light text-sm font-medium tracking-wide mb-6"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
          >
            Start Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Project
            </span>
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}
            className="text-gray-400 text-lg"
          >
            Tell us about your business. We&apos;ll put together a custom strategy — no charge.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
        >
          {status === "success" ? (
            <div className="text-center py-10 flex flex-col items-center gap-4">
              <CheckCircle2 className="text-green-400" size={56} />
              <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
              <p className="text-gray-400">
                We&apos;ll be in touch within 24 hours. Looking forward to working with you.
              </p>
              <motion.button
                onClick={() => setStatus("idle")}
                whileHover={{ scale: 1.05, backgroundColor: "#3b82f6" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18 }}
                className="mt-4 px-6 py-2.5 bg-navy text-white rounded-full text-sm font-medium cursor-pointer"
              >
                Send Another Message
              </motion.button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full bg-white/5 border border-white/10 focus:border-navy/60 rounded px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors duration-200 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/10 focus:border-navy/60 rounded px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors duration-200 text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="business" className="block text-sm font-medium text-gray-300 mb-2">
                  Business Name <span className="text-blue-400">*</span>
                </label>
                <input
                  id="business"
                  name="business"
                  type="text"
                  required
                  value={form.business}
                  onChange={handleChange}
                  placeholder="Your Company LLC"
                  className="w-full bg-white/5 border border-white/10 focus:border-navy/60 rounded px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors duration-200 text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message <span className="text-blue-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your business, goals, and what services you're interested in..."
                  className="w-full bg-white/5 border border-white/10 focus:border-navy/60 rounded px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors duration-200 text-sm resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={status !== "loading" ? { scale: 1.02, backgroundColor: "#3b82f6" } : {}}
                whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                transition={{ duration: 0.18 }}
                className="w-full py-4 bg-navy disabled:bg-navy/50 text-white font-semibold rounded cursor-pointer flex items-center justify-center gap-2 text-base"
              >
                {status === "loading" ? (
                  <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Start Your Project
                    <Send size={16} />
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
