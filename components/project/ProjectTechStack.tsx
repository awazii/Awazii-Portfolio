// components/projects/ProjectTechStack.tsx
import Container from "@/components/ui/Container";
import { ProjectItem } from "@/data/portfolioData";
import { Code2 } from "lucide-react";

interface ProjectTechStackProps {
  project: ProjectItem;
}

export default function ProjectTechStack({ project }: ProjectTechStackProps) {
  return (
    <section className="w-full bg-[#fafafa] ">
      <Container className="py-0 md:py-0">
        
        {/* Tech Stack Container */}
        <div className="bg-zinc-800 border border-zinc-700 rounded-3xl p-8 lg:p-12 shadow-sm">
          <h2 className="text-sm font-black uppercase tracking-widest text-white mb-8 border-b border-zinc-700 pb-4 flex items-center gap-3">
            <Code2 size={18} className="text-indigo-500" />
            Technologies Used
          </h2>
          
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2  hover:text-indigo-300
                hover:border-indigo-500 border border-zinc-600 text-zinc-200  text-sm font-bold rounded-xl transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
      </Container>
    </section>
  );
}