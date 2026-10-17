import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Social Media Management in Marlboro, NJ",
  description:
    "Social media posting and automation for small businesses in Marlboro, NJ. Instagram, Facebook, TikTok and LinkedIn. I post for you or set it up to run on its own.",
  alternates: { canonical: "/services/social-media" },
};

export default function SocialMediaPage() {
  return (
    <ServicePage
      path="/services/social-media"
      crumb="Social Media"
      label="Social Media · Marlboro, NJ"
      title="Social media that doesn't eat your whole week."
      intro="I can post for you, or set it up so your posts go out on their own. Instagram, Facebook, TikTok, LinkedIn, wherever your customers are."
      serviceName="Social Media Management & Automation"
      serviceDescription="Social media posting, content creation and posting automation for small businesses."
      pointsTitle="What I can take off your plate."
      points={[
        { title: "Posting for you", text: "I make the posts and put them out on a regular schedule so your pages don't go quiet." },
        { title: "Automation", text: "Posts scheduled weeks ahead, and one post shared to every platform at once. Set it once and it keeps going." },
        { title: "Graphics", text: "Clean, simple graphics made in Canva that match your brand." },
        { title: "Setup and cleanup", text: "New accounts, fixing old profiles, bios, links and making sure it all points back to your website." },
      ]}
      faq={[
        { q: "Which platforms do you work with?", a: "Instagram, Facebook, TikTok and LinkedIn are the main ones. If your customers are somewhere else, tell me." },
        { q: "Do I have to make the content?", a: "No. Send me photos from your jobs or your shop when you have them and I'll handle the rest." },
        { q: "What does automation actually mean here?", a: "Your posts get scheduled ahead of time and go out on their own, across all your accounts. You don't have to remember to post." },
      ]}
      ctaTitle="Want your pages active again?"
    />
  );
}
