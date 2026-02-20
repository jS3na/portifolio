"use client"

import * as React from "react"
import Link from "next/link"
import {
  ArrowRight,
  Code2,
  LayoutDashboard,
  MessageCircle,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react"

type Service = {
  title: string
  description: string
  bullets: string[]
  icon: React.ComponentType<{ className?: string }>
  highlight?: boolean
}

type ServicesSectionProps = {
  id?: string
  title?: string
  subtitle?: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  phoneE164?: string
  whatsappMessage?: string
}

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

function Badge({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-100">
      {children}
    </span>
  )
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      className={cn(
        "group relative rounded-3xl border border-white/10 bg-white/[0.04] p-6",
        "shadow-[0_1px_0_0_rgba(255,255,255,0.06),0_24px_80px_-55px_rgba(0,0,0,0.9)]",
        "transition hover:bg-white/[0.06]",
        service.highlight &&
          "bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border-teal-400/30"
      )}
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
        <service.icon className="h-5 w-5 text-teal-300" />
      </div>

      <h3 className="text-lg font-semibold text-zinc-100">
        {service.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-zinc-400">
        {service.description}
      </p>

      <ul className="mt-5 space-y-2 text-sm text-zinc-300">
        {service.bullets.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-300 shadow-[0_0_18px_rgba(45,212,191,0.7)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  )
}

export default function ServicesSection({
  id = "services",
  title = "Soluções completas para acelerar seu negócio",
  subtitle = "Do design à arquitetura backend, desenvolvo sistemas, plataformas e apps com foco em performance, organização e lucro.",
  primaryCtaLabel = "Pedir orçamento",
  secondaryCtaLabel = "Ver projetos",
  secondaryCtaHref = "#projects",
  phoneE164 = "5586989030943",
  whatsappMessage = "Olá! Quero solicitar um orçamento para um projeto.",
}: ServicesSectionProps) {
  const waHref = `https://wa.me/${phoneE164}?text=${encodeURIComponent(
    whatsappMessage
  )}`

  const services: Service[] = [
    {
      title: "Design UI/UX Estratégico",
      description:
        "Interfaces modernas, claras e orientadas à conversão, alinhadas aos objetivos do seu negócio.",
      bullets: [
        "Experiência focada no usuário",
        "Layouts responsivos e premium",
        "Design orientado à conversão",
      ],
      icon: Sparkles,
    },
    {
      title: "Desenvolvimento Web",
      description:
        "Sites e aplicações web modernas, rápidas e escaláveis utilizando Laravel, React e Next.js.",
      bullets: [
        "Arquitetura limpa e organizada",
        "SEO e performance",
        "Integrações com APIs externas",
      ],
      icon: Code2,
    },
    {
      title: "Desenvolvimento Mobile",
      description:
        "Aplicativos com React Native para iOS e Android, com performance e experiência de alto nível.",
      bullets: [
        "Apps híbridos performáticos",
        "Integração com APIs e backend",
        "Experiência fluida no mobile",
      ],
      icon: Smartphone,
    },
    {
      title: "Plataformas & Sistemas Empresariais",
      description:
        "Desenvolvimento de sistemas sob medida para organizar processos, reduzir custos e aumentar controle.",
      bullets: [
        "Sistemas administrativos (ERP/CRM)",
        "Gestão de usuários e permissões",
        "Dashboards e relatórios estratégicos",
      ],
      icon: LayoutDashboard,
      highlight: true,
    },
  ]

  return (
    <section
      id={id}
      className="relative overflow-hidden bg-zinc-950 text-zinc-100"
    >
      {/* Background tech glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 [background:radial-gradient(1000px_circle_at_20%_20%,rgba(20,184,166,0.15),transparent_50%),radial-gradient(900px_circle_at_80%_30%,rgba(34,211,238,0.12),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>
            <Workflow className="mr-1.5 h-3.5 w-3.5 text-teal-300" />
            Serviços FullStack
          </Badge>

          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-200 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>

          <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-300">
            {subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* CTA final */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 px-6 text-sm font-medium text-zinc-950 transition hover:brightness-110 shadow-[0_12px_40px_-18px_rgba(34,211,238,0.55)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
          >
            <MessageCircle className="h-4 w-4" />
            {primaryCtaLabel}
            <ArrowRight className="h-4 w-4" />
          </a>

          <Link
            href={secondaryCtaHref}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 text-sm font-medium text-zinc-100 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
          >
            {secondaryCtaLabel}
            <ArrowRight className="h-4 w-4 text-teal-200" />
          </Link>
        </div>
      </div>
    </section>
  )
}
