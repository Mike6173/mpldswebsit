"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}
            className="flex items-center gap-3"
          >
            <div className="relative w-9 h-9">
              <Image src="/mplds.png" alt="MPLDS Logo" fill className="object-contain" />
            </div>
            <span className="text-white font-bold text-lg">
              MPL<span className="text-blue-400">DS</span>
            </span>
          </motion.div>

          <motion.nav
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500"
          >
            {["Home", "Services", "About", "Work", "Contact"].map((item) => (
              <motion.button
                key={item}
                onClick={() => {
                  document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ color: "#ffffff" }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.15 }}
                className="cursor-pointer"
              >
                {item}
              </motion.button>
            ))}
          </motion.nav>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}
            className="text-gray-600 text-sm text-center"
          >
            &copy; {new Date().getFullYear()} MPL Digital Services. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
