import Image from "next/image";
import Button from "@/components/Button";
import TechBadge from "@/components/TechBadge";

const habilidadesTecnicas = [
  "Unity", "C#", "HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "TypeScript", "Python", "Java (Swing)",
  "Arduino", "ESP32", "Git", "GitHub"
];

export default function SobreMiPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      {/* Encabezado */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <Image
          src="/perfil/foto.jpeg"
          alt="Samuel Durán"
          width={200}
          height={200}
          className="rounded-full object-cover object-top"
          priority
        />
        <div>
          <h1 className="text-2xl font-semibold">Samuel Durán Cardenas</h1>
          <p className="text-gray-400 mt-1">Desarrollador de Software</p>
          <p className="text-gray-300 mt-4">
            Estudiante de Ingeniería de Software, apasionado por construir cosas que 
            funcionen correctamente y se puedan mantenerse a largo plazo. Aprendo programando 
            proyectos creativos y personales. 
          </p>
          
          <Button href="/perfil/cv.pdf" external variant="primary" className="mt-4">
            Descargar CV
          </Button>
        </div>
      </div>

      {/* Historia */}
      <section className="mt-12">
        <h2 className="text-sm uppercase text-gray-500 font-semibold">Historia</h2>
        <p className="text-gray-300 mt-2">
          Desarrollador de software con experiencia práctica en desarrollo web,
          videojuegos y sistemas embebidos. Me interesa construir productos
          escalables, documentar correctamente los proyectos y resolver problemas
          mediante una arquitectura bien diseñada. Actualmente desarrollo proyectos
          propios mientras continúo mi formación profesional.
        </p>
      </section>

      {/* Formación */}
      <section className="mt-8">
        <h2 className="text-sm uppercase text-gray-500 font-semibold">Formación</h2>
        <ul className="text-gray-300 mt-2 flex flex-col gap-1">
          <li>Ingeniería de Software — Escuela de Administración y Mercadotecnia (EAM), en curso</li>
          <li>Técnico en Desarrollo de Software — Politécnico Master Web</li>
          <li>Técnico en Sistemas Tele-informáticos — SENA / I. Tecnológico de Calarcá</li>
        </ul>
      </section>

      {/* Cómo trabajo */}
      <section className="mt-8">
        <h2 className="text-sm uppercase text-gray-500 font-semibold">Cómo trabajo</h2>
        <p className="text-gray-300 mt-2">
          Prefiero entender el porqué de una decisión técnica antes que la solución
          más rápida. Priorizo código mantenible y arquitectura clara, incluso si
          toma más tiempo al inicio.
        </p>
      </section>

      {/* Intereses */}
      <section className="mt-8">
        <h2 className="text-sm uppercase text-gray-500 font-semibold">Intereses</h2>
        <ul className="text-gray-300 mt-2 flex flex-col gap-1">
          <li>Inteligencia Artificial y Machine Learning</li>
          <li>Realidad Virtual y Aumentada</li>
          <li>Seguridad informática y hacking ético</li>
          <li>Automatización</li>
        </ul>
      </section>

      {/* Habilidades técnicas */}
      <section className="mt-8">
        <h2 className="text-sm uppercase text-gray-500 font-semibold">Habilidades técnicas</h2>
        <p className="text-gray-300 mt-2">
          Arquitectura de software, programación orientada a objetos, desarrollo full
          stack, diseño de sistemas, integración hardware-software, documentación
          técnica con Git.
        </p>
        <div className="columns-2 sm:columns-3 gap-2 mt-2 w-1/2">
          {habilidadesTecnicas.map((tech) => (
            <div key={tech} className="mb-2 break-inside-avoid">
              <TechBadge nombre={tech} />
            </div>
          ))}
        </div>
      </section>

      {/* Idiomas */}
      <section className="mt-8">
        <h2 className="text-sm uppercase text-gray-500 font-semibold">Idiomas</h2>
        <p className="text-gray-300 mt-2">Español (nativo) · Inglés (B1)</p>
      </section>
    </main>
  );
}