// components/WhyChooseUs.tsx
"use client";
import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Expertise Professionnelle",
    description:
      "Notre équipe chez STRATOVA EGENSE combine compétences avancées en Marketing Digital, Branding, Design et Développement de logiciels pour offrir des solutions innovantes et adaptées à vos besoins uniques.",
  },
  {
    number: "02",
    title: "Approche Personnalisée",
    description:
      "Chaque entreprise est unique. Nous travaillons main dans la main avec vous pour concevoir des stratégies sur mesure, parfaitement alignées avec vos objectifs, valeurs et défis.",
  },
  {
    number: "03",
    title: "Résultats Mesurables",
    description:
      "Notre priorité est de générer des résultats concrets. Grâce à l’analyse de données et au suivi de performance, chaque action est pensée pour booster votre croissance et dépasser vos attentes.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-[#0f0029]">
      <div className="container mx-auto px-6 max-w-4xl">

        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Pourquoi Choisir <span className="text-purple-400">STRATOVA</span> ?
          </h2>
          <p className="text-white/60 text-lg md:text-xl">
            Découvrez pourquoi nous sommes le partenaire idéal pour propulser votre réussite digitale.
          </p>
        </motion.div>

        {/* الكروت العمودية */}
        <div className="space-y-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 lg:p-12 hover:bg-white/10 transition-all duration-500"
            >
              {/* الرقم الكبير في الخلفية */}
              <div className="absolute -top-6 -left-4 text-9xl font-black text-white/5 select-none">
                {reason.number}
              </div>

              <div className="relative flex items-start gap-8">
                {/* الدائرة البنفسجية مع الرقم */}
                <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-3xl font-black text-white shadow-xl">
                  {reason.number}
                </div>

                <div className="flex-1 text-left">
                  <h3 className="text-2xl lg:text-3xl font-black text-white mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>

              {/* خط خفيف تحت الكارد عند الـ hover */}
              <div className="absolute bottom-0 left-10 right-10 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}