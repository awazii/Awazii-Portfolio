// components/home/FeaturedProjects.tsx
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ExternalLink, ArrowRight, Layers, Activity, MonitorSmartphone } from "lucide-react";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="w-full">
      <Container>
        <SectionHeading
          title="Featured Projects"
          subtitle="A showcase of my most recent and impactful work."
          darkText={true}
          className="mb-12 text-center"
        />

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-800 p-6 lg:p-8 rounded-3xl border border-zinc-700 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-black/40 transition-all duration-300 flex flex-col group overflow-hidden"
            >
              
              {/* Header & Status Badges (Fully Fluid Responsive) */}
              <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                
                {/* Icon & Title */}
                <div className="flex items-center gap-3 max-w-full">
                  <div className="p-2.5 bg-zinc-800/50 rounded-xl border border-zinc-700/50 text-indigo-400 shrink-0">
                    <Layers size={20} />
                  </div>
                  <h3 className="text-xl font-black text-white group-hover:text-indigo-400 transition-colors truncate">
                    {project.title}
                  </h3>
                </div>

                {/* Status & Responsiveness Indicators */}
                <div className="flex flex-wrap gap-2">
                  <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase bg-zinc-900 text-zinc-200 px-3 py-1.5 rounded-full border border-zinc-600">
                    <Activity size={12} className="text-emerald-400 shrink-0" />
                    <span className="whitespace-nowrap">{project.metadata.status}</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase bg-zinc-900/50 text-zinc-400 px-3 py-1.5 rounded-full border border-zinc-700">
                    <MonitorSmartphone size={12} className="text-indigo-400 shrink-0" />
                    <span className="whitespace-nowrap">{project.metadata.responsiveness}</span>
                  </span>
                </div>

              </div>

              {/* Overview */}
              <p className="text-zinc-300 text-sm mb-8 flex-grow leading-relaxed">
                {project.overview}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex gap-2 mb-8 flex-wrap">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] uppercase font-bold text-zinc-200 bg-zinc-800 border border-zinc-600 px-3 py-1.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto pt-4 border-t border-zinc-700">
                <Link
                  href={`/projects/${project.id}`}
                  className="flex-1 py-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest bg-indigo-500 text-white hover:bg-indigo-600 transition-colors rounded-xl"
                >
                  Details <ArrowRight size={14} />
                </Link>

                {project.demoUrl && project.demoUrl !== "#" ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest border border-zinc-600 text-zinc-200 hover:bg-zinc-700 hover:text-white transition-colors rounded-xl"
                  >
                    Live <ExternalLink size={14} />
                  </a>
                ) : (
                  <span
                    className="flex-1 py-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest border border-zinc-700 bg-zinc-800/40 text-zinc-500 rounded-xl cursor-not-allowed"
                    title="Live demo not currently available"
                  >
                    Live <ExternalLink size={14} />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}