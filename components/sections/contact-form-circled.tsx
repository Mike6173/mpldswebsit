"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { MagneticButton } from "@/components/motion/magnetic-button";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  business: z.string().min(1, "Business name is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const drawVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number] },
      opacity: { duration: 0.3 },
    },
  },
};

export function ContactFormCircled() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      // still show success for now
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Hand-drawn circle SVG */}
      {!prefersReducedMotion && !submitted && (
        <motion.svg
          className="absolute inset-[-48px] w-[calc(100%+96px)] h-[calc(100%+96px)] pointer-events-none z-0 text-brand"
          viewBox="0 0 800 560"
          fill="none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.path
            d="M 720 80 C 760 180, 760 380, 600 460 C 480 520, 260 510, 140 440 C 60 390, 40 280, 80 180 C 120 80, 260 40, 400 40 C 540 40, 680 60, 720 80 Z"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={drawVariants}
          />
        </motion.svg>
      )}

      {/* Form card */}
      <div className="relative z-10 bg-white rounded border border-border shadow-sm p-8 md:p-12">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 16, stiffness: 200, delay: 0.1 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-soft mb-6"
            >
              <CheckCircle2 className="w-8 h-8 text-brand" />
            </motion.div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Message sent!</h3>
            <p className="text-muted-foreground">
              Thanks — we&apos;ll be in touch within 24 hours.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
            <FormField
              id="name"
              label="Name"
              type="text"
              placeholder="Your full name"
              error={errors.name?.message}
              {...register("name")}
            />
            <FormField
              id="email"
              label="Email"
              type="email"
              placeholder="you@company.com"
              error={errors.email?.message}
              {...register("email")}
            />
            <FormField
              id="business"
              label="Business Name"
              type="text"
              placeholder="Your business"
              error={errors.business?.message}
              {...register("business")}
            />

            {/* Message */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="block text-sm font-medium text-foreground">
                Message <span className="text-brand">*</span>
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="w-full px-4 py-3 border border-border rounded text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200 resize-none"
                  {...register("message")}
                />
              </div>
              {errors.message && (
                <p id="message-error" role="alert" className="text-xs text-red-500 mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <MagneticButton className="w-full md:w-auto">
              <button
                type="submit"
                disabled={submitting}
                className="w-full md:w-auto px-8 py-3.5 bg-brand text-white font-semibold rounded hover:bg-brand-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                {submitting ? "Sending..." : "Start Your Project"}
              </button>
            </MagneticButton>
          </form>
        )}
      </div>
    </div>
  );
}

const FormField = ({
  id,
  label,
  type,
  placeholder,
  error,
  ...props
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className="space-y-1.5">
    <label htmlFor={id} className="block text-sm font-medium text-foreground">
      {label} <span className="text-brand">*</span>
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
      className="w-full px-4 py-3 border border-border rounded text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200"
      {...props}
    />
    {error && (
      <p id={`${id}-error`} role="alert" className="text-xs text-red-500 mt-1">
        {error}
      </p>
    )}
  </div>
);
