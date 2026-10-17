import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Tech & AI Consulting in Marlboro, NJ",
  description:
    "Technology and AI consulting for small businesses in Marlboro, NJ. I help set up AI tools and automations so you stop doing the same tasks by hand.",
  alternates: { canonical: "/services/tech-consulting" },
};

export default function TechConsultingPage() {
  return (
    <ServicePage
      path="/services/tech-consulting"
      crumb="Tech & AI Consulting"
      label="Tech & AI Consulting · Marlboro, NJ"
      title="Tell me what's slowing you down. I'll help fix it."
      intro="Most businesses waste hours on stuff a computer could do. I help you pick the right tools, and I set up AI and automations so that work happens on its own."
      serviceName="Technology & AI Consulting"
      serviceDescription="Technology consulting, AI implementation and business automation for small businesses."
      pointsTitle="What that looks like."
      points={[
        { title: "AI that helps your business", text: "ChatGPT, Claude and other AI tools set up for your actual work: answering common questions, writing drafts, sorting info." },
        { title: "Automations", text: "Connect your apps so things happen on their own. A form fills out, a lead lands in your list, you get a text. No copy and paste." },
        { title: "Picking the right tools", text: "Too many apps, or not sure which one to use? I'll help you figure out what you need and drop what you don't." },
        { title: "Spreadsheets and data", text: "Messy Excel or Google Sheets cleaned up, plus simple reports that show you what's going on in your business." },
      ]}
      faq={[
        { q: "I'm not a tech person. Is that a problem?", a: "Not at all. That's the point. I explain things in plain English and set it up so you don't have to touch the technical side." },
        { q: "What kind of things can you automate?", a: "Things like follow up emails, moving leads from a form into a spreadsheet or CRM, booking reminders, invoices and social posts. If you do it the same way every time, it can probably be automated." },
        { q: "Is AI safe to use with my business info?", a: "It can be, if it's set up right. I'll walk you through what gets shared and pick tools and settings that keep your info private." },
      ]}
      ctaTitle="What's eating your time?"
    />
  );
}
