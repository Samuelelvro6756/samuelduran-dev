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
      readme: "https://github.com/Samuelelvro6756/Gafas-de-Proximidad-para-Invidentes/blob/main/README.md",
    },
  },
  {
    titulo: "WindowTale",
    banner: "https://github.com/Samuelelvro6756/WindowTale/raw/main/docs/banner.png",
    descripcion: "Bullet hell 2D donde tu escritorio es el campo de batalla: esquivas ataques de huesos con mecánicas de color y fragmentación sobre una ventana transparente, inspirado en Undertale y Just Shapes & Beats.",
    tecnologias: ["Unity", "C#"],
    estado: "en-desarrollo",
    tipo: "videojuego",
    visibilidad: "publico",
    enlaces: {
      github: "https://github.com/Samuelelvro6756/WindowTale",
      itch: "https://samuel-duran-cardenas.itch.io/windowtale",
    },
    impacto: {
      problema: "Explorar una mecánica poco común: usar el propio escritorio del usuario como parte del escenario de juego.",
      decisionTecnicaClave: "Uso de una ventana transparente para integrar el entorno real del usuario en la jugabilidad.",
      resultado: "Prototipo jugable con movimiento, dash, IA de huesos, sistema de vidas y fragmentación funcionando sobre el escritorio.",
      aprendizaje: "Manejo de ventanas del sistema operativo y diseño de mecánicas de precisión.",
    },
    devHub: {
      arquitectura: "Proyecto Unity organizado con la estructura estándar del motor (Assets/Scripts, Scenes, Prefabs, Sprites, Audio). El componente técnico central es la integración con una ventana transparente del sistema operativo, que permite renderizar el juego directamente sobre el escritorio de Windows en vez de en una ventana contenida tradicional.",
      galeria: [
        "https://github.com/Samuelelvro6756/WindowTale/raw/main/docs/gifs/survive.gif",
        "https://github.com/Samuelelvro6756/WindowTale/raw/main/docs/gifs/dash.gif",
        "https://github.com/Samuelelvro6756/WindowTale/raw/main/docs/gifs/wrap.gif",
        "https://github.com/Samuelelvro6756/WindowTale/raw/main/docs/gifs/difficult.gif",
      ],
      readme: "https://github.com/Samuelelvro6756/WindowTale/blob/main/README.md",
      descargas: [ 
        "https://github.com/Samuelelvro6756/WindowTale/releases", 
      ],
    },
  },
  {
    titulo: "PinScope",
    banner: "https://github.com/Samuelelvro6756/PinScope/raw/main/docs/banner.png",
    descripcion: "Plataforma experimental para la identificación y visualización interactiva de pinouts de ECUs automotrices.",
    tecnologias: ["HTML5", "CSS3", "JavaScript"],
    estado: "prototipo",
    tipo: "software",
    visibilidad: "publico",
    enlaces: {
      github: "https://github.com/Samuelelvro6756/PinScope",
    },
    impacto: {
      problema: "Falta de una herramienta interactiva y accesible para consultar pinouts de ECUs automotrices.",
      decisionTecnicaClave: "Validar la experiencia de usuario con una única ECU documentada manualmente antes de construir una arquitectura escalable con base de datos.",
      resultado: "Prototipo funcional que valida visualización interactiva de pinouts y consulta por pin.",
      aprendizaje: "Validación temprana de ideas antes de invertir en arquitectura compleja; uso de IA como apoyo durante el desarrollo.",
    },
    devHub: {
      arquitectura: "Arquitectura actual: HTML/CSS/JS con una ECU estática embebida, sin base de datos. Evolución prevista: usuario → reconocimiento por IA o búsqueda manual → base de datos centralizada → ficha técnica con pinout, diagramas, voltajes y diagnóstico.",
      galeria: [
        "https://github.com/Samuelelvro6756/PinScope/raw/main/docs/show1.png",
        "https://github.com/Samuelelvro6756/PinScope/raw/main/docs/show2.png",
      ],
      readme: "https://github.com/Samuelelvro6756/PinScope/blob/main/README.md",
    },
  },
  {
    titulo: "Optimización de Software de Control de Pasantías",
    banner: "https://github.com/Samuelelvro6756/Registro-de-Etapa-Productiva/raw/main/docs/Banner.png",
    descripcion: "Sistema web para gestionar estudiantes, pasantías, contratos de aprendizaje, asesorías y evaluaciones desde una única plataforma.",
    tecnologias: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    estado: "finalizado",
    tipo: "software",
    visibilidad: "publico",
    enlaces: {
      github: "https://github.com/Samuelelvro6756/Registro-de-Etapa-Productiva",
    },
    impacto: {
      problema: "Gestión dispersa y manual del proceso de pasantías de estudiantes.",
      decisionTecnicaClave: "Priorizar una interfaz sencilla y fácil de usar, con instalador automático para facilitar el despliegue real.",
      resultado: "Proyecto finalizado con todos los módulos funcionales: estudiantes, pasantías, contratos, asesorías, evaluaciones y buscador.",
      aprendizaje: "Ciclo completo de desarrollo Full Stack con PHP/MySQL, de la base de datos a la interfaz, orientado a usuarios reales.",
    },
    devHub: {
      arquitectura: "Aplicación web PHP/MySQL con estructura por carpetas (config, css, js, img) sobre servidor Apache. El flujo de navegación parte de un login que da acceso a un dashboard central, desde donde se accede a los módulos de Estudiantes, Pasantías, Contratos, Asesorías, Evaluaciones y Buscador.",
      galeria: [
        "https://github.com/Samuelelvro6756/Registro-de-Etapa-Productiva/raw/main/docs/login.png",
        "https://github.com/Samuelelvro6756/Registro-de-Etapa-Productiva/raw/main/docs/dashboard.png",
        "https://github.com/Samuelelvro6756/Registro-de-Etapa-Productiva/raw/main/docs/estudiantes.png",
        "https://github.com/Samuelelvro6756/Registro-de-Etapa-Productiva/raw/main/docs/tecnico.png",
      ],
      readme: "https://github.com/Samuelelvro6756/Registro-de-Etapa-Productiva/blob/main/README.md",
      descargas: [
        "https://github.com/Samuelelvro6756/Registro-de-Etapa-Productiva/releases",
      ],
    },
  },
  {
    titulo: "Ultimate Power Chess",
    banner: "/proyectos/ultimate-power-chess/banner.png",
    descripcion: "Reinterpretación completa del ajedrez mediante un sistema de poderes, progresión y economía, con enfoque Live Service.",
    tecnologias: ["Unity", "C#", "ASP.NET"],
    estado: "en-desarrollo",
    tipo: "videojuego",
    visibilidad: "parcial",
    enlaces: 
    {

    },
    impacto: 
    {
      problema: "El ajedrez tradicional no ofrece progresión, personalización ni un modelo de servicio continuo.",
      decisionTecnicaClave: "Recuperar el control de la arquitectura antes de añadir contenido nuevo, priorizando un MVP/Vertical Slice sólido.",
      resultado: "En refactor activo, con documentación extensa (GDD) y arquitectura en evolución.",
      aprendizaje: "Importancia de mantener control arquitectónico desde etapas tempranas en proyectos ambiciosos.",
    },
    devHub: 
    {
      descargas: ["/proyectos/ultimate-power-chess/GCD.pdf"],
    },
  },
];