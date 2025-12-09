// app/components/Hero.tsx
"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#f8fffd] min-h-screen flex items-center">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3e4cf2] mb-6">
            We build modern digital solutions for your business
          </h1>
          <p className="text-[#000000] mb-6">
            We design and develop high-quality websites, mobile applications, and digital platforms using modern technologies.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              href="/services"
              className="bg-[#3e4cf2] text-white px-6 py-3 rounded-md hover:bg-[#fc33fd] transition"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="bg-[#2fe7bb] text-black px-6 py-3 rounded-md hover:bg-[#fc33fd] transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Image / Illustration */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src="/Image/STRATOVA AGENCY-01.png"
            alt="Hero Illustration"
            className="w-3/4 md:w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
