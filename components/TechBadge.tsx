import { iconosTecnologia } from "@/lib/labels";

export default function TechBadge({ nombre }: { nombre: string }) {
  const tech = iconosTecnologia[nombre];

  if (!tech) {
    return (
      <span className="inline-flex items-center rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-muted bg-background">
        {nombre}
      </span>
    );
  }

  const Icon = tech.icon;

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium leading-none bg-background"
      style={{ borderColor: `${tech.color}40`, color: tech.color }}
    >
      <Icon size={12} />
      {nombre}
    </span>
  );
}