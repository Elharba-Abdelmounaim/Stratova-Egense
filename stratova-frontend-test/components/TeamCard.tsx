// components/TeamPreview.tsx
const team = [
  { name: "Abdelmounaim Elharba", role: "Full Stack Developer" },
  { name: "Walid Karim", role: "Backend & Systems Engineer" },
];

const TeamPreview = () => {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {team.map((member, i) => (
          <div key={i} className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-xl mb-2">{member.name}</h3>
            <p className="text-gray-700">{member.role}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Meet Our Team
        </button>
      </div>
    </section>
  );
};

export default TeamPreview;
