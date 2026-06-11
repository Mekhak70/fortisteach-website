"use client"

import { I18nProvider } from "@/lib/i18n-context"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WhyUsSection } from "@/components/why-us-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import ProjectDesignProcess from "@/components/ui/ProjectDesignProcess"
import { ScrollAnimation } from "@/components/ui/ScrollAnimation"

export default function Home() {
  return (
 <>
      <main>
        <HeroSection />
        
        <ScrollAnimation direction="up" delay={0.1}>
          <ServicesSection />
        </ScrollAnimation>
        
        <ScrollAnimation direction="left" delay={0.2}>
          <WhyUsSection />
        </ScrollAnimation>
        
        <ScrollAnimation direction="right" delay={0.1}>
          <AboutSection />
        </ScrollAnimation>
        
        <ScrollAnimation direction="scale" delay={0.2}>
          <ContactSection />
        </ScrollAnimation>
        
        <ScrollAnimation direction="up" delay={0.15}>
          <ProjectDesignProcess />
        </ScrollAnimation>
      </main>
      <SiteFooter />
      </>
  )
}