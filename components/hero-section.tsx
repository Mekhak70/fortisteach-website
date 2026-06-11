
"use client"

import { useI18n } from "@/lib/i18n-context"
import { ArrowRight, MessageCircle, Server, Wifi, Shield } from "lucide-react"
import { useEffect, useRef } from "react"
import {AccentureBackground} from "./AccentureBackground"

export function HeroSection() {
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
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Particle system
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      alpha: number
    }> = []

    const particleCount = 80
    let centerX = canvas.width / 2
    let centerY = canvas.height / 2

    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount
      const radius = 150 + Math.random() * 80
      particles.push({
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 2 + Math.random() * 3,
        alpha: 0.3 + Math.random() * 0.5,
      })
    }

    // Additional floating particles
    const floatingParticles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      alpha: number
    }> = []

    for (let i = 0; i < 80; i++) {
      floatingParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.2,
        radius: 1 + Math.random() * 2.5,
        alpha: 0.2 + Math.random() * 0.4,
      })
    }

    function drawGlowCircle(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, r: number, g: number, b: number, a: number) {
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
      ctx.fill()
    }

    function animate() {
      if (!ctx || !canvas) return
      
      time += 0.02
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update canvas center
      const currentCenterX = canvas.width / 2
      const currentCenterY = canvas.height / 2

      // Draw background gradient (full screen)
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(20, 25, 45, 1)")
      gradient.addColorStop(0.5, "rgba(15, 18, 38, 1)")
      gradient.addColorStop(1, "rgba(10, 12, 25, 1)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid lines (full screen)
      const gridSize = 80
      ctx.strokeStyle = "rgba(80, 130, 220, 0.05)"
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

      // Draw orbital rings
      for (let i = 0; i < 3; i++) {
        const ringRadius = 180 + i * 50 + Math.sin(time * 0.5 + i) * 10
        ctx.beginPath()
        ctx.arc(currentCenterX, currentCenterY, ringRadius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(80, 130, 220, ${0.1 + i * 0.05})`
        ctx.lineWidth = 1.5
        ctx.stroke()

        // Dashed ring
        ctx.beginPath()
        ctx.arc(currentCenterX, currentCenterY, ringRadius - 20, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(80, 130, 220, ${0.05 + i * 0.03})`
        ctx.setLineDash([8, 15])
        ctx.stroke()
        ctx.setLineDash([])
      }

      // Draw pulsing center glow
      const pulse = 0.5 + Math.sin(time * 3) * 0.2
      drawGlowCircle(ctx, currentCenterX, currentCenterY, 40 + pulse * 10, 80, 130, 220, 0.15)
      drawGlowCircle(ctx, currentCenterX, currentCenterY, 20 + pulse * 5, 100, 150, 240, 0.3)
      drawGlowCircle(ctx, currentCenterX, currentCenterY, 10, 120, 170, 255, 0.6)

      // Update and draw orbiting particles
      particles.forEach((particle, index) => {
        const angle = time * 1.2 + (index / particleCount) * Math.PI * 2
        const orbitRadius = 180 + Math.sin(time * 0.6 + index) * 20
        particle.x = currentCenterX + Math.cos(angle) * orbitRadius
        particle.y = currentCenterY + Math.sin(angle) * orbitRadius

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(100, 150, 240, ${particle.alpha + Math.sin(time * 2 + index) * 0.2})`
        ctx.fill()
      })

      // Update and draw floating particles
      floatingParticles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(80, 130, 220, ${particle.alpha + Math.sin(time) * 0.1})`
        ctx.fill()
      })

      // Draw connecting lines
      ctx.beginPath()
      ctx.strokeStyle = "rgba(80, 130, 220, 0.06)"
      ctx.lineWidth = 0.8
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw rotating cubes (3D effect)
      const cubeSize = 28
      const cubeAngle = time * 0.6
      const cubeRadius = 160
    
      // Draw 3 cubes rotating around the center
      for (let i = 0; i < 3; i++) {
        const angle = cubeAngle + (i * Math.PI * 2 / 3)
        const x = currentCenterX + Math.cos(angle) * cubeRadius
        const y = currentCenterY + Math.sin(angle) * cubeRadius
        
        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(angle + time)
        
        // Draw cube
        ctx.fillStyle = `rgba(80, 130, 220, 0.12)`
        ctx.fillRect(-cubeSize/2, -cubeSize/2, cubeSize, cubeSize)
        ctx.strokeStyle = `rgba(100, 150, 240, 0.4)`
        ctx.lineWidth = 1.5
        ctx.strokeRect(-cubeSize/2, -cubeSize/2, cubeSize, cubeSize)
        
        // Draw icon in cube
        ctx.fillStyle = `rgba(100, 150, 240, 0.9)`
        ctx.font = "16px sans-serif"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        const icons = ["🖥", "📡", "🔒"]
        ctx.fillText(icons[i], 0, 0)
        
        ctx.restore()
      }

      // Draw outer rotating ring with dots
      const outerRingRadius = 240
      const dotCount = 36
      for (let i = 0; i < dotCount; i++) {
        const angle = time * 0.4 + (i / dotCount) * Math.PI * 2
        const x = currentCenterX + Math.cos(angle) * outerRingRadius
        const y = currentCenterY + Math.sin(angle) * outerRingRadius
        
        ctx.beginPath()
        ctx.arc(x, y, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(80, 130, 220, ${0.3 + Math.sin(angle * 2 + time) * 0.2})`
        ctx.fill()
      }

      // Draw additional decorative elements
      const starCount = 150
      for (let i = 0; i < starCount; i++) {
        if (i % 2 === 0) {
          const x = (i * 131) % canvas.width
          const y = (i * 253) % canvas.height
          const twinkle = 0.3 + Math.sin(time * 0.5 + i) * 0.2
          ctx.beginPath()
          ctx.arc(x, y, 1, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${twinkle * 0.3})`
          ctx.fill()
        }
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
    <section className="relative min-h-screen w-full flex items-center overflow-hidden ">
      {/* Fullscreen Canvas Background */}
      {/* <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full -z-10"
        style={{ position: "fixed", top: 0, left: 0 }}
      />
       */}

<AccentureBackground />
      {/* Content wrapper with higher z-index */}
      <div className="relative z-10 w-full">
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.55_0.18_220)]/30 bg-[oklch(0.55_0.18_220)]/10 px-4 py-1.5 w-fit animate-in fade-in slide-in-from-top-5 duration-500 backdrop-blur-sm">
                <Shield className="h-3.5 w-3.5 text-[oklch(0.65_0.18_220)]" />
                <span className="text-xs font-medium text-[oklch(0.75_0.10_220)]">FortisTeach</span>
              </div>
              <div className="inline-flex items-center gap-4 rounded-full border border-[oklch(0.55_0.18_220)]/30 bg-[oklch(0.55_0.18_220)]/10 px-16 py-4 w-fit animate-in fade-in slide-in-from-top-5 duration-500 backdrop-blur-sm">

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-white animate-in fade-in slide-in-from-bottom-5 duration-700">
                {t.hero.title}
              </h1>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.55_0.18_220)]/30 bg-[oklch(0.55_0.18_220)]/10 px-4 py-1.5 w-fit animate-in fade-in slide-in-from-top-5 duration-500 backdrop-blur-sm">

              <p className="text-lg leading-relaxed text-[oklch(0.70_0.02_260)] max-w-xl text-pretty animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
                {t.hero.subtitle}
              </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-2 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-[oklch(0.55_0.18_220)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[oklch(0.50_0.18_220)] shadow-lg shadow-[oklch(0.55_0.18_220)]/25 hover:scale-105"
                >
                  {t.hero.cta1}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-[oklch(0.40_0.04_260)] bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/5 hover:scale-105"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t.hero.cta2}
                </a>
              </div>
            </div>

            {/* Animated 3D Canvas - Right side visual */}
            <div className="hidden lg:flex items-center justify-center relative">
              <div className="relative w-[450px] h-[450px]">
                {/* Floating badge */}
              
                {/* Additional floating elements */}
                <div className="absolute -top-4 -left-4 rounded-xl bg-black/40 backdrop-blur-md border border-[oklch(0.55_0.18_220)]/20 px-3 py-2 shadow-xl animate-float">
                  <span className="text-xs text-[oklch(0.65_0.18_220)] font-medium">+99.9% Uptime</span>
                </div>
                <div className="absolute top-1/2 -right-8 rounded-xl bg-black/40 backdrop-blur-md border border-[oklch(0.35_0.12_260)]/20 px-3 py-2 shadow-xl animate-float-delayed">
                  <span className="text-xs text-[oklch(0.70_0.02_260)] font-medium">24/7 Support</span>
                </div>
                <div className="absolute bottom-12 -left-6 rounded-xl bg-black/40 backdrop-blur-md border border-[oklch(0.55_0.18_220)]/20 px-3 py-2 shadow-xl animate-float" style={{ animationDelay: "0.3s" }}>
                  <span className="text-xs text-[oklch(0.65_0.18_220)] font-medium">Real-time Monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3.5s ease-in-out infinite 0.5s;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
        }
        .delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        .delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}