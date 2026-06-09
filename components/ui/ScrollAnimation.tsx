// components/ui/ScrollAnimation.tsx
"use client"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade" | "scale-up" | "scale-down"
  duration?: number
  threshold?: number
  once?: boolean
  className?: string
  distance?: number
  rootMargin?: string
}

export function ScrollAnimation({ 
  children, 
  delay = 0, 
  direction = "up",
  duration = 0.6,
  threshold = 0.1,
  once = true,
  className = "",
  distance = 50,
  rootMargin = "0px 0px -50px 0px"
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.disconnect()
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, once, rootMargin])

  const getInitialStyles = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = { 
      opacity: 0,
      willChange: "transform, opacity"
    }
    
    switch (direction) {
      case "up":
        return { ...baseStyle, transform: `translateY(${distance}px)` }
      case "down":
        return { ...baseStyle, transform: `translateY(-${distance}px)` }
      case "left":
        return { ...baseStyle, transform: `translateX(${distance}px)` }
      case "right":
        return { ...baseStyle, transform: `translateX(-${distance}px)` }
      case "scale":
        return { ...baseStyle, transform: "scale(0.8)" }
      case "scale-up":
        return { ...baseStyle, transform: "scale(0.95)" }
      case "scale-down":
        return { ...baseStyle, transform: "scale(1.05)" }
      case "fade":
        return { ...baseStyle }
      default:
        return { ...baseStyle, transform: `translateY(${distance}px)` }
    }
  }

  const getAnimatedStyles = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = { opacity: 1 }
    
    switch (direction) {
      case "scale":
      case "scale-up":
      case "scale-down":
        return { ...baseStyle, transform: "scale(1)" }
      default:
        return { ...baseStyle, transform: "translate(0, 0)" }
    }
  }

  return (
    <div
      ref={ref}
      className={`${className}`}
      style={{
        transition: `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`,
        transitionDelay: `${delay}s`,
        ...(isVisible ? getAnimatedStyles() : getInitialStyles())
      }}
    >
      {children}
    </div>
  )
}