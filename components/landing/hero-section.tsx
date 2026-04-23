import { Button } from "@/components/ui/button"
import { HeroDotBackground } from "./hero-dot-background"
import { SectionScrollHint } from "./section-scroll-hint"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col bg-stone-950 pt-20 text-stone-50">
      <HeroDotBackground />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-center pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Content */}
            <div className="order-2 space-y-8 lg:order-1">
              <div className="space-y-6">
                <span className="inline-block border border-stone-700 px-4 py-2 text-xs uppercase tracking-[0.3em] text-stone-400">
                  Desde 2014
                </span>
                <h1 className="font-serif text-4xl leading-[1.1] text-balance text-stone-50 md:text-5xl lg:text-6xl xl:text-7xl">
                  Gastronomia Afetiva para Momentos Inesquecíveis
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-stone-400 md:text-xl">
                  Criamos experiências gastronômicas exclusivas e personalizadas para tornar seu evento único.
                  Menus sob medida que unem sofisticação e memória afetiva.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-stone-50 px-8 py-6 text-base tracking-wide text-stone-950 shadow-none transition-all duration-300 hover:bg-stone-950 hover:text-stone-50"
                >
                  <a href="#contato">Solicitar Orçamento</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-stone-50 px-8 py-6 text-base tracking-wide text-stone-950 shadow-none transition-all duration-300 hover:bg-stone-950 hover:text-stone-50"
                >
                  <a href="#experiencias">Conhecer Experiências</a>
                </Button>
              </div>
            </div>

            {/* Video Slot */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="flex aspect-[16/10] items-center justify-center border border-dashed border-stone-500 bg-stone-900/60 px-6 text-center">
                  <span className="text-base font-medium uppercase tracking-[0.25em] text-stone-300 md:text-lg">
                    SLOT PARA O VIDEO
                  </span>
                </div>
                <div className="absolute -inset-4 -z-10 border border-stone-700" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionScrollHint href="#sobre" variant="dark" />
    </section>
  )
}
