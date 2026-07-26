import Link from "next/link"
export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between px-1 py-4 max-w-7xl mx-auto">
        <span className="font-semibold text-lg">Samuel Duran</span>
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