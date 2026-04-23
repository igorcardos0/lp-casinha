import { Quote } from "lucide-react"
import { siteImages } from "@/lib/site-images"
import { LandingPhoto } from "./landing-photo"
import { SectionScrollHint } from "./section-scroll-hint"

const testimonials = [
  {
    text: "Queria dizer que foi INCRÍVEL ontem! Comida impecável, serviço… os sombras então… maravilhosos do início ao fim!!!! Obrigada por tudo!!!!!!! E parabéns pelo serviço e qualidade excelentes!!!!!",
    author: "Amanda & Marcio",
    event: "Casamento",
  },
  {
    text: "Foi tudo sensacional sério, sem palavras!! O trabalho de vocês, a equipe, a comida, meu deus do céu, já estou com saudade! Já quero um outro evento pra poder chamar vocês de novo. Obrigada mesmo, foi tudo perfeito! Tudo maravilhoso.",
    author: "Giulianna & Fabio",
    event: "Evento",
  },
  {
    text: "O evento foi perfeito!! O staff da casinha impecável. TODOS os meus convidados amaram!! As comidas estavam maravilhosas.",
    author: "Flávia",
    event: "Aniversário",
  },
]

export function TestimonialSection() {
  return (
    <section
      id="depoimentos"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden scroll-mt-20 bg-stone-950 py-16 text-stone-50 lg:py-20"
    >
      <div className="pointer-events-none absolute top-0 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-stone-900 opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-stone-900 opacity-50 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 pb-20 pt-4 lg:px-8">
        {/* Header */}
        <div className="mb-12 space-y-4 text-center lg:mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-stone-500">Depoimentos</span>
          <h2 className="font-serif text-3xl leading-tight text-balance text-stone-50 md:text-4xl lg:text-5xl">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 border border-stone-800 bg-stone-900/50 p-8 lg:p-10"
            >
              <Quote className="h-6 w-6 text-stone-600" />
              <p className="font-serif text-lg leading-relaxed text-stone-200 italic flex-1">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <footer className="space-y-2 pt-2 border-t border-stone-800">
                <cite className="block font-serif text-base not-italic text-stone-100">
                  {testimonial.author}
                </cite>
                <span className="text-xs uppercase tracking-[0.15em] text-stone-500">
                  {testimonial.event}
                </span>
              </footer>
            </div>
          ))}
        </div>

        {/* Photo below testimonials */}
        <div className="mt-12 lg:mt-16">
          <LandingPhoto
            src={siteImages.testimonial}
            alt="Mesa de evento com buffet e decoração floral"
            aspectRatio="banner"
            className="w-full"
            imageClassName="object-[center_30%]"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </div>
      </div>

      <SectionScrollHint href="#contato" variant="dark" />
    </section>
  )
}
