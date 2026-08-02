"use client";

import { useState, CSSProperties } from "react";
import { Check } from "lucide-react";
import { iconosEnlace } from "@/lib/labels";

export default function EmailButton({ compacto }: { compacto?: boolean }) {
  const [copiado, setCopiado] = useState(false);
  const email = "samuelducar1998@gmail.com";
  const { icon: Icon, color } = iconosEnlace.email;

  async function copiarEmail() {
    await navigator.clipboard.writeText(email);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  }

  return (
    <button
      onClick={copiarEmail}
      translate="no"
      style={{ "--brand-color": color } as CSSProperties}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium leading-none transition-colors ${
        copiado
          ? "border-success text-success"
          : "border-white/15 text-foreground hover:text-[var(--brand-color)] hover:border-[var(--brand-color)]"
      }`}
    >
      {copiado ? <Check key="check" size={14} /> : <Icon key="icon" size={14} />}
      <span className={compacto ? "hidden min-[420px]:inline" : ""}>
        {copiado ? "Copiado" : "Email"}
      </span>
    </button>
  );
}