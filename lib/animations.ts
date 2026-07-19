// lib/animations.ts
import { Variants } from "framer-motion";

// 1. Global Navbar Transition
export const navVariants: Variants = {
  hidden: { opacity: 0, y: -15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// 2. Main Hero Parent Stagger Layout
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    }
  }
};

// 3. Stagger Child Item Drop-In
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] } 
  }
};

// 4. Scroll Reveal Card Logic
export const scrollRevealVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

// 5. Premium Infinite Floating + Pulsing Border for Project Logo
export const logoFloatVariants: Variants = {
  animate: {
    y: [0, -6, 0],
    borderColor: [
      "rgba(228, 228, 231, 0.8)",
      "rgba(99, 102, 241, 0.6)",
      "rgba(228, 228, 231, 0.8)"
    ],
    boxShadow: [
      "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
      "0 10px 15px -3px rgba(99, 102, 241, 0.15), 0 4px 6px -2px rgba(99, 102, 241, 0.1)",
      "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)"
    ],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// ✅ Add Variants typing everywhere
export const tagContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.12,
    },
  },
};

export const tagPopVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

export const cardContentVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export const sectionFadeVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const slideVariants: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",   
    opacity: 0,                    
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { 
      duration: 1.2, 
      ease: [0.32, 0.72, 0, 1] 
    },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-100%" : "100%", 
    opacity: 0,
    transition: { 
      duration: 1.2, 
      ease: [0.32, 0.72, 0, 1] 
    },
  }),
};