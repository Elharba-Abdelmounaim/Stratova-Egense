// components/Portfolio.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  { id: 1, name: "Projet en cours", status: "Bientôt disponible" },
  { id: 2, name: "Projet en cours", status: "Bientôt disponible" },
  { id: 3, name: "Projet en cours", status: "Bientôt disponible" },
  { id: 4, name: "Votre projet ici ?", status: "Contactez-nous" },
];

export default function Portfolio() {
  return (
    <section className="py-24 lg:py-32 bg-[#0f0029] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-black text-white mb-6 tracking-tight">
            NOS RÉALISATIONS
          </h2>
          
        </motion.div>

        {/* Grid المشاريع */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Placeholder صورة مظلمة أنيقة */}
              <div className="aspect-video bg-gradient-to-br from-purple-900/30 to-black relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40" />
                
                {/* نص داخل الصورة */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-3xl md:text-4xl font-black text-white mb-4">
                      {project.name}
                    </p>
                    <p className="text-purple-300 text-lg font-medium">
                      {project.status}
                    </p>
                  </div>
                </div>

                {/* توهج عند الـ hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/0 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* معلومات تحت الصورة */}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-black text-white mb-3">
                  {project.name === "Votre projet ici ?" ? "Votre projet ici ?" : `Projet #${project.id}`}
                </h3>
                {project.name === "Votre projet ici ?" ? (
                  <Link
                    href="/contact"
                    className="inline-block mt-6 bg-white text-[#0f0029] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
                  >
                    Contactez-Nous
                  </Link>
                ) : (
                  <p className="text-white/50">Bientôt disponible</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}