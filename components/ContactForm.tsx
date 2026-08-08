"use client";

import Button from "@/components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactoSchema, ContactoFormData } from "@/lib/validaciones";
import { useState } from "react";

export default function ContactForm() {
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
    <form onSubmit={handleSubmit(onSubmit)} className="md:col-span-2 flex flex-col gap-4">
      <input
        {...register("sitioweb")}
        type="text"
        autoComplete="off"
        tabIndex={-1}
        className="absolute w-px h-px opacity-0 overflow-hidden pointer-events-none"
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

      <Button type="submit" disabled={isSubmitting} variant="primary">
        {isSubmitting ? "Enviando..." : "Enviar"}
      </Button>

      {enviado && <p className="text-green-400 text-sm">Mensaje enviado correctamente.</p>}
      {error && <p className="text-red-400 text-sm">Hubo un error, intenta de nuevo.</p>}
    </form>
  );
}