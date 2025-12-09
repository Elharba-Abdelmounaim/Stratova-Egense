// components/Footer.tsx
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/100">
      <div className="container mx-auto px-6 py-20">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">

          {/* العمود الأول - اللوغو + وصف صغير */}
          <div className="mb-12 md:mb-0">
            <h2 className="text-4xl font-black text-white mb-6">
              STRATOVA<span className="text-purple-500">.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-xs">
              Agence digitale spécialisée en performance marketing, création de sites web, branding et vidéos UGC.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-12 h-12 bg-white/100 rounded-full flex items-center justify-center hover:bg-purple-600 hover:scale-110 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/100 rounded-full flex items-center justify-center hover:bg-purple-600 hover:scale-110 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/100 rounded-full flex items-center justify-center hover:bg-purple-600 hover:scale-110 transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/100 rounded-full flex items-center justify-center hover:bg-purple-600 hover:scale-110 transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* العمود الثاني - الروابط السريعة */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8">Liens rapides</h3>
            <ul className="space-y-5">
              <li><Link href="/" className="text-white/70 hover:text-purple-400 transition">Accueil</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-purple-400 transition">À propos</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-purple-400 transition">Services</Link></li>
              <li><Link href="/portfolio" className="text-white/70 hover:text-purple-400 transition">Portfolio</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-purple-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* العمود الثالث - الخدمات */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8">Nos Services</h3>
            <ul className="space-y-5">
              <li className="text-white/70">Performance Publicitaire</li>
              <li className="text-white/70">Création de Site Web</li>
              <li className="text-white/70">Vidéos UGC & Influence</li>
              <li className="text-white/70">Branding & Design</li>
              <li className="text-white/70">Stratégie Digitale</li>
            </ul>
          </div>

          {/* العمود الرابع - تواصل معانا */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8">Contactez-nous</h3>
            <ul className="space-y-6 text-white/70">
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>contact@stratova.ma</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+212 6 00 00 00 00</span>
              </li>
              <li className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>Casablanca, Maroc</span>
              </li>
            </ul>

            {/* زر CTA صغير في الفوتر */}
            <Link
              href="/contact"
              className="inline-block mt-100 bg-purple-600 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-500 hover:scale-105 transition shadow-xl"
            >
              Démarrer un projet
            </Link>
          </div>

        </div>

        {/* السطر الأخير - حقوق النشر */}
        <div className="border-t border-white/100 mt-16 pt-8 text-center">
          <p className="text-white/50">
            © {currentYear} <span className="text-purple-400 font-bold">STRATOVA EGENSE</span>. Tous droits réservés.
          </p>
        </div>

      </div>
    </footer>
  );
}