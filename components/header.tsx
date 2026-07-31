import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur border-b border-white/5">
      <div className="flex items-center justify-between px-1 py-4 max-w-7xl mx-auto">
        <Image className="invert brightness-200" src="/branding/wordmark.png" alt="Samuel Durán" width={200} height={32} priority />
        <nav className="flex gap-6">
            <Link href="/">Inicio</Link>
            <Link href="/proyectos">Proyectos</Link>
            <Link href="/sobre-mi">Sobre mí</Link>
            <Link href="/contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}