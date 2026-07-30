"use client";

import { useState } from "react";

export default function DevHubToggle({ children }: { children: React.ReactNode }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="mt-8">
      <button onClick={() => setAbierto(!abierto)} className="text-sm underline">
        {abierto ? "▲ Ocultar desarrollo técnico" : "▼ Explorar desarrollo técnico"}
      </button>

      {abierto && <div className="mt-4 border-l-2 border-gray-700 pl-4 bg-gray-950/50 py-4">{children}</div>}
    </div>
  );
}