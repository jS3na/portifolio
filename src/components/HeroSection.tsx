"use client"

import * as React from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Layers3,
  MessageCircle,
  Smartphone,
  Sparkles,
  Wrench,
  Workflow,
} from "lucide-react"
import ImagemSena from '../assets/imagem_sena.jpg'

type HeroSectionProps = {
  name?: string
  title?: string
  promise?: string
  phoneE164?: string
  whatsappMessage?: string
  primaryCtaLabel?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  servicesAnchorHref?: string
  imageSrc?: StaticImageData
  imageAlt?: string
}

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

function AButton({
  href,
  variant = "primary",
  size = "lg",
  className,
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost"
  size?: "md" | "lg"
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-0"
  const sizes = {
    md: "h-10 px-4 rounded-xl text-sm",
    lg: "h-12 px-5 rounded-xl text-sm sm:text-base",
  }[size]
  const variants = {
    primary:
      "bg-gradient-to-r from-teal-400 to-cyan-400 text-zinc-950 hover:brightness-110 shadow-[0_12px_40px_-18px_rgba(34,211,238,0.55)]",
    secondary:
      "border border-white/10 bg-white/5 text-zinc-100 hover:bg-white/10 shadow-[0_1px_0_0_rgba(255,255,255,0.06)]",
    ghost: "bg-transparent text-zinc-200 hover:bg-white/5",
  }[variant]

  return (
    <a href={href} className={cn(base, sizes, variants, className)} {...rest}>
      {children}
    </a>
  )
}

function Badge({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-100",
        className
      )}
    >
      {children}
    </span>
  )
}

function Card({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_1px_0_0_rgba(255,255,255,0.06),0_24px_80px_-50px_rgba(0,0,0,0.9)] backdrop-blur",
        className
      )}
    >
      {children}
    </div>
  )
}

export default function HeroSection({
  name = "João Gabriel",
  title = "Desenvolvedor FullStack (Laravel • React • React Native)",
  promise = "Sistemas e apps sob medida para sua empresa ganhar velocidade, organização e lucro.",
  phoneE164 = "5586989030943",
  whatsappMessage = "Olá! Quero pedir um orçamento. Pode me contar como funciona seu processo e prazos?",
  primaryCtaLabel = "Chamar no WhatsApp",
  secondaryCtaLabel = "Ver projetos",
  secondaryCtaHref = "#projetos",
  servicesAnchorHref = "#services",
  imageSrc = ImagemSena,
  imageAlt = "Foto de João Gabriel",
}: HeroSectionProps) {
  const waHref = React.useMemo(() => {
    const text = encodeURIComponent(whatsappMessage)
    return `https://wa.me/${phoneE164}?text=${text}`
  }, [phoneE164, whatsappMessage])

  return (
    <section
      aria-label="Seção principal"
      className="relative overflow-hidden bg-zinc-950 text-zinc-100"
    >
      {/* Background: grid + subtle glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 [background:radial-gradient(1200px_circle_at_20%_15%,rgba(20,184,166,0.18),transparent_45%),radial-gradient(900px_circle_at_75%_45%,rgba(34,211,238,0.14),transparent_45%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-zinc-950/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left / Copy */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>
                <Sparkles className="mr-1.5 h-3.5 w-3.5 text-teal-300" />
                Premium • Tech • Conversão
              </Badge>
              <Badge>
                <Workflow className="mr-1.5 h-3.5 w-3.5 text-cyan-300" />
                Processo claro, entrega rápida
              </Badge>
            </div>

            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-zinc-200">Olá, eu sou</span>
              <span className="block bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-200 bg-clip-text text-transparent">
                {name}
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
              <span className="font-medium text-zinc-200">{title}</span>
              <span className="text-zinc-400"> — </span>
              <span>{promise}</span>
            </p>

            {/* Value props */}
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: CheckCircle2,
                  title: "Código limpo e escalável",
                  desc: "Arquitetura organizada para evoluir sem dor.",
                },
                {
                  icon: Workflow,
                  title: "Comunicação sem ruído",
                  desc: "Alinhamento, prioridade e updates constantes.",
                },
                {
                  icon: Layers3,
                  title: "Foco em resultado",
                  desc: "Mais controle, menos custo, mais velocidade.",
                },
                {
                  icon: Wrench,
                  title: "Manutenção & evolução",
                  desc: "Correções, melhorias e novas features sob demanda.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
                    <item.icon className="h-4.5 w-4.5 text-teal-200" aria-hidden />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-100">{item.title}</p>
                    <p className="text-sm leading-snug text-zinc-400">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <AButton
                href={waHref}
                target="_blank"
                rel="noreferrer"
                aria-label={`${primaryCtaLabel} (abre em nova aba)`}
                variant="primary"
                size="lg"
                className="group"
              >
                <MessageCircle className="h-4.5 w-4.5" aria-hidden />
                {primaryCtaLabel}
                <ArrowRight
                  className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </AButton>

              <Link
                href={secondaryCtaHref}
                className={cn(
                  "inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 text-sm font-medium text-zinc-100 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/50",
                  "sm:text-base"
                )}
                aria-label={secondaryCtaLabel}
              >
                <Code2 className="h-4.5 w-4.5 text-teal-200" aria-hidden />
                {secondaryCtaLabel}
              </Link>

              <Link
                href={servicesAnchorHref}
                className="text-sm font-medium text-zinc-300 underline-offset-4 hover:text-zinc-100 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/50"
                aria-label="Ir para serviços"
              >
                Ver serviços
              </Link>
            </div>

            {/* Trust / mini proof */}
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-zinc-400">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-300 shadow-[0_0_18px_rgba(45,212,191,0.7)]" />
                Prazos e etapas bem definidos
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.65)]" />
                UI/UX + performance + SEO
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/90 shadow-[0_0_18px_rgba(110,231,183,0.55)]" />
                Integrações e automações
              </span>
            </div>
          </div>

          {/* Right / Visual + services cards */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[28px] bg-gradient-to-r from-teal-500/15 via-cyan-500/10 to-teal-500/15 blur-2xl"
              />

              <Card className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-zinc-200">Orçamento rápido</p>
                    <p className="text-xs text-zinc-400">
                      Você explica o objetivo, eu devolvo um plano e prazo.
                    </p>
                  </div>
                  <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
                    <Smartphone className="h-5 w-5 text-cyan-200" aria-hidden />
                  </div>
                </div>

                <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      priority
                      className="h-[360px] w-full object-cover sm:h-[400px]"
                    />
                  ) : (
                    <div className="relative h-[260px] w-full sm:h-[300px]">
                      <div
                        aria-hidden
                        className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.9),transparent_45%),radial-gradient(circle_at_75%_55%,rgba(34,211,238,0.85),transparent_42%)]"
                      />
                      <svg aria-hidden viewBox="0 0 600 420" className="absolute inset-0 h-full w-full">
                        <defs>
                          <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                            <stop offset="0" stopColor="rgba(45,212,191,0.45)" />
                            <stop offset="1" stopColor="rgba(34,211,238,0.35)" />
                          </linearGradient>
                        </defs>
                        <rect x="0" y="0" width="600" height="420" fill="rgba(9,9,11,0.45)" />
                        <path
                          d="M0 310 C120 260, 210 360, 330 315 C430 280, 500 240, 600 260 L600 420 L0 420 Z"
                          fill="url(#g)"
                          opacity="0.9"
                        />
                        <circle cx="430" cy="160" r="72" fill="rgba(255,255,255,0.06)" />
                        <circle cx="440" cy="152" r="34" fill="rgba(255,255,255,0.08)" />
                      </svg>

                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <div className="rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 backdrop-blur">
                          <p className="text-sm font-semibold text-zinc-100">{name}</p>
                          <p className="text-xs text-zinc-400">
                            (Opcional) Passe imageSrc para usar sua foto.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    { icon: Code2, label: "Sites/landing pages" },
                    { icon: Layers3, label: "Sistemas web" },
                    { icon: Smartphone, label: "Apps mobile" },
                    { icon: Workflow, label: "Integrações & APIs" },
                    { icon: Wrench, label: "Manutenção" },
                    { icon: Sparkles, label: "UI/UX + conversão" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200"
                    >
                      <s.icon className="h-4 w-4 text-teal-200" aria-hidden />
                      <span className="leading-snug">{s.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                  <Link
                    href={servicesAnchorHref}
                    className={cn(
                      "inline-flex h-11 flex-1 items-center justify-center rounded-xl bg-white/10 px-4 text-sm font-medium text-zinc-100 transition hover:bg-white/15",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
                    )}
                    aria-label="Explorar serviços"
                  >
                    Explorar serviços
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "inline-flex h-11 flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 px-4 text-sm font-medium text-zinc-950 transition hover:brightness-110",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
                    )}
                    aria-label="Pedir orçamento no WhatsApp (abre em nova aba)"
                  >
                    Pedir orçamento
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </a>
                </div>

                <div aria-hidden className="pointer-events-none absolute inset-0">
                  <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
