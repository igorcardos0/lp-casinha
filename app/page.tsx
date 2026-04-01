import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { AboutSection } from "@/components/landing/about-section"
import { ServicesSection } from "@/components/landing/services-section"
import { DifferentialsSection } from "@/components/landing/differentials-section"
import { TestimonialSection } from "@/components/landing/testimonial-section"
import { ContactSection } from "@/components/landing/contact-section"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DifferentialsSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
