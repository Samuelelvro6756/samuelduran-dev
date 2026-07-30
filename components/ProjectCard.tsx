import Link from "next/link";
import Image from "next/image";
import { Proyecto } from "@/types/project";
import { etiquetasEstado, etiquetasTipo } from "@/lib/labels";
import { generarSlug } from "@/lib/slug";

export default function ProjectCard({ proyecto }: { proyecto: Proyecto }) {
  return (
    <Link href={`/proyectos/${generarSlug(proyecto.titulo)}`} className="flex h-full">
      <div className="border rounded overflow-hidden h-full w-full flex flex-col">
        <Image
          src={proyecto.banner}
          alt={proyecto.titulo}
          width={400}
          height={160}
          className="w-full h-40 object-cover"
        />
        <div className="p-4 flex flex-col flex-1">
          <div className="flex items-center gap-1">
            <span className="text-xs uppercase font-semibold text-gray-500">
              {etiquetasEstado[proyecto.estado]}
            </span>
            <span className="text-xs text-gray-500">·</span>
            <span className="text-xs uppercase text-gray-500">
              {etiquetasTipo[proyecto.tipo]}
            </span>
          </div>
          <h2 className="font-semibold">{proyecto.titulo}</h2>
          <p className="text-sm text-gray-600">{proyecto.descripcion}</p>
          <p className="text-xs mt-auto pt-2">{proyecto.tecnologias.join(" · ")}</p>
        </div>
      </div>
    </Link>
  );
}