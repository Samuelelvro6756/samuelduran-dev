import { Proyecto } from "@/types/project";

export const proyectos: Proyecto[] = [
  {
    titulo: "Gafas Inteligentes para Personas con Discapacidad Visual",
    banner: "https://raw.githubusercontent.com/Samuelelvro6756/Gafas-de-Proximidad-para-Invidentes/main/Presentación/banner.png",
    descripcion: "Sistema portátil de asistencia mediante sensores ultrasónicos y alertas multimodales, desarrollado con ESP32.",
    tecnologias: ["ESP32", "Arduino", "C++"],
    estado: "prototipo",
    tipo: "innovacion-social",
    visibilidad: "publico",
    enlaces: {
      github: "https://github.com/Samuelelvro6756/Gafas-de-Proximidad-para-Invidentes",
      video: "https://raw.githubusercontent.com/Samuelelvro6756/Gafas-de-Proximidad-para-Invidentes/main/Presentación/Presentación.mp4",
    },
    impacto: {
      problema: "Falta de herramientas de bajo costo para asistir la movilidad de personas con discapacidad visual.",
      decisionTecnicaClave: "Priorizar componentes económicos y una arquitectura sencilla para facilitar mejoras futuras.",
      resultado: "Ganador del Foro Educativo Departamental del Quindío 2025, validado con una persona con discapacidad visual real.",
      aprendizaje: "Integración de sensores ultrasónicos y diseño de soluciones con impacto social real.",
    },
    devHub: {
      diagramas: [
        "https://raw.githubusercontent.com/Samuelelvro6756/Gafas-de-Proximidad-para-Invidentes/main/Diagramas/funcionamiento_general.jpeg",
        "https://raw.githubusercontent.com/Samuelelvro6756/Gafas-de-Proximidad-para-Invidentes/main/Diagramas/diagrama_flujo.jpeg",
        "https://raw.githubusercontent.com/Samuelelvro6756/Gafas-de-Proximidad-para-Invidentes/main/Diagramas/diagrama_conexiones.jpeg",
      ],
      galeria: [
        "https://raw.githubusercontent.com/Samuelelvro6756/Gafas-de-Proximidad-para-Invidentes/main/Imágenes/prototipo1.jpeg",
        "https://raw.githubusercontent.com/Samuelelvro6756/Gafas-de-Proximidad-para-Invidentes/main/Imágenes/prototipo2.jpeg",
        "https://raw.githubusercontent.com/Samuelelvro6756/Gafas-de-Proximidad-para-Invidentes/main/Imágenes/proceso1.jpeg",
        "https://raw.githubusercontent.com/Samuelelvro6756/Gafas-de-Proximidad-para-Invidentes/main/Imágenes/proceso2.jpeg",
        "https://raw.githubusercontent.com/Samuelelvro6756/Gafas-de-Proximidad-para-Invidentes/main/Imágenes/muestra0.jpeg",
        "https://raw.githubusercontent.com/Samuelelvro6756/Gafas-de-Proximidad-para-Invidentes/main/Imágenes/muestra1.jpeg",
        "https://raw.githubusercontent.com/Samuelelvro6756/Gafas-de-Proximidad-para-Invidentes/main/Imágenes/muestra2.jpeg",
        "https://raw.githubusercontent.com/Samuelelvro6756/Gafas-de-Proximidad-para-Invidentes/main/Imágenes/muestra3.jpeg",
        "https://raw.githubusercontent.com/Samuelelvro6756/Gafas-de-Proximidad-para-Invidentes/main/Imágenes/muestra4.jpeg",
        "https://raw.githubusercontent.com/Samuelelvro6756/Gafas-de-Proximidad-para-Invidentes/main/Imágenes/foro2025.jpeg",
      ],
    },
  },
];