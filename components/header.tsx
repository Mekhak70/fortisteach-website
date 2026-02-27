"use client"

import { useState } from "react"
import { useI18n } from "@/lib/i18n-context"
import type { Locale } from "@/lib/translations"
import { Menu, X, Shield } from "lucide-react"

const locales: { code: Locale; label: string }[] = [
  { code: "hy", label: "HY" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
]

export function Header() {
  const { t, locale, setLocale } = useI18n()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.technologies, href: "#technologies" },
    { label: t.nav.contact, href: "#contact" },
    { label: t.nav.design, href: "#design" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#design" className="flex items-center gap-2">
            <Shield className="h-7 w-7 text-primary" strokeWidth={2.5} />
            <span className="text-lg font-bold tracking-tight text-foreground">
              Fortis<span className="text-primary">Teach</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Language switcher + mobile toggle */}
          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-md border border-border overflow-hidden">
              {locales.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLocale(l.code)}
                  className={`px-2.5 py-1 text-xs font-semibold transition-colors ${
                    locale === l.code
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <button
              className="md:hidden p-1.5 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background" aria-label="Mobile navigation">
          <div className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-primary py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
