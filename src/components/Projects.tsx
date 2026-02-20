"use client"

import * as React from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Layers3,
  Smartphone,
  Sparkles,
  Wrench,
  Workflow,
  Code2,
  X,
} from "lucide-react"

/**
 * ✅ FIX do seu erro: "Badge is not defined"
 * Este arquivo é AUTOSSUFICIENTE: define Badge/Chip/Card/Button inline.
 * Só precisa existir os imports das imagens abaixo (ou troque pelos seus).
 */

type Project = {
  title: string
  description: string
  stack: string[]
  kind: "Web" | "Mobile" | "Landing" | "API"
  image: StaticImageData
  href?: string
}

type ProjectSectionProps = {
  id?: string
  title?: string
  subtitle?: string
  projects?: Project[]
  primaryCtaLabel?: string
  primaryCtaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
}

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
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

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-200">
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
        "relative rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_1px_0_0_rgba(255,255,255,0.06),0_24px_80px_-55px_rgba(0,0,0,0.9)] backdrop-blur",
        className
      )}
    >
      {children}
    </div>
  )
}

function AButton({
  href,
  variant = "primary",
  className,
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary"
}) {
  const base =
    "inline-flex h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-0"
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-teal-400 to-cyan-400 text-zinc-950 hover:brightness-110 shadow-[0_12px_40px_-18px_rgba(34,211,238,0.55)]"
      : "border border-white/10 bg-white/5 text-zinc-100 hover:bg-white/10"
  return (
    <a href={href} className={cn(base, styles, className)} {...rest}>
      {children}
    </a>
  )
}

function IconForKind({ kind }: { kind: Project["kind"] }) {
  const cls = "h-4 w-4 text-teal-200"
  switch (kind) {
    case "Mobile":
      return <Smartphone className={cls} aria-hidden />
    case "API":
      return <Code2 className={cls} aria-hidden />
    case "Landing":
      return <Sparkles className={cls} aria-hidden />
    default:
      return <Layers3 className={cls} aria-hidden />
  }
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: (p: Project) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className={cn(
        "group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] text-left",
        "shadow-[0_1px_0_0_rgba(255,255,255,0.06),0_24px_80px_-55px_rgba(0,0,0,0.9)]",
        "transition hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
      )}
      aria-label={`Abrir detalhes do projeto: ${project.title}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900/40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(circle_at_20%_15%,rgba(45,212,191,0.9),transparent_45%),radial-gradient(circle_at_80%_65%,rgba(34,211,238,0.85),transparent_45%)]"
        />
        <Image
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          placeholder="blur"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-zinc-950/80 to-transparent"
        />

        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/40 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur">
            <IconForKind kind={project.kind} />
            {project.kind}
          </span>
        </div>

        <div className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full border border-white/10 bg-zinc-950/40 px-3 py-1 text-xs text-zinc-200 backdrop-blur">
          Ver detalhes
          <ChevronRight className="h-4 w-4 text-teal-200 transition group-hover:translate-x-0.5" aria-hidden />
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-base font-semibold text-zinc-100">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
          {project.stack.length > 4 ? <Chip>+{project.stack.length - 4}</Chip> : null}
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>
    </button>
  )
}

function Overlay({
  open,
  onClose,
  project,
}: {
  open: boolean
  onClose: () => void
  project: Project | null
}) {
  React.useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKeyDown)

    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open || !project) return null

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50">
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-black/65 backdrop-blur-sm"
        aria-label="Fechar"
      />

      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(900px_circle_at_50%_25%,rgba(34,211,238,0.14),transparent_55%)]" />

      <div className="relative mx-auto flex h-full max-w-5xl items-center px-4 py-6 sm:px-6">
        <Card className="pointer-events-auto w-full overflow-hidden bg-zinc-950/70">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200">
                  <IconForKind kind={project.kind} />
                  {project.kind}
                </span>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-zinc-300 hover:text-zinc-100"
                  >
                    Abrir link <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </a>
                ) : null}
              </div>

              <h3 className="mt-2 truncate text-lg font-semibold text-zinc-100">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-400">{project.description}</p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-200 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <div className="grid gap-0 lg:grid-cols-5">
            <div className="relative lg:col-span-3">
              <div className="relative aspect-[16/10] bg-zinc-900/40">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  placeholder="blur"
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-950/85 to-transparent"
                />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="p-5">
                <p className="text-sm font-medium text-zinc-200">Stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-medium text-zinc-100">Diferenciais</p>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                    {[
                      "UI responsiva com foco em conversão",
                      "Código limpo, escalável e fácil de manter",
                      "Boa experiência no mobile + performance",
                    ].map((it) => (
                      <li key={it} className="flex gap-2">
                        <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-teal-300 shadow-[0_0_18px_rgba(45,212,191,0.7)]" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex h-11 flex-1 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-medium text-zinc-100 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
                  >
                    Fechar
                  </button>

                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 px-4 text-sm font-medium text-zinc-950 transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
                    >
                      Ver online <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                    </a>
                  ) : (
                    <div className="flex-1" />
                  )}
                </div>

                <p className="mt-3 text-xs text-zinc-500">
                  Dica: pressione <span className="font-medium text-zinc-400">Esc</span>{" "}
                  para fechar.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

/** 🔧 IMPORTES DOS SEUS ASSETS (troque paths se necessário) */
import ProjetoLeticia from "../assets/projeto_leticia.png"
import ProjetoRealEstate from "../assets/real_estate.png"
import ProjetoGrupoFabrica from "../assets/landing_grupofabrica.png"
import ProjetoDoutoraBiotec from "../assets/projeto_doutorabiotec.png"

const defaultProjects: Project[] = [
  {
    title: "Landing Page para Fisioterapia",
    description: "Página rápida e responsiva, com copy clara e CTA forte para captar leads.",
    stack: ["Next.js", "TypeScript", "Tailwind", "UI/UX", "SEO"],
    kind: "Landing",
    image: ProjetoLeticia,
  },
  {
    title: "App para Imobiliária",
    description: "App com filtros, login e experiência mobile pensada para converter em visitas.",
    stack: ["React Native", "Firebase", "Clerk", "TypeScript", "UX"],
    kind: "Mobile",
    image: ProjetoRealEstate,
  },
  {
    title: "Landing para Empresa de Eventos",
    description: "Layout premium com performance no mobile e foco em contato/agendamento.",
    stack: ["Next.js", "Tailwind", "A11y", "Performance"],
    kind: "Landing",
    image: ProjetoGrupoFabrica,
  },
  {
    title: "Portal de Notícias + Lâminas (Clínica)",
    description: "Conteúdo organizado, base sólida e API pronta para evoluir com integrações.",
    stack: ["Next.js", "Tailwind", "Flask API", "Auth", "SEO"],
    kind: "Web",
    image: ProjetoDoutoraBiotec,
  },
]

export default function ProjectSection({
  id = "projetos",
  title = "Projetos que viraram resultado",
  subtitle = "Seleção de trabalhos com foco em performance, UX e conversão — do briefing à entrega.",
  projects = defaultProjects,
  primaryCtaLabel = "Pedir orçamento",
  primaryCtaHref = "https://api.whatsapp.com/send/?phone=5586989030943&text=Ol%C3%A1%21+Quero+pedir+um+or%C3%A7amento+para+um+projeto.&type=phone_number&app_absent=0",
  secondaryCtaLabel = "Ver serviços",
  secondaryCtaHref = "#services",
}: ProjectSectionProps) {
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState<Project | null>(null)

  const openProject = (p: Project) => {
    setSelected(p)
    setOpen(true)
  }
  const close = () => {
    setOpen(false)
    setSelected(null)
  }

  return (
    <section id={id} className="relative overflow-hidden bg-zinc-950 text-zinc-100">
      {/* background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 [background:radial-gradient(1000px_circle_at_15%_25%,rgba(20,184,166,0.16),transparent_50%),radial-gradient(900px_circle_at_85%_30%,rgba(34,211,238,0.12),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-zinc-950 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Copy */}
          <div className="lg:col-span-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>
                <Sparkles className="mr-1.5 h-3.5 w-3.5 text-teal-300" aria-hidden />
                Casos reais
              </Badge>
              <Badge>
                <Workflow className="mr-1.5 h-3.5 w-3.5 text-cyan-300" aria-hidden />
                Web • Mobile • APIs
              </Badge>
            </div>

            <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-200 bg-clip-text text-transparent">
                {title}
              </span>
            </h2>

            <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-300">
              {subtitle}
            </p>

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-medium text-zinc-100">Meu processo</p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                {[
                  "Briefing → objetivo, público e métricas",
                  "UX/UI → layout premium e claro",
                  "Build → código limpo + performance",
                  "Entrega → checklist + evolução",
                ].map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-teal-300 shadow-[0_0_18px_rgba(45,212,191,0.7)]" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex flex-col gap-2 sm:flex-row">
              <AButton target="_blank" href={primaryCtaHref} variant="primary" className="group">
                {primaryCtaLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </AButton>

              <Link
                href={secondaryCtaHref}
                className={cn(
                  "inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-medium text-zinc-100 transition hover:bg-white/10",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
                )}
                aria-label={secondaryCtaLabel}
              >
                {secondaryCtaLabel}
                <ArrowRight className="h-4 w-4 text-teal-200" aria-hidden />
              </Link>
            </div>

            <div className="mt-7 grid gap-3">
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5">
                  <Wrench className="h-4.5 w-4.5 text-teal-200" aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-100">Manutenção sem dor</p>
                  <p className="text-sm text-zinc-400">
                    Ajustes, evolução e novas features com previsibilidade.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="lg:col-span-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {projects.map((p) => (
                <ProjectCard key={p.title} project={p} onOpen={openProject} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Overlay open={open} onClose={close} project={selected} />
    </section>
  )
}

/**
 * ✅ SOBRE O WARNING DO VIEWPORT (Next App Router):
 * No app/layout.tsx, NÃO coloque viewport dentro de metadata.
 * Use assim:
 *
 * export const viewport = { width: "device-width", initialScale: 1 }
 * export const metadata = { title: "...", description: "..." }
 */
