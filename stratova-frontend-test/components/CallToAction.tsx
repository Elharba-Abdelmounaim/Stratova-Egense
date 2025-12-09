// components/CallToAction.tsx
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-20 bg-[#0f0029] text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-6">
          Prêt à booster votre business ?
        </h2>

        

        <Link
          href="/contact"
          className="inline-block bg-white text-[#0f0029] px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition shadow-lg"
        >
          Contactez-Nous
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;