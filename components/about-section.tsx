"use client"

import { useI18n } from "@/lib/i18n-context"
import { Shield, CheckCircle } from "lucide-react"
import React from "react"

export function AboutSection() {
  const { t } = useI18n()

  return (
    <section 
      id="about" 
      className="py-24 relative overflow-hidden"
      style={{ 
        backgroundImage: "url('/world.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div>
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.55_0.18_220)]/30 bg-[oklch(0.55_0.18_220)]/10 px-4 py-1.5 mb-6 backdrop-blur-sm">
              <Shield className="h-3.5 w-3.5 text-[oklch(0.65_0.18_220)]" />
              <span className="text-xs font-medium text-[oklch(0.75_0.10_220)]">About Us</span>
            </div>
            
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-[oklch(0.65_0.18_220)] to-white bg-clip-text text-transparent text-balance mb-6">
              {t.about.title}
            </h2>
            
            {/* Description Text */}
            <p className="text-[oklch(0.75_0.02_260)] leading-relaxed text-pretty mb-8 text-base">
              {t.about.text}
            </p>
            
            {/* Features List */}
            <div className="flex flex-col gap-4">
              {[
                t.ITInfrastructure, 
                t.SmartHomeIntegration, 
                `24/7 ${t.Support}`, 
                t.EnterpriseSolutions
              ].map((feature, index) => (
                <div key={feature} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[oklch(0.55_0.18_220)]/20 flex items-center justify-center group-hover:bg-[oklch(0.55_0.18_220)]/30 transition-all duration-300">
                    <CheckCircle className="h-4 w-4 text-[oklch(0.65_0.18_220)]" />
                  </div>
                  <span className="text-sm font-medium text-white group-hover:text-[oklch(0.70_0.18_220)] transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Image/Icon */}
          <div className="flex items-center justify-center">
  <div className="relative w-96 h-96">
    {/* Sound wave circles */}
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className="absolute inset-0 rounded-full border border-[oklch(0.55_0.18_220)]/40 animate-wave"
        style={{
          animationDelay: `${i * 0.3}s`,
          opacity: 1 - i * 0.15,
          transform: `scale(${1 + i * 0.2})`,
        }}
      />
    ))}
    
    {/* Floating particles */}
    {[...Array(24)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_220)] animate-particle"
        style={{
          left: `${30 + Math.random() * 40}%`,
          top: `${30 + Math.random() * 40}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${2 + Math.random() * 2}s`,
        }}
      />
    ))}
    
    {/* Central hub */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[oklch(0.55_0.18_220)] to-[oklch(0.65_0.18_220)] flex items-center justify-center shadow-2xl animate-pulse">
          <Shield className="h-12 w-12 text-white" strokeWidth={1.5} />
        </div>
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center whitespace-nowrap">
          <div className="text-2xl font-bold bg-gradient-to-r from-[oklch(0.65_0.18_220)] to-[oklch(0.80_0.20_220)] bg-clip-text text-transparent">TRUSTED</div>
          <div className="text-xs text-white/50">by 200+ companies</div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 3.5s ease-in-out infinite 0.5s;
        }
          @keyframes wave {
    0% { transform: scale(0.8); opacity: 0.6; }
    100% { transform: scale(1.5); opacity: 0; }
  }
  @keyframes particle {
    0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
    50% { transform: translate(10px, -20px) scale(1.5); opacity: 1; }
  }
  .animate-wave {
    animation: wave 3s ease-out infinite;
  }
  .animate-particle {
    animation: particle 3s ease-in-out infinite;
  }
      `}</style>
    </section>
  )
}