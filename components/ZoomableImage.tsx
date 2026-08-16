"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, X } from "lucide-react";

export default function ZoomableImage({ src, alt }: { src: string; alt: string }) {
  const [abierta, setAbierta] = useState(false);

  return (
    <>
      <button
        onClick={() => setAbierta(true)}
        className="relative group rounded overflow-hidden block w-full aspect-video"
        aria-label={`Ampliar ${alt}`}
        translate="no"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-all duration-300 group-hover:brightness-50"
        />
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Eye className="text-white" size={28} />
        </span>
      </button>

      {abierta && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-6"
          onClick={() => setAbierta(false)}
        >
          <button
            onClick={() => setAbierta(false)}
            className="absolute top-6 right-6 text-white hover:text-accent transition-colors"
            aria-label="Cerrar"
            translate="no"
          >
            <X size={32} />
          </button>
          <div
            className="relative w-full h-full max-w-4xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain rounded shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}