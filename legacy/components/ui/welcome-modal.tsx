"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function WelcomeModal() {
  const [open, setOpen] = useState(false);
  const [neverShow, setNeverShow] = useState(false);

  useEffect(() => {
    const perm = localStorage.getItem("mpl_welcome_dismissed");
    if (perm === "1") return;
    const seen = sessionStorage.getItem("mpl_welcome_seen");
    if (seen === "1") return;
    const timer = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = (permanent?: boolean) => {
    setOpen(false);
    sessionStorage.setItem("mpl_welcome_seen", "1");
    if (permanent || neverShow) localStorage.setItem("mpl_welcome_dismissed", "1");
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-[100]"
            onClick={() => dismiss()}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed z-[101] inset-x-4 bottom-4 sm:inset-auto sm:bottom-6 sm:right-6 sm:max-w-sm bg-white rounded border border-border shadow-xl p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Welcome to MPL Digital Services"
          >
            <button
              onClick={() => dismiss()}
              className="absolute top-4 right-4 p-1.5 rounded hover:bg-muted transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>

            <p className="text-xl font-bold text-foreground mb-1">
              👋 Thanks for stopping by
            </p>
            <p className="text-sm text-brand font-medium mb-4">
              Welcome to MPL Digital Services.
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              We build digital systems that scale businesses — web design, data solutions, and
              social media marketing. Take a look around.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              If you like what you see, head over to the contact page and say hello — we'd love to
              hear about your project.
            </p>

            {/* Helper card */}
            <div className="bg-muted rounded p-4 mb-5 flex items-start gap-3">
              <ExternalLink className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                Need something specific? Reach out on{" "}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:underline"
                >
                  LinkedIn
                </a>{" "}
                or email{" "}
                <a
                  href="mailto:mpldigitalservices@gmail.com"
                  className="text-brand hover:underline"
                >
                  mpldigitalservices@gmail.com
                </a>
              </p>
            </div>

            <Link
              href="/contact"
              onClick={() => dismiss()}
              className="block w-full text-center px-4 py-3 bg-brand text-white text-sm font-semibold rounded hover:bg-brand-dark transition-colors duration-200 mb-3"
            >
              Visit Contact Page
            </Link>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={neverShow}
                onChange={(e) => setNeverShow(e.target.checked)}
                className="w-4 h-4 rounded border-border accent-brand"
              />
              <span className="text-xs text-muted-foreground">Don&apos;t show again</span>
            </label>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
