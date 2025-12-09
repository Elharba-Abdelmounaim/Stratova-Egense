// app/components/ServicesPreview.tsx
"use client";
import Link from "next/link";

export default function ServicesPreview() {
  const services = [
    {
      title: "Performance publicitaire",
      description:
        "Génération de leads de qualité et augmentation des ventes grâce à des stratégies publicitaires optimisées pour chaque canal.",
      icon: "/Image/STRATOVA AGENCY-03.png",
    },
    {
      title: "Création de sites web",
      description:
        "Conception de sites professionnels, boutiques en ligne ou blogs captivants, reflétant l’identité de votre marque et attirant votre audience.",
      icon: "/Image/STRATOVA AGENCY-04.png",
    },
    {
      title: "Branding & identité visuelle",
      description:
        "Développement d’une identité visuelle complète : couleurs, typographie et charte graphique, pour une marque mémorable et professionnelle.",
      icon: "/Image/STRATOVA AGENCY-05.png",
    },
    {
      title: "Vidéos UGC",
      description:
        "Collaboration avec plus de 400 micro-influenceurs pour créer des vidéos authentiques et engageantes qui renforcent votre présence en ligne.",
      icon: "/Image/STRATOVA AGENCY-06.png", // خذ صورة جديدة أو placeholder
    },
  ];

  return (
    <section className="bg-[#f8fffd] py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3e4cf2] mb-12">
          Nos Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 mx-auto mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-[#3e4cf2] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-800 mb-4">{service.description}</p>
              <Link
                href="/services"
                className="text-[#fc33fd] font-semibold hover:underline"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
