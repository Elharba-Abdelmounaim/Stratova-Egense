import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "STRATOVA EGENCY",
  description: "Agence digitale spécialisée en web, branding et vidéo.",
  icons: "/Image/PROFILE SOCIAL MEDIA-01.png",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
     
      <body className="antialiased">
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
