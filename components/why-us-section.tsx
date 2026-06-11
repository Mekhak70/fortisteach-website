"use client"

import { useI18n } from "@/lib/i18n-context"
import { Cpu, Users, Zap, Award, MapPin, Shield } from "lucide-react"
import { useEffect, useRef } from "react"

const icons = [Cpu, Users, Zap, Award, MapPin]

export function WhyUsSection() {
  const { t } = useI18n()
  const canvasRef = useRef<HTMLCanvasElement>(null)

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
        canvas.height = 600
      }
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Floating particles
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      alpha: number
      color: string
    }> = []

    const colors = [
      "rgba(80, 130, 220",
      "rgba(139, 92, 246",
      "rgba(59, 130, 246",
      "rgba(129, 140, 248",
    ]

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: 1.5 + Math.random() * 3,
        alpha: 0.1 + Math.random() * 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    // Floating orbs
    const orbs: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      alpha: number
      pulseSpeed: number
    }> = []

    for (let i = 0; i < 6; i++) {
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.03,
        vy: (Math.random() - 0.5) * 0.03,
        radius: 30 + Math.random() * 50,
        alpha: 0.03 + Math.random() * 0.05,
        pulseSpeed: 0.5 + Math.random() * 1,
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      
      time += 0.02
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Dark gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(8, 10, 20, 1)")
      gradient.addColorStop(0.5, "rgba(12, 15, 28, 1)")
      gradient.addColorStop(1, "rgba(6, 8, 18, 1)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Grid lines
      const gridSize = 60
      ctx.strokeStyle = "rgba(80, 130, 220, 0.03)"
      ctx.lineWidth = 1
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Diagonal lines
      ctx.strokeStyle = "rgba(80, 130, 220, 0.02)"
      ctx.lineWidth = 0.5
      for (let i = -canvas.height; i < canvas.width + canvas.height; i += 40) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i + canvas.height, canvas.height)
        ctx.stroke()
      }

      // Orbs
      orbs.forEach((orb) => {
        orb.x += orb.vx
        orb.y += orb.vy
        
        if (orb.x < -orb.radius) orb.x = canvas.width + orb.radius
        if (orb.x > canvas.width + orb.radius) orb.x = -orb.radius
        if (orb.y < -orb.radius) orb.y = canvas.height + orb.radius
        if (orb.y > canvas.height + orb.radius) orb.y = -orb.radius
        
        const pulse = 0.5 + Math.sin(time * orb.pulseSpeed) * 0.5
        const radius = orb.radius + pulse * 10
        
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, radius, 0, Math.PI * 2)
        const orbGradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, radius)
        orbGradient.addColorStop(0, `rgba(80, 130, 220, ${orb.alpha * pulse})`)
        orbGradient.addColorStop(1, `rgba(80, 130, 220, 0)`)
        ctx.fillStyle = orbGradient
        ctx.fill()
      })

      // Particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy
        
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
        
        const twinkle = 0.5 + Math.sin(time * 2 + index) * 0.5
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `${particle.color}, ${particle.alpha * (0.5 + twinkle * 0.5)})`
        ctx.fill()
      })

      // Connecting lines
      ctx.beginPath()
      ctx.strokeStyle = "rgba(80, 130, 220, 0.04)"
      ctx.lineWidth = 0.5
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Geometric shapes
      const shapeCount = 8
      for (let i = 0; i < shapeCount; i++) {
        const angle = time * 0.2 + (i / shapeCount) * Math.PI * 2
        const radius = 120 + Math.sin(time * 0.3 + i) * 40
        const x = canvas.width / 2 + Math.cos(angle) * radius
        const y = canvas.height / 2 + Math.sin(angle) * radius
        
        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(angle + time)
        ctx.strokeStyle = `rgba(80, 130, 220, 0.08)`
        ctx.lineWidth = 1
        
        const size = 6 + Math.sin(time * 0.5 + i) * 2
        ctx.strokeRect(-size/2, -size/2, size, size)
        
        ctx.beginPath()
        ctx.arc(0, 0, size/1.5, 0, Math.PI * 2)
        ctx.stroke()
        
        ctx.restore()
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="relative py-24 overflow-hidden" style={{ minHeight: "100vh" }}>
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[oklch(0.55_0.18_220)]/5 to-transparent pointer-events-none z-[1]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.55_0.18_220)]/30 bg-[oklch(0.55_0.18_220)]/10 px-3 py-1 mb-4 backdrop-blur-sm">
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
                
                <div className="relative rounded-2xl bg-[oklch(0.22_0.04_260)] p-5 text-center border border-white/5 transition-all duration-300 group-hover:border-[oklch(0.55_0.18_220)]/30 group-hover:-translate-y-1 backdrop-blur-sm">
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