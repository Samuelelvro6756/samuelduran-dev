import { IconType } from "react-icons";
import { CSSProperties } from "react";

type LinkBadgeProps = {
  href: string;
  label: string;
  icon: IconType;
  color: string;
  compacto?: boolean;
};

export default function LinkBadge({ href, label, icon: Icon, color, compacto }: LinkBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ "--brand-color": color } as CSSProperties}
      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 text-foreground px-3 py-1 text-sm font-medium leading-none transition-colors hover:text-[var(--brand-color)] hover:border-[var(--brand-color)]"
    >
      <Icon size={14} />
      <span className={compacto ? "hidden min-[420px]:inline" : ""}>{label}</span>
    </a>
  );
}