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

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    })

    // ========== AI NEURAL NETWORK NODES ==========
    const neuralNodes: Array<{
      x: number
      y: number
      layer: number
      pulse: number
      pulseSpeed: number
      connections: number[]
    }> = []

    // Create neural network layers (4 layers, 6-8 nodes each)
    const layers = [6, 8, 8, 6]
    const layerSpacing = canvas.width / (layers.length + 1)
    
    let nodeId = 0
    for (let l = 0; l < layers.length; l++) {
      const layerX = (l + 1) * layerSpacing
      const nodeCount = layers[l]
      const nodeSpacing = canvas.height / (nodeCount + 1)
      
      for (let n = 0; n < nodeCount; n++) {
        const nodeY = (n + 1) * nodeSpacing
        neuralNodes.push({
          x: layerX,
          y: nodeY,
          layer: l,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03,
          connections: [],
        })
        nodeId++
      }
    }

    // Connect nodes to next layer
    for (let i = 0; i < neuralNodes.length; i++) {
      for (let j = 0; j < neuralNodes.length; j++) {
        if (neuralNodes[j].layer === neuralNodes[i].layer + 1) {
          neuralNodes[i].connections.push(j)
        }
      }
    }

    // ========== DATA FLOW PARTICLES (on connections) ==========
    const dataParticles: Array<{
      fromNode: number
      toNode: number
      progress: number
      speed: number
      size: number
    }> = []

    for (let i = 0; i < 60; i++) {
      const fromIdx = Math.floor(Math.random() * neuralNodes.length)
      if (neuralNodes[fromIdx].connections.length > 0) {
        const toIdx = neuralNodes[fromIdx].connections[
          Math.floor(Math.random() * neuralNodes[fromIdx].connections.length)
        ]
        dataParticles.push({
          fromNode: fromIdx,
          toNode: toIdx,
          progress: Math.random(),
          speed: 0.005 + Math.random() * 0.01,
          size: 2 + Math.random() * 3,
        })
      }
    }

    // ========== CIRCUIT BOARD LINES ==========
    const circuitLines: Array<{
      x1: number
      y1: number
      x2: number
      y2: number
      progress: number
      speed: number
      glow: number
    }> = []

    for (let i = 0; i < 30; i++) {
      const isHorizontal = Math.random() > 0.5
      circuitLines.push({
        x1: Math.random() * canvas.width,
        y1: Math.random() * canvas.height,
        x2: isHorizontal ? Math.random() * canvas.width : 0,
        y2: isHorizontal ? 0 : Math.random() * canvas.height,
        progress: Math.random(),
        speed: 0.002 + Math.random() * 0.005,
        glow: 0,
      })
    }

    // ========== BINARY CODE RAIN ==========
    const binaryColumns: Array<{
      x: number
      chars: string[]
      y: number[]
      speeds: number[]
    }> = []

    const columnCount = 50
    const columnWidth = canvas.width / columnCount

    for (let i = 0; i < columnCount; i++) {
      const charCount = 8 + Math.floor(Math.random() * 12)
      const chars: string[] = []
      const yPositions: number[] = []
      const speeds: number[] = []
      
      for (let j = 0; j < charCount; j++) {
        chars.push(Math.random() > 0.5 ? "1" : "0")
        yPositions.push(-j * 20 - Math.random() * 100)
        speeds.push(0.5 + Math.random() * 2)
      }
      
      binaryColumns.push({
        x: i * columnWidth + columnWidth / 2,
        chars,
        y: yPositions,
        speeds,
      })
    }

    // ========== FLOATING TECH ICONS ==========
    const techIcons = [
      "⚡", "🔷", "⬤", "◆", "◈", "◉", "⟁", "⎔", "⬚", "⦿", "⨀", "⨁"
    ]
    
    const floatingIcons: Array<{
      x: number
      y: number
      icon: string
      speedX: number
      speedY: number
      size: number
      alpha: number
    }> = []

    for (let i = 0; i < 25; i++) {
      floatingIcons.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        icon: techIcons[Math.floor(Math.random() * techIcons.length)],
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.2,
        size: 12 + Math.random() * 16,
        alpha: 0.1 + Math.random() * 0.2,
      })
    }

    // ========== ANIMATED GRID ==========
    const drawGrid = () => {
      const gridSize = 60
      ctx.strokeStyle = "rgba(56, 189, 248, 0.04)"
      ctx.lineWidth = 1
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      
      // Animated glow points at intersections
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const glow = 0.3 + Math.sin(time * 2 + x * 0.02 + y * 0.02) * 0.2
          ctx.beginPath()
          ctx.arc(x, y, 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(56, 189, 248, ${glow * 0.3})`
          ctx.fill()
        }
      }
    }

    // ========== NEURAL NETWORK VISUALIZATION ==========
    const drawNeuralNetwork = () => {
      // Draw connections
      for (let i = 0; i < neuralNodes.length; i++) {
        for (const connId of neuralNodes[i].connections) {
          const fromNode = neuralNodes[i]
          const toNode = neuralNodes[connId]
          
          const gradient = ctx.createLinearGradient(fromNode.x, fromNode.y, toNode.x, toNode.y)
          gradient.addColorStop(0, "rgba(56, 189, 248, 0.15)")
          gradient.addColorStop(1, "rgba(168, 85, 247, 0.15)")
          
          ctx.beginPath()
          ctx.moveTo(fromNode.x, fromNode.y)
          ctx.lineTo(toNode.x, toNode.y)
          ctx.strokeStyle = gradient
          ctx.lineWidth = 1.5
          ctx.stroke()
        }
      }
      
      // Draw nodes
      for (let i = 0; i < neuralNodes.length; i++) {
        const node = neuralNodes[i]
        node.pulse += node.pulseSpeed
        const pulseSize = 5 + Math.sin(node.pulse) * 3
        
        // Glow effect
        ctx.beginPath()
        ctx.arc(node.x, node.y, pulseSize + 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(56, 189, 248, ${0.1 + Math.sin(node.pulse) * 0.05})`
        ctx.fill()
        
        // Core
        ctx.beginPath()
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(56, 189, 248, 0.6)`
        ctx.fill()
        
        ctx.beginPath()
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, 0.8)`
        ctx.fill()
      }
    }

    // ========== DATA FLOW PARTICLES ==========
    const drawDataFlow = () => {
      dataParticles.forEach((particle) => {
        particle.progress += particle.speed
        if (particle.progress >= 1) {
          particle.progress = 0
        }
        
        const fromNode = neuralNodes[particle.fromNode]
        const toNode = neuralNodes[particle.toNode]
        
        const x = fromNode.x + (toNode.x - fromNode.x) * particle.progress
        const y = fromNode.y + (toNode.y - fromNode.y) * particle.progress
        
        ctx.beginPath()
        ctx.arc(x, y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(168, 85, 247, 0.9)`
        ctx.fill()
        
        // Trail
        ctx.beginPath()
        ctx.arc(x - 3, y - 3, particle.size * 0.7, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(168, 85, 247, 0.4)`
        ctx.fill()
      })
    }

    // ========== BINARY RAIN ==========
    const drawBinaryRain = () => {
      binaryColumns.forEach((column) => {
        for (let i = 0; i < column.chars.length; i++) {
          column.y[i] += column.speeds[i]
          
          if (column.y[i] > canvas.height + 50) {
            column.y[i] = -50
            column.chars[i] = Math.random() > 0.5 ? "1" : "0"
          }
          
          const alpha = 1 - (column.y[i] / canvas.height)
          ctx.font = `${14}px "Courier New", monospace`
          ctx.fillStyle = `rgba(56, 189, 248, ${alpha * 0.3})`
          ctx.fillText(column.chars[i], column.x, column.y[i])
        }
      })
    }

    // ========== CIRCUIT ANIMATION ==========
    const drawCircuits = () => {
      circuitLines.forEach((line) => {
        line.progress += line.speed
        if (line.progress > 1) {
          line.progress = 0
        }
        
        const x = line.x1 + (line.x2 - line.x1) * line.progress
        const y = line.y1 + (line.y2 - line.y1) * line.progress
        
        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(56, 189, 248, 0.8)`
        ctx.fill()
      })
    }

    // ========== FLOATING ICONS ==========
    const drawFloatingIcons = () => {
      floatingIcons.forEach((icon) => {
        icon.x += icon.speedX
        icon.y += icon.speedY
        
        if (icon.x < -50) icon.x = canvas.width + 50
        if (icon.x > canvas.width + 50) icon.x = -50
        if (icon.y < -50) icon.y = canvas.height + 50
        if (icon.y > canvas.height + 50) icon.y = -50
        
        ctx.font = `${icon.size}px "Segoe UI", "Apple Color Emoji", sans-serif`
        ctx.fillStyle = `rgba(56, 189, 248, ${icon.alpha + Math.sin(time * 0.5) * 0.05})`
        ctx.fillText(icon.icon, icon.x, icon.y)
      })
    }

    // ========== BACKGROUND GRADIENT ==========
    const drawBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "#0a0a0f")
      gradient.addColorStop(0.3, "#0f0f1a")
      gradient.addColorStop(0.7, "#0a0a14")
      gradient.addColorStop(1, "#050508")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    // ========== MOUSE INTERACTION ==========
    const drawMouseInteraction = () => {
      // Mouse glow that affects neural nodes
      neuralNodes.forEach((node) => {
        const dist = Math.hypot(node.x - mouseX, node.y - mouseY)
        if (dist < 100) {
          const intensity = 1 - dist / 100
          ctx.beginPath()
          ctx.arc(node.x, node.y, 8 + intensity * 6, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(168, 85, 247, ${intensity * 0.3})`
          ctx.fill()
        }
      })
      
      // Cursor ring
      ctx.beginPath()
      ctx.arc(mouseX, mouseY, 40, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(56, 189, 248, 0.3)"
      ctx.lineWidth = 1.5
      ctx.stroke()
      
      ctx.beginPath()
      ctx.arc(mouseX, mouseY, 20, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(168, 85, 247, 0.2)"
      ctx.stroke()
    }

    // ========== AI PROCESSING INDICATOR ==========
    const drawAIStatus = () => {
      const pulse = (Math.sin(time * 3) + 1) / 2
      
      ctx.font = 'bold 10px "Courier New", monospace'
      ctx.fillStyle = `rgba(56, 189, 248, ${0.4 + pulse * 0.3})`
      ctx.fillText("AI ENGINE • ACTIVE", canvas.width - 130, 30)
      
      ctx.fillStyle = `rgba(168, 85, 247, ${0.3 + pulse * 0.2})`
      ctx.fillText("NEURAL NETWORK • ONLINE", canvas.width - 150, 50)
      
      // Small status dot
      ctx.beginPath()
      ctx.arc(canvas.width - 20, 24, 4, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(34, 197, 94, ${0.5 + pulse * 0.5})`
      ctx.fill()
    }

    // ========== DATA PARTICLES (floating dots) ==========
    const drawTechDust = () => {
      for (let i = 0; i < 150; i++) {
        const x = (i * 131) % canvas.width
        const y = (i * 253 + time * 20) % canvas.height
        const size = 1 + (Math.sin(time * 2 + i) * 0.5 + 0.5)
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(56, 189, 248, 0.15)`
        ctx.fill()
      }
    }

    // ========== ANIMATION LOOP ==========
    const animate = () => {
      if (!ctx || !canvas) return
      
      time += 0.02
      
      drawBackground()
      drawGrid()
      drawBinaryRain()
      drawCircuits()
      drawNeuralNetwork()
      drawDataFlow()
      drawFloatingIcons()
      drawTechDust()
      drawMouseInteraction()
      drawAIStatus()
      
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