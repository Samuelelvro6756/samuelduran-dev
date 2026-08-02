import { CheckCircle2, Loader2, FlaskConical, PauseCircle, Search, Rocket, LucideIcon } from "lucide-react";
import { Code2, Gamepad2, HeartHandshake, Cpu, Lock, Beaker } from "lucide-react";

import { SiUnity, SiPhp, SiMysql, SiHtml5, SiCss, SiCplusplus, SiJavascript, SiTypescript, SiPython, SiArduino, SiGit, SiGithub, SiEspressif, SiDotnet} from "react-icons/si";
import { SiWhatsapp, SiGmail, SiItchdotio } from "react-icons/si";
import { FileText, Download, Link2 } from "lucide-react";
import { FaJava, FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons";

export const iconosEnlace = {
  github: { icon: SiGithub, color: "#ededed", label: "GitHub" },
  linkedin: { icon: FaLinkedin, color: "#0A66C2", label: "LinkedIn" },
  whatsapp: { icon: SiWhatsapp, color: "#25D366", label: "WhatsApp" },
  email: { icon: SiGmail, color: "#EA4335", label: "Email" },
  itch: { icon: SiItchdotio, color: "#FA5C5C", label: "Itch.io" },
  demo: { icon: Link2, color: "#569cd6", label: "Demo" },
  readme: { icon: FileText, color: "#569cd6", label: "README" },
  descarga: { icon: Download, color: "#569cd6", label: "Descarga" },
};

export const iconosTecnologia: Record<string, { icon: IconType; color: string }> = {
  "Unity": { icon: SiUnity, color: "#FFFFFF" },
  "ASP.NET": { icon: SiDotnet, color: "#9A73EF" },
  "C#": { icon: SiCplusplus, color: "#9A73EF" },
  "C++": { icon: SiCplusplus, color: "#5599FF" },
  "PHP": { icon: SiPhp, color: "#777BB4" },
  "MySQL": { icon: SiMysql, color: "#3E6E93" },
  "HTML5": { icon: SiHtml5, color: "#E34F26" },
  "CSS3": { icon: SiCss, color: "#1572B6" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "Python": { icon: SiPython, color: "#3776AB" },
  "Java (Swing)": { icon: FaJava, color: "#ED8B00" },
  "Arduino": { icon: SiArduino, color: "#00C4CC" },
  "Git": { icon: SiGit, color: "#F05032" },
  "GitHub": { icon: SiGithub, color: "#ededed" },
  "ESP32": { icon: SiEspressif, color: "#E7352C" },
};

export const etiquetasEstado: Record<string, string> = {
  "prototipo": "Prototipo",
  "en-desarrollo": "En desarrollo",
  "finalizado": "Finalizado",
  "pausado": "Pausado",
  "investigacion": "Investigación",
  "produccion": "Producción",
};

export const coloresEstado: Record<string, string> = {
  "finalizado": "bg-success/15 text-success border-success/30",
  "en-desarrollo": "bg-accent/15 text-accent border-accent/30",
  "prototipo": "bg-warning/15 text-warning border-warning/30",
  "pausado": "bg-muted/15 text-muted border-muted/30",
  "investigacion": "bg-accent-soft/15 text-accent-soft border-accent-soft/30",
  "produccion": "bg-success/15 text-success border-success/30",
};

export const iconosEstado: Record<string, LucideIcon> = {
  "finalizado": CheckCircle2,
  "en-desarrollo": Loader2,
  "prototipo": FlaskConical,
  "pausado": PauseCircle,
  "investigacion": Search,
  "produccion": Rocket,
};

export const etiquetasTipo: Record<string, string> = {
  "software": "Software",
  "videojuego": "Videojuego",
  "innovacion-social": "Innovación social",
  "electronica": "Electrónica",
  "privado": "Privado",
  "experimento": "Experimento",
};

export const iconosTipo: Record<string, LucideIcon> = {
  "software": Code2,
  "videojuego": Gamepad2,
  "innovacion-social": HeartHandshake,
  "electronica": Cpu,
  "privado": Lock,
  "experimento": Beaker,
};