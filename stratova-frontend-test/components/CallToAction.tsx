// components/CallToAction.tsx
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-20 bg-blue-600  text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to grow your business?</h2>
      <p className="mb-6">Contact us today and let is build your next project.</p>
      <Link href="/contact">
        <button className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-gray-200">
          Contact Us
        </button>
      </Link>
    </section>
  );
};

export default CallToAction;
