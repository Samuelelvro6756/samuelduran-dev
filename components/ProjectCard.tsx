import Link from "next/link";
import Image from "next/image";
import Badge from "./Badge";
import { Proyecto } from "@/types/project";
import { etiquetasEstado, etiquetasTipo, coloresEstado, iconosEstado, iconosTipo } from "@/lib/labels";
import { generarSlug } from "@/lib/slug";

export default function ProjectCard({ proyecto }: { proyecto: Proyecto }) {
  return (
    <Link href={`/proyectos/${generarSlug(proyecto.titulo)}`} className="flex h-full">
      <div className="border rounded overflow-hidden h-full w-full flex flex-col bg-background">
        <Image
          src={proyecto.banner}
          alt={proyecto.titulo}
          width={400}
          height={160}
          className="w-full h-40 object-cover"
        />
        <div className="p-4 flex flex-col flex-1">
          <div className="flex items-center gap-1 mb-1">
            <Badge colorClasses={coloresEstado[proyecto.estado]} icon={iconosEstado[proyecto.estado]}>
            {etiquetasEstado[proyecto.estado]}
            </Badge>
            {proyecto.tipo.slice(0, 2).map((t) => (
              <Badge key={t} colorClasses="bg-muted/15 text-muted border-muted/30" icon={iconosTipo[t]}>
                {etiquetasTipo[t]}
              </Badge>
            ))}
          </div>
          <h2 className="font-semibold">{proyecto.titulo}</h2>
          <p className="text-sm text-gray-600">{proyecto.descripcion}</p>
          <p className="text-xs mt-auto pt-2">{proyecto.tecnologias.join(" · ")}</p>
        </div>
      </div>
    </Link>
  );
}