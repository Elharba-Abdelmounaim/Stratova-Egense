// components/AboutPreview.tsx
import Link from "next/link";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">Who are we?</h2>
      <p className="text-gray-700 mb-6 max-w-xl mx-auto">
        Stratova Egense is a digital company specialized in web development, mobile applications and smart systems. We help startups and businesses grow using modern technologies.
      </p>
      <Link href="/about">
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Learn More
        </button>
      </Link>
    </section>
  );
};

export default AboutPreview;
