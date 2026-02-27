"use client"

import { useI18n } from "@/lib/i18n-context"
import { Phone, Mail, MapPin } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const { t } = useI18n()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const BOT_TOKEN = "8707923856:AAEu5mcLOJw09iHVqjS55h58Bs-HcpOf-Ug"
  const CHAT_IDS = ["1630974229", "6976357702"] 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const text = `Նոր հաղորդագրություն ֆորմայից:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`

    try {
      await Promise.all(
        CHAT_IDS.map((chat_id) =>
          fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id, text }),
          })
        )
      )
      alert("Հաղորդագրությունը ուղարկված է Telegram")
      setName("")
      setEmail("")
      setMessage("")
    } catch (err) {
      console.error(err)
      alert("Չհաջողվեց ուղարկել հաղորդագրությունը")
    }
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
            {/* ... Այս հատվածը նույնն է, չի փոխվում ... */}
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder={t.contact.form.name}
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-sm font-medium text-card-foreground mb-1.5 block">
                  {t.contact.form.email}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder={t.contact.form.email}
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="text-sm font-medium text-card-foreground mb-1.5 block">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder={t.contact.form.message}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                style={{ cursor: "pointer" }}
              >
                {t.contact.form.send}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}