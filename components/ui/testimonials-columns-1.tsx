"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg shadow-blue-500/5 max-w-xs w-full"
                  key={i}
                >
                  <div className="text-gray-300 text-sm leading-relaxed">{text}</div>
                  <div className="flex items-center gap-3 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold text-white tracking-tight leading-5">{name}</div>
                      <div className="leading-5 text-blue-400 text-sm tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export const testimonials = [
  {
    text: "MPL Digital Services transformed our online presence completely. Within 3 months, our lead generation increased by 240% and our cost per acquisition dropped significantly. Their Meta Ads strategy was game-changing.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Bill Fitzgerald",
    role: "CEO, FitzTech Solutions",
  },
  {
    text: "Working with MPLDS on our Google Ads campaigns delivered an ROI of 380% in the first quarter. Their data-driven approach and constant optimization set them apart from every agency we've worked with before.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Victor Vera",
    role: "Founder, Vera Enterprises",
  },
  {
    text: "The website they built for us is stunning and converts. Our online sales went up 190% after launch. Their development team understands both design and business — a rare combination.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Anthony Lopez",
    role: "Owner, Lopez Retail Group",
  },
  {
    text: "Their SEO work brought us from page 5 to position 1 for our most competitive keywords. Organic traffic is up 310% and we're seeing consistent growth month over month. MPLDS delivers real results.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Robert Brofsky",
    role: "Director, Brofsky Marketing",
  },
  {
    text: "The AI automation systems MPLDS built for our marketing workflows saved us 25 hours per week and improved campaign performance dramatically. Their AI consulting is truly next-level for business growth.",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    name: "Vincent Bamundo",
    role: "VP Marketing, Bamundo Corp",
  },
  {
    text: "Their social media management took our brand from invisible to industry leader in under 6 months. Engagement up 500%, followers tripled, and direct message leads are flooding in every single week.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah Mitchell",
    role: "CMO, Mitchell Brands",
  },
  {
    text: "MPLDS built us a Power BI dashboard that gave us real-time visibility into all our marketing channels. For the first time we could see exactly where every dollar was going and optimize intelligently.",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    name: "James Thornton",
    role: "CFO, Thornton Industries",
  },
  {
    text: "I've worked with five agencies over my career. MPL Digital Services is in a different league entirely. They think like business partners, not vendors. Our revenue is up 45% since we started with them.",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    name: "Diana Chen",
    role: "CEO, Chen Digital Media",
  },
  {
    text: "The Meta Ads campaigns MPLDS runs for us consistently deliver 5x ROAS. They test relentlessly, optimize intelligently, and communicate transparently. Best marketing investment we've ever made.",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    name: "Marcus Williams",
    role: "Founder, Williams eCommerce",
  },
];
