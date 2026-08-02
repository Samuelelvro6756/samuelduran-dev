"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HomeIcon, FolderIcon, UserIcon, EnvelopeIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const enlaces = [
  { href: "/", label: "Inicio", icon: HomeIcon },
  { href: "/proyectos", label: "Proyectos", icon: FolderIcon },
  { href: "/sobre-mi", label: "Sobre mí", icon: UserIcon },
  { href: "/contacto", label: "Contacto", icon: EnvelopeIcon },
];

export default function Header() {
  const pathname = usePathname();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const esActivo = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur border-b border-white/5">
      <div className="flex items-center justify-between px-4 md:px-1 py-4 max-w-7xl mx-auto">
        <Image
          src="/branding/wordmark.png"
          alt="Samuel Durán"
          width={200}
          height={32}
          priority
          className="invert brightness-200"
        />

        {/* Nav de escritorio */}
        <nav className="hidden md:flex gap-2">
          {enlaces.map((enlace) => {
            const Icon = enlace.icon;
            return (
              <Link
                key={enlace.href}
                href={enlace.href}
                className={
                  esActivo(enlace.href)
                    ? "flex items-center gap-1.5 bg-foreground text-background rounded px-3 py-1 text-sm font-medium"
                    : "flex items-center gap-1.5 text-foreground px-3 py-1 text-sm hover:text-accent"
                }
              >
                <Icon className="h-4 w-4" />
                {enlace.label}
              </Link>
            );
          })}
        </nav>

        {/* Botón hamburguesa, solo móvil */}
        <button
          className="md:hidden text-foreground transition-transform duration-300"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
          translate="no"
        >
          <span className={`inline-block transition-transform duration-300 ${menuAbierto ? "rotate-90" : ""}`}>
            {menuAbierto ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </span>
        </button>
      </div>

      {/* Panel deslizable, solo móvil */}
      <nav
        className={`md:hidden flex flex-col gap-1 px-4 border-t border-white/5 overflow-hidden transition-all duration-300 ease-in-out ${
          menuAbierto ? "max-h-96 opacity-100 py-3" : "max-h-0 opacity-0 py-0 border-t-0"
        }`}
      >
        {enlaces.map((enlace) => {
          const Icon = enlace.icon;
          return (
            <Link
              key={enlace.href}
              href={enlace.href}
              onClick={() => setMenuAbierto(false)}
              className={
                esActivo(enlace.href)
                  ? "flex items-center gap-2 bg-foreground text-background rounded px-3 py-2 text-sm font-medium"
                  : "flex items-center gap-2 text-foreground px-3 py-2 text-sm hover:text-accent"
              }
            >
              <Icon className="h-4 w-4" />
              {enlace.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}