"use client";

import { useState } from "react";
import { ChevronDown, Code2 } from "lucide-react";

export default function DevHubToggle({ children }: { children: React.ReactNode }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="mt-8">
      <button
        onClick={() => setAbierto(!abierto)}
        className="inline-flex items-center gap-2 rounded-full border border-accent/30 px-4 py-2 text-sm font-medium text-accent hover:bg-accent/10 transition-colors"
      >
        <Code2 size={16} />
        {abierto ? "Ocultar Desarrollo Técnico" : "Explorar Desarrollo Técnico"}
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${abierto ? "rotate-180" : ""}`}
        />
      </button>

      {abierto && (
        <div className="mt-4 border-l-2 border-accent/30 pl-4 pr-4 bg-surface/50 py-4 rounded-r">
          {children}
        </div>
      )}
    </div>
  );
}