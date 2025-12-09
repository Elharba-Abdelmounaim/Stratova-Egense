// app/components/AboutPreview.tsx
"use client";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-[#f8fffd] py-20">
      <div className="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center gap-10">
        
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src="/Image/STRATOVA AGENCY-02.png"
            alt="About Preview"
            className="w-3/4 md:w-full rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3e4cf2] mb-6">
            About STRATOVA EGENSE
          </h2>
          <p className="text-[#000000] mb-4">
            STRATOVA EGENSE is a professional multi-service platform, specialized in providing comprehensive digital solutions to help grow your business and build a strong brand identity. Our main services include:
          </p>
          <ul className="text-[#000000] mb-6 list-disc list-inside space-y-2">
            <li>🎥 <strong>Video Production</strong> – Creating innovative and professional visual content that showcases your brand.</li>
            <li>🎨 <strong>Design & Branding</strong> – Crafting attractive designs and a consistent brand identity that reflects your company values.</li>
            <li>💻 <strong>Software Development</strong> – Building high-quality websites, applications, and digital platforms.</li>
          </ul>
          <Link
            href="/about"
            className="inline-block bg-[#3e4cf2] text-white px-6 py-3 rounded-md hover:bg-[#fc33fd] transition"
          >
            Learn More
          </Link>
        </div>

      </div>
    </section>
  );
}
