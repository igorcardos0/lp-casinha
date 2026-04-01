"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="relative block">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Casinha%20-%20Preto-9LC0qA61bEaJGgBfrbYgUNMdtXScMA.png"
              alt="Casinha Banqueteria"
              width={140}
              height={32}
              style={{ height: '32px', width: 'auto' }}
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <a 
              href="#sobre" 
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Sobre
            </a>
            <a 
              href="#experiencias" 
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Experiências
            </a>
            <a 
              href="#contato" 
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              asChild
              variant="default"
              className="bg-stone-800 hover:bg-stone-900 text-stone-50 px-6 py-2 text-sm tracking-wide transition-all duration-300"
            >
              <a href="#contato">Solicitar Orçamento</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              <a 
                href="#sobre" 
                className="text-base tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a 
                href="#experiencias" 
                className="text-base tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Experiências
              </a>
              <a 
                href="#contato" 
                className="text-base tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <Button 
                asChild
                variant="default"
                className="bg-stone-800 hover:bg-stone-900 text-stone-50 w-full mt-4 text-sm tracking-wide transition-all duration-300"
              >
                <a href="#contato" onClick={() => setIsMenuOpen(false)}>Solicitar Orçamento</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
