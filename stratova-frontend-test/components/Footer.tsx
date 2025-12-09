// components/Footer.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 text-center">
      <p className="mb-4">Stratova Egense &copy; {new Date().getFullYear()}</p>
      <div className="space-x-4 mb-4">
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/team">Team</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="space-x-4">
        <a href="#" target="_blank">Facebook</a>
        <a href="#" target="_blank">Twitter</a>
        <a href="#" target="_blank">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
