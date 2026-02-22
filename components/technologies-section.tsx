"use client"

import { useI18n } from "@/lib/i18n-context"

const technologies = [
  "Smart Home",
  "Internet",
  "Server",
  "LAN",
  "VAN",
  "VPN",
  "PC",
  "Notebook",
  "BIOS",
  "L2TP",
  "OpenVPN",
  "WireGuard",
  "MikroTik",
  "TP-Link",
  "Active Directory",
  "Cloud",
  "RAID",
  "NAS",
  "Hypervisor",
  "Web Server",
]

export function TechnologiesSection() {
  const { t } = useI18n()

  return (
    <section id="technologies" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16 text-balance">
          {t.technologies.title}
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-card-foreground transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
