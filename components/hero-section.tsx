"use client"

import { useI18n } from "@/lib/i18n-context"
import { ArrowRight, MessageCircle, Server, Wifi, Shield } from "lucide-react"

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[oklch(0.20_0.04_260)]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[oklch(0.55_0.18_220)] blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[oklch(0.35_0.12_260)] blur-3xl" />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.55_0.18_220)]/30 bg-[oklch(0.55_0.18_220)]/10 px-4 py-1.5 w-fit">
              <Shield className="h-3.5 w-3.5 text-[oklch(0.65_0.18_220)]" />
              <span className="text-xs font-medium text-[oklch(0.75_0.10_220)]">FortisTeach</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-white">
              {t.hero.title}
            </h1>
            <p className="text-lg leading-relaxed text-[oklch(0.70_0.02_260)] max-w-xl text-pretty">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[oklch(0.55_0.18_220)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[oklch(0.50_0.18_220)] shadow-lg shadow-[oklch(0.55_0.18_220)]/25"
              >
                {t.hero.cta1}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-[oklch(0.40_0.04_260)] bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/5"
              >
                <MessageCircle className="h-4 w-4" />
                {t.hero.cta2}
              </a>
            </div>
          </div>

          {/* Hero visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl border border-[oklch(0.40_0.06_260)] bg-[oklch(0.25_0.04_260)] p-8 flex flex-col gap-6 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[oklch(0.55_0.18_220)]/20 flex items-center justify-center">
                    <Server className="h-5 w-5 text-[oklch(0.65_0.18_220)]" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2.5 w-24 rounded-full bg-[oklch(0.40_0.04_260)]" />
                    <div className="h-2 w-16 rounded-full bg-[oklch(0.35_0.04_260)] mt-2" />
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[oklch(0.70_0.20_150)]" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[oklch(0.55_0.18_220)]/20 flex items-center justify-center">
                    <Wifi className="h-5 w-5 text-[oklch(0.65_0.18_220)]" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2.5 w-20 rounded-full bg-[oklch(0.40_0.04_260)]" />
                    <div className="h-2 w-28 rounded-full bg-[oklch(0.35_0.04_260)] mt-2" />
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[oklch(0.70_0.20_150)]" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[oklch(0.55_0.18_220)]/20 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-[oklch(0.65_0.18_220)]" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2.5 w-28 rounded-full bg-[oklch(0.40_0.04_260)]" />
                    <div className="h-2 w-20 rounded-full bg-[oklch(0.35_0.04_260)] mt-2" />
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[oklch(0.80_0.20_85)]" />
                </div>
                <div className="mt-auto flex gap-2">
                  <div className="flex-1 h-16 rounded-lg bg-[oklch(0.55_0.18_220)]/10 border border-[oklch(0.55_0.18_220)]/20" />
                  <div className="flex-1 h-16 rounded-lg bg-[oklch(0.35_0.12_260)]/10 border border-[oklch(0.35_0.12_260)]/20" />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 rounded-xl bg-[oklch(0.25_0.04_260)] border border-[oklch(0.40_0.06_260)] px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[oklch(0.70_0.20_150)] animate-pulse" />
                  <span className="text-xs font-medium text-[oklch(0.70_0.02_260)]">Systems Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
