// components/Contact.tsx
"use client";
import Image from "next/image";

export default function ContactForm() {
  return (
    <section className="py-20 bg-[#3e4cf2] text-white">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-6xl font-bold mb-4 text-center">Contact Us</h2>
        <p className="text-center mb-14 text-[#f8fffd]">
          For any question, suggestion, or additional assistance, our team is here to help you.
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
         
          {/* Left - Image */}
          
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/Image/STRATOVA AGENCY-14.png" 
              alt="Contact Illustration"
              width={500}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Right - Form */}
          <div className="lg:w-1/2">
            <form className="flex flex-col gap-4 bg-[#2fe7bb] p-8 rounded-lg shadow-lg text-black">
              <select className="p-3 rounded bg-black text-white font-semibold">
                <option>Choose Your Need</option>
                <option>Digital Marketing</option>
                <option>Video Editing</option>
                <option>Design & Branding</option>
                <option>Software Development</option>
              </select>
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 rounded border border-gray-300"
              />
              <input
                type="text"
                placeholder="Subject"
                className="p-3 rounded border border-gray-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded border border-gray-300"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="p-3 rounded border border-gray-300"
              />
              <textarea
                placeholder="Message"
                className="p-3 rounded border border-gray-300 h-32 resize-none"
              />
              <button
                type="submit"
                className="bg-[#3e4cf2] text-white font-bold py-3 rounded hover:bg-[#2e3bd8] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
