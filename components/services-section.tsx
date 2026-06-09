"use client"

import { useI18n } from "@/lib/i18n-context"
import { useState } from "react"
import {
  Wrench,
  Network,
  Server,
  Building2,
  Video,
  KeyRound,
  Home,
  Droplets,
  X,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

const icons = [Wrench, Network, Server, Building2, Video, KeyRound, Home, Droplets]

// Service details interface
interface ServiceDetail {
  title: string
  description: string
  longDescription: string
  features: string[]
  benefits: string[]
  imageColor: string
}

const serviceDetails: ServiceDetail[] = [
  {
    title: "IT Infrastructure",
    description: "Modern infrastructure solutions",
    longDescription: "We provide end-to-end IT infrastructure solutions that are scalable, secure, and optimized for performance. Our team designs, implements, and manages infrastructure that grows with your business.",
    features: ["Cloud migration", "Network optimization", "Server management", "Disaster recovery"],
    benefits: ["99.9% uptime guaranteed", "Reduced operational costs", "Enhanced security", "24/7 monitoring"],
    imageColor: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Network Security",
    description: "Protect your digital assets",
    longDescription: "Comprehensive security solutions that protect your business from cyber threats. We implement multi-layered security protocols and continuous monitoring.",
    features: ["Firewall management", "Intrusion detection", "Security audits", "Data encryption"],
    benefits: ["Threat prevention", "Compliance assurance", "Peace of mind", "Risk reduction"],
    imageColor: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Cloud Services",
    description: "Scalable cloud solutions",
    longDescription: "Leverage the power of cloud computing with our expert cloud services. We help you migrate, manage, and optimize your cloud infrastructure.",
    features: ["Cloud migration", "Hybrid cloud", "Cloud security", "Cost optimization"],
    benefits: ["Scalability", "Flexibility", "Cost efficiency", "Global reach"],
    imageColor: "from-sky-500/20 to-indigo-500/20",
  },
  {
    title: "Smart Buildings",
    description: "Intelligent building systems",
    longDescription: "Transform your buildings into smart, efficient spaces with our IoT-enabled solutions. Automate and optimize building operations.",
    features: ["IoT sensors", "Energy management", "Access control", "Lighting automation"],
    benefits: ["Energy savings", "Improved comfort", "Maintenance alerts", "Data insights"],
    imageColor: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Video Surveillance",
    description: "Advanced security monitoring",
    longDescription: "State-of-the-art video surveillance solutions with AI-powered analytics for proactive security management.",
    features: ["HD cameras", "AI analytics", "Remote access", "Motion detection"],
    benefits: ["24/7 monitoring", "Evidence collection", "Deterrence", "Rapid response"],
    imageColor: "from-red-500/20 to-orange-500/20",
  },
  {
    title: "Access Control",
    description: "Secure entry management",
    longDescription: "Modern access control systems that ensure only authorized personnel can access sensitive areas.",
    features: ["Biometric access", "RFID cards", "Mobile credentials", "Audit trails"],
    benefits: ["Enhanced security", "Access logs", "Remote management", "Integration ready"],
    imageColor: "from-amber-500/20 to-yellow-500/20",
  },
  {
    title: "Smart Home",
    description: "Connected living solutions",
    longDescription: "Create your ideal smart home with our integrated automation solutions for comfort, security, and energy efficiency.",
    features: ["Voice control", "Automation rules", "Energy monitoring", "Security integration"],
    benefits: ["Convenience", "Energy savings", "Enhanced security", "Future ready"],
    imageColor: "from-green-500/20 to-lime-500/20",
  },
  {
    title: "Water Systems",
    description: "Intelligent water management",
    longDescription: "Smart water management solutions that monitor, control, and optimize water usage in real-time.",
    features: ["Leak detection", "Usage analytics", "Remote control", "Automated valves"],
    benefits: ["Water conservation", "Cost reduction", "Prevent damage", "Environmental impact"],
    imageColor: "from-cyan-500/20 to-blue-500/20",
  },
]

export function ServicesSection() {
  const { t } = useI18n()
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (index: number) => {
    setSelectedService(index)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
    document.body.style.overflow = "auto"
  }

  return (
    <>
      <section id="services" className="relative py-24 overflow-hidden bg-[oklch(0.20_0.04_260)]">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[oklch(0.55_0.18_220)]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[oklch(0.65_0.18_220)]/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[oklch(0.45_0.15_240)]/10 rounded-full blur-3xl animate-pulse delay-500" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
          <div className="text-center mb-16">
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-[oklch(0.65_0.18_220)] to-white bg-clip-text text-transparent text-balance">
              {t.services.title}
            </h2>
            <p className="mt-4 text-[oklch(0.70_0.02_260)] max-w-2xl mx-auto text-pretty">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {t.services.items.map((item, i) => {
    const Icon = icons[i % icons.length]
    const detail = serviceDetails[i % serviceDetails.length]
    
    // Service images
    const serviceImages = [
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=300&fit=crop",
    ]
    
    const imgUrl = serviceImages[i % serviceImages.length]
    
    return (
      <div
      key={i}
      onClick={() => openModal(i)}
      className="group relative cursor-pointer"
    >
      <div className="relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/25">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={imgUrl} 
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Strong contrast overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/50 to-transparent" />
        </div>
        
        {/* Content */}
        <div className="relative p-6 min-h-[240px] flex flex-col justify-end">
          {/* Icon with colorful background */}
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[oklch(0.55_0.18_220)] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[oklch(0.55_0.18_220)]/40">
  <Icon className="h-7 w-7 text-white" />
</div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg tracking-tight">
            {item.title}
          </h3>
          
          {/* Description - improved contrast */}
          <p className="text-sm text-gray-200 leading-relaxed">
            {item.desc}
          </p>
          
          {/* Learn more button */}
          <div className="mt-4 flex items-center gap-2 text-sm font-medium">
            <span className="text-indigo-300 hover:text-indigo-200 border-b border-indigo-400/50 hover:border-indigo-300 transition-all duration-300">
              Learn more
            </span>
            <ArrowRight className="h-3.5 w-3.5 text-indigo-400 group-hover:text-indigo-300 group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </div>
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 via-transparent to-transparent" />
        </div>
      </div>
    </div>
    )
  })}
</div>
        </div>
      </section>

      {/* Modal Dialog */}
      {isModalOpen && selectedService !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={closeModal}
          />
          
          {/* Modal content */}
          <div className="relative max-w-4xl w-full max-h-[85vh] overflow-y-auto rounded-2xl bg-gradient-to-br from-[oklch(0.20_0.04_260)] to-[oklch(0.15_0.06_260)] border border-[oklch(0.55_0.18_220)]/30 shadow-2xl animate-in fade-in zoom-in duration-300">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[oklch(0.30_0.04_260)] hover:bg-[oklch(0.40_0.04_260)] transition-all duration-200"
            >
              <X className="h-5 w-5 text-white" />
            </button>

            {/* Modal content */}
            <div className="p-6 md:p-8">
              {(() => {
                const detail = serviceDetails[selectedService % serviceDetails.length]
                const Icon = icons[selectedService % icons.length]
                
                return (
                  <>
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${detail.imageColor}`}>
                        <Icon className="h-8 w-8 text-[oklch(0.65_0.18_220)]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {detail.title}
                        </h3>
                        <p className="text-[oklch(0.70_0.02_260)]">
                          {detail.description}
                        </p>
                      </div>
                    </div>

                    {/* Long description */}
                    <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-[oklch(0.75_0.02_260)] leading-relaxed">
                        {detail.longDescription}
                      </p>
                    </div>

                    {/* Features & Benefits grid */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {/* Features */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.18_220)]" />
                          Key Features
                        </h4>
                        <div className="space-y-2">
                          {detail.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-[oklch(0.70_0.02_260)]">
                              <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.55_0.18_220)]" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                          <ExternalLink className="h-5 w-5 text-[oklch(0.55_0.18_220)]" />
                          Key Benefits
                        </h4>
                        <div className="space-y-2">
                          {detail.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-[oklch(0.70_0.02_260)]">
                              <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_220)]" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                      <button className="px-6 py-2.5 rounded-xl bg-[oklch(0.55_0.18_220)] text-white font-medium hover:bg-[oklch(0.50_0.18_220)] transition-all duration-200 shadow-lg shadow-[oklch(0.55_0.18_220)]/25">
                        Request a Consultation
                      </button>
                      <button className="px-6 py-2.5 rounded-xl border border-white/20 text-white font-medium hover:bg-white/10 transition-all duration-200">
                        Download Brochure
                      </button>
                    </div>
                  </>
                )
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes zoom-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-in {
          animation: zoom-in 0.2s ease-out;
        }
      `}</style>
    </>
  )
}