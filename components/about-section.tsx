"use client"

import { useI18n } from "@/lib/i18n-context"
import { Shield, CheckCircle } from "lucide-react"

export function AboutSection() {
  const { t } = useI18n()

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6 text-balance">
              {t.about.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-pretty mb-8">
              {t.about.text}
            </p>
            <div className="flex flex-col gap-3">
              {["IT Infrastructure", "Smart Home Integration", "24/7 Support", "Enterprise Solutions"].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-secondary-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="aspect-square rounded-2xl bg-[oklch(0.20_0.04_260)] border border-[oklch(0.30_0.04_260)] flex items-center justify-center">
                <Shield className="h-24 w-24 text-[oklch(0.55_0.18_220)]" strokeWidth={1} />
              </div>
              <div className="absolute -top-3 -right-3 rounded-xl bg-card border border-border px-4 py-2 shadow-lg">
                <span className="text-2xl font-bold text-primary">10+</span>
                <p className="text-xs text-muted-foreground">Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
