"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";

const schema = z.object({
  name:     z.string().min(2, "Required"),
  email:    z.string().email("Invalid email"),
  business: z.string().min(1, "Required"),
  message:  z.string().min(10, "Tell us a bit more"),
});

type FormData = z.infer<typeof schema>;

const fields = [
  { id: "name" as const,     label: "Name",          type: "text",  placeholder: "Your name" },
  { id: "email" as const,    label: "Email",         type: "email", placeholder: "you@company.com" },
  { id: "business" as const, label: "Business",      type: "text",  placeholder: "Company or project" },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-4"
        >
          <p className="font-display font-light italic text-[1.5rem] leading-[1.3] text-fg mb-3">
            Message received.
          </p>
          <p className="font-sans text-[14px] text-fg-dim leading-[1.55]">
            We&apos;ll be in touch within 24 hours.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-8"
        >
          {fields.map(({ id, label, type, placeholder }) => (
            <div key={id}>
              <label
                htmlFor={id}
                className="block font-sans text-[11px] uppercase tracking-[0.24em] text-fg-faint mb-2"
              >
                {label}
              </label>
              <input
                id={id}
                type={type}
                placeholder={placeholder}
                aria-invalid={!!errors[id]}
                aria-describedby={errors[id] ? `${id}-error` : undefined}
                className="w-full bg-transparent border-b border-border-strong py-3 font-sans text-[15px] text-fg placeholder:text-fg-faint focus:outline-none focus:border-fg-muted transition-colors duration-200"
                {...register(id)}
              />
              {errors[id] && (
                <p id={`${id}-error`} role="alert" className="mt-1.5 font-sans text-[11px] text-fg-muted">
                  {errors[id]?.message}
                </p>
              )}
            </div>
          ))}

          {/* Message textarea */}
          <div>
            <label
              htmlFor="message"
              className="block font-sans text-[11px] uppercase tracking-[0.24em] text-fg-faint mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us about your project..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="w-full bg-transparent border-b border-border-strong py-3 font-sans text-[15px] text-fg placeholder:text-fg-faint focus:outline-none focus:border-fg-muted transition-colors duration-200 resize-none"
              {...register("message")}
            />
            {errors.message && (
              <p id="message-error" role="alert" className="mt-1.5 font-sans text-[11px] text-fg-muted">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="group inline-flex items-center gap-2 px-5 py-3.5 text-[13px] font-sans font-medium bg-fg text-bg rounded hover:bg-blue transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
          >
            {submitting ? "Sending…" : "Send message"}
            {!submitting && (
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
