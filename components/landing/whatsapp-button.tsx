"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const whatsappNumber = "5511999999999"
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Casinha Banqueteria.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}
