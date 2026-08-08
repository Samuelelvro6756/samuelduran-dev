import { proyectos } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Proyectos — Samuel Durán",
  description: "Portafolio de proyectos de Samuel Durán: desarrollo web, videojuegos, hardware e innovación social.",
};

export default function Projects() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold mb-6">Proyectos</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {proyectos.map((proyecto) => (
          <ProjectCard key={proyecto.titulo} proyecto={proyecto} />
        ))}
      </div>
    </main>
  );
}