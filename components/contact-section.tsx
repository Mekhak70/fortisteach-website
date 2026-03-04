"use client"

import { useState } from "react"
import { useI18n } from "@/lib/i18n-context"
import { Phone, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  const { t } = useI18n()

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  
    const form = e.currentTarget
    const name = (form.querySelector("#contact-name") as HTMLInputElement).value
    const email = (form.querySelector("#contact-email") as HTMLInputElement).value
    const message = (form.querySelector("#contact-message") as HTMLTextAreaElement).value
  
    if (!name || !email || !message) return
  
    setLoading(true)
    setSuccess(false)
  
    try {
      // ⚠️ Hardcoded bot token և chat_id-ներ
      const token = "8784561854:AAEjJVC4xA-1FYfcxCa8lmThTxkN5kTrwSI"
      const chatIds = [
        "1630974229", // Առաջին ստացող
        "6976357702"  // Երկրորդ ստացող
      ]
  
      const text = `
  📩 Նոր դիմում կայքից
  
  👤 Անուն: ${name}
  📧 Email: ${email}
  💬 Հաղորդագրություն: ${message}
  `
  
      // Ուղարկում բոլոր ստացողներին
      for (const chatId of chatIds) {
        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text }),
        })
      }
  
      form.reset()
      setSuccess(true)
    } catch (err) {
      console.error("Telegram send error:", err)
    }
  
    setLoading(false)
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16 text-balance">
          {t.contact.title}
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info + map */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{t.contact.phone}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    <a href="tel:+37444648002" className="hover:text-primary transition-colors">044 648 002</a>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <a href="tel:+37493648002" className="hover:text-primary transition-colors">093 648 002</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{t.contact.email}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    <a href="mailto:fortisteach@gmail.com" className="hover:text-primary transition-colors">
                      fortisteach@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{t.contact.area}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t.contact.areaValue}
                  </p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-border h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97545.98649378818!2d44.43709547610997!3d40.18109405032301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2sYerevan%2C%20Armenia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FortisTeach location - Yerevan, Armenia"
              />
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-xl border border-border bg-card p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="contact-name" className="text-sm font-medium text-card-foreground mb-1.5 block">
                  {t.contact.form.name}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder={t.contact.form.name}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-sm font-medium text-card-foreground mb-1.5 block">
                  {t.contact.form.email}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder={t.contact.form.email}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="text-sm font-medium text-card-foreground mb-1.5 block">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder={t.contact.form.message}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                style={{ cursor: "pointer" }}
              >
                {loading ? "Sending..." : t.contact.form.send}
              </button>
              {success && (
                <p className="text-green-500 text-sm mt-2">{t.MessagesSent}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}