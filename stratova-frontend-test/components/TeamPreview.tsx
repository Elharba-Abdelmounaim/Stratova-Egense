// components/TeamPreview.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import Portfolio from "./Portfolio";


const teamMembers = [
  {
    name: "Sami El Hassani",
    role: "CEO & Fondateur",
    image: "/images/team/me3.jpeg",
    linkedin: "https://linkedin.com/in/sami",
  },
  {
    name: "Aya Benali",
    role: "Directrice Créative & Vidéo UGC",
    image: "/images/team/me3.jpeg",
    linkedin: "https://linkedin.com/in/aya",
  },
  {
    name: "Abd Samad Rahali",
    role: "Videaste & Motion Designer",
    image: "/images/team/me3.jpeg",
    linkedin: "https://linkedin.com/in/abdsamad",
  },
  {
    name: "Salah Aborabi",
    role: "Lead Designer & Brand Strategist",
    image: "/images/team/me3.jpeg",
    linkedin: "https://linkedin.com/in/salah",
  },
  {
    name: "Abdelmounaim Elharba",
    role: "Lead Developer",
    image: "/images/team/me3.jpeg",
    linkedin: "https://linkedin.com/in/abdelmounaim",
  },
];

export default function TeamPreview() {
  return (
      <section className="relative min-h-screen py-20 lg:py-32 overflow-hidden">
      {/* الخلفية */}
      <div className="absolute inset-0 w-full h-full ">
        {/* Gradient كامل الشاشة */}
        <div className="w-full h-full bg-gradient-to-br from-[#0a001a] via-[#100029] to-[#1a0038]" />
        {/* Grid خفيف للتكستشر */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Circles متحركة */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        
        {/* Stars متحركة */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/40"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `twinkle ${Math.random() * 4 + 2}s infinite`,
              animationDelay: Math.random() * 3 + 's',
            }}
          />
        ))}
        
        {/* خطوط متحركة */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent animate-shimmer" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent animate-shimmer" />
        </div>
      </div>

      {/* المحتوى */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* العنوان */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20 lg:mb-28"
          >
            <div className="inline-block relative">
              {/* تأثير إضاءة خلف العنوان */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 to-transparent blur-xl rounded-full" />
              
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 relative">
                NOTRE{' '}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 animate-gradient-x">
                    ÉQUIPE
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-transparent" />
                </span>
              </h2>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-white/70 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mt-8"
            >
              Des talents passionnés qui font la différence
            </motion.p>
          </motion.div>

          {/* Team Members */}
          {teamMembers.map((member, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mb-24 lg:mb-36"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                  
                  {/* الصورة */}
                  <motion.div
                    initial={{ x: isEven ? 100 : -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.2,
                      ease: "easeOut" 
                    }}
                    viewport={{ once: true }}
                    className={`relative group ${isEven ? "lg:order-2" : "lg:order-1"}`}
                  >
                    {/* تأثير إضاءة حول الصورة */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative mx-auto lg:mx-0 w-72 h-96 lg:w-96 lg:h-[520px]">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-sm opacity-30 group-hover:opacity-70 transition-opacity duration-300" />
                      
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover rounded-3xl shadow-2xl relative z-10 group-hover:scale-[1.02] transition-all duration-500"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Border animated */}
                      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-purple-500/50 transition-all duration-500 z-30" />
                    </div>
                  </motion.div>

                  {/* النص والمعلومات */}
                  <motion.div
                    initial={{ x: isEven ? -100 : 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.3,
                      ease: "easeOut" 
                    }}
                    viewport={{ once: true }}
                    className={`${isEven ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <div className="relative group">
                      {/* تأثير خلف البوكس */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl">
                        {/* خط علوي ملون */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                        
                        <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 mt-2">
                          {member.name}
                          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-transparent mt-2 rounded-full" />
                        </h3>
                        
                        <p className="text-purple-300 text-xl lg:text-2xl font-medium mb-8">
                          {member.role}
                        </p>
                        
                        <div className="flex items-center justify-center lg:justify-start space-x-4">
                          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                          
                          <Link
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                          >
                            <div className="relative">
                              <div className="absolute inset-0 bg-purple-500 rounded-full blur group-hover/link:blur-sm transition-all duration-300" />
                              <Linkedin className="w-6 h-6 relative z-10" />
                            </div>
                            <span className="text-white font-medium">LinkedIn</span>
                            <div className="w-0 group-hover/link:w-4 h-px bg-white transition-all duration-300" />
                          </Link>
                          
                          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
      
      {/* CSS للأنيميشن */}
      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        
        @keyframes shimmer {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
        
        .animate-pulse {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}