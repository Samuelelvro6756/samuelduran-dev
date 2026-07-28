import Image from "next/image"
import { etiquetasEstado, etiquetasTipo } from "@/lib/labels";
import { proyectos } from "@/data/projects";
import { generarSlug } from "@/lib/slug";

export default async function ProyectoDetallePage({ params, }: { params: Promise<{ slug: string }>; }) {
  const { slug } = await params;
  const proyecto = proyectos.find((p) => generarSlug(p.titulo) === slug);

  if (!proyecto) {
    return <main className="p-8">Proyecto no encontrado</main>;
  }

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <div className="flex items-center gap-1 mt-2 pb-2">
        <span className="text-xs uppercase font-semibold text-gray-500">{etiquetasEstado[proyecto.estado]}</span>
        <span className="text-xs text-gray-500">·</span>
        <span className="text-xs uppercase text-gray-500">{etiquetasTipo[proyecto.tipo]}</span>
      </div>

      <Image src={proyecto.banner} alt={proyecto.titulo} width={1200} height={630} className="w-full h-auto object-cover rounded"priority />
      <h1 className="text-2xl font-semibold mt-6">{proyecto.titulo}</h1>
      <p className="text-gray-600 mt-2">{proyecto.descripcion}</p>
      <p className="text-xs text-gray-500 mt-2">{proyecto.tecnologias.join(" · ")}</p>

      <div className="mt-8 flex flex-col gap-4">
        <div className="pb-3">
          <h2 className="text-sm uppercase text-gray-500 font-semibold">Problema</h2>
          <p className="text-gray-300 mt-1">{proyecto.impacto.problema}</p>
        </div>
        <div className="pb-3">
          <h2 className="text-sm uppercase text-gray-500 font-semibold">Resultado</h2>
          <p className="text-gray-300 mt-1">{proyecto.impacto.resultado}</p>
        </div>
        <div className="pb-3">
          <h2 className="text-sm uppercase text-gray-500 font-semibold">Aprendizaje</h2>
          <p className="text-gray-300 mt-1">{proyecto.impacto.aprendizaje}</p>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        {proyecto.enlaces.github && (
          <a href={proyecto.enlaces.github} target="_blank" rel="noopener noreferrer" className="text-sm underline">
            GitHub
          </a>
        )}
        {proyecto.enlaces.demo && (
          <a href={proyecto.enlaces.demo} target="_blank" rel="noopener noreferrer" className="text-sm underline">
            Demo
          </a>
        )}
        {proyecto.enlaces.itch && (
          <a href={proyecto.enlaces.itch} target="_blank" rel="noopener noreferrer" className="text-sm underline">
            Itch.io
          </a>
        )}
      </div>
    </main>
  );
}