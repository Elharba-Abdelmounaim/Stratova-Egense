// components/AboutPreview.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="py-28 lg:py-40 bg-gradient-to-b from-[#0f0029] to-black overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="text-center">

          {/* العنوان الكبير الفخم */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-10 leading-tight">
            QUI SOMMES-<span className="text-purple-500">NOUS</span> ?
          </h2>

          {/* الوصف الأنيق */}
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-12 leading-relaxed">
            Stratova Egense est une agence digitale spécialisée en développement web, applications mobiles et systèmes intelligents. 
            Nous accompagnons les startups et entreprises ambitieuses à croître rapidement grâce à des solutions modernes, performantes et sur mesure.
          </p>

          {/* زر CTA قوي مع حركة خفيفة */}
          <Link
            href="/about"
            className="group inline-flex items-center gap-4 bg-white text-[#0f0029] px-12 py-6 rounded-full text-xl font-bold hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 shadow-xl"
          >
            Découvrir notre histoire
            <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
          </Link>

          {/* لمسة ديكور خفيفة تحت الزر */}
          <div className="mt-20 flex justify-center">
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-transparent rounded-full" />
          </div>

        </div>

      </div>
    </section>
  );
}