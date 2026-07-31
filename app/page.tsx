import Link from "next/link";
import Image from "next/image";
import { proyectos } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";

export default function Home() {
  const destacados = proyectos.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="p-8 max-w-4xl mx-auto text-center py-24">
        <Image
          src="/perfil/foto.jpeg"
          alt="Samuel Durán"
          width={100}
          height={100}
          className="rounded-full object-cover object-top mx-auto mb-4"
          priority
        />
        <h1 className="text-3xl font-semibold">Samuel Durán Cardenas</h1>
        <p className="text-gray-400 mt-2">Desarrollador de Software</p>
        <p className="text-gray-300 mt-6 max-w-xl mx-auto">
          Construyo software con arquitectura pensada para durar, no solo
          para funcionar. Actualmente en búsqueda de mi primera oportunidad
          como desarrollador.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <Button href="/perfil/cv.pdf" external variant="primary">
            Descargar CV
          </Button>
          <Button href="/contacto" variant="secondary">
            Contactar
          </Button>
        </div>
      </section>

      {/* Proyectos destacados */}
      <section className="p-8 max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold mb-6">Proyectos Destacados</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destacados.map((proyecto) => (
            <ProjectCard key={proyecto.titulo} proyecto={proyecto} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/proyectos" className="text-sm underline">
            Ver todos los proyectos
          </Link>
        </div>
      </section>
    </main>
  );
}