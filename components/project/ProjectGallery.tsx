"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import { ProjectItem } from "@/data/portfolioData";
import { Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import { slideVariants, sectionFadeVariants, cardContentVariants } from "@/lib/animations";

interface ProjectGalleryProps {
  project: ProjectItem;
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  if (!project.gallery || project.gallery.length === 0) return null;

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % project.gallery!.length);
  };
  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + project.gallery!.length) % project.gallery!.length);
  };

  return (
    <section id="gallery" className="w-full">
      <Container className="py-0 md:py-0">

        <motion.div
          variants={sectionFadeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-between items-end mb-12 border-b border-zinc-800 pb-4"
        >
          <h2 className="text-sm font-black uppercase tracking-widest text-zinc-800 flex items-center gap-3">
            <Maximize2 size={18} className="text-indigo-500" /> Interface Gallery
          </h2>
          <span className="text-zinc-500 text-xs font-bold tracking-widest">
            {index + 1} / {project.gallery.length}
          </span>
        </motion.div>
        
        <motion.div
          variants={cardContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative group bg-zinc-800 rounded-3xl overflow-hidden border border-zinc-700 aspect-video"
        >
          <AnimatePresence custom={direction}>
            <motion.img
              key={index}
              src={project.gallery[index]}
              alt={`Screenshot ${index + 1}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-indigo-600 text-white rounded-full transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-indigo-600 text-white rounded-full transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>
      </Container>
    </section>
  );
}
