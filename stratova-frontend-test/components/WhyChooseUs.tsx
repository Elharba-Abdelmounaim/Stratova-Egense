// components/WhyChooseUs.tsx
"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Professional Expertise",
    description:
      "At STRATOVA EGENSE, our team of experienced professionals brings unmatched expertise across Digital Marketing, Video Editing, Design & Branding, and Software Development. We are dedicated to delivering innovative and high-quality solutions tailored to your unique business needs.",
  },
  {
    number: "02",
    title: "Personalized Approach",
    description:
      "We understand that every business is unique. That’s why we provide a personalized approach for each client. By collaborating closely with you, we design strategies and solutions that align perfectly with your goals, values, and challenges.",
  },
  {
    number: "03",
    title: "Results-Driven",
    description:
      "Our focus is on achieving measurable and impactful results. Using data-driven analysis and performance tracking, we make sure every action contributes to your business growth. With STRATOVA EGENSE as your partner, you can trust us to deliver tangible outcomes that exceed expectations.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#f8fffd]">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#3e4cf2] mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose STRATOVA EGENSE?
        </motion.h2>
        <motion.p
          className="text-gray-700 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Discover the compelling reasons why we are your ultimate partner for digital success.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.number}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition"
            >
              <span className="text-4xl font-bold text-[#fc33fd]">{reason.number}</span>
              <h3 className="text-xl font-semibold text-[#3e4cf2] mt-4 mb-2">{reason.title}</h3>
              <p className="text-[#000000] text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
