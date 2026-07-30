import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { nombre, email, mensaje } = await request.json();

  try {
    await resend.emails.send({
      from: "Nuevo Mensaje de Portafolio <onboarding@resend.dev>",
      to: "samuelducar1998@gmail.com",
      subject: `Nuevo mensaje de ${nombre}`,
      replyTo: email,
      text: mensaje,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return NextResponse.json({ ok: false, error: "Error al enviar el mensaje" }, { status: 500 });
  }
}