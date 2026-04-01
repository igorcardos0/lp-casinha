import { Quote } from "lucide-react"
import { siteImages } from "@/lib/site-images"
import { LandingPhoto } from "./landing-photo"
import { SectionScrollHint } from "./section-scroll-hint"

export function TestimonialSection() {
  return (
    <section
      id="depoimentos"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden scroll-mt-20 bg-stone-950 py-16 text-stone-50 lg:py-20"
    >
      <div className="pointer-events-none absolute top-0 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-stone-900 opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-stone-900 opacity-50 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 pb-20 pt-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <LandingPhoto
            src={siteImages.testimonial}
            alt="Mesa de evento ao ar livre com buffet e decoração floral"
            aspectRatio="hero"
            className="order-2 lg:order-1"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div className="order-1 text-center lg:order-2 lg:text-left">
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-stone-700 lg:mx-0">
              <Quote className="h-6 w-6 text-stone-500" />
            </div>

            <blockquote className="space-y-8">
              <p className="font-serif text-2xl leading-relaxed text-stone-100 italic md:text-3xl lg:text-4xl">
                &ldquo;A Casinha Banqueteria transformou nosso casamento em uma experiência inesquecível. Cada prato
                contava nossa história, e nossos convidados não paravam de elogiar. O cuidado e a dedicação da equipe
                foram impecáveis do início ao fim.&rdquo;
              </p>
              <footer className="space-y-3 pt-4">
                <div className="mx-auto h-px w-12 bg-stone-700 lg:mx-0" />
                <cite className="block font-serif text-xl not-italic text-stone-200">Marina & Rafael</cite>
                <span className="text-sm uppercase tracking-[0.15em] text-stone-500">Casamento em São Paulo, 2024</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      <SectionScrollHint href="#contato" variant="dark" />
    </section>
  )
}
