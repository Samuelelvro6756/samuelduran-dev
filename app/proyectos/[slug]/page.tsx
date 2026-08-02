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
        <div className="border-l-2 border-accent/40 pl-4 pb-3">
          <h2 className="text-sm uppercase text-accent font-semibold">Problema</h2>
          <p className="text-gray-300 mt-1">{proyecto.impacto.problema}</p>
        </div>
        <div className="border-l-2 border-accent/40 pl-4 pb-3">
          <h2 className="text-sm uppercase text-accent font-semibold">Resultado</h2>
          <p className="text-gray-300 mt-1">{proyecto.impacto.resultado}</p>
        </div>
        <div className="border-l-2 border-accent/40 pl-4 pb-3">
          <h2 className="text-sm uppercase text-accent font-semibold">Aprendizaje</h2>
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
          <div className="grid md:grid-cols-3 gap-8">
            {/* Columna principal */}
            <div className="md:col-span-2 flex flex-col gap-4">
              {proyecto.devHub.decisionTecnicaClave && (
                <div>
                  <h3 className="text-sm uppercase text-accent font-semibold">Decisión técnica clave</h3>
                  <p className="text-gray-300 mt-1">{proyecto.devHub.decisionTecnicaClave}</p>
                </div>
              )}

              {proyecto.devHub.arquitectura && (
                <div>
                  <h3 className="text-sm uppercase text-accent font-semibold">Arquitectura</h3>
                  <p className="text-gray-300 mt-1">{proyecto.devHub.arquitectura}</p>
                </div>
              )}

              {proyecto.devHub.diagramas && proyecto.devHub.diagramas.length > 0 && (
                <div>
                  <h3 className="text-sm uppercase text-accent font-semibold mb-2">Diagramas</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {proyecto.devHub.diagramas.map((url) => (
                      <img key={url} src={url} alt="Diagrama" className="rounded" />
                    ))}
                  </div>
                </div>
              )}

              {proyecto.devHub.galeria && proyecto.devHub.galeria.length > 0 && (
                <div>
                  <h3 className="text-sm uppercase text-accent font-semibold mb-2">Galería</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {proyecto.devHub.galeria.map((url) => (
                      <img key={url} src={url} alt="Galería" className="rounded" />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Columna lateral de recursos */}
            <div className="flex flex-col gap-2 md:border-l md:border-white/10 md:pl-6">
              <h3 className="text-sm uppercase text-accent font-semibold mb-1">Recursos</h3>

              {proyecto.devHub.readme && (
                <LinkBadge href={proyecto.devHub.readme} {...iconosEnlace.readme} />
              )}

              {proyecto.devHub.descargas && proyecto.devHub.descargas.length > 0 &&
                proyecto.devHub.descargas.map((descarga) => (
                  <LinkBadge
                    key={descarga.url}
                    href={descarga.url}
                    icon={iconosEnlace.descarga.icon}
                    color={iconosEnlace.descarga.color}
                    label={descarga.nombre}
                  />
                ))}
            </div>
          </div>
        </DevHubToggle>
      )}
    </main>
  );
}