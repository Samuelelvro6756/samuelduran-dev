import { CheckCircle2, Loader2, FlaskConical, PauseCircle, Search, Rocket, LucideIcon } from "lucide-react";
import { Code2, Gamepad2, HeartHandshake, Cpu, Microscope, Lock, Beaker } from "lucide-react";

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