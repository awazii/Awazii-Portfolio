"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import { ProjectItem } from "@/data/portfolioData";
import { Maximize2, ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react"; 
import { slideVariants, sectionFadeVariants, cardContentVariants } from "@/lib/animations";

interface ProjectGalleryProps {
  project: ProjectItem;
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false); 
  
  const galleryRef = useRef<HTMLDivElement>(null); 

  const images = project.gallery?.images || [];

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  if (images.length === 0) return null;

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % images.length);
  };
  
  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const toggleFullScreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!document.fullscreenElement) {
      galleryRef.current?.requestFullscreen().catch(err => console.error("Fullscreen error:", err));
    } else {
      document.exitFullscreen();
    }
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
            {index + 1} / {images.length}
          </span>
        </motion.div>
        
        <motion.div
          ref={galleryRef} 
          variants={cardContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative group bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-700 aspect-video shadow-2xl"
        >
          <AnimatePresence custom={direction} initial={false}>
            <motion.img
              key={index}
              src={images[index]}
              alt={`Screenshot ${index + 1}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </AnimatePresence>

          <button
            onClick={toggleFullScreen}
            className="absolute bottom-4 right-4 p-2 md:p-3 bg-black/50 hover:bg-indigo-600 text-white rounded-full transition-colors z-20 opacity-100 md:opacity-0 md:group-hover:opacity-100 backdrop-blur-sm border border-white/10"
          >
            {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/50 hover:bg-indigo-600 text-white rounded-full transition-colors z-20 opacity-100 md:opacity-0 md:group-hover:opacity-100 backdrop-blur-sm border border-white/10"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/50 hover:bg-indigo-600 text-white rounded-full transition-colors z-20 opacity-100 md:opacity-0 md:group-hover:opacity-100 backdrop-blur-sm border border-white/10"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </motion.div>
      </Container>
    </section>
  );
}