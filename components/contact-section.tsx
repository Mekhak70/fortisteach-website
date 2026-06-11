"use client"

import { useState } from "react"
import { useI18n } from "@/lib/i18n-context"
import { Phone, Mail, MapPin } from "lucide-react"
import { useEffect, useRef } from "react"

export function ContactSection() {
  const { t } = useI18n()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const setCanvasSize = () => {
      const section = canvas.parentElement?.parentElement
      if (section) {
        const rect = section.getBoundingClientRect()
        canvas.width = rect.width
        canvas.height = rect.height
      } else {
        canvas.width = window.innerWidth
        canvas.height = 800
      }
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Rotating particles in a circle
    const orbitParticles: Array<{
      angle: number
      radius: number
      speed: number
      size: number
      alpha: number
    }> = []

    for (let i = 0; i < 50; i++) {
      orbitParticles.push({
        angle: (Math.PI * 2 * i) / 50,
        radius: 100 + Math.random() * 200,
        speed: 0.2 + Math.random() * 0.5,
        size: 2 + Math.random() * 3,
        alpha: 0.2 + Math.random() * 0.4,
      })
    }

    // Floating bubbles
    const bubbles: Array<{
      x: number
      y: number
      radius: number
      vy: number
      alpha: number
    }> = []

    for (let i = 0; i  < 30; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 5 + Math.random() * 15,
        vy: 0.2 + Math.random() * 0.5,
        alpha: 0.05 + Math.random() * 0.1,
      })
    }

    // Stars
    const stars: Array<{
      x: number
      y: number
      radius: number
      twinkleSpeed: number
      phase: number
    }> = []

    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 0.5 + Math.random() * 1.5,
        twinkleSpeed: 0.5 + Math.random() * 2,
        phase: Math.random() * Math.PI * 2,
      })
    }

    // Floating geometric shapes
    const shapes: Array<{
      x: number
      y: number
      size: number
      rotation: number
      rotSpeed: number
      type: "square" | "triangle"
    }> = []

    for (let i = 0; i < 15; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 8 + Math.random() * 15,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        type: Math.random() > 0.5 ? "square" : "triangle",
      })
    }

    function drawTriangle(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number) {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.beginPath()
      const height = size * Math.sqrt(3) / 2
      ctx.moveTo(0, -height / 2)
      ctx.lineTo(-size / 2, height / 2)
      ctx.lineTo(size / 2, height / 2)
      ctx.closePath()
      ctx.restore()
    }

    function animate() {
      if (!ctx || !canvas) return
      
      time += 0.02
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Animated gradient background
      const gradient = ctx.createLinearGradient(
        canvas.width / 2 + Math.sin(time * 0.1) * 50,
        canvas.height / 2 + Math.cos(time * 0.15) * 50,
        canvas.width / 2 + Math.sin(time * 0.2) * 100,
        canvas.height / 2 + Math.cos(time * 0.25) * 100
      )
      gradient.addColorStop(0, "rgba(6, 8, 18, 1)")
      gradient.addColorStop(0.5, "rgba(10, 12, 25, 1)")
      gradient.addColorStop(1, "rgba(4, 6, 15, 1)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Radial gradient overlay
      const radialGradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.sin(time * 0.3) * 100,
        canvas.height / 2 + Math.cos(time * 0.4) * 100,
        50,
        canvas.width / 2,
        canvas.height / 2,
        400
      )
      radialGradient.addColorStop(0, "rgba(80, 130, 220, 0.03)")
      radialGradient.addColorStop(1, "rgba(80, 130, 220, 0)")
      ctx.fillStyle = radialGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        const twinkle = 0.3 + Math.sin(time * star.twinkleSpeed + star.phase) * 0.3
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkle * 0.6})`
        ctx.fill()
      })

      // Draw orbiting particles
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      orbitParticles.forEach((particle) => {
        const x = centerX + Math.cos(time * particle.speed + particle.angle) * particle.radius
        const y = centerY + Math.sin(time * particle.speed + particle.angle) * particle.radius
        
        ctx.beginPath()
        ctx.arc(x, y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(80, 130, 220, ${particle.alpha + Math.sin(time * 2) * 0.1})`
        ctx.fill()
      })

      // Draw connection lines between orbiting particles
      ctx.beginPath()
      ctx.strokeStyle = "rgba(80, 130, 220, 0.04)"
      ctx.lineWidth = 0.5
      for (let i = 0; i < orbitParticles.length; i++) {
        for (let j = i + 1; j < orbitParticles.length; j++) {
          const angle1 = time * orbitParticles[i].speed + orbitParticles[i].angle
          const angle2 = time * orbitParticles[j].speed + orbitParticles[j].angle
          const x1 = centerX + Math.cos(angle1) * orbitParticles[i].radius
          const y1 = centerY + Math.sin(angle1) * orbitParticles[i].radius
          const x2 = centerX + Math.cos(angle2) * orbitParticles[j].radius
          const y2 = centerY + Math.sin(angle2) * orbitParticles[j].radius
          const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.stroke()
          }
        }
      }

      // Draw bubbles
      bubbles.forEach((bubble) => {
        bubble.y -= bubble.vy
        if (bubble.y + bubble.radius < 0) {
          bubble.y = canvas.height + bubble.radius
          bubble.x = Math.random() * canvas.width
        }
        
        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(80, 130, 220, ${bubble.alpha})`
        ctx.fill()
        
        // Bubble border
        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(100, 150, 240, ${bubble.alpha * 0.5})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      })

      // Draw geometric shapes
      shapes.forEach((shape) => {
        shape.rotation += shape.rotSpeed
        
        if (shape.type === "square") {
          ctx.save()
          ctx.translate(shape.x, shape.y)
          ctx.rotate(shape.rotation)
          ctx.strokeStyle = `rgba(80, 130, 220, 0.15)`
          ctx.lineWidth = 1
          ctx.strokeRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size)
          ctx.restore()
        } else {
          ctx.save()
          ctx.translate(shape.x, shape.y)
          ctx.rotate(shape.rotation)
          ctx.beginPath()
          const height = shape.size * Math.sqrt(3) / 2
          ctx.moveTo(0, -height / 2)
          ctx.lineTo(-shape.size / 2, height / 2)
          ctx.lineTo(shape.size / 2, height / 2)
          ctx.closePath()
          ctx.strokeStyle = `rgba(139, 92, 246, 0.15)`
          ctx.lineWidth = 1
          ctx.stroke()
          ctx.restore()
        }
      })

      // Draw rotating rings
      for (let i = 0; i < 3; i++) {
        const ringRadius = 180 + i * 60 + Math.sin(time * 0.5) * 20
        ctx.beginPath()
        ctx.arc(centerX, centerY, ringRadius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(80, 130, 220, ${0.05 + i * 0.03})`
        ctx.lineWidth = 1
        ctx.stroke()
        
        // Dashed ring
        ctx.beginPath()
        ctx.arc(centerX, centerY, ringRadius + 15, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(80, 130, 220, ${0.03 + i * 0.02})`
        ctx.setLineDash([5, 15])
        ctx.stroke()
        ctx.setLineDash([])
      }

      // Draw pulsing center glow
      const pulse = 0.5 + Math.sin(time * 2) * 0.3
      ctx.beginPath()
      ctx.arc(centerX, centerY, 30 + pulse * 10, 0, Math.PI * 2)
      const glowGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 60)
      glowGradient.addColorStop(0, "rgba(80, 130, 220, 0.2)")
      glowGradient.addColorStop(1, "rgba(80, 130, 220, 0)")
      ctx.fillStyle = glowGradient
      ctx.fill()

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      cancelAnimationFrame(animationId)
    }
  }, [])

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
      const token = "8784561854:AAEjJVC4xA-1FYfcxCa8lmThTxkN5kTrwSI"
      const chatIds = [
        "1630974229",
        "6976357702"
      ]
  
      const text = `
  📩 Նոր դիմում կայքից
  
  👤 Անուն: ${name}
  📧 Email: ${email}
  💬 Հաղորդագրություն: ${message}
  `
  
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
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[oklch(0.55_0.18_220)]/5 to-transparent pointer-events-none z-[1]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16 text-balance">
          {t.contact.title}
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info + map */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-[oklch(0.55_0.18_220)]/20 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <Phone className="h-5 w-5 text-[oklch(0.65_0.18_220)]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{t.contact.phone}</h3>
                  <p className="text-sm text-[oklch(0.70_0.02_260)] mt-1">
                    <a href="tel:+37444648002" className="hover:text-[oklch(0.65_0.18_220)] transition-colors">044 648 002</a>
                  </p>
                  <p className="text-sm text-[oklch(0.70_0.02_260)]">
                    <a href="tel:+37493648002" className="hover:text-[oklch(0.65_0.18_220)] transition-colors">093 648 002</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-[oklch(0.55_0.18_220)]/20 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <Mail className="h-5 w-5 text-[oklch(0.65_0.18_220)]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{t.contact.email}</h3>
                  <p className="text-sm text-[oklch(0.70_0.02_260)] mt-1">
                    <a href="mailto:fortisteach@gmail.com" className="hover:text-[oklch(0.65_0.18_220)] transition-colors">
                      fortisteach@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-[oklch(0.55_0.18_220)]/20 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <MapPin className="h-5 w-5 text-[oklch(0.65_0.18_220)]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{t.contact.area}</h3>
                  <p className="text-sm text-[oklch(0.70_0.02_260)] mt-1">
                    {t.contact.areaValue}
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-white/10 h-56 backdrop-blur-sm">
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
          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur-md p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="contact-name" className="text-sm font-medium text-white mb-1.5 block">
                  {t.contact.form.name}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-[oklch(0.70_0.02_260)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_220)] transition-all"
                  placeholder={t.contact.form.name}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-sm font-medium text-white mb-1.5 block">
                  {t.contact.form.email}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-[oklch(0.70_0.02_260)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_220)] transition-all"
                  placeholder={t.contact.form.email}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="text-sm font-medium text-white mb-1.5 block">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-[oklch(0.70_0.02_260)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.18_220)] resize-none transition-all"
                  placeholder={t.contact.form.message}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-[oklch(0.55_0.18_220)] py-3 text-sm font-semibold text-white transition-all hover:bg-[oklch(0.50_0.18_220)] hover:scale-105"
                style={{ cursor: "pointer" }}
              >
                {loading ? "Sending..." : t.contact.form.send}
              </button>
              {success && (
                <p className="text-green-400 text-sm mt-2 text-center">{t.MessagesSent}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}