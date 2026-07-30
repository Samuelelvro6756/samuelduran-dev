import { z } from "zod";

export const contactoSchema = z.object({
  nombre: z.string().min(2, "El nombre es muy corto"),
  email: z.email("Email inválido"),
  mensaje: z.string().min(10, "El mensaje es muy corto"),
  sitioweb: z.string().max(0, "Spam detectado").optional(),
});

export type ContactoFormData = z.infer<typeof contactoSchema>;