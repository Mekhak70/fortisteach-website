"use client"

import { useI18n } from "@/lib/i18n-context"
import { Shield, Phone, Mail, MapPin } from "lucide-react"

export function SiteFooter() {
  const { t } = useI18n()

  return (
    <footer className="bg-[oklch(0.15_0.03_260)] text-[oklch(0.70_0.02_260)]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-[oklch(0.55_0.18_220)]" strokeWidth={2.5} />
              <span className="text-lg font-bold text-white">
                Fortis<span className="text-[oklch(0.55_0.18_220)]">Teach</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
            {t.hero.title}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-white mb-1">{t.nav.services}</h4>
            <a href="#services" className="text-sm hover:text-white transition-colors">{t.nav.services}</a>
            <a href="#about" className="text-sm hover:text-white transition-colors">{t.nav.about}</a>
            <a href="#technologies" className="text-sm hover:text-white transition-colors">{t.nav.technologies}</a>
            <a href="#contact" className="text-sm hover:text-white transition-colors">{t.nav.contact}</a>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-white mb-1">{t.contact.title}</h4>
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 flex-shrink-0" />
              <a href="tel:+37444648002" className="text-sm hover:text-white transition-colors">044 648 002</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 flex-shrink-0" />
              <a href="tel:+37493648002" className="text-sm hover:text-white transition-colors">093 648 002</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 flex-shrink-0" />
              <a href="mailto:fortisteach@gmail.com" className="text-sm hover:text-white transition-colors">fortisteach@gmail.com</a>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-white mb-1">{t.contact.area}</h4>
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
              <span className="text-sm">{t.footer.address}</span>
            </div>
            {/* Social placeholders */}
            <div className="flex items-center gap-3 mt-3">
              {["Facebook", "LinkedIn", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="h-9 w-9 rounded-lg border border-[oklch(0.30_0.03_260)] flex items-center justify-center text-xs font-bold text-[oklch(0.55_0.02_260)] hover:border-[oklch(0.55_0.18_220)] hover:text-white transition-colors"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[oklch(0.25_0.03_260)]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} FortisTeach. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
