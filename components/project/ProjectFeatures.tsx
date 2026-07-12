// components/projects/ProjectFeatures.tsx
import Container from "@/components/ui/Container";
import { ProjectItem } from "@/data/portfolioData";
import { CheckCircle2, Zap, Database, ShieldCheck, LayoutGrid, Terminal } from "lucide-react";

interface ProjectFeaturesProps {
  project: ProjectItem;
}

// Icon mapping for features
const featureIcons = [Zap, Database, LayoutGrid, ShieldCheck, Terminal, CheckCircle2];

export default function ProjectFeatures({ project }: ProjectFeaturesProps) {
  if (!project.features || project.features.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-[#fafafa]">
      <Container className="py-0 md:py-0">
        
        {/* Dark Feature Container */}
        <div className="bg-zinc-800 rounded-3xl p-8 lg:p-12 border border-zinc-700 shadow-xl shadow-zinc-800/10">
          <h2 className="text-sm font-black uppercase tracking-widest text-white mb-8 border-b border-zinc-700 pb-4 flex items-center gap-3">
            <CheckCircle2 size={18} className="text-indigo-500" />
            Key Features
          </h2>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-y-8 gap-x-6 lg:gap-x-8 gap-y-4">
            {project.features.map((feature, index) => {
              // Cycle through icons using the index
              const Icon = featureIcons[index % featureIcons.length];
              
              return (
                <li key={index} className="flex items-start gap-4 text-zinc-300 text-sm font-medium leading-relaxed group">
                  <div className="mt-0.5 p-1.5 rounded-lg bg-zinc-800 border border-zinc-700 group-hover:border-indigo-500 transition-colors">
                    <Icon size={16} className="text-indigo-400" />
                  </div>
                  {feature}
                </li>
              );
            })}
          </ul>
        </div>
        
      </Container>
    </section>
  );
}