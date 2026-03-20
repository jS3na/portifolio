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

  transporter.sendMail({
    from: `"Propostas" <${process.env.SMTP_USER}>`,
    to: "passosjoaogabriel29@gmail.com",
    subject: `Proposta acessada: ${slug}`,
    text: `
Uma proposta foi acessada:

Slug: ${slug}
IP: ${ip}
User-Agent: ${userAgent}
Referer: ${referer}
Data: ${new Date().toISOString()}
    `,
  }).catch((err) => {
    console.error("Erro ao enviar email:", err);
  });

  return NextResponse.redirect(pdfUrl, 302);
}