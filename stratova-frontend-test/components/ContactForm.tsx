// components/Contact.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // هنا تزود منطق الإرسال (API call, etc.)
    alert("Message sent successfully!");
  };

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#3e4cf2] via-[#2b39cc] to-[#1a28a5] text-white overflow-hidden">
      {/* تأثيرات خلفية */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* العنوان */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            CONTACTEZ-<span className="text-[#2fe7bb]">NOUS</span>
          </h2>
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto">
            Pour toute question, suggestion ou assistance supplémentaire, notre équipe est là pour vous aider.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* الصورة - اليسار */}
          <div className="lg:w-1/2 w-full">
            <div className="relative group">
              {/* تأثير إطار */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#2fe7bb]/30 to-[#3e4cf2]/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-2xl overflow-hidden">
                <Image
                  src="/Image/STRATOVA AGENCY-14.png" 
                  alt="Contact Illustration"
                  width={600}
                  height={500}
                  className="w-full h-auto rounded-lg object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
              </div>
            </div>
            
            {/* معلومات إضافية تحت الصورة */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <h4 className="text-[#2fe7bb] font-bold text-lg mb-2">📞 Contact Rapide</h4>
                <p className="text-white/90">+212 6 XX XX XX XX</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <h4 className="text-[#2fe7bb] font-bold text-lg mb-2">📧 Email</h4>
                <p className="text-white/90">contact@stratova.com</p>
              </div>
            </div>
          </div>

          {/* النموذج - اليمين */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* خط علوي ملون */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#2fe7bb] to-[#3e4cf2] rounded-full" />
                
                <div className="relative mb-2">
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-4 bg-black/40 border border-white/20 rounded-xl text-white font-medium focus:outline-none focus:ring-2 focus:ring-[#2fe7bb] focus:border-transparent transition-all"
                    required
                  >
                    <option value="" className="text-gray-400">Choisissez votre besoin</option>
                    <option value="marketing" className="text-white">Marketing Digital</option>
                    <option value="video" className="text-white">Édition Vidéo & UGC</option>
                    <option value="design" className="text-white">Design & Branding</option>
                    <option value="development" className="text-white">Développement Logiciel</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 text-[#2fe7bb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Nom Complet *"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-4 bg-black/30 border border-white/20 rounded-xl text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#2fe7bb] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-4 bg-black/30 border border-white/20 rounded-xl text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#2fe7bb] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Sujet"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-4 bg-black/30 border border-white/20 rounded-xl text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#2fe7bb] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Téléphone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-4 bg-black/30 border border-white/20 rounded-xl text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#2fe7bb] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Votre Message *"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-4 bg-black/30 border border-white/20 rounded-xl text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#2fe7bb] focus:border-transparent resize-none transition-all"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="group relative bg-gradient-to-r from-[#2fe7bb] to-[#3e4cf2] text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl hover:shadow-[#2fe7bb]/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
                >
                  <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center gap-3">
                    Envoyer le Message
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </form>

              {/* ملاحظة */}
              <p className="text-white/60 text-sm text-center mt-6">
                Nous vous répondrons dans les 24 heures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}