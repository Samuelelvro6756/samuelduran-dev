// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="p-6 border-t">
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4 text-sm text-gray-400">
        <a href="mailto:samuelducar1998@gmail.com">Email</a>
        <a href="https://github.com/Samuelelvro6756" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/samuel-duran-cardenas-077675420/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="https://wa.me/573216477435" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </div>
    </footer>
  );
}