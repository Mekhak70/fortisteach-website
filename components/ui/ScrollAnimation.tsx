// components/ui/ScrollAnimation.tsx
"use client"

import { motion, useInView, Variants } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "left" | "right" | "scale" | "fade"
  duration?: number
  once?: boolean
  className?: string
  distance?: number
  disableOnMobile?: boolean
}

export function ScrollAnimation({ 
  children, 
  delay = 0, 
  direction = "up",
  duration = 0.6,
  once = true,
  className = "",
  distance = 50,
  disableOnMobile = true
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  
  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Use InView with optimized settings
  const isInView = useInView(ref, { 
    once, 
    amount: 0.1
  })

  // On mobile, return children without animation
  if (isMobile && disableOnMobile) {
    return <div className={className}>{children}</div>
  }

  const getVariants = (): Variants => {
    const mobileDistance = isMobile ? distance * 0.5 : distance
    
    const variants: Variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    }

    switch (direction) {
      case "up":
        variants.hidden = { ...variants.hidden, y: mobileDistance }
        variants.visible = { ...variants.visible, y: 0 }
        break
      case "left":
        variants.hidden = { ...variants.hidden, x: mobileDistance }
        variants.visible = { ...variants.visible, x: 0 }
        break
      case "right":
        variants.hidden = { ...variants.hidden, x: -mobileDistance }
        variants.visible = { ...variants.visible, x: 0 }
        break
      case "scale":
        variants.hidden = { ...variants.hidden, scale: 0.95 }
        variants.visible = { ...variants.visible, scale: 1 }
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
        duration: isMobile ? Math.min(duration, 0.4) : duration,
        delay: isMobile ? Math.min(delay, 0.1) : delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}