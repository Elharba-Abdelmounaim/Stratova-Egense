// app/team/page.tsx
import TeamPreview from "../../components/TeamPreview";
import CallToAction from '../../components/CallToAction';

export default function TeamPage() {
  return (
    <section className=" bg-white text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12 text-[#3e4cf2]">Our Team</h1>
        <TeamPreview />
        
      </div>
      <CallToAction/>
    </section>
    
  );
}
