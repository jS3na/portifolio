import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    req.headers.get("x-real-ip") ||
    "desconhecido";

  const userAgent = req.headers.get("user-agent") || "desconhecido";
  const referer = req.headers.get("referer") || "direto";

  const portifolioUrl = process.env.URL;
  const pdfUrl = `${portifolioUrl}/propostas-clientes/${slug}.pdf`;

  console.log("ENV TEST:", process.env.SMTP_HOST);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

console.log("ANTES DO EMAIL");

try {
  console.log("CRIANDO EMAIL...");

  await transporter.sendMail({
    from: `"Propostas" <${process.env.SMTP_USER}>`,
    to: "passosjoaogabriel29@gmail.com",
    subject: `Proposta acessada: ${slug} / IP: ${ip} / User-Agent: ${userAgent} / Referer: ${referer}`,
    text: `Teste`,
  });

  console.log("EMAIL ENVIADO COM SUCESSO");
} catch (error) {
  console.log("ERRO AO ENVIAR EMAIL:", error);
}

  return NextResponse.redirect(pdfUrl, 302);
}