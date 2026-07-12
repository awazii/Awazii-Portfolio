// components/home/Capabilities.tsx
import { Code2, Cpu, Wrench, Briefcase, BookOpen } from "lucide-react";
import { skillsData } from "@/data/portfolioData";
import { siteConfig } from "@/data/siteConfig";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";  

const descriptions: Record<string, string> = {
  "Frontend Architecture": "Structuring scalable, component-driven interfaces from scratch.",
  "State & Logic": "Managing complex data flows and client-side calculations.",
  "Tools & Ecosystem": "Leveraging industry-standard workflows for rapid deployment.",
  "Professional Skills": "Applying discipline and effective communication to workflows.",
};

const icons: Record<string, JSX.Element> = {
  "Frontend Architecture": <Code2 size={24} />,
  "State & Logic": <Cpu size={24} />,
  "Tools & Ecosystem": <Wrench size={24} />,
  "Professional Skills": <Briefcase size={24} />,
};

export default function Capabilities() {
  return (
    <section id="capabilities" className="w-full">
      <Container>
        <SectionHeading
          title="Capabilities"
          subtitle="Engineering robust interfaces with a focus on logic and performance."
          darkText={true}
          className="mb-12 text-center"
        />

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillsData.map((group) => (
            <div
              key={group.category}
              className="bg-zinc-800 p-6 lg:p-8 rounded-3xl border border-zinc-700 hover:border-zinc-600 transition-colors flex flex-col"
            >
              <div className="flex items-center gap-3 mb-2 text-indigo-400">
                {icons[group.category]}
                <h3 className="text-lg font-bold uppercase text-white tracking-wide">
                  {group.category}
                </h3>
              </div>
              <p className="text-zinc-300 text-sm mb-6 leading-relaxed">
                {descriptions[group.category]}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 border border-zinc-700 text-zinc-200 text-xs rounded-full hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-white transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Active Learning */}
        <div className="bg-zinc-800 border border-indigo-900/50 p-6 lg:p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 hover:border-indigo-700 transition-colors">
          <BookOpen className="text-indigo-400 shrink-0" size={40} />
          
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-bold text-white mb-2">
              Active Learning Trajectory
            </h3>
            <p className="text-zinc-200 text-sm mb-4 leading-relaxed">
              I am currently bridging my frontend expertise with full-stack MERN capabilities to build end-to-end applications.
            </p>
            <div className="flex gap-2 flex-wrap justify-center md:justify-start">
              {siteConfig.currentlyLearning.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 border border-zinc-700 text-zinc-200 text-xs rounded-full hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}