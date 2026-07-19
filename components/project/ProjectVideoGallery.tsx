"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import { ProjectItem } from "@/data/portfolioData"; // 🚀 Added import
import { Play, Pause, ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import { sectionFadeVariants, cardContentVariants, slideVariants } from "@/lib/animations";

interface ProjectVideoGalleryProps {
  project: ProjectItem;
}

export default function ProjectVideoGallery({ project }: ProjectVideoGalleryProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const videos = project.gallery?.videos || [];

  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
  }, [index]);

  if (videos.length === 0) return null;

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % videos.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + videos.length) % videos.length);
  };

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      if (duration) {
        setProgress((current / duration) * 100);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const seekTime = (Number(e.target.value) / 100) * videoRef.current.duration;
      videoRef.current.currentTime = seekTime;
      setProgress(Number(e.target.value));
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="w-full">
      <Container>
        <motion.div
          variants={sectionFadeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-between items-end mb-12 border-b border-zinc-800 pb-4"
        >
          <h2 className="text-sm font-black uppercase tracking-widest text-zinc-800 flex items-center gap-3">
            <Play size={18} className="text-indigo-500" /> Technical Demos
          </h2>
          <span className="text-zinc-500 text-xs font-bold tracking-widest uppercase">
            {index + 1} / {videos.length}
          </span>
        </motion.div>

        <motion.div
          variants={cardContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative group bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-700 aspect-video shadow-2xl"
        >
          <AnimatePresence custom={direction} initial={false}>
            <motion.video
              key={videos[index]}
              ref={(el) => {
                if (el) videoRef.current = el;
              }}
              muted={isMuted}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              onClick={() => togglePlay()}
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              className="absolute inset-0 w-full h-full object-contain cursor-pointer"
            >
              <source src={videos[index]} type="video/mp4" />
            </motion.video>
          </AnimatePresence>

          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div className="bg-black/50 text-white p-4 rounded-full backdrop-blur-sm border border-white/10">
                <Play size={40} className="ml-1" />
              </div>
            </div>
          )}

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col gap-3">

            <input
              type="range"
              min="0"
              max="100"
              value={progress || 0}
              onChange={handleSeek}
              className="w-full h-1.5 bg-zinc-600 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />

            <div className="flex items-center justify-between mt-1">
              <div className="flex items-center gap-5">
                <button onClick={togglePlay} className="text-white hover:text-indigo-400 transition-colors">
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>
                <button onClick={toggleMute} className="text-white hover:text-indigo-400 transition-colors">
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
              </div>
            </div>
          </div>
          {
            videos.length > 1 &&
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-indigo-600 text-white rounded-full transition-colors z-20 opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/10"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-indigo-600 text-white rounded-full transition-colors z-20 opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/10"
              >
                <ChevronRight size={20} />
              </button>
            </>
          }
        </motion.div>
      </Container>
    </section>
  );
}