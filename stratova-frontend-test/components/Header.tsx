// app/components/Header.tsx
"use client"; // ضروري فـ Next.js App Router باش يكون Component client-side
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // حالة الهامبرغر للموبايل

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">Stratova Egense</Link>
        </div>

        {/* Navigation Links Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/team" className="hover:text-blue-600 transition">Team</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Start a Project
          </Link>
        </div>

        {/* Hamburger Menu Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md px-6 py-4 space-y-3">
          <Link href="/" className="block hover:text-blue-600 transition">Home</Link>
          <Link href="/services" className="block hover:text-blue-600 transition">Services</Link>
          <Link href="/about" className="block hover:text-blue-600 transition">About</Link>
          <Link href="/team" className="block hover:text-blue-600 transition">Team</Link>
          <Link href="/contact" className="block hover:text-blue-600 transition">Contact</Link>
          <Link
            href="/contact"
            className="block bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-700 transition"
          >
            Start a Project
          </Link>
        </nav>
      )}
    </header>
  );
}
