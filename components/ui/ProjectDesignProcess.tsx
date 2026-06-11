import { useI18n } from "@/lib/i18n-context";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function ProjectDesignProcess() {
  const { t, locale, setLocale } = useI18n()
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
        canvas.height = 800
      }
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Flowing particles along the timeline path
    const particles: Array<{
      x: number
      y: number
      progress: number
      speed: number
      size: number
      alpha: number
    }> = []

    // Create particles that will flow along the timeline
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: 0,
        y: 0,
        progress: Math.random(),
        speed: 0.002 + Math.random() * 0.005,
        size: 2 + Math.random() * 4,
        alpha: 0.3 + Math.random() * 0.5,
      })
    }

    // Floating geometric shapes
    const shapes: Array<{
      x: number
      y: number
      size: number
      rotation: number
      rotSpeed: number
      type: 'circle' | 'square' | 'triangle'
      color: string
    }> = []

    const shapeColors = [
      'rgba(59, 130, 246', // blue
      'rgba(139, 92, 246', // purple
      'rgba(6, 182, 212', // cyan
      'rgba(168, 85, 247', // purple
    ]

    for (let i = 0; i < 40; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 10 + Math.random() * 25,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as any,
        color: shapeColors[Math.floor(Math.random() * shapeColors.length)],
      })
    }

    // Background stars
    const stars: Array<{
      x: number
      y: number
      radius: number
      twinkleSpeed: number
      phase: number
    }> = []

    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 1 + Math.random() * 2,
        twinkleSpeed: 0.5 + Math.random() * 2,
        phase: Math.random() * Math.PI * 2,
      })
    }

    // Floating orbs
    const orbs: Array<{
      x: number
      y: number
      radius: number
      vx: number
      vy: number
      pulseSpeed: number
    }> = []

    for (let i = 0; i < 12; i++) {
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 20 + Math.random() * 50,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        pulseSpeed: 0.5 + Math.random() * 1,
      })
    }

    // Draw triangle helper
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

    // Get timeline Y position based on progress (0-1)
    function getTimelinePosition(progress: number, canvasWidth: number, canvasHeight: number) {
      const centerX = canvasWidth / 2
      // Simulate the timeline path (vertical line with nodes)
      const y = 100 + progress * (canvasHeight - 200)
      return { x: centerX, y: y }
    }

    function animate() {
      if (!ctx || !canvas) return
      
      time += 0.02
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Animated gradient background
      const gradient = ctx.createLinearGradient(
        canvas.width / 2 + Math.sin(time * 0.1) * 50,
        0,
        canvas.width / 2 + Math.cos(time * 0.15) * 50,
        canvas.height
      )
      gradient.addColorStop(0, "rgba(15, 20, 35, 1)")
      gradient.addColorStop(0.3, "rgba(20, 25, 45, 1)")
      gradient.addColorStop(0.7, "rgba(25, 30, 50, 1)")
      gradient.addColorStop(1, "rgba(15, 20, 35, 1)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid pattern
      const gridSize = 50
      ctx.strokeStyle = "rgba(59, 130, 246, 0.03)"
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

      // Draw diagonal lines
      ctx.strokeStyle = "rgba(59, 130, 246, 0.02)"
      ctx.lineWidth = 0.5
      for (let i = -canvas.height; i < canvas.width + canvas.height; i += 60) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i + canvas.height, canvas.height)
        ctx.stroke()
      }

      // Draw stars
      stars.forEach((star) => {
        const twinkle = 0.3 + Math.sin(time * star.twinkleSpeed + star.phase) * 0.3
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkle * 0.5})`
        ctx.fill()
      })

      // Draw orbs
      orbs.forEach((orb) => {
        orb.x += orb.vx
        orb.y += orb.vy
        
        if (orb.x < -orb.radius) orb.x = canvas.width + orb.radius
        if (orb.x > canvas.width + orb.radius) orb.x = -orb.radius
        if (orb.y < -orb.radius) orb.y = canvas.height + orb.radius
        if (orb.y > canvas.height + orb.radius) orb.y = -orb.radius
        
        const pulse = 0.5 + Math.sin(time * orb.pulseSpeed) * 0.3
        const radius = orb.radius + pulse * 8
        
        const orbGradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, radius)
        orbGradient.addColorStop(0, `rgba(59, 130, 246, 0.06)`)
        orbGradient.addColorStop(0.5, `rgba(139, 92, 246, 0.03)`)
        orbGradient.addColorStop(1, `rgba(59, 130, 246, 0)`)
        ctx.fillStyle = orbGradient
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw timeline vertical line with glow
      const centerX = canvas.width / 2
      const timelineGradient = ctx.createLinearGradient(centerX, 50, centerX, canvas.height - 50)
      timelineGradient.addColorStop(0, "rgba(59, 130, 246, 0.4)")
      timelineGradient.addColorStop(0.5, "rgba(139, 92, 246, 0.6)")
      timelineGradient.addColorStop(1, "rgba(59, 130, 246, 0.4)")
      
      ctx.beginPath()
      ctx.moveTo(centerX, 50)
      ctx.lineTo(centerX, canvas.height - 50)
      ctx.strokeStyle = timelineGradient
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw dashed line beside
      ctx.beginPath()
      ctx.moveTo(centerX - 15, 60)
      ctx.lineTo(centerX - 15, canvas.height - 60)
      ctx.strokeStyle = "rgba(59, 130, 246, 0.15)"
      ctx.setLineDash([5, 10])
      ctx.lineWidth = 1
      ctx.stroke()
      
      ctx.beginPath()
      ctx.moveTo(centerX + 15, 60)
      ctx.lineTo(centerX + 15, canvas.height - 60)
      ctx.stroke()
      ctx.setLineDash([])

      // Draw nodes on timeline (3 main nodes)
      const nodePositions = [0.2, 0.5, 0.8]
      nodePositions.forEach((pos, index) => {
        const y = 100 + pos * (canvas.height - 200)
        const pulse = 0.5 + Math.sin(time * 2 + index) * 0.3
        
        // Outer glow
        const nodeGlow = ctx.createRadialGradient(centerX, y, 0, centerX, y, 25)
        nodeGlow.addColorStop(0, `rgba(59, 130, 246, ${0.2 + pulse * 0.2})`)
        nodeGlow.addColorStop(1, `rgba(59, 130, 246, 0)`)
        ctx.fillStyle = nodeGlow
        ctx.beginPath()
        ctx.arc(centerX, y, 20 + pulse * 5, 0, Math.PI * 2)
        ctx.fill()
        
        // Core node
        ctx.fillStyle = `rgba(59, 130, 246, ${0.7 + pulse * 0.3})`
        ctx.beginPath()
        ctx.arc(centerX, y, 6 + pulse * 2, 0, Math.PI * 2)
        ctx.fill()
        
        // Inner white core
        ctx.fillStyle = `rgba(255, 255, 255, ${0.5 + pulse * 0.5})`
        ctx.beginPath()
        ctx.arc(centerX, y, 2 + pulse, 0, Math.PI * 2)
        ctx.fill()
      })

      // Update and draw flowing particles
      particles.forEach((particle) => {
        particle.progress += particle.speed
        if (particle.progress > 1) {
          particle.progress = 0
        }
        
        const pos = getTimelinePosition(particle.progress, canvas.width, canvas.height)
        
        const glow = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, particle.size * 2)
        glow.addColorStop(0, `rgba(59, 130, 246, ${particle.alpha})`)
        glow.addColorStop(1, `rgba(59, 130, 246, 0)`)
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw shapes
      shapes.forEach((shape) => {
        shape.rotation += shape.rotSpeed
        
        ctx.save()
        ctx.translate(shape.x, shape.y)
        ctx.rotate(shape.rotation)
        ctx.strokeStyle = `${shape.color}, 0.15)`
        ctx.fillStyle = `${shape.color}, 0.05)`
        ctx.lineWidth = 1.5
        
        if (shape.type === 'circle') {
          ctx.beginPath()
          ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2)
          ctx.fill()
          ctx.stroke()
        } else if (shape.type === 'square') {
          ctx.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size)
          ctx.strokeRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size)
        } else if (shape.type === 'triangle') {
          const height = shape.size * Math.sqrt(3) / 2
          ctx.beginPath()
          ctx.moveTo(0, -height / 2)
          ctx.lineTo(-shape.size / 2, height / 2)
          ctx.lineTo(shape.size / 2, height / 2)
          ctx.closePath()
          ctx.fill()
          ctx.stroke()
        }
        ctx.restore()
      })

      // Draw connecting lines between nearby shapes
      ctx.beginPath()
      ctx.strokeStyle = "rgba(59, 130, 246, 0.03)"
      ctx.lineWidth = 0.5
      for (let i = 0; i < shapes.length; i++) {
        for (let j = i + 1; j < shapes.length; j++) {
          const dx = shapes[i].x - shapes[j].x
          const dy = shapes[i].y - shapes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(shapes[i].x, shapes[i].y)
            ctx.lineTo(shapes[j].x, shapes[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw animated waves at the bottom
      for (let w = 0; w < 3; w++) {
        ctx.beginPath()
        for (let x = 0; x < canvas.width; x += 20) {
          const y = canvas.height - 50 + 
            Math.sin(x * 0.01 + time * 1.5 + w * 2) * 15 +
            Math.cos(x * 0.02 + time) * 8
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.strokeStyle = `rgba(59, 130, 246, ${0.05 - w * 0.015})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Draw floating dots
      for (let i = 0; i < 50; i++) {
        const x = (i * 73) % canvas.width
        const y = (Math.sin(time * 0.5 + i) * 20) + (i * 47) % canvas.height
        ctx.beginPath()
        ctx.arc(x, y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, 0.2)`
        ctx.fill()
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
    <section id="design" className="relative py-24 px-6 overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none z-[1]" />

      <div className="relative max-w-6xl mx-auto z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-white mb-6">
            {t.designStages}
          </h1>
          <p className="text-[oklch(0.70_0.02_260)] text-lg max-w-3xl mx-auto leading-relaxed">
            {t.OurDesignProcess}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-500/20 hidden md:block" />

          {/* Step 1 */}
          <div className="relative mb-20 md:mb-28 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-16 text-right hidden md:block">
              <h2 className="text-3xl font-semibold text-white mb-4">
                🔎 {t.Audit}
              </h2>
              <p className="text-[oklch(0.70_0.02_260)] leading-relaxed">
                {t.processAudit}
              </p>
            </div>

            <div className="hidden md:flex absolute md:left-1/2 transform md:-translate-x-1/2 bg-blue-600 text-white w-16 h-16 rounded-full text-xl font-bold shadow-lg items-center justify-center z-20">
              01
            </div>

            <div className="md:w-1/2 md:pl-16 md:hidden mt-10 text-center">
              <h2 className="text-2xl font-semibold text-white mb-4">🔎 {t.Audit}</h2>
              <p className="text-[oklch(0.70_0.02_260)]">
                {t.firststagedesignprocess}
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative mb-20 md:mb-28 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-16 hidden md:block"></div>

            <div className="hidden md:flex absolute md:left-1/2 transform md:-translate-x-1/2 bg-purple-600 text-white w-16 h-16 rounded-full text-xl font-bold shadow-lg items-center justify-center z-20">
              02
            </div>

            <div className="md:w-1/2 md:pl-16 text-left mt-10 md:mt-0">
              <h2 className="text-3xl font-semibold text-white mb-4">
                💼 {t.CommercialProposal}
              </h2>
              <p className="text-[oklch(0.70_0.02_260)] leading-relaxed">
                {t.auditResults}
                <br /><br />
                {t.commercialProposalMayInclude}
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-16 text-right hidden md:block">
              <h2 className="text-3xl font-semibold text-white mb-4">
                ⚙️ {t.Implementation}
              </h2>
              <p className="text-[oklch(0.70_0.02_260)] leading-relaxed">
                {t.commercialProposalApproved}
              </p>
            </div>

            <div className="hidden md:flex absolute md:left-1/2 transform md:-translate-x-1/2 bg-cyan-600 text-white w-16 h-16 rounded-full text-xl font-bold shadow-lg items-center justify-center z-20">
              03
            </div>

            <div className="md:w-1/2 md:pl-16 md:hidden mt-10 text-center">
              <h2 className="text-2xl font-semibold text-white mb-4">⚙️ {t.Implementation}</h2>
              <p className="text-[oklch(0.70_0.02_260)]">
                {t.afterApproval}
              </p>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <a
            className="text-sm font-medium"
            href={'#contact'} >
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full text-lg font-medium shadow-lg transition-all hover:scale-105" style={{ cursor: 'pointer' }}
            >
              {t.orderAudit}
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}