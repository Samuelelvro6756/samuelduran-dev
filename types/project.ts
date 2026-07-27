type Estado = "prototipo" | "en-desarrollo" | "finalizado" | "pausado" | "investigacion" | "produccion";
type Tipo = "software" | "videojuego" | "innovacion-social" | "electronica" | "investigacion" | "privado" | "experimento";
type Visibilidad = "publico" | "parcial" | "privado";

export interface Proyecto 
{
  titulo: string;
  banner: string;
  descripcion: string;
  tecnologias: string[];
  estado: Estado;
  tipo: Tipo;
  visibilidad: Visibilidad;
  enlaces: {
    github?: string;
    demo?: string;
    itch?: string;
    video?: string;
  };
  impacto: {
    problema: string;
    decisionTecnicaClave: string;
    resultado: string;
    aprendizaje: string;
  };
  devHub?: {
    arquitectura?: string;
    diagramas?: string[];
    galeria?: string[];
    readme?: string;
    descargas?: string[];
  };

}