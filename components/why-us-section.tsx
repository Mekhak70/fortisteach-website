"use client"

import { useI18n } from "@/lib/i18n-context"
import { Cpu, Users, Zap, Award, MapPin } from "lucide-react"

const icons = [Cpu, Users, Zap, Award, MapPin]

export function WhyUsSection() {
  const { t } = useI18n()

  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary-foreground mb-16 text-balance">
          {t.whyUs.title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {t.whyUs.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <div key={i} className="flex flex-col items-center text-center gap-4">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-secondary-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
