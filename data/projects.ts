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
      problema: "Las personas con discapacidad visual necesitan herramientas accesibles que les permitan detectar obstáculos cercanos y desplazarse con mayor seguridad en diferentes entornos.",
      resultado: "Diseñé y construí un prototipo funcional basado en ESP32, sensores ultrasónicos y sistemas de retroalimentación mediante vibración, sonido y luz. El proyecto fue presentado y reconocido en eventos científicos y educativos a nivel municipal y departamental.",
      aprendizaje: "Aprendí a integrar hardware y software en un mismo sistema, comprendiendo la importancia del diseño orientado al usuario y la validación de soluciones tecnológicas con impacto social.",
    },
    devHub: {
      decisionTecnicaClave: "Priorizar componentes económicos y una arquitectura sencilla para facilitar mejoras futuras.",
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
    estado: "finalizado",
    tipo: "videojuego",
    visibilidad: "publico",
    enlaces: {
      github: "https://github.com/Samuelelvro6756/WindowTale",
      itch: "https://samuel-duran-cardenas.itch.io/windowtale",
    },
    impacto: {
      problema: "Explorar una mecánica poco común: usar el propio escritorio del SO como parte del escenario de juego.",
      resultado: "Diseñé el concepto de un Bullet Hell donde el escritorio del sistema operativo se convierte en parte del escenario mediante una ventana transparente, experimentando con nuevas mecánicas inspiradas en Undertale y otros juegos del género.",
      aprendizaje: "Aprendí a transformar una idea creativa en un prototipo técnico, explorando mecánicas no convencionales y comprendiendo el equilibrio entre innovación, viabilidad técnica y experiencia del jugador.",
    },
    devHub: {
      decisionTecnicaClave: "Uso de una ventana transparente para integrar el entorno real del usuario en la jugabilidad.",
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
    estado: "investigacion",
    tipo: "software",
    visibilidad: "publico",
    enlaces: {
      github: "https://github.com/Samuelelvro6756/PinScope",
    },
    impacto: {
      problema: "La información técnica sobre ECUs automotrices suele encontrarse dispersa, dificultando la identificación rápida de conexiones, pines y configuraciones específicas.",
      resultado: "Desarrollé un prototipo inicial orientado a centralizar información técnica y sentar las bases de una futura plataforma inteligente asistida por IA para consulta automotriz.",
      aprendizaje: "Comprendí la importancia de validar primero la idea de un producto antes de escalarlo, diseñando una arquitectura que permita evolucionar un prototipo hacia una solución mucho más ambiciosa.",
    },
    devHub: {
      decisionTecnicaClave: "Validar la experiencia de usuario con una única ECU documentada manualmente antes de construir una arquitectura escalable con base de datos.",
      arquitectura: "Arquitectura actual: HTML/CSS/JS con una ECU estática embebida, sin base de datos. Evolución prevista: usuario → reconocimiento por IA o búsqueda manual → base de datos centralizada → ficha técnica con pinout, diagramas, voltajes y diagnóstico.",
      galeria: [
        "https://github.com/Samuelelvro6756/PinScope/raw/main/docs/show1.png",
        "https://github.com/Samuelelvro6756/PinScope/raw/main/docs/show2.png",
      ],
      readme: "https://github.com/Samuelelvro6756/PinScope/blob/main/README.md",
    },
  },
  {
    titulo: "Aplicativo Web de Gestión y Control de Pasantías",
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
      problema: "La gestión manual de pasantías académicas dificultaba el seguimiento de estudiantes, usuarios y procesos administrativos, generando poca trazabilidad de la información.",
      resultado: "Desarrollé una aplicación web con autenticación de usuarios, gestión de información y almacenamiento persistente, implementando una arquitectura funcional para resolver el problema planteado.",
      aprendizaje: "Fortalecí mis bases en desarrollo Full Stack, bases de datos relacionales y arquitectura web, comprendiendo cómo integrar frontend, backend y persistencia de datos dentro de un mismo sistema.",
    },
    devHub: {
    decisionTecnicaClave: "Priorizar una interfaz sencilla y fácil de usar, con instalador automático para facilitar el despliegue real.",
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
    descripcion: "Reinterpretación del ajedrez tradicional que incorpora poderes, progresión y estrategia competitiva, desarrollado en Unity con un enfoque en arquitectura escalable y Live Service.",
    tecnologias: ["Unity", "C#", "ASP.NET"],
    estado: "en-desarrollo",
    tipo: "videojuego",
    visibilidad: "parcial",
    enlaces: 
    {

    },
    impacto: 
    {
      problema: "El ajedrez tradicional mantiene reglas estáticas y una progresión prácticamente inexistente, limitando la variedad estratégica y la rejugabilidad. El reto consistía en rediseñar un clásico sin perder su esencia, creando un sistema capaz de escalar hacia un videojuego competitivo tipo Live Service.",
      resultado: "En refactor activo, con documentación extensa (GDD) y arquitectura en evolución.",
      aprendizaje: "Comprendí que la arquitectura y la documentación son tan importantes como el código. Aprendí a planificar proyectos grandes, identificar deuda técnica, organizar roadmaps y recuperar el control cuando un proyecto comienza a crecer demasiado.",
    },
    devHub: 
    {
      decisionTecnicaClave: "Recuperar el control de la arquitectura antes de añadir contenido nuevo, priorizando un MVP/Vertical Slice sólido.",
      descargas: ["/proyectos/ultimate-power-chess/GCD.pdf"],
    },
  },
];