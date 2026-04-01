import { ArrowRight } from "lucide-react"
import { siteImages } from "@/lib/site-images"
import { LandingPhoto } from "./landing-photo"
import { SectionScrollHint } from "./section-scroll-hint"

const services = [
  {
    title: "Casamentos",
    description:
      "Celebre o amor com menus exclusivos que contam a história do casal. Do coquetel ao jantar, cada detalhe é pensado para emocionar.",
    number: "01",
    image: siteImages.serviceCasamentos,
    imageAlt: "Estação de saladas e frios em evento de casamento",
  },
  {
    title: "Eventos Corporativos",
    description:
      "Impressione seus convidados e colaboradores com experiências gastronômicas que elevam qualquer ocasião profissional.",
    number: "02",
    image: siteImages.serviceCorporativo,
    imageAlt: "Bowls de hummus e acompanhamentos em mesa decorada",
  },
  {
    title: "Encomendas Especiais",
    description:
      "Jantares íntimos, celebrações em família ou presentes gourmet. Criamos experiências personalizadas para momentos especiais.",
    number: "03",
    image: siteImages.serviceEncomendas,
    imageAlt: "Prato com carne ao ponto, batatas e finalização com molho",
  },
] as const

export function ServicesSection() {
  return (
    <section
      id="experiencias"
      className="relative flex min-h-screen flex-col justify-center scroll-mt-20 bg-stone-950 py-16 text-stone-50 lg:py-20"
    >
      <div className="container mx-auto px-6 pb-20 pt-4 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-8 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <span className="text-sm uppercase tracking-[0.2em] text-stone-500">Nossas Experiências</span>
            <h2 className="font-serif text-3xl leading-tight text-balance text-stone-50 md:text-4xl lg:text-5xl">
              Serviços Personalizados para Cada Ocasião
            </h2>
          </div>
          <a
            href="#contato"
            className="group flex items-center gap-2 text-stone-400 transition-colors hover:text-stone-200"
          >
            <span className="text-sm uppercase tracking-[0.15em]">Ver todos os serviços</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid gap-px bg-stone-800 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-stone-950 p-8 transition-all duration-500 hover:bg-stone-900 lg:p-10"
            >
              <span className="font-serif text-4xl text-stone-700 transition-colors group-hover:text-stone-600">
                {service.number}
              </span>
              <div className="mb-6 mt-8 overflow-hidden rounded-sm">
                <LandingPhoto
                  src={service.image}
                  alt={service.imageAlt}
                  aspectRatio="landscape"
                  className="w-full transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="mb-4 font-serif text-2xl text-stone-100">{service.title}</h3>
              <p className="text-sm leading-relaxed text-stone-400">{service.description}</p>
              <div className="mt-6 border-t border-stone-800 pt-6">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-stone-500 transition-colors hover:text-stone-300"
                >
                  Saiba mais
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SectionScrollHint href="#diferenciais" variant="dark" />
    </section>
  )
}
