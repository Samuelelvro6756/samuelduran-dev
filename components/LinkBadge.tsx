import { IconType } from "react-icons";

type LinkBadgeProps = {
  href: string;
  label: string;
  icon: IconType;
  color: string;
};

export default function LinkBadge({ href, label, icon: Icon, color }: LinkBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium leading-none transition-colors hover:brightness-125"
      style={{ borderColor: `${color}40`, color }}
    >
      <Icon size={14} />
      {label}
    </a>
  );
}