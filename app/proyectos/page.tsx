import { proyectos } from "@/data/projects";
import { etiquetasEstado } from "@/lib/labels";
import Image from "next/image"

export default function Projects() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold mb-6">Proyectos</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {proyectos.map((proyecto) => (
          <div key={proyecto.titulo} className="border rounded overflow-hidden">
            <Image src={proyecto.banner} alt={proyecto.titulo} width={400} height={160} className="w-full h-40 object-cover"/>
            <div className="p-4">
              <span className="text-xs uppercase font-semibold text-gray-500">{etiquetasEstado[proyecto.estado]}</span>
              <h2 className="font-semibold">{proyecto.titulo}</h2>
              <p className="text-sm text-gray-600">{proyecto.descripcion}</p>
              <p className="text-xs mt-2">{proyecto.tecnologias.join(" · ")}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}