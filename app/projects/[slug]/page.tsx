import { notFound } from "next/navigation";
import { portfolioData } from "@/data/portfolioData";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectOverview from "@/components/project/ProjectOverview";
import ProjectFeatures from "@/components/project/ProjectFeatures";
import ProjectTechStack from "@/components/project/ProjectTechStack";
import ProjectChallenges from "@/components/project/ProjectChallenges";
import ProjectGallery from "@/components/project/ProjectGallery";
import ProjectNavigation from "@/components/project/ProjectNavigation";
import ProjectVideoGallery from "@/components/project/ProjectVideoGallery";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";
export function generateStaticParams() {
  return portfolioData.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const project = portfolioData.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-[#fafafa] pt-20 ">
      <article className="w-full flex flex-col gap-20 md:gap-32">
        <div className="fixed top-8  z-50   lg:left-8 right-8">
          <Button
            href="/"
            variant="outline"
            className="rounded-full shadow-lg backdrop-blur-md bg-zinc-900 hover:bg-zinc-800 px-4 md:px-6"
          >
            <ArrowLeft size={16} className="mr-2" /> Home
          </Button>
        </div>
        {/* The Hero Section */}
        <ProjectHero project={project} />

        {/* The Deep Dive Sections */}
        <ProjectOverview project={project} />
        <ProjectFeatures project={project} />
        <ProjectTechStack project={project} />
        <ProjectChallenges project={project} />
        <ProjectGallery project={project} />
        {project.gallery && project.gallery.length > 0 && (
          <ProjectVideoGallery videos={project.gallery} />
        )}
      </article>
      <ProjectNavigation currentProjectId={project.id} />
    </main>
  );
}