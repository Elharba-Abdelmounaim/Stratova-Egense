// app/components/TeamPreview.tsx
"use client";
import Link from "next/link";

export default function TeamPreview() {
  const teamMembers = [
    {
      name: "sami",
      role: "CEO & Founder",
      image: "/images/team/me3.jpeg",
      linkedin: "#",
    },
    {
      name: "Video",
      role: "Aya",
      image: "/images/team/me3.jpeg",
      linkedin: "#",
    },
    {
      name: "abd samad",
      role: "Video",
      image: "/images/team/me3.jpeg",
      linkedin: "#",
    },
    {
      name: "Salah aborabi3",
      role: "Design & Branding",
      image: "/images/team/me3.jpeg",
      linkedin: "#",
    },
    {
      name: "Abdelmounaim elharba",
      role: "Software Development",
      image: "/images/team/me3.jpeg",
      linkedin: "#",
    },
  ];

  return (
    <section className="bg-[#f8fffd] py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3e4cf2] mb-12">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-[#3e4cf2] mb-1">
                {member.name}
              </h3>
              <p className="text-[#000000] mb-4">{member.role}</p>
              <Link
                href={member.linkedin}
                target="_blank"
                className="text-[#fc33fd] font-semibold hover:underline"
              >
                LinkedIn
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
