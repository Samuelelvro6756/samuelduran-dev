import EmailButton from "@/components/EmailButton";
import LinkBadge from "@/components/LinkBadge";
import { iconosEnlace } from "@/lib/labels";

export default function Footer() {
  return (
    <footer className="p-6 bg-surface border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-2">
        <EmailButton compacto/>
        <LinkBadge
          href="https://github.com/Samuelelvro6756"
          {...iconosEnlace.github}
          compacto
        />
        <LinkBadge
          href="https://www.linkedin.com/in/samuel-duran-cardenas-077675420/"
          {...iconosEnlace.linkedin}
          compacto
        />
        <LinkBadge
          href="https://wa.me/573216477435"
          {...iconosEnlace.whatsapp}
          compacto
        />
      </div>
    </footer>
  );
}