"use client";

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation";

const enlaces = [
  { href: "/", label: "Inicio" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur border-b border-white/5">
      <div className="flex items-center justify-between px-1 py-4 max-w-7xl mx-auto">
        <Image
          src="/branding/wordmark.png"
          alt="Samuel Durán"
          width={200}
          height={32}
          priority
          className="invert brightness-200"
        />
        <nav className="flex gap-2">
          {enlaces.map((enlace) => {
            const activo =
              enlace.href === "/"
                ? pathname === "/"
                : pathname.startsWith(enlace.href);

            return (
              <Link
                key={enlace.href}
                href={enlace.href}
                className={
                  activo
                    ? "bg-foreground text-background rounded px-3 py-1 text-sm font-medium"
                    : "text-foreground px-3 py-1 text-sm hover:text-accent"
                }
              >
                {enlace.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}