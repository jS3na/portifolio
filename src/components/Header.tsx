"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, MessageCircle, ArrowRight } from "lucide-react"

type NavItem = { href: string; label: string }

type HeaderProps = {
  name?: string
  phoneE164?: string
  whatsappMessage?: string
  items?: NavItem[]
}

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string
  label: string
  onClick?: () => void
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "rounded-xl px-3 py-2 text-sm font-medium text-zinc-200 transition",
        "hover:bg-white/5 hover:text-white",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
      )}
    >
      {label}
    </a>
  )
}

export default function Header({
  name = "João Gabriel Sena",
  phoneE164 = "5586989030943",
  whatsappMessage = "Olá! Quero pedir um orçamento para um projeto.",
  items = [
    { href: "#projects", label: "Projetos" },
    { href: "#services", label: "Serviços" },
    { href: "#about", label: "Sobre" },
    { href: "#contact", label: "Contato" },
  ],
}: HeaderProps) {
  const [open, setOpen] = React.useState(false)

  const waHref = React.useMemo(() => {
    return `https://wa.me/${phoneE164}?text=${encodeURIComponent(whatsappMessage)}`
  }, [phoneE164, whatsappMessage])

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  React.useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-24">
        <div className="h-full bg-gradient-to-b from-zinc-950/80 to-transparent" />
      </div>

      <nav className="relative border-b border-white/10 bg-zinc-950/70 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/50">
        {/* subtle grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:64px_64px]"
        />

        <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand */}
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-xl px-2 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
            aria-label="Ir para o início"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
              <span className="h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_18px_rgba(45,212,191,0.8)]" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-white">{name}</span>
              <span className="block text-xs text-zinc-400">FullStack • Web • Mobile</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {items.map((it) => (
              <NavLink key={it.href} href={it.href} label={it.label} />
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "inline-flex h-10 items-center justify-center gap-2 rounded-xl px-4 text-sm font-medium",
                "bg-gradient-to-r from-teal-400 to-cyan-400 text-zinc-950 hover:brightness-110",
                "shadow-[0_12px_40px_-18px_rgba(34,211,238,0.55)] transition",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
              )}
              aria-label="Chamar no WhatsApp (abre em nova aba)"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Orçamento
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl",
              "border border-white/10 bg-white/5 text-zinc-100 hover:bg-white/10 transition",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
            )}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={cn(
            "md:hidden overflow-hidden transition-[max-height,opacity] duration-300",
            open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="relative border-t border-white/10 bg-zinc-950/60 px-4 pb-5 pt-4 backdrop-blur sm:px-6">
            <div className="flex flex-col gap-1">
              {items.map((it) => (
                <NavLink
                  key={it.href}
                  href={it.href}
                  label={it.label}
                  onClick={() => setOpen(false)}
                />
              ))}
            </div>

            <div className="mt-4">
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className={cn(
                  "inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl px-4 text-sm font-medium",
                  "bg-gradient-to-r from-teal-400 to-cyan-400 text-zinc-950 hover:brightness-110 transition",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
                )}
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Chamar no WhatsApp
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
