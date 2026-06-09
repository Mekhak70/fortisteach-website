"use client"

import { useI18n } from "@/lib/i18n-context"
import { Cpu, Users, Zap, Award, MapPin, Shield } from "lucide-react"

const icons = [Cpu, Users, Zap, Award, MapPin]

export function WhyUsSection() {
  const { t } = useI18n()

  return (
    <section className="relative py-24 overflow-hidden ">
      {/* Subtle background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[oklch(0.55_0.18_220)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.55_0.18_220)]/30 bg-[oklch(0.55_0.18_220)]/10 px-3 py-1 mb-4">
            <Shield className="h-3 w-3 text-[oklch(0.65_0.18_220)]" />
            <span className="text-xs font-medium text-[oklch(0.75_0.10_220)]">Why FortisTeach</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.whyUs.title}
          </h2>
          <p className="text-[oklch(0.70_0.02_260)] max-w-2xl mx-auto">
            What makes us different from the rest
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {t.whyUs.items.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div
                key={i}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[oklch(0.55_0.18_220)]/0 via-[oklch(0.55_0.18_220)]/20 to-[oklch(0.55_0.18_220)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="relative rounded-2xl bg-[oklch(0.22_0.04_260)] p-5 text-center border border-white/5 transition-all duration-300 group-hover:border-[oklch(0.55_0.18_220)]/30 group-hover:-translate-y-1">
                  {/* Icon */}
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[oklch(0.55_0.18_220)]/20 text-[oklch(0.65_0.18_220)] transition-all duration-300 group-hover:bg-[oklch(0.55_0.18_220)] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[oklch(0.70_0.02_260)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}