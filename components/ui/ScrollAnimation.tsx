// components/ui/ScrollAnimation.tsx
"use client"

import { motion, useInView, Variants } from "framer-motion"
import { useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade" | "rotate"
  duration?: number
  once?: boolean
  className?: string
  distance?: number
}

export function ScrollAnimation({ 
  children, 
  delay = 0, 
  direction = "up",
  duration = 0.6,
  once = true,
  className = "",
  distance = 50
}: ScrollAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px 0px -100px 0px" })

  const getVariants = (): Variants => {
    const variants: Variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    }

    switch (direction) {
      case "up":
        variants.hidden = { ...variants.hidden, y: distance }
        variants.visible = { ...variants.visible, y: 0 }
        break
      case "down":
        variants.hidden = { ...variants.hidden, y: -distance }
        variants.visible = { ...variants.visible, y: 0 }
        break
      case "left":
        variants.hidden = { ...variants.hidden, x: distance }
        variants.visible = { ...variants.visible, x: 0 }
        break
      case "right":
        variants.hidden = { ...variants.hidden, x: -distance }
        variants.visible = { ...variants.visible, x: 0 }
        break
      case "scale":
        variants.hidden = { ...variants.hidden, scale: 0.8 }
        variants.visible = { ...variants.visible, scale: 1 }
        break
      case "rotate":
        variants.hidden = { ...variants.hidden, rotate: -10, scale: 0.9 }
        variants.visible = { ...variants.visible, rotate: 0, scale: 1 }
        break
      case "fade":
      default:
        break
    }

    return variants
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants()}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}