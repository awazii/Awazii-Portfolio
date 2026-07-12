"use client";
import { useState } from "react";
import Container from "@/components/ui/Container";
import { ProjectItem } from "@/data/portfolioData";
import { Maximize2, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectGalleryProps {
  project: ProjectItem;
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  if (!project.gallery || project.gallery.length === 0) return null;

  const next = () => setIndex((i) => (i + 1) % project.gallery!.length);
  const prev = () => setIndex((i) => (i - 1 + project.gallery!.length) % project.gallery!.length);

  return (
    <section className="w-full">
      <Container className="py-0 md:py-0">
        <div className="flex justify-between items-end mb-12 border-b border-zinc-800 pb-4">
          <h2 className="text-sm font-black uppercase tracking-widest text-zinc-800 flex items-center gap-3">
            <Maximize2 size={18} className="text-indigo-500" /> Interface Gallery
          </h2>
  
          <span className="text-zinc-500 text-xs font-bold tracking-widest">
            {index + 1} / {project.gallery.length}
          </span>
        </div>
        
        <div className="relative group bg-zinc-800 rounded-3xl overflow-hidden border border-zinc-700 aspect-video">
          <img
            src={project.gallery[index]}
            alt={`Screenshot ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <button onClick={prev} className="absolute left-4 top-1/2 p-2 bg-black/50 hover:bg-indigo-600 text-white rounded-full transition-colors"><ChevronLeft /></button>
          <button onClick={next} className="absolute right-4 top-1/2 p-2 bg-black/50 hover:bg-indigo-600 text-white rounded-full transition-colors"><ChevronRight /></button>
        </div>
      </Container>
    </section>
  );
}