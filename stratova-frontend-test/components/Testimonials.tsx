"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Alice Brown",
    role: "Marketing Manager",
    feedback:
      "STRATOVA EGENSE nous a aidés à créer une présence digitale incroyable. Une équipe ultra professionnelle et créative !",
    image: "/Image/STRATOVA AGENCY-08.png",
    rating: 5,
  },
  {
    name: "Robert Wilson",
    role: "CEO, TechCorp",
    feedback:
      "Les solutions logicielles et le design proposés par STRATOVA EGENSE ont dépassé toutes nos attentes. Fortement recommandé !",
    image: "/Image/STRATOVA AGENCY-09.png",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Brand Designer",
    feedback:
      "Travailler avec STRATOVA EGENSE a été une expérience fantastique. Ils maîtrisent parfaitement le branding et la stratégie digitale.",
    image: "/Image/STRATOVA AGENCY-10.png",
    rating: 5,
  },
  {
    name: "John Doe",
    role: "Entrepreneur",
    feedback:
      "Une équipe très réactive et créative. STRATOVA EGENSE a transformé notre stratégie digitale.",
    image: "/Image/STRATOVA AGENCY-11.png",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-[#0f0029] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
            Ce que disent <span className="text-purple-400">nos clients</span>
          </h2>
          <p className="text-white/60 text-xl">
            Plus de 200 entreprises nous font confiance
          </p>
        </motion.div>

        {/* Carousel متكرر */}
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex gap-8"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="flex-shrink-0 w-96">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 h-full shadow-2xl hover:bg-white/10 transition">
                  {/* النجوم */}
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-purple-400 text-2xl">★</span>
                    ))}
                  </div>

                  {/* التعليق */}
                  <p className="text-white/80 text-lg italic mb-8 leading-relaxed">
                    "{t.feedback}"
                  </p>

                  {/* معلومات الشخص */}
                  <div className="flex items-center gap-5">
                    <div className="relative">
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={64}
                        height={64}
                        className="rounded-full border-4 border-purple-500 shadow-lg"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-600/50 to-transparent" />
                    </div>

                    <div className="text-left">
                      <h4 className="text-xl font-black text-white">{t.name}</h4>
                      <p className="text-purple-300 text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
