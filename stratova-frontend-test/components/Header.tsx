"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "À Propos" },
    { href: "/team", label: "Équipe" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className={`fixed w-full z-50 mb-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-white/90 backdrop-blur-xl shadow-lg py-3" 
        : "bg-white/80 backdrop-blur-md py-4"
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          
          {/* Logo avec effet */}
          <Link href="/" className="group relative">
            <div className="w-40 h-20 flex items-center justify-center shadow-3xl"> {/* w-40 h-40 = 10rem */}
              <Image
                src="/Image/STRATOVA AGENCY LOGO TRANSPARENT-04.png"
                alt="Stratova Logo"
                width={250} 
                height={250} 
                className="rounded-full"
                priority
              />
            </div>
          </Link>



          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group text-gray-700 hover:text-[#3e4cf2] font-medium transition-colors duration-300"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3e4cf2] to-[#2fe7bb] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/contact"
              className="group relative bg-gradient-to-r from-[#3e4cf2] to-[#2fe7bb] text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ml-4"
            >
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                Démarrer un Projet
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </nav>

          {/* Hamburger Menu Mobile */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative w-10 h-10 focus:outline-none group"
            aria-label="Menu"
          >
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}>
              <div className="w-6 h-0.5 bg-gray-800 mb-1.5 transition-all group-hover:bg-[#3e4cf2]"></div>
              <div className="w-6 h-0.5 bg-gray-800 mb-1.5 transition-all group-hover:bg-[#3e4cf2]"></div>
              <div className="w-6 h-0.5 bg-gray-800 transition-all group-hover:bg-[#3e4cf2]"></div>
            </div>
            
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}>
              <svg className="w-6 h-6 text-gray-800 group-hover:text-[#3e4cf2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all duration-500 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`} onClick={() => setIsOpen(false)}></div>

      {/* Mobile Menu Content */}
      <div className={`lg:hidden fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-2xl transform transition-transform duration-500 ease-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        
        {/* Menu Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="text-2xl font-black">
            <span className="bg-gradient-to-r from-[#3e4cf2] to-[#2fe7bb] bg-clip-text text-transparent">
              STRATOVA
            </span>
            <span className="text-gray-800"> AGENCY</span>
          </div>
          <p className="text-gray-500 text-sm mt-2">Créateurs d&apos;Impact Digital</p>
        </div>

        {/* Menu Items */}
        <nav className="p-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 px-4 text-gray-700 hover:text-[#3e4cf2] hover:bg-gradient-to-r hover:from-[#3e4cf2]/5 hover:to-[#2fe7bb]/5 rounded-xl font-medium transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile CTA Button */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100">
          <Link
            href="/contact"
            className="block w-full bg-gradient-to-r from-[#3e4cf2] to-[#2fe7bb] text-white text-center py-3.5 px-6 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Démarrer un Projet
          </Link>
          
          {/* Contact Info */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 text-gray-600">
              <svg className="w-5 h-5 text-[#3e4cf2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+212 6 XX XX XX XX</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <svg className="w-5 h-5 text-[#2fe7bb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>contact@stratova.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}