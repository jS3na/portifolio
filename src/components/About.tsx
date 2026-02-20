"use client"

import * as React from "react"
import Link from "next/link"
import {
  ArrowRight,
  Database,
  GitBranch,
  Mail,
  MessageCircle,
  Smartphone,
  Sparkles,
  Workflow,
  Server,
  Globe,
  Code2,
  ShieldCheck,
} from "lucide-react"

type AboutProps = {
  id?: string
  name?: string
  title?: string
  description?: string
  email?: string
  github?: string
  linkedin?: string
  phoneE164?: string
  whatsappMessage?: string
}

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-100">
      {children}
    </span>
  )
}

function Pill({
  children,
  icon: Icon,
}: {
  children: React.ReactNode
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:bg-white/10 transition">
      <Icon className="h-4 w-4 text-teal-200" aria-hidden />
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
        "rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur",
        "shadow-[0_1px_0_0_rgba(255,255,255,0.06),0_24px_80px_-55px_rgba(0,0,0,0.9)]",
        className
      )}
    >
      {children}
    </div>
  )
}

export default function About({
  id = "about",
  name = "João Gabriel",
  title = "FullStack • Laravel • React • React Native",
  description = "Desenvolvo sites, apps e sistemas empresariais com foco em performance e organização. Trabalho com Next.js/React no front, Laravel e Spring Boot no backend e APIs em Python/Flask, usando mensageria (RabbitMQ/Kafka), PostgreSQL/MongoDB e Git.",
  email = "passosjoaogabriel29@gmail.com",
  github = "https://github.com/js3na",
  linkedin = "https://www.linkedin.com/in/joaosenapassos/",
  phoneE164 = "5586989030943",
  whatsappMessage = "Olá! Quero pedir um orçamento para um projeto.",
}: AboutProps) {
  const waHref = `https://wa.me/${phoneE164}?text=${encodeURIComponent(whatsappMessage)}`
  const mailHref = `mailto:${email}`

  const techs = [
    { name: "Next.js", icon: Globe },
    { name: "React", icon: Sparkles },
    { name: "React Native", icon: Smartphone },
    { name: "Laravel", icon: Server },
    { name: "Spring Boot", icon: ShieldCheck },
    { name: "Python", icon: Code2 },
    { name: "Flask", icon: Workflow },
    { name: "RabbitMQ", icon: Workflow },
    { name: "Kafka", icon: Workflow },
    { name: "PostgreSQL", icon: Database },
    { name: "MongoDB", icon: Database },
    { name: "Git", icon: GitBranch },
  ]

  return (
    <section id={id} className="relative overflow-hidden bg-zinc-950 text-zinc-100">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 [background:radial-gradient(1000px_circle_at_18%_25%,rgba(20,184,166,0.16),transparent_55%),radial-gradient(900px_circle_at_82%_30%,rgba(34,211,238,0.12),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-5">
            <div className="flex flex-wrap gap-2">
              <Badge>
                <Sparkles className="mr-1.5 h-3.5 w-3.5 text-teal-300" />
                Disponível p/ projetos
              </Badge>
              <Badge>
                <Workflow className="mr-1.5 h-3.5 w-3.5 text-cyan-300" />
                Web • Mobile • Sistemas
              </Badge>
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              <span className="text-zinc-200">Sobre</span>{" "}
              <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-200 bg-clip-text text-transparent">
                {name}
              </span>
            </h2>

            <p className="mt-2 text-sm font-medium text-zinc-300">{title}</p>

            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              {description}
            </p>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 px-4 text-sm font-medium text-zinc-950 transition hover:brightness-110"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={mailHref}
                className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-medium text-zinc-100 transition hover:bg-white/10"
              >
                <Mail className="h-4 w-4 text-teal-200" />
                Email
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-7" id="skills">
            <Card>
              <p className="text-sm font-semibold text-zinc-100">Stack</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <Pill key={tech.name} icon={tech.icon}>
                    {tech.name}
                  </Pill>
                ))}
              </div>

              <div className="mt-6 grid gap-2 sm:grid-cols-3" id="contact">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-zinc-100 transition hover:bg-white/10"
                >
                  <span className="inline-flex items-center gap-2">
                    <GitBranch className="h-4 w-4 text-teal-200" />
                    GitHub
                  </span>
                  <ArrowRight className="h-4 w-4 text-zinc-300" />
                </a>

                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-zinc-100 transition hover:bg-white/10"
                >
                  <span className="inline-flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-teal-200" />
                    LinkedIn
                  </span>
                  <ArrowRight className="h-4 w-4 text-zinc-300" />
                </a>

                <Link
                  href="#projects"
                  className="inline-flex items-center justify-between rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-400 px-4 py-3 text-sm font-medium text-zinc-950 transition hover:brightness-110"
                >
                  <span className="inline-flex items-center gap-2">
                    <Smartphone className="h-4 w-4" />
                    Projetos
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
