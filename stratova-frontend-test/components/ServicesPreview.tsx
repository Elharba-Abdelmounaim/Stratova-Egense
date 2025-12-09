// app/components/ServicesPreview.tsx
"use client";
import Link from "next/link";

export default function ServicesPreview() {
  const services = [
    {
      title: "PERFORMANCE PUBLICITAIRE",
      desc: "Dans le monde de la performance publicitaire, Markethelp se distingue par sa capacité à générer des leads de qualité et à stimuler les ventes de manière significative.",
    },
    {
      title: "CRÉATION DE SITE WEB",
      desc: "Avec Markethelp, créez votre site web sur mesure et réalisez vos ambitions en ligne. Qu’il s’agisse d’une vitrine professionnelle, d’une boutique en ligne ou d’un blog captivant.",
    },
    {
      title: "VIDÉOS UGC AVEC MICRO-INFLUENCEURS",
      desc: "Dynamisez votre présence en ligne avec nos vidéos UGC créées en collaboration avec plus de 400 micro-influenceurs.",
    },
    {
      title: "BRANDING",
      desc: "Le branding chez Markethelp est bien plus qu’une simple création de logo. C’est un processus méticuleux qui façonne l’identité visuelle de votre entreprise.",
    },
  ];

  return (
    <section className="py-24 bg-[#0f0029]">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* ✅ SERVICES Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
            SERVICES
          </h2>
          <p className="text-white/50 text-lg">
            Exploration approfondie de nos offres de services et solutions personnalisées
          </p>
        </div>

        {/* ✅ 4 Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-10 shadow-2xl hover:shadow-purple-600/30 transition-all duration-300"
            >
              <h3 className="text-xl font-black text-[#0f0029] uppercase tracking-wider mb-6">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ✅ Bottom CTA Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-black rounded-3xl p-12 text-center">
            <h3 className="text-4xl font-black text-white mb-6">
              PRÊT À PASSER À L’ÉCHELLE ?
            </h3>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour booster votre croissance : stratégie, développement web, branding, publicité, contenu… sur une plateforme simple.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#0f0029] px-12 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl"
            >
              Contactez-Nous
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
