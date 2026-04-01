import { Instagram, Mail, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer
      id="rodape"
      className="scroll-mt-20 border-t border-stone-800 bg-stone-950 py-6 text-stone-50 md:py-8"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8 lg:gap-10">
          <div className="space-y-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Casinha%20-%20Preto-9LC0qA61bEaJGgBfrbYgUNMdtXScMA.png"
              alt="Casinha Banqueteria"
              width={112}
              height={26}
              className="invert"
              style={{ height: "24px", width: "auto" }}
            />
            <p className="max-w-xs text-xs leading-relaxed text-stone-400 sm:text-sm">
              Gastronomia Afetiva desde 2014. Transformando eventos em experiências memoráveis.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone-500">Navegação</h4>
            <nav className="flex flex-col gap-1.5">
              {[
                { label: "Sobre", href: "#sobre" },
                { label: "Experiências", href: "#experiencias" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-stone-400 transition-colors hover:text-stone-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-2 sm:col-span-2 md:col-span-1">
            <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone-500">Contato</h4>
            <div className="flex flex-col gap-1.5 text-sm">
              <a
                href="mailto:contato@casinhabanqueteria.com.br"
                className="flex items-center gap-2 text-stone-400 transition-colors hover:text-stone-200"
              >
                <Mail className="h-3.5 w-3.5 shrink-0" />
                <span className="break-all">contato@casinhabanqueteria.com.br</span>
              </a>
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-2 text-stone-400 transition-colors hover:text-stone-200"
              >
                <Phone className="h-3.5 w-3.5 shrink-0" />
                (11) 99999-9999
              </a>
              <a
                href="https://instagram.com/casinha.banqueteria"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-400 transition-colors hover:text-stone-200"
              >
                <Instagram className="h-3.5 w-3.5 shrink-0" />
                @casinha.banqueteria
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 border-t border-stone-800 pt-4 sm:flex-row sm:justify-between sm:gap-4">
          <div className="flex flex-col items-center gap-0.5 text-center sm:items-start sm:text-left">
            <p className="text-[10px] text-stone-500 sm:text-xs">
              &copy; {new Date().getFullYear()} Casinha Banqueteria. Todos os direitos reservados.
            </p>
            <p className="text-[10px] text-stone-600 sm:text-xs">São Paulo, SP — Brasil</p>
          </div>
          <div className="flex shrink-0 justify-center sm:justify-end">
            <Image
              src="/igorcardoso.png"
              alt="Desenvolvido por Igor Cardoso"
              width={338}
              height={56}
              className="h-[26px] w-auto opacity-90 transition-opacity hover:opacity-100 sm:h-[31px]"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
