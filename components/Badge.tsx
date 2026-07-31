import { LucideIcon } from "lucide-react";

export default function Badge({
  children,
  colorClasses,
  icon: Icon,
}: {
  children: React.ReactNode;
  colorClasses: string;
  icon?: LucideIcon;
}) {
  return (
    <span
    className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium uppercase leading-none ${colorClasses}`}
    >
    {Icon && <Icon size={12} className="shrink-0" />}
    {children}
    </span>
  );
}