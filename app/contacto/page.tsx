"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactoSchema, ContactoFormData } from "@/lib/validaciones";
import { useState } from "react";

export default function ContactoPage() {
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactoFormData>({
    resolver: zodResolver(contactoSchema),
  });

  async function onSubmit(data: ContactoFormData) {
    setError(false);
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Fallo el envío");

      setEnviado(true);
      reset();
    } catch {
      setError(true);
    }
  }

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-8">Contacto</h1>

      <div className="grid md:grid-cols-3 gap-16">
        {/* Columna de enlaces directos */}
        <div className="flex flex-col gap-3">
          <a href="mailto:samuelducar1998@gmail.com" className="text-sm underline">
            Email
          </a>
          <a
            href="https://github.com/Samuelelvro6756"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-duran-cardenas-077675420/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline"
          >
            LinkedIn
          </a>
          <a
            href="https://wa.me/573216477435"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline"
          >
            WhatsApp
          </a>
        </div>

        {/* Columna del formulario */}
        <form onSubmit={handleSubmit(onSubmit)} className="md:col-span-2 flex flex-col gap-4">
          <input
            {...register("sitioweb")}
            type="text"
            autoComplete="off"
            tabIndex={-1}
            className="absolute left-[9999px]"
            aria-hidden="true"
          />

          <div>
            <label className="text-sm text-gray-400">Nombre</label>
            <input
              {...register("nombre")}
              className="w-full bg-transparent border rounded px-3 py-2 mt-1"
            />
            {errors.nombre && (
              <p className="text-red-400 text-sm mt-1">{errors.nombre.message}</p>
            )}
          </div>

          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              {...register("email")}
              className="w-full bg-transparent border rounded px-3 py-2 mt-1"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="text-sm text-gray-400">Mensaje</label>
            <textarea
              {...register("mensaje")}
              rows={5}
              className="w-full bg-transparent border rounded px-3 py-2 mt-1"
            />
            {errors.mensaje && (
              <p className="text-red-400 text-sm mt-1">{errors.mensaje.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-white text-black rounded px-4 py-2 mt-2 disabled:opacity-50"
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>

          {enviado && <p className="text-green-400 text-sm">Mensaje enviado correctamente.</p>}
          {error && <p className="text-red-400 text-sm">Hubo un error, intenta de nuevo.</p>}
        </form>
      </div>
    </main>
  );
}