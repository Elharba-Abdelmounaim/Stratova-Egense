// app/components/AboutPreview.tsx
"use client";
import Link from "next/link";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="py-24 lg:py-32 bg-[#0f0029]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

          
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-700"></div>
              <Image
                src="/Image/STRATOVA AGENCY-02.png"
                alt="À propos de STRATOVA EGENSE"
                width={700}
                height={600}
                className="relative rounded-3xl shadow-2xl"
                priority
              />
            </div>
          </div>

          
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
              About <span className="text-purple-400">STRATOVA</span> EGENSE
            </h2>

            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              STRATOVA EGENSE is a professional multi-service platform, specialized in providing comprehensive digital solutions to help grow your business and build a strong brand identity. Our main services include:
            </p>

            <ul className="text-white/80 space-y-5 mb-10 text-lg">
              <li className="flex items-center gap-4 justify-center lg:justify-start">
                <span className="text-3xl">Video Production</span> – Creating innovative and professional visual content that showcases your brand.
              </li>
              <li className="flex items-center gap-4 justify-center lg:justify-start">
                <span className="text-3xl">Design & Branding</span> – Crafting attractive designs and a consistent brand identity that reflects your company values.
              </li>
              <li className="flex items-center gap-4 justify-center lg:justify-start">
                <span className="text-3xl">Software Development</span> – Building high-quality websites, applications, and digital platforms.
              </li>
            </ul>

            <Link
              href="/about"
              className="inline-block bg-white text-[#0f0029] px-10 py-5 rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-xl"
            >
              Learn More
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}