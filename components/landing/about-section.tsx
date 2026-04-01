import { siteImages } from "@/lib/site-images"
import { LandingPhoto } from "./landing-photo"
import { SectionScrollHint } from "./section-scroll-hint"

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative flex min-h-screen flex-col justify-center scroll-mt-20 bg-background py-16 lg:py-20"
    >
      <div className="container mx-auto px-6 pb-20 pt-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Image with decorative elements */}
          <div className="relative lg:pr-8">
            <LandingPhoto
              src={siteImages.about}
              alt="Buffet decorado com flores brancas e mesa de evento"
              aspectRatio="portrait"
              className="mx-auto w-full max-w-md lg:mx-0"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
            <div className="absolute -bottom-6 -right-6 -z-10 hidden h-32 w-32 border-2 border-stone-300 lg:block" />
            <div className="absolute -bottom-8 -left-4 bg-stone-950 px-6 py-4 text-stone-50 shadow-xl lg:-left-8">
              <span className="block font-serif text-3xl lg:text-4xl">+500</span>
              <span className="text-xs uppercase tracking-[0.2em] text-stone-400">Eventos realizados</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">A Essência</span>
              <h2 className="font-serif text-3xl leading-tight text-balance text-foreground md:text-4xl lg:text-5xl">
                Onde Comfort Food Encontra a Alta Gastronomia
              </h2>
            </div>
            <div className="space-y-6 leading-relaxed text-stone-600">
              <p className="text-lg">
                Desde 2014, a Casinha Banqueteria nasceu do sonho de transformar eventos em experiências gastronômicas
                memoráveis. Acreditamos que a comida é uma das formas mais poderosas de criar conexões e despertar
                memórias afetivas.
              </p>
              <p className="text-lg">
                Nossa filosofia une o aconchego da comfort food com a elegância e técnica da alta gastronomia. Cada
                menu é pensado como uma narrativa única, refletindo a personalidade e os sonhos de nossos clientes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {["Ingredientes Locais", "Menus Exclusivos", "Equipe Especializada", "Apresentação Impecável"].map(
                (feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-stone-800" />
                    <span className="text-sm text-stone-700">{feature}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <SectionScrollHint href="#experiencias" variant="light" />
    </section>
  )
}
