import { Leaf, ClipboardList, Sparkles, UtensilsCrossed } from "lucide-react"
import { siteImages } from "@/lib/site-images"
import { LandingPhoto } from "./landing-photo"
import { SectionScrollHint } from "./section-scroll-hint"

const differentials = [
  {
    icon: Leaf,
    title: "Ingredientes Naturais",
    description:
      "Selecionamos produtos frescos de produtores locais e sazonais para garantir sabor e qualidade excepcionais.",
  },
  {
    icon: ClipboardList,
    title: "Menus Personalizados",
    description:
      "Cada cardápio é criado exclusivamente para o seu evento, respeitando suas preferências e restrições.",
  },
  {
    icon: Sparkles,
    title: "Apresentação Criativa",
    description:
      "Visual impecável que transforma cada prato em uma obra de arte, encantando antes do primeiro sabor.",
  },
  {
    icon: UtensilsCrossed,
    title: "Ilhas Temáticas",
    description:
      "Estações gastronômicas interativas que surpreendem e criam experiências únicas para os convidados.",
  },
]

export function DifferentialsSection() {
  return (
    <section
      id="diferenciais"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden scroll-mt-20 bg-background py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute top-0 right-0 hidden h-full w-1/3 origin-top-right -skew-x-12 bg-stone-100/50 lg:block" />

      <div className="container relative z-10 mx-auto px-6 pb-20 pt-4 lg:px-8">
        <div className="mb-12 max-w-2xl space-y-4 lg:mb-20">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">Por Que Nos Escolher</span>
          <h2 className="font-serif text-3xl leading-tight text-balance text-foreground md:text-4xl lg:text-5xl">
            Nossos Diferenciais
          </h2>
          <p className="text-lg text-stone-600">Combinamos tradição e inovação para criar momentos gastronômicos únicos.</p>
        </div>

        <LandingPhoto
          src={siteImages.differentials}
          alt="Prato em camadas com queijo derretido e cobertura caramelizada"
          aspectRatio="banner"
          className="mb-12 w-full lg:mb-16"
          sizes="(max-width: 1280px) 100vw, 1200px"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {differentials.map((differential, index) => (
            <div
              key={index}
              className="group border border-stone-200 bg-background p-6 transition-all duration-500 hover:border-stone-950 hover:bg-stone-950 lg:p-8"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-stone-100 transition-colors duration-500 group-hover:bg-stone-800">
                <differential.icon className="h-6 w-6 text-stone-700 transition-colors duration-500 group-hover:text-stone-200" />
              </div>
              <h3 className="mb-3 font-serif text-xl text-foreground transition-colors duration-500 group-hover:text-stone-50">
                {differential.title}
              </h3>
              <p className="text-sm leading-relaxed text-stone-500 transition-colors duration-500 group-hover:text-stone-400">
                {differential.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <SectionScrollHint href="#depoimentos" variant="light" />
    </section>
  )
}
