// app/components/Testimonials.tsx
"use client";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alice Brown",
      role: "Marketing Manager",
      feedback:
        "STRATOVA EGENSE helped us create an amazing digital presence. Their team is highly professional and creative!",
      image: "/Image/STRATOVA AGENCY-08.png",
    },
    {
      name: "Robert Wilson",
      role: "CEO, TechCorp",
      feedback:
        "The software solutions and designs provided by STRATOVA EGENSE exceeded our expectations. Highly recommended!",
      image: "/Image/STRATOVA AGENCY-09.png",
    },
    {
      name: "Emily Davis",
      role: "Brand Designer",
      feedback:
        "Working with STRATOVA EGENSE was a fantastic experience. They truly understand branding and digital strategy.",
      image: "/Image/STRATOVA AGENCY-10.png",
    },
  ];

  return (
    <section className="bg-[#f8fffd] py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3e4cf2] mb-12">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
                loading="lazy"
              />
              <p className="text-[#000000] mb-4 italic">{testimonial.feedback}</p>
              <h3 className="text-xl font-semibold text-[#3e4cf2] mb-1">
                {testimonial.name}
              </h3>
              <p className="text-[#2fe7bb]">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
