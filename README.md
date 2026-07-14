<div align="center">
  <img src="https://img.shields.io/badge/NEXT.JS-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TYPESCRIPT-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/TAILWIND-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/FRAMER_MOTION-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  
  <br/>
  <br/>

  <h1>🚀 Awazii.dev | Engineering Portfolio</h1>
  <p><b>A highly optimized, statically generated developer portfolio built with Next.js 15 and strict TypeScript.</b></p>
  
  <a href="https://awazii.vercel.app/"><strong>🛑 View Live Site</strong></a>
</div>

<br/>

> This repository houses my personal engineering portfolio. It was designed to be a technical showcase of modern frontend architecture, featuring dynamic routing, reusable type-safe components, and complex page transitions.

---

## 📸 Interface Preview

*(Pro-tip: Delete this text and drag-and-drop a screenshot of your dark-themed Hero section here!)*

---

## 🧠 Architectural Highlights

This portfolio isn't just a static template; it's a scalable web application built with a modular component architecture.

### 1. Dynamic Project Routing (`app/projects/[slug]`)
Utilized Next.js App Router and dynamic route parameters to map over local datasets (`portfolioData.ts`). This allows new case studies to be injected programmatically, generating static HTML at build time for instantaneous page loads.

### 2. Extensible UI Component Library
Engineered a custom, reusable UI component library (e.g., `<Button />`, `<ProjectNavigation />`, `<FixedNav />`) using a spread-attribute architecture (`...props`) combined with `React.AnchorHTMLAttributes`. This ensures all components are fully accessible, type-safe, and future-proof without prop-drilling.

### 3. Motion & Interaction State
Integrated Framer Motion to handle complex entrance animations, scroll-triggered layout reveals, and continuous looping animations. The animation logic is decoupled from the UI markup to maintain clean, readable components.

### 4. The "Deep Zinc" Design System
Implemented a custom design token system using Tailwind CSS, focusing on deep dark-mode aesthetics (`zinc-900`), fluid typography, and glass-morphism effects (`backdrop-blur`).

---
