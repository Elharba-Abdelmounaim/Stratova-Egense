// app/components/Hero.tsx
"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0f0029] overflow-hidden pt-32">
      {/* ✅ pt-32 = المسافة مع Navbar */}

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-[#0f0029] to-[#0f0029]" />

      <div className="relative container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* ✅ Left Side - Text */}
          <div className="text-center lg:text-left">
            <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              On n'est pas une simple agence digitale,
              <br />
              on est un{" "}
              <span className="text-purple-400 font-bold">accélérateur</span>.
            </p>

            {/* ✅ Big Title */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight">
              STRATOVA{" "}
              <span className="text-purple-500">EGINCE</span>
            </h1>

            {/* ✅ Stats */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mt-12">
              {[
                { num: "+212", label: "Projets" },
                { num: "+40M$", label: "Généré" },
                { num: "+21", label: "Projets En Cours" },
                
              
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 flex items-center gap-4"
                >
                  <span className="text-3xl font-bold text-purple-400">
                    {stat.num}
                  </span>
                  <span className="text-white/80">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ Right Side - Image + Badge */}
          <div className="relative flex justify-center lg:justify-end">

            {/* ✅ MAIN IMAGE */}
            <Image
              src="/Image/STRATOVA AGENCY-19.png"
              alt="Stratova Egince"
              width={900}
              height={700}
              className="rounded-3xl shadow-2xl"
              priority
            />

            {/* ✅ BADGE (تم إصلاح مشكل span) */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-center">
              <div className="w-32 h-32 bg-purple-600 rounded-full flex items-center justify-center shadow-2xl border-8 border-[#0f0029]">
                
                {/* ✅ Image مباشرة بلا span */}
                <Image
                  src="/Image/STRATOVA AGENCY-03.png"
                  alt="Stratova Logo"
                  width={90}
                  height={90}
                  className="rounded-full"
                  priority
                />

              </div>

              <p className="text-white/60 text-xs mt-3 tracking-widest uppercase">
                Performance Agency
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
