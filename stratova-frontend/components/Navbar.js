
import Image from "next/image";
import Link from "next/link";



export default function Navbar() {
  return (
    <nav style={{
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#111',
      color: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src="/Image/STRATOVA AGENCY LOGO TRANSPARENT-03.png"
          alt="Stratova Egense Logo"
          width={150}  
          height={120}  
        />
      </div>

      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/team">Team</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
