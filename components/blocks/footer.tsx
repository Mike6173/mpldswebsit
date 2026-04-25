"use client";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9">
              <Image src="/mplds.png" alt="MPLDS Logo" fill className="object-contain" />
            </div>
            <span className="text-white font-bold text-lg">
              MPL<span className="text-blue-400">DS</span>
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            {["Home", "Services", "About", "Work", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {item}
              </button>
            ))}
          </nav>

          <p className="text-gray-600 text-sm text-center">
            &copy; {new Date().getFullYear()} MPL Digital Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
