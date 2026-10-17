import type { Metadata } from "next";
import { PageTop } from "@/components/ui";
import { NewsletterForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Short, useful tips on websites, social media and AI for small business owners. From Mike at MPL Digital Services in Marlboro, NJ.",
  alternates: { canonical: "/newsletter" },
};

export default function NewsletterPage() {
  return (
    <div className="pb-24 md:pb-32">
      <PageTop
        label="Newsletter"
        title="Short tips. Once in a while."
        intro="Quick, useful stuff about websites, social media and AI for people who run a business. No spam, and you can leave whenever you want."
      >
        <NewsletterForm />
      </PageTop>
    </div>
  );
}
