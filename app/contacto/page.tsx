import EmailButton from "@/components/EmailButton";
import LinkBadge from "@/components/LinkBadge";
import ContactForm from "@/components/ContactForm";
import { iconosEnlace } from "@/lib/labels";

export const metadata = {
  title: "Contacto — Samuel Durán",
  description: "Contacta a Samuel Durán para oportunidades de desarrollo de software.",
};

export default function ContactoPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-8">Contacto</h1>

      <div className="grid md:grid-cols-3 gap-6 md:gap-16">
        {/* Columna de enlaces directos */}
        <div className="flex flex-col gap-3">
          <EmailButton />
          <LinkBadge
            href="https://github.com/Samuelelvro6756"
            {...iconosEnlace.github}
          />
          <LinkBadge
            href="https://www.linkedin.com/in/samuel-duran-cardenas-077675420/"
            {...iconosEnlace.linkedin}
          />
          <LinkBadge
            href="https://wa.me/573216477435"
            {...iconosEnlace.whatsapp}
          />

          <hr className="border-accent/40 border-t-2 my-4 md:hidden blink" />
        </div>

        {/* Columna del formulario */}
        <ContactForm />
      </div>
    </main>
  );
}