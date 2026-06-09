// // "use client"

// // import { useEffect, useRef } from "react"

// // export const AccentureBackground = () => {
// //   const canvasRef = useRef<HTMLCanvasElement>(null)

// //   useEffect(() => {
// //     const canvas = canvasRef.current
// //     if (!canvas) return
// //     const ctx = canvas.getContext("2d")
// //     if (!ctx) return

// //     let animationId: number
// //     let time = 0
// //     let mouseX = window.innerWidth / 2
// //     let mouseY = window.innerHeight / 2

// //     const handleResize = () => {
// //       canvas.width = window.innerWidth
// //       canvas.height = window.innerHeight
// //     }
    
// //     handleResize()
// //     window.addEventListener("resize", handleResize)
// //     window.addEventListener("mousemove", (e) => {
// //       mouseX = e.clientX
// //       mouseY = e.clientY
// //     })

// //     // ========== AI NEURAL NETWORK NODES ==========
// //     const neuralNodes: Array<{
// //       x: number
// //       y: number
// //       layer: number
// //       pulse: number
// //       pulseSpeed: number
// //       connections: number[]
// //     }> = []

// //     // Create neural network layers (4 layers, 6-8 nodes each)
// //     const layers = [6, 8, 8, 6]
// //     const layerSpacing = canvas.width / (layers.length + 1)
    
// //     let nodeId = 0
// //     for (let l = 0; l < layers.length; l++) {
// //       const layerX = (l + 1) * layerSpacing
// //       const nodeCount = layers[l]
// //       const nodeSpacing = canvas.height / (nodeCount + 1)
      
// //       for (let n = 0; n < nodeCount; n++) {
// //         const nodeY = (n + 1) * nodeSpacing
// //         neuralNodes.push({
// //           x: layerX,
// //           y: nodeY,
// //           layer: l,
// //           pulse: Math.random() * Math.PI * 2,
// //           pulseSpeed: 0.02 + Math.random() * 0.03,
// //           connections: [],
// //         })
// //         nodeId++
// //       }
// //     }

// //     // Connect nodes to next layer
// //     for (let i = 0; i < neuralNodes.length; i++) {
// //       for (let j = 0; j < neuralNodes.length; j++) {
// //         if (neuralNodes[j].layer === neuralNodes[i].layer + 1) {
// //           neuralNodes[i].connections.push(j)
// //         }
// //       }
// //     }

// //     // ========== DATA FLOW PARTICLES (on connections) ==========
// //     const dataParticles: Array<{
// //       fromNode: number
// //       toNode: number
// //       progress: number
// //       speed: number
// //       size: number
// //     }> = []

// //     for (let i = 0; i < 60; i++) {
// //       const fromIdx = Math.floor(Math.random() * neuralNodes.length)
// //       if (neuralNodes[fromIdx].connections.length > 0) {
// //         const toIdx = neuralNodes[fromIdx].connections[
// //           Math.floor(Math.random() * neuralNodes[fromIdx].connections.length)
// //         ]
// //         dataParticles.push({
// //           fromNode: fromIdx,
// //           toNode: toIdx,
// //           progress: Math.random(),
// //           speed: 0.005 + Math.random() * 0.01,
// //           size: 2 + Math.random() * 3,
// //         })
// //       }
// //     }

// //     // ========== CIRCUIT BOARD LINES ==========
// //     const circuitLines: Array<{
// //       x1: number
// //       y1: number
// //       x2: number
// //       y2: number
// //       progress: number
// //       speed: number
// //       glow: number
// //     }> = []

// //     for (let i = 0; i < 30; i++) {
// //       const isHorizontal = Math.random() > 0.5
// //       circuitLines.push({
// //         x1: Math.random() * canvas.width,
// //         y1: Math.random() * canvas.height,
// //         x2: isHorizontal ? Math.random() * canvas.width : 0,
// //         y2: isHorizontal ? 0 : Math.random() * canvas.height,
// //         progress: Math.random(),
// //         speed: 0.002 + Math.random() * 0.005,
// //         glow: 0,
// //       })
// //     }

// //     // ========== BINARY CODE RAIN ==========
// //     const binaryColumns: Array<{
// //       x: number
// //       chars: string[]
// //       y: number[]
// //       speeds: number[]
// //     }> = []

// //     const columnCount = 50
// //     const columnWidth = canvas.width / columnCount

// //     for (let i = 0; i < columnCount; i++) {
// //       const charCount = 8 + Math.floor(Math.random() * 12)
// //       const chars: string[] = []
// //       const yPositions: number[] = []
// //       const speeds: number[] = []
      
// //       for (let j = 0; j < charCount; j++) {
// //         chars.push(Math.random() > 0.5 ? "1" : "0")
// //         yPositions.push(-j * 20 - Math.random() * 100)
// //         speeds.push(0.5 + Math.random() * 2)
// //       }
      
// //       binaryColumns.push({
// //         x: i * columnWidth + columnWidth / 2,
// //         chars,
// //         y: yPositions,
// //         speeds,
// //       })
// //     }

// //     // ========== FLOATING TECH ICONS ==========
// //     const techIcons = [
// //       "⚡", "🔷", "⬤", "◆", "◈", "◉", "⟁", "⎔", "⬚", "⦿", "⨀", "⨁"
// //     ]
    
// //     const floatingIcons: Array<{
// //       x: number
// //       y: number
// //       icon: string
// //       speedX: number
// //       speedY: number
// //       size: number
// //       alpha: number
// //     }> = []

// //     for (let i = 0; i < 25; i++) {
// //       floatingIcons.push({
// //         x: Math.random() * canvas.width,
// //         y: Math.random() * canvas.height,
// //         icon: techIcons[Math.floor(Math.random() * techIcons.length)],
// //         speedX: (Math.random() - 0.5) * 0.3,
// //         speedY: (Math.random() - 0.5) * 0.2,
// //         size: 12 + Math.random() * 16,
// //         alpha: 0.1 + Math.random() * 0.2,
// //       })
// //     }

// //     // ========== ANIMATED GRID ==========
// //     const drawGrid = () => {
// //       const gridSize = 60
// //       ctx.strokeStyle = "rgba(56, 189, 248, 0.04)"
// //       ctx.lineWidth = 1
      
// //       // Horizontal lines
// //       for (let y = 0; y < canvas.height; y += gridSize) {
// //         ctx.beginPath()
// //         ctx.moveTo(0, y)
// //         ctx.lineTo(canvas.width, y)
// //         ctx.stroke()
// //       }
      
// //       // Vertical lines
// //       for (let x = 0; x < canvas.width; x += gridSize) {
// //         ctx.beginPath()
// //         ctx.moveTo(x, 0)
// //         ctx.lineTo(x, canvas.height)
// //         ctx.stroke()
// //       }
      
// //       // Animated glow points at intersections
// //       for (let x = 0; x < canvas.width; x += gridSize) {
// //         for (let y = 0; y < canvas.height; y += gridSize) {
// //           const glow = 0.3 + Math.sin(time * 2 + x * 0.02 + y * 0.02) * 0.2
// //           ctx.beginPath()
// //           ctx.arc(x, y, 2, 0, Math.PI * 2)
// //           ctx.fillStyle = `rgba(56, 189, 248, ${glow * 0.3})`
// //           ctx.fill()
// //         }
// //       }
// //     }

// //     // ========== NEURAL NETWORK VISUALIZATION ==========
// //     const drawNeuralNetwork = () => {
// //       // Draw connections
// //       for (let i = 0; i < neuralNodes.length; i++) {
// //         for (const connId of neuralNodes[i].connections) {
// //           const fromNode = neuralNodes[i]
// //           const toNode = neuralNodes[connId]
          
// //           const gradient = ctx.createLinearGradient(fromNode.x, fromNode.y, toNode.x, toNode.y)
// //           gradient.addColorStop(0, "rgba(56, 189, 248, 0.15)")
// //           gradient.addColorStop(1, "rgba(168, 85, 247, 0.15)")
          
// //           ctx.beginPath()
// //           ctx.moveTo(fromNode.x, fromNode.y)
// //           ctx.lineTo(toNode.x, toNode.y)
// //           ctx.strokeStyle = gradient
// //           ctx.lineWidth = 1.5
// //           ctx.stroke()
// //         }
// //       }
      
// //       // Draw nodes
// //       for (let i = 0; i < neuralNodes.length; i++) {
// //         const node = neuralNodes[i]
// //         node.pulse += node.pulseSpeed
// //         const pulseSize = 5 + Math.sin(node.pulse) * 3
        
// //         // Glow effect
// //         ctx.beginPath()
// //         ctx.arc(node.x, node.y, pulseSize + 3, 0, Math.PI * 2)
// //         ctx.fillStyle = `rgba(56, 189, 248, ${0.1 + Math.sin(node.pulse) * 0.05})`
// //         ctx.fill()
        
// //         // Core
// //         ctx.beginPath()
// //         ctx.arc(node.x, node.y, 4, 0, Math.PI * 2)
// //         ctx.fillStyle = `rgba(56, 189, 248, 0.6)`
// //         ctx.fill()
        
// //         ctx.beginPath()
// //         ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
// //         ctx.fillStyle = `rgba(255, 255, 255, 0.8)`
// //         ctx.fill()
// //       }
// //     }

// //     // ========== DATA FLOW PARTICLES ==========
// //     const drawDataFlow = () => {
// //       dataParticles.forEach((particle) => {
// //         particle.progress += particle.speed
// //         if (particle.progress >= 1) {
// //           particle.progress = 0
// //         }
        
// //         const fromNode = neuralNodes[particle.fromNode]
// //         const toNode = neuralNodes[particle.toNode]
        
// //         const x = fromNode.x + (toNode.x - fromNode.x) * particle.progress
// //         const y = fromNode.y + (toNode.y - fromNode.y) * particle.progress
        
// //         ctx.beginPath()
// //         ctx.arc(x, y, particle.size, 0, Math.PI * 2)
// //         ctx.fillStyle = `rgba(168, 85, 247, 0.9)`
// //         ctx.fill()
        
// //         // Trail
// //         ctx.beginPath()
// //         ctx.arc(x - 3, y - 3, particle.size * 0.7, 0, Math.PI * 2)
// //         ctx.fillStyle = `rgba(168, 85, 247, 0.4)`
// //         ctx.fill()
// //       })
// //     }

// //     // ========== BINARY RAIN ==========
// //     const drawBinaryRain = () => {
// //       binaryColumns.forEach((column) => {
// //         for (let i = 0; i < column.chars.length; i++) {
// //           column.y[i] += column.speeds[i]
          
// //           if (column.y[i] > canvas.height + 50) {
// //             column.y[i] = -50
// //             column.chars[i] = Math.random() > 0.5 ? "1" : "0"
// //           }
          
// //           const alpha = 1 - (column.y[i] / canvas.height)
// //           ctx.font = `${14}px "Courier New", monospace`
// //           ctx.fillStyle = `rgba(56, 189, 248, ${alpha * 0.3})`
// //           ctx.fillText(column.chars[i], column.x, column.y[i])
// //         }
// //       })
// //     }

// //     // ========== CIRCUIT ANIMATION ==========
// //     const drawCircuits = () => {
// //       circuitLines.forEach((line) => {
// //         line.progress += line.speed
// //         if (line.progress > 1) {
// //           line.progress = 0
// //         }
        
// //         const x = line.x1 + (line.x2 - line.x1) * line.progress
// //         const y = line.y1 + (line.y2 - line.y1) * line.progress
        
// //         ctx.beginPath()
// //         ctx.arc(x, y, 3, 0, Math.PI * 2)
// //         ctx.fillStyle = `rgba(56, 189, 248, 0.8)`
// //         ctx.fill()
// //       })
// //     }

// //     // ========== FLOATING ICONS ==========
// //     const drawFloatingIcons = () => {
// //       floatingIcons.forEach((icon) => {
// //         icon.x += icon.speedX
// //         icon.y += icon.speedY
        
// //         if (icon.x < -50) icon.x = canvas.width + 50
// //         if (icon.x > canvas.width + 50) icon.x = -50
// //         if (icon.y < -50) icon.y = canvas.height + 50
// //         if (icon.y > canvas.height + 50) icon.y = -50
        
// //         ctx.font = `${icon.size}px "Segoe UI", "Apple Color Emoji", sans-serif`
// //         ctx.fillStyle = `rgba(56, 189, 248, ${icon.alpha + Math.sin(time * 0.5) * 0.05})`
// //         ctx.fillText(icon.icon, icon.x, icon.y)
// //       })
// //     }

// //     // ========== BACKGROUND GRADIENT ==========
// //     const drawBackground = () => {
// //       const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
// //       gradient.addColorStop(0, "#0a0a0f")
// //       gradient.addColorStop(0.3, "#0f0f1a")
// //       gradient.addColorStop(0.7, "#0a0a14")
// //       gradient.addColorStop(1, "#050508")
// //       ctx.fillStyle = gradient
// //       ctx.fillRect(0, 0, canvas.width, canvas.height)
// //     }

// //     // ========== MOUSE INTERACTION ==========
// //     const drawMouseInteraction = () => {
// //       // Mouse glow that affects neural nodes
// //       neuralNodes.forEach((node) => {
// //         const dist = Math.hypot(node.x - mouseX, node.y - mouseY)
// //         if (dist < 100) {
// //           const intensity = 1 - dist / 100
// //           ctx.beginPath()
// //           ctx.arc(node.x, node.y, 8 + intensity * 6, 0, Math.PI * 2)
// //           ctx.fillStyle = `rgba(168, 85, 247, ${intensity * 0.3})`
// //           ctx.fill()
// //         }
// //       })
      
// //       // Cursor ring
// //       ctx.beginPath()
// //       ctx.arc(mouseX, mouseY, 40, 0, Math.PI * 2)
// //       ctx.strokeStyle = "rgba(56, 189, 248, 0.3)"
// //       ctx.lineWidth = 1.5
// //       ctx.stroke()
      
// //       ctx.beginPath()
// //       ctx.arc(mouseX, mouseY, 20, 0, Math.PI * 2)
// //       ctx.strokeStyle = "rgba(168, 85, 247, 0.2)"
// //       ctx.stroke()
// //     }

// //     // ========== AI PROCESSING INDICATOR ==========
// //     const drawAIStatus = () => {
// //       const pulse = (Math.sin(time * 3) + 1) / 2
      
// //       ctx.font = 'bold 10px "Courier New", monospace'
// //       ctx.fillStyle = `rgba(56, 189, 248, ${0.4 + pulse * 0.3})`
// //       ctx.fillText("AI ENGINE • ACTIVE", canvas.width - 130, 30)
      
// //       ctx.fillStyle = `rgba(168, 85, 247, ${0.3 + pulse * 0.2})`
// //       ctx.fillText("NEURAL NETWORK • ONLINE", canvas.width - 150, 50)
      
// //       // Small status dot
// //       ctx.beginPath()
// //       ctx.arc(canvas.width - 20, 24, 4, 0, Math.PI * 2)
// //       ctx.fillStyle = `rgba(34, 197, 94, ${0.5 + pulse * 0.5})`
// //       ctx.fill()
// //     }

// //     // ========== DATA PARTICLES (floating dots) ==========
// //     const drawTechDust = () => {
// //       for (let i = 0; i < 150; i++) {
// //         const x = (i * 131) % canvas.width
// //         const y = (i * 253 + time * 20) % canvas.height
// //         const size = 1 + (Math.sin(time * 2 + i) * 0.5 + 0.5)
// //         ctx.beginPath()
// //         ctx.arc(x, y, size, 0, Math.PI * 2)
// //         ctx.fillStyle = `rgba(56, 189, 248, 0.15)`
// //         ctx.fill()
// //       }
// //     }

// //     // ========== ANIMATION LOOP ==========
// //     const animate = () => {
// //       if (!ctx || !canvas) return
      
// //       time += 0.02
      
// //       drawBackground()
// //       drawGrid()
// //       drawBinaryRain()
// //       drawCircuits()
// //       drawNeuralNetwork()
// //       drawDataFlow()
// //       drawFloatingIcons()
// //       drawTechDust()
// //       drawMouseInteraction()
// //       drawAIStatus()
      
// //       animationId = requestAnimationFrame(animate)
// //     }
    
// //     animate()
    
// //     return () => {
// //       window.removeEventListener("resize", handleResize)
// //       cancelAnimationFrame(animationId)
// //     }
// //   }, [])

// //   return <canvas ref={canvasRef} className="fixed inset-0 -z-10 h-full w-full" />
// // }


// // "use client"

// import { useEffect, useRef } from "react"

// export const AccentureBackground = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null)

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return
//     const ctx = canvas.getContext("2d")
//     if (!ctx) return

//     let animationId: number
//     let time = 0
//     let mouseX = window.innerWidth / 2
//     let mouseY = window.innerHeight / 2

//     const handleResize = () => {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight
//     }
    
//     handleResize()
//     window.addEventListener("resize", handleResize)
//     window.addEventListener("mousemove", (e) => {
//       mouseX = e.clientX
//       mouseY = e.clientY
//     })

//     // ========== CORE ELEMENTS (Minimal but interesting) ==========
    
//     // 1. SINGLE ORBITING SMART PARTICLE that leaves traces
//     const coreParticle = {
//       x: canvas.width / 2,
//       y: canvas.height / 2,
//       radius: 3,
//       angle: 0,
//       orbitRadius: 180,
//       speed: 0.008,
//       trail: [] as Array<{ x: number; y: number; life: number }>,
//     }

//     // 2. FLOATING DOTS (very subtle)
//     const dots: Array<{ x: number; y: number; vx: number; vy: number; radius: number; alpha: number }> = []
//     for (let i = 0; i < 45; i++) {
//       dots.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         vx: (Math.random() - 0.5) * 0.15,
//         vy: (Math.random() - 0.5) * 0.1,
//         radius: 1 + Math.random() * 1.5,
//         alpha: 0.1 + Math.random() * 0.2,
//       })
//     }

//     // 3. THREE PULSING RINGS around center
//     const rings = [
//       { radius: 120, width: 1, speed: 0.005, phase: 0 },
//       { radius: 170, width: 0.8, speed: -0.003, phase: Math.PI },
//       { radius: 220, width: 0.5, speed: 0.002, phase: Math.PI / 2 },
//     ]

//     // 4. WISPS (flowing light beams) - very minimal
//     const wisps: Array<{ x: number; y: number; angle: number; length: number; speed: number }> = []
//     for (let i = 0; i < 12; i++) {
//       wisps.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         angle: Math.random() * Math.PI * 2,
//         length: 40 + Math.random() * 60,
//         speed: 0.2 + Math.random() * 0.3,
//       })
//     }

//     // ========== DRAWING FUNCTIONS ==========

//     // Deep minimal background
//     const drawBackground = () => {
//       const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
//       gradient.addColorStop(0, "#07070b")
//       gradient.addColorStop(0.5, "#0a0a10")
//       gradient.addColorStop(1, "#050508")
//       ctx.fillStyle = gradient
//       ctx.fillRect(0, 0, canvas.width, canvas.height)
      
//       // Subtle noise overlay
//       ctx.fillStyle = "rgba(255, 255, 255, 0.003)"
//       for (let i = 0; i < 200; i++) {
//         ctx.fillRect(
//           Math.random() * canvas.width,
//           Math.random() * canvas.height,
//           1, 1
//         )
//       }
//     }

//     // Animated pulsing rings
//     const drawRings = () => {
//       rings.forEach((ring) => {
//         ring.phase += ring.speed
//         const pulse = 0.85 + Math.sin(time * 1.5 + ring.phase) * 0.15
        
//         ctx.beginPath()
//         ctx.arc(canvas.width / 2, canvas.height / 2, ring.radius * pulse, 0, Math.PI * 2)
//         ctx.strokeStyle = `rgba(139, 92, 246, ${0.08 + Math.sin(time * 1.5) * 0.04})`
//         ctx.lineWidth = ring.width
//         ctx.stroke()
        
//         // Dashed inner ring
//         ctx.beginPath()
//         ctx.arc(canvas.width / 2, canvas.height / 2, ring.radius * pulse * 0.85, 0, Math.PI * 2)
//         ctx.setLineDash([4, 8])
//         ctx.strokeStyle = `rgba(56, 189, 248, ${0.05})`
//         ctx.stroke()
//         ctx.setLineDash([])
//       })
//     }

//     // Orbiting particle with trail
//     const drawOrbitingParticle = () => {
//       const centerX = canvas.width / 2
//       const centerY = canvas.height / 2
      
//       // Update position
//       coreParticle.angle += coreParticle.speed
//       coreParticle.x = centerX + Math.cos(coreParticle.angle) * coreParticle.orbitRadius
//       coreParticle.y = centerY + Math.sin(coreParticle.angle) * coreParticle.orbitRadius
      
//       // Add to trail
//       coreParticle.trail.unshift({ x: coreParticle.x, y: coreParticle.y, life: 1 })
//       if (coreParticle.trail.length > 25) coreParticle.trail.pop()
      
//       // Draw trail
//       for (let i = 0; i < coreParticle.trail.length; i++) {
//         const trail = coreParticle.trail[i]
//         const alpha = (1 - i / coreParticle.trail.length) * 0.3
//         ctx.beginPath()
//         ctx.arc(trail.x, trail.y, coreParticle.radius * (1 - i / coreParticle.trail.length), 0, Math.PI * 2)
//         ctx.fillStyle = `rgba(139, 92, 246, ${alpha})`
//         ctx.fill()
//       }
      
//       // Draw particle with glow
//       ctx.shadowBlur = 12
//       ctx.shadowColor = "#8b5cf6"
//       ctx.beginPath()
//       ctx.arc(coreParticle.x, coreParticle.y, coreParticle.radius, 0, Math.PI * 2)
//       ctx.fillStyle = "#a78bfa"
//       ctx.fill()
      
//       // Inner bright core
//       ctx.beginPath()
//       ctx.arc(coreParticle.x, coreParticle.y, coreParticle.radius * 0.6, 0, Math.PI * 2)
//       ctx.fillStyle = "#e9d5ff"
//       ctx.fill()
//       ctx.shadowBlur = 0
//     }

//     // Minimal floating dots
//     const drawFloatingDots = () => {
//       dots.forEach((dot) => {
//         dot.x += dot.vx
//         dot.y += dot.vy
        
//         if (dot.x < -10) dot.x = canvas.width + 10
//         if (dot.x > canvas.width + 10) dot.x = -10
//         if (dot.y < -10) dot.y = canvas.height + 10
//         if (dot.y > canvas.height + 10) dot.y = -10
        
//         const twinkle = 0.5 + Math.sin(time * 2 + dot.x * 0.02) * 0.5
//         ctx.beginPath()
//         ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2)
//         ctx.fillStyle = `rgba(168, 85, 247, ${dot.alpha * twinkle * 0.6})`
//         ctx.fill()
//       })
//     }

//     // Flowing light wisps (very subtle)
//     const drawWisps = () => {
//       wisps.forEach((wisp) => {
//         wisp.angle += 0.002 * wisp.speed
        
//         const x1 = wisp.x
//         const y1 = wisp.y
//         const x2 = wisp.x + Math.cos(wisp.angle) * wisp.length
//         const y2 = wisp.y + Math.sin(wisp.angle) * wisp.length
        
//         const gradient = ctx.createLinearGradient(x1, y1, x2, y2)
//         gradient.addColorStop(0, "rgba(139, 92, 246, 0)")
//         gradient.addColorStop(0.5, `rgba(139, 92, 246, ${0.04 + Math.sin(time) * 0.02})`)
//         gradient.addColorStop(1, "rgba(56, 189, 248, 0)")
        
//         ctx.beginPath()
//         ctx.moveTo(x1, y1)
//         ctx.lineTo(x2, y2)
//         ctx.strokeStyle = gradient
//         ctx.lineWidth = 1
//         ctx.stroke()
//       })
//     }

//     // Mouse interactive glow (minimal)
//     const drawMouseGlow = () => {
//       if (mouseX > 0 && mouseX < canvas.width && mouseY > 0 && mouseY < canvas.height) {
//         const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 100)
//         gradient.addColorStop(0, "rgba(139, 92, 246, 0.06)")
//         gradient.addColorStop(1, "transparent")
        
//         ctx.beginPath()
//         ctx.arc(mouseX, mouseY, 100, 0, Math.PI * 2)
//         ctx.fillStyle = gradient
//         ctx.fill()
        
//         // Subtle cursor ring
//         ctx.beginPath()
//         ctx.arc(mouseX, mouseY, 25, 0, Math.PI * 2)
//         ctx.strokeStyle = "rgba(139, 92, 246, 0.15)"
//         ctx.lineWidth = 1
//         ctx.stroke()
//       }
//     }

//     // Minimal center glow
//     const drawCenterGlow = () => {
//       const centerX = canvas.width / 2
//       const centerY = canvas.height / 2
//       const pulse = 0.8 + Math.sin(time * 2) * 0.2
      
//       const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 60 * pulse)
//       gradient.addColorStop(0, "rgba(139, 92, 246, 0.08)")
//       gradient.addColorStop(1, "transparent")
      
//       ctx.beginPath()
//       ctx.arc(centerX, centerY, 60 * pulse, 0, Math.PI * 2)
//       ctx.fillStyle = gradient
//       ctx.fill()
      
//       // Center dot
//       ctx.beginPath()
//       ctx.arc(centerX, centerY, 2, 0, Math.PI * 2)
//       ctx.fillStyle = "rgba(139, 92, 246, 0.4)"
//       ctx.fill()
//     }

//     // Subtle connecting lines between close dots
//     const drawConnections = () => {
//       ctx.lineWidth = 0.5
//       for (let i = 0; i < dots.length; i++) {
//         for (let j = i + 1; j < dots.length; j++) {
//           const dist = Math.hypot(dots[i].x - dots[j].x, dots[i].y - dots[j].y)
//           if (dist < 80 && dist > 0) {
//             const alpha = (1 - dist / 80) * 0.04
//             ctx.beginPath()
//             ctx.moveTo(dots[i].x, dots[i].y)
//             ctx.lineTo(dots[j].x, dots[j].y)
//             ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`
//             ctx.stroke()
//           }
//         }
//       }
//     }

//     // Minimal text indicator (AI/IT vibe)
//     const drawTechIndicator = () => {
//       const opacity = 0.3 + Math.sin(time * 2) * 0.1
//       ctx.font = '400 9px "Inter", "SF Mono", monospace'
//       ctx.fillStyle = `rgba(168, 85, 247, ${opacity})`
//       ctx.fillText(">_ system.ready", canvas.width - 120, canvas.height - 25)
      
//       ctx.fillStyle = `rgba(56, 189, 248, ${opacity * 0.8})`
//       ctx.fillText("◆ neural.active", canvas.width - 120, canvas.height - 12)
      
//       // Blinking cursor
//       if (Math.floor(time * 2) % 2 === 0) {
//         ctx.fillStyle = "rgba(139, 92, 246, 0.6)"
//         ctx.fillRect(canvas.width - 42, canvas.height - 23, 6, 9)
//       }
//     }

//     // ========== MAIN ANIMATION LOOP ==========
//     const animate = () => {
//       if (!ctx || !canvas) return
      
//       time += 0.016
      
//       drawBackground()
//       drawWisps()
//       drawConnections()
//       drawFloatingDots()
//       drawRings()
//       drawCenterGlow()
//       drawOrbitingParticle()
//       drawMouseGlow()
//       drawTechIndicator()
      
//       animationId = requestAnimationFrame(animate)
//     }
    
//     animate()
    
//     return () => {
//       window.removeEventListener("resize", handleResize)
//       cancelAnimationFrame(animationId)
//     }
//   }, [])

//   return <canvas ref={canvasRef} className="fixed inset-0 -z-10 h-full w-full" />
// }

"use client"

import { useEffect, useRef } from "react"

export const AccentureBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let mouseVelocity = { x: 0, y: 0 }
    let lastMouseX = mouseX
    let lastMouseY = mouseY

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", (e) => {
      mouseVelocity.x = e.clientX - lastMouseX
      mouseVelocity.y = e.clientY - lastMouseY
      mouseX = e.clientX
      mouseY = e.clientY
      lastMouseX = mouseX
      lastMouseY = mouseY
    })

    // ========== COMPLEX PARTICLE SYSTEM ==========
    
    // 1. MAIN ORBITING PARTICLES with different behaviors
    const coreParticles = [
      { x: 0, y: 0, radius: 3, angle: 0, orbitRadius: 120, speed: 0.008, color: "#a78bfa", pulse: 0, trail: [] as any[], hasGlow: true },
      { x: 0, y: 0, radius: 2.5, angle: Math.PI / 2, orbitRadius: 160, speed: -0.006, color: "#60a5fa", pulse: 0, trail: [], hasGlow: true },
      { x: 0, y: 0, radius: 2, angle: Math.PI, orbitRadius: 200, speed: 0.004, color: "#34d399", pulse: 0, trail: [], hasGlow: false },
      { x: 0, y: 0, radius: 3.5, angle: Math.PI * 1.5, orbitRadius: 90, speed: 0.012, color: "#f472b6", pulse: 0, trail: [], hasGlow: true },
      { x: 0, y: 0, radius: 2.2, angle: Math.PI / 4, orbitRadius: 250, speed: -0.003, color: "#c084fc", pulse: 0, trail: [], hasGlow: false },
      { x: 0, y: 0, radius: 1.8, angle: Math.PI * 0.75, orbitRadius: 300, speed: 0.005, color: "#fb923c", pulse: 0, trail: [], hasGlow: true },
    ]

    // 2. CHAOTIC PARTICLES (random movement)
    const chaoticParticles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      color: string
      alpha: number
      noise: number
    }> = []

    for (let i = 0; i < 80; i++) {
      chaoticParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        radius: 1 + Math.random() * 2.5,
        color: `hsl(${260 + Math.random() * 60}, 70%, 60%)`,
        alpha: 0.2 + Math.random() * 0.3,
        noise: Math.random() * Math.PI * 2,
      })
    }

    // 3. SPIRAL PARTICLES (around center)
    const spiralParticles: Array<{
      angle: number
      radius: number
      speed: number
      size: number
      color: string
    }> = []

    for (let i = 0; i < 50; i++) {
      spiralParticles.push({
        angle: (i / 50) * Math.PI * 2,
        radius: 50 + i * 5,
        speed: 0.01 + Math.random() * 0.02,
        size: 1.5 + Math.random() * 2,
        color: `hsl(${270 + Math.random() * 40}, 80%, 65%)`,
      })
    }

    // 4. RINGS with different effects
    const rings = [
      { radius: 100, width: 1.5, speed: 0.003, phase: 0, color: "#8b5cf6", dashed: false, pulseSpeed: 1.2 },
      { radius: 150, width: 1, speed: -0.002, phase: Math.PI, color: "#60a5fa", dashed: true, pulseSpeed: 1.5 },
      { radius: 200, width: 0.8, speed: 0.0015, phase: Math.PI / 2, color: "#c084fc", dashed: false, pulseSpeed: 1.8 },
      { radius: 250, width: 0.6, speed: -0.001, phase: Math.PI / 3, color: "#a78bfa", dashed: true, pulseSpeed: 2.0 },
      { radius: 310, width: 0.5, speed: 0.0008, phase: 0, color: "#f472b6", dashed: false, pulseSpeed: 2.2 },
    ]

    // 5. DATA STREAMS (flowing lines from center to edges)
    const dataStreams: Array<{
      angle: number
      length: number
      progress: number
      speed: number
      width: number
      color: string
    }> = []

    for (let i = 0; i < 24; i++) {
      dataStreams.push({
        angle: (i / 24) * Math.PI * 2,
        length: 100 + Math.random() * 150,
        progress: Math.random(),
        speed: 0.002 + Math.random() * 0.003,
        width: 1 + Math.random() * 2,
        color: `hsl(${260 + Math.random() * 40}, 80%, 60%)`,
      })
    }

    // 6. FLOATING TRIANGLES (rotating)
    const triangles: Array<{
      x: number
      y: number
      size: number
      rotation: number
      rotSpeed: number
      vx: number
      vy: number
      color: string
    }> = []

    for (let i = 0; i < 12; i++) {
      triangles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 10 + Math.random() * 15,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.15,
        color: `hsl(${270 + Math.random() * 30}, 70%, 55%)`,
      })
    }

    // 7. PULSING DOTS around rings
    const ringDots: Array<{
      ringIndex: number
      angle: number
      speed: number
      size: number
    }> = []

    for (let i = 0; i < 60; i++) {
      ringDots.push({
        ringIndex: Math.floor(Math.random() * rings.length),
        angle: Math.random() * Math.PI * 2,
        speed: 0.005 + Math.random() * 0.01,
        size: 1.5 + Math.random() * 2,
      })
    }

    // ========== DRAWING FUNCTIONS ==========

    const drawBackground = () => {
      // Animated gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      const hue = 260 + Math.sin(time * 0.05) * 10
      gradient.addColorStop(0, `hsl(${hue}, 50%, 3%)`)
      gradient.addColorStop(0.5, `hsl(${hue - 10}, 60%, 5%)`)
      gradient.addColorStop(1, `hsl(${hue + 10}, 55%, 2%)`)
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Star field
      for (let i = 0; i < 400; i++) {
        const x = (i * 131) % canvas.width
        const y = (i * 253 + time * 10) % canvas.height
        const twinkle = 0.2 + Math.sin(time * 0.8 + i) * 0.15
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkle * 0.1})`
        ctx.fillRect(x, y, 1, 1)
      }
    }

    const drawRings = () => {
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      rings.forEach((ring, idx) => {
        const pulse = 0.9 + Math.sin(time * ring.pulseSpeed + ring.phase) * 0.1
        const radius = ring.radius * pulse
        
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
        
        if (ring.dashed) {
          ctx.setLineDash([5, 10])
        } else {
          ctx.setLineDash([])
        }
        
        const alpha = 0.08 + Math.sin(time * 1.5 + idx) * 0.04
        ctx.strokeStyle = `rgba(${parseInt(ring.color.slice(1,3), 16)}, ${parseInt(ring.color.slice(3,5), 16)}, ${parseInt(ring.color.slice(5,7), 16)}, ${alpha})`
        ctx.lineWidth = ring.width
        ctx.stroke()
      })
      ctx.setLineDash([])
    }

    const drawRingDots = () => {
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      ringDots.forEach((dot) => {
        const ring = rings[dot.ringIndex]
        dot.angle += dot.speed
        const pulse = 0.9 + Math.sin(time * ring.pulseSpeed) * 0.1
        const radius = ring.radius * pulse
        
        const x = centerX + Math.cos(dot.angle) * radius
        const y = centerY + Math.sin(dot.angle) * radius
        
        ctx.beginPath()
        ctx.arc(x, y, dot.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${parseInt(ring.color.slice(1,3), 16)}, ${parseInt(ring.color.slice(3,5), 16)}, ${parseInt(ring.color.slice(5,7), 16)}, 0.6)`
        ctx.fill()
      })
    }

    const drawCoreParticles = () => {
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      coreParticles.forEach((particle, idx) => {
        particle.angle += particle.speed
        particle.pulse += 0.05
        
        particle.x = centerX + Math.cos(particle.angle) * particle.orbitRadius
        particle.y = centerY + Math.sin(particle.angle) * particle.orbitRadius
        
        // Trail
        particle.trail.unshift({ x: particle.x, y: particle.y, life: 1 })
        if (particle.trail.length > 25) particle.trail.pop()
        
        for (let i = 0; i < particle.trail.length; i++) {
          const trail = particle.trail[i]
          const alpha = (1 - i / particle.trail.length) * 0.3
          ctx.beginPath()
          ctx.arc(trail.x, trail.y, particle.radius * (1 - i / particle.trail.length * 0.6), 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${parseInt(particle.color.slice(1,3), 16)}, ${parseInt(particle.color.slice(3,5), 16)}, ${parseInt(particle.color.slice(5,7), 16)}, ${alpha})`
          ctx.fill()
        }
        
        // Glow
        if (particle.hasGlow) {
          ctx.shadowBlur = 15
          ctx.shadowColor = particle.color
        }
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = "white"
        ctx.fill()
        
        ctx.shadowBlur = 0
      })
    }

    const drawChaoticParticles = () => {
      chaoticParticles.forEach((particle) => {
        // Brownian motion with noise
        particle.noise += 0.05
        particle.vx += Math.sin(particle.noise) * 0.05
        particle.vy += Math.cos(particle.noise * 0.7) * 0.05
        
        // Limit velocity
        const maxSpeed = 2
        particle.vx = Math.min(maxSpeed, Math.max(-maxSpeed, particle.vx))
        particle.vy = Math.min(maxSpeed, Math.max(-maxSpeed, particle.vy))
        
        particle.x += particle.vx
        particle.y += particle.vy
        
        // Wrap around with smooth boundaries
        if (particle.x < -20) particle.x = canvas.width + 20
        if (particle.x > canvas.width + 20) particle.x = -20
        if (particle.y < -20) particle.y = canvas.height + 20
        if (particle.y > canvas.height + 20) particle.y = -20
        
        // Mouse attraction
        const distToMouse = Math.hypot(particle.x - mouseX, particle.y - mouseY)
        if (distToMouse < 100) {
          const angle = Math.atan2(particle.y - mouseY, particle.x - mouseX)
          particle.vx += Math.cos(angle) * 0.1
          particle.vy += Math.sin(angle) * 0.1
        }
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color.replace("hsl", "hsla").replace(")", `, ${particle.alpha + Math.sin(time * 2) * 0.1})`)
        ctx.fill()
      })
    }

    const drawSpiralParticles = () => {
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      spiralParticles.forEach((particle) => {
        particle.angle += particle.speed
        const radius = particle.radius + Math.sin(time * 2 + particle.angle) * 5
        
        const x = centerX + Math.cos(particle.angle) * radius
        const y = centerY + Math.sin(particle.angle) * radius
        
        ctx.beginPath()
        ctx.arc(x, y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color.replace("hsl", "hsla").replace(")", ", 0.5)")
        ctx.fill()
      })
    }

    const drawDataStreams = () => {
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      dataStreams.forEach((stream) => {
        stream.progress += stream.speed
        if (stream.progress > 1) {
          stream.progress = 0
        }
        
        const startX = centerX
        const startY = centerY
        const endX = centerX + Math.cos(stream.angle) * stream.length
        const endY = centerY + Math.sin(stream.angle) * stream.length
        
        const progressX = startX + (endX - startX) * stream.progress
        const progressY = startY + (endY - startY) * stream.progress
        
        const gradient = ctx.createLinearGradient(startX, startY, endX, endY)
        gradient.addColorStop(0, "rgba(139, 92, 246, 0)")
        gradient.addColorStop(0.3, stream.color.replace("hsl", "hsla").replace(")", ", 0.4)"))
        gradient.addColorStop(0.7, stream.color.replace("hsl", "hsla").replace(")", ", 0.2)"))
        gradient.addColorStop(1, "rgba(139, 92, 246, 0)")
        
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.lineTo(endX, endY)
        ctx.strokeStyle = gradient
        ctx.lineWidth = stream.width
        ctx.stroke()
        
        // Flowing particle on stream
        ctx.beginPath()
        ctx.arc(progressX, progressY, 2, 0, Math.PI * 2)
        ctx.fillStyle = stream.color.replace("hsl", "hsla").replace(")", ", 0.8)")
        ctx.fill()
      })
    }

    const drawTriangles = () => {
      triangles.forEach((tri) => {
        tri.x += tri.vx
        tri.y += tri.vy
        tri.rotation += tri.rotSpeed
        
        if (tri.x < -50) tri.x = canvas.width + 50
        if (tri.x > canvas.width + 50) tri.x = -50
        if (tri.y < -50) tri.y = canvas.height + 50
        if (tri.y > canvas.height + 50) tri.y = -50
        
        ctx.save()
        ctx.translate(tri.x, tri.y)
        ctx.rotate(tri.rotation)
        ctx.beginPath()
        
        for (let i = 0; i < 3; i++) {
          const angle = (i * Math.PI * 2 / 3)
          const x = Math.cos(angle) * tri.size
          const y = Math.sin(angle) * tri.size
          if (i === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        
        ctx.closePath()
        ctx.fillStyle = tri.color.replace("hsl", "hsla").replace(")", ", 0.15)")
        ctx.fill()
        ctx.strokeStyle = tri.color.replace("hsl", "hsla").replace(")", ", 0.3)")
        ctx.lineWidth = 0.8
        ctx.stroke()
        ctx.restore()
      })
    }

    const drawConnections = () => {
      // Connect core particles that are close
      ctx.lineWidth = 0.5
      for (let i = 0; i < coreParticles.length; i++) {
        for (let j = i + 1; j < coreParticles.length; j++) {
          const dist = Math.hypot(coreParticles[i].x - coreParticles[j].x, coreParticles[i].y - coreParticles[j].y)
          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.12
            ctx.beginPath()
            ctx.moveTo(coreParticles[i].x, coreParticles[i].y)
            ctx.lineTo(coreParticles[j].x, coreParticles[j].y)
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`
            ctx.stroke()
          }
        }
      }
    }

    const drawMouseEffect = () => {
      if (mouseX > 0 && mouseX < canvas.width && mouseY > 0 && mouseY < canvas.height) {
        // Main glow
        const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 150)
        gradient.addColorStop(0, "rgba(139, 92, 246, 0.1)")
        gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.05)")
        gradient.addColorStop(1, "transparent")
        
        ctx.beginPath()
        ctx.arc(mouseX, mouseY, 150, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
        
        // Outer ring
        ctx.beginPath()
        ctx.arc(mouseX, mouseY, 40, 0, Math.PI * 2)
        ctx.strokeStyle = "rgba(139, 92, 246, 0.2)"
        ctx.lineWidth = 1.5
        ctx.stroke()
        
        // Inner ring
        ctx.beginPath()
        ctx.arc(mouseX, mouseY, 20, 0, Math.PI * 2)
        ctx.strokeStyle = "rgba(168, 85, 247, 0.3)"
        ctx.lineWidth = 1
        ctx.stroke()
        
        // Velocity line (shows mouse movement direction)
        if (Math.abs(mouseVelocity.x) > 0.1 || Math.abs(mouseVelocity.y) > 0.1) {
          ctx.beginPath()
          ctx.moveTo(mouseX, mouseY)
          ctx.lineTo(mouseX + mouseVelocity.x * 5, mouseY + mouseVelocity.y * 5)
          ctx.strokeStyle = "rgba(168, 85, 247, 0.4)"
          ctx.lineWidth = 2
          ctx.stroke()
        }
      }
    }

    const drawTechOverlay = () => {
      // Corner brackets
      ctx.strokeStyle = "rgba(139, 92, 246, 0.2)"
      ctx.lineWidth = 1
      
      // Top-left
      ctx.beginPath()
      ctx.moveTo(20, 40)
      ctx.lineTo(20, 20)
      ctx.lineTo(40, 20)
      ctx.stroke()
      
      // Top-right
      ctx.beginPath()
      ctx.moveTo(canvas.width - 20, 40)
      ctx.lineTo(canvas.width - 20, 20)
      ctx.lineTo(canvas.width - 40, 20)
      ctx.stroke()
      
      // Bottom-left
      ctx.beginPath()
      ctx.moveTo(20, canvas.height - 40)
      ctx.lineTo(20, canvas.height - 20)
      ctx.lineTo(40, canvas.height - 20)
      ctx.stroke()
      
      // Bottom-right
      ctx.beginPath()
      ctx.moveTo(canvas.width - 20, canvas.height - 40)
      ctx.lineTo(canvas.width - 20, canvas.height - 20)
      ctx.lineTo(canvas.width - 40, canvas.height - 20)
      ctx.stroke()
      
      // Status text
      const opacity = 0.35 + Math.sin(time * 2) * 0.1
      ctx.font = '400 9px "Inter", monospace'
      ctx.fillStyle = `rgba(168, 85, 247, ${opacity})`
      ctx.fillText(">_ neural.network.active", 30, canvas.height - 25)
      
      ctx.fillStyle = `rgba(96, 165, 250, ${opacity * 0.8})`
      ctx.fillText(`◆ ${coreParticles.length} core.nodes | ${chaoticParticles.length} particles.streaming`, 30, canvas.height - 12)
      
      // Blinking cursor
      if (Math.floor(time * 2.5) % 2 === 0) {
        ctx.fillStyle = "rgba(139, 92, 246, 0.6)"
        ctx.fillRect(252, canvas.height - 23, 6, 9)
      }
    }

    // ========== MAIN ANIMATION LOOP ==========
    const animate = () => {
      if (!ctx || !canvas) return
      
      time += 0.016
      
      drawBackground()
      drawDataStreams()
      drawRings()
      drawRingDots()
      drawSpiralParticles()
      drawCoreParticles()
      drawChaoticParticles()
      drawTriangles()
      drawConnections()
      drawMouseEffect()
      drawTechOverlay()
      
      // Update mouse velocity decay
      mouseVelocity.x *= 0.95
      mouseVelocity.y *= 0.95
      
      animationId = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 h-full w-full" />
}