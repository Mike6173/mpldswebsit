"use client";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const needs = ["Website", "App", "Social media", "Tech / AI help", "Not sure yet"];

type Status = "idle" | "sending" | "sent" | "error";

async function send(data: Record<string, string>) {
  const res = await fetch(site.formspree, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Form failed");
}

const field =
  "w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-[16px] text-ink placeholder:text-ink-3 transition-colors focus:border-ink focus:outline-none";

export function QuoteForm() {
  const [picked, setPicked] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("_gotcha")) return;
    setStatus("sending");
    try {
      await send({
        _subject: `New quote request from ${fd.get("name")}`,
        name: String(fd.get("name") ?? ""),
        email: String(fd.get("email") ?? ""),
        phone: String(fd.get("phone") ?? ""),
        business: String(fd.get("business") ?? ""),
        needs: picked.join(", ") || "Not picked",
        message: String(fd.get("message") ?? ""),
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-line bg-paper-2/60 p-8 md:p-10">
        <div className="grid size-11 place-items-center rounded-full bg-accent text-white">
          <Check className="size-5" />
        </div>
        <p className="display mt-6 text-3xl font-bold">Got it, thanks.</p>
        <p className="mt-3 text-ink-2">I&apos;ll get back to you soon, usually within a day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <fieldset>
        <legend className="mb-3 text-[14px] font-medium">What do you need?</legend>
        <div className="flex flex-wrap gap-2">
          {needs.map((n) => {
            const on = picked.includes(n);
            return (
              <button
                key={n}
                type="button"
                aria-pressed={on}
                onClick={() => setPicked((p) => (on ? p.filter((x) => x !== n) : [...p, n]))}
                className={cn(
                  "rounded-full border px-4 py-2 text-[14px] transition-colors",
                  on ? "border-ink bg-ink text-paper" : "border-line hover:border-ink",
                )}
              >
                {n}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-[14px] font-medium">Your name</label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="business" className="mb-2 block text-[14px] font-medium">
            Business <span className="font-normal text-ink-3">(optional)</span>
          </label>
          <input id="business" name="business" autoComplete="organization" className={field} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-[14px] font-medium">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-[14px] font-medium">
            Phone <span className="font-normal text-ink-3">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-[14px] font-medium">What&apos;s going on?</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="A couple sentences is fine. What do you have now, and what do you want?"
          className={cn(field, "resize-y")}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-[14px] text-accent-ink">
          That didn&apos;t go through. Try again, or email me at{" "}
          <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-[16px] font-medium text-paper transition-colors hover:bg-accent disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending..." : "Send it"}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("_gotcha")) return;
    setStatus("sending");
    try {
      await send({ _subject: "Newsletter signup", email: String(fd.get("email") ?? ""), type: "newsletter" });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return <p className="text-lg font-medium">You&apos;re on the list. Thanks!</p>;
  }

  return (
    <form onSubmit={onSubmit} className="max-w-md">
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <label htmlFor="nl-email" className="sr-only">Email</label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input id="nl-email" name="email" type="email" required placeholder="you@email.com" autoComplete="email" className={field} />
        <button
          type="submit"
          disabled={status === "sending"}
          className="shrink-0 rounded-full bg-ink px-6 py-3.5 text-[15px] font-medium text-paper transition-colors hover:bg-accent disabled:opacity-60"
        >
          {status === "sending" ? "Adding..." : "Sign me up"}
        </button>
      </div>
      {status === "error" && (
        <p role="alert" className="mt-3 text-[14px] text-accent-ink">Something went wrong. Try again in a minute.</p>
      )}
    </form>
  );
}
