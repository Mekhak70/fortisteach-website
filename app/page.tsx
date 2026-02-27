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

export default function Home() {
  return (
    <I18nProvider>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <TechnologiesSection />
        <AboutSection />
        <ContactSection />
        <ProjectDesignProcess />
      </main>
      <SiteFooter />
    </I18nProvider>
  )
}
