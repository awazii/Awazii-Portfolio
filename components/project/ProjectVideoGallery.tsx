"use client";
import { useState } from "react";
import Container from "@/components/ui/Container";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectVideoGallery({ videos }: { videos: string[] }) {
  const [index, setIndex] = useState(0);
  
  if (!videos || videos.length === 0) return null;

  const next = () => setIndex((i) => (i + 1) % videos.length);
  const prev = () => setIndex((i) => (i - 1 + videos.length) % videos.length);

  return (
    <section className="w-full">
      <Container>
        <div className="flex justify-between items-end mb-12 border-b border-zinc-800 pb-4">
          <h2 className="text-sm font-black uppercase tracking-widest text-zinc-800 flex items-center gap-3">
            <Play size={18} className="text-indigo-500" /> Technical Demos
          </h2>
          <span className="text-zinc-500 text-xs font-bold tracking-widest uppercase">
            {index + 1} / {videos.length}
          </span>
        </div>

        <div className="relative group bg-zinc-800 rounded-3xl overflow-hidden border border-zinc-700 aspect-video shadow-2xl">
          <video 
            key={videos[index]} 
            controls 
            className="w-full h-full object-cover"
          >
            <source src={videos[index]} type="video/mp4" />
          </video>

          {/* Navigation Controls */}
          <button 
            onClick={prev} 
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-indigo-600 text-white rounded-full transition-all z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={next} 
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-indigo-600 text-white rounded-full transition-all z-10"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </Container>
    </section>
  );
}