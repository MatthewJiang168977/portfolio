import PixelCard from "@/components/ui/PixelCard";
import PixelButton from "@/components/ui/PixelButton";
import { projects } from "@/components/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl text-cyan-400 mb-4 pixel-text text-center">
          PROJECTS
        </h1>
        <p className="text-[10px] sm:text-xs text-gray-400 text-center mb-12 max-w-xl mx-auto leading-relaxed">
          &gt;_ a few things I&apos;ve built. more details, links, and screenshots coming soon.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <PixelCard key={project.title} className="flex flex-col gap-3">
              <div>
                <h2 className="text-sm sm:text-base text-pink-400 mb-1">{project.title}</h2>
                <p className="text-[10px] sm:text-xs text-cyan-300">{project.tagline}</p>
              </div>

              <p className="text-[10px] sm:text-xs text-gray-200 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[8px] sm:text-[10px] bg-black border-2 border-cyan-400 text-cyan-400 px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-2 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <PixelButton href={project.liveUrl} external color="green">
                    LIVE SITE
                  </PixelButton>
                )}
                {project.repoUrl && (
                  <PixelButton href={project.repoUrl} external color="white">
                    CODE
                  </PixelButton>
                )}
                {!project.liveUrl && !project.repoUrl && project.note && (
                  <span className="text-[8px] sm:text-[10px] text-gray-400 border-2 border-gray-500 px-2 py-1 inline-block">
                    {project.note}
                  </span>
                )}
                {!project.liveUrl && !project.repoUrl && !project.note && (
                  <span className="text-[8px] sm:text-[10px] text-yellow-400 border-2 border-dashed border-yellow-400 px-2 py-1 inline-block">
                    LINKS COMING SOON
                  </span>
                )}
              </div>
            </PixelCard>
          ))}
        </div>
      </div>
    </main>
  );
}
