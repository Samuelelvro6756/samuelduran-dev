import Image from "next/image"
import DevHubToggle from "@/components/DevHubToggle";
import Badge from "@/components/Badge";
import TechBadge from "@/components/TechBadge";
import LinkBadge from "@/components/LinkBadge";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { etiquetasEstado, etiquetasTipo, coloresEstado, iconosEstado, iconosTipo, iconosEnlace } from "@/lib/labels";
import { generarSlug } from "@/lib/slug";
import { proyectos } from "@/data/projects";

export default async function ProyectoDetallePage({ params, }: { params: Promise<{ slug: string }>; }) {
  const { slug } = await params;
  const proyecto = proyectos.find((p) => generarSlug(p.titulo) === slug);
  
  if (!proyecto) {
    return <main className="p-8">Proyecto no encontrado</main>;
  }
  
  const esUPC = proyecto.titulo === "Ultimate Power Chess";

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <Link
        href="/proyectos"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-accent transition-colors mb-4"
      >
        <ArrowLeft size={16} />
        Volver a proyectos
      </Link>
      <div className="flex items-center gap-1 mt-2 pb-2">
        <Badge colorClasses={coloresEstado[proyecto.estado]} icon={iconosEstado[proyecto.estado]}>
          {etiquetasEstado[proyecto.estado]}
        </Badge>
        {proyecto.tipo.slice(0, 2).map((t) => (
          <Badge key={t} colorClasses="bg-muted/15 text-muted border-muted/30" icon={iconosTipo[t]}>
            {etiquetasTipo[t]}
          </Badge>
        ))}
      </div>

      <div className={esUPC ? "relative upc-wrapper-static" : ""}>
        {esUPC && <div className="upc-glow-static" aria-hidden="true" />}
        <Image
          src={proyecto.banner}
          alt={proyecto.titulo}
          width={1200}
          height={630}
          className="relative z-10 w-full h-auto object-cover rounded"
          priority
        />
      </div>
      <h1 className="text-2xl font-semibold mt-6">{proyecto.titulo}</h1>
      <p className="text-gray-600 mt-2">{proyecto.descripcion}</p>
      <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
        {proyecto.tecnologias.map((tech) => (
          <TechBadge key={tech} nombre={tech} />
        ))}
      </div>

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
          <LinkBadge href={proyecto.enlaces.github} {...iconosEnlace.github} />
        )}
        {proyecto.enlaces.demo && (
          <LinkBadge href={proyecto.enlaces.demo} {...iconosEnlace.demo} />
        )}
        {proyecto.enlaces.itch && (
          <LinkBadge href={proyecto.enlaces.itch} {...iconosEnlace.itch} />
        )}
      </div>
        
      {proyecto.devHub && (
        <DevHubToggle>
          {proyecto.devHub.decisionTecnicaClave && (
            <div className="mb-4">
              <h3 className="text-sm uppercase text-gray-500 font-semibold">Decisión técnica clave</h3>
              <p className="text-gray-300 mt-1">{proyecto.devHub.decisionTecnicaClave}</p>
            </div>
          )}
          
          {proyecto.devHub.arquitectura && (
            <div className="mb-4 pt-4">
              <h3 className="text-sm uppercase text-gray-500 font-semibold">Arquitectura</h3>
              <p className="text-gray-300 mt-1">{proyecto.devHub.arquitectura}</p>
            </div>
          )}

          {proyecto.devHub.diagramas && proyecto.devHub.diagramas.length > 0 && (
            <div className="mb-4 pt-4">
              <h3 className="text-sm uppercase text-gray-500 font-semibold mb-2">Diagramas</h3>
              <div className="grid grid-cols-2 gap-2">
                {proyecto.devHub.diagramas.map((url) => (
                  <img key={url} src={url} alt="Diagrama" className="rounded" />
                ))}
              </div>
            </div>
          )}

          {proyecto.devHub.galeria && proyecto.devHub.galeria.length > 0 && (
            <div className="mb-4 pt-4">
              <h3 className="text-sm uppercase text-gray-500 font-semibold mb-2">Galería</h3>
              <div className="grid grid-cols-2 gap-2">
                {proyecto.devHub.galeria.map((url) => (
                  <img key={url} src={url} alt="Galería" className="rounded" />
                ))}
              </div>
            </div>
          )}

          {proyecto.devHub.readme && (
            <div className="mb-4 pt-4">
              <h3 className="text-sm uppercase text-gray-500 font-semibold mb-2">Read me</h3>
              {proyecto.devHub.readme && (
                <LinkBadge href={proyecto.devHub.readme} {...iconosEnlace.readme} />
              )}
            </div>
          )}

         {proyecto.devHub.descargas && proyecto.devHub.descargas.length > 0 && (
            <div className="pt-4">
              <h3 className="text-sm uppercase text-gray-500 font-semibold mb-2">Descargas</h3>
              {proyecto.devHub.descargas.map((descarga) => (
                <LinkBadge key={descarga.url} href={descarga.url} icon={iconosEnlace.descarga.icon} color={iconosEnlace.descarga.color} label={descarga.nombre} />
              ))}
            </div>
          )}
        </DevHubToggle>
      )}
    </main>
  );
}