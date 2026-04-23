"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { Phone, Mail, MapPin } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 11 97565-0773",
    href: "tel:+5511975650773",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@casinhabanqueteria.com.br",
    href: "mailto:contato@casinhabanqueteria.com.br",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "São Paulo, SP",
    href: "#",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  /** Altura e estilo únicos para inputs e select ficarem alinhados */
  const control =
    "h-10 min-h-10 w-full rounded-none border border-stone-300 bg-background px-3 text-sm shadow-none focus-visible:border-stone-950 focus-visible:ring-2 focus-visible:ring-stone-950/20"

  return (
    <section
      id="contato"
      className="relative scroll-mt-20 bg-stone-100 py-14 lg:py-20"
    >
      <div className="container mx-auto w-full max-w-6xl px-4 pb-16 pt-2 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div className="mx-auto flex w-full max-w-lg flex-col gap-8 lg:mx-0">
            <div className="space-y-3 text-center lg:text-left">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">Fale Conosco</span>
              <h2 className="font-serif text-2xl leading-tight text-balance text-foreground sm:text-3xl lg:text-4xl">
                Vamos criar o menu do seu evento?
              </h2>
              <p className="text-sm leading-relaxed text-stone-600 sm:text-base">
                Cada evento é único. Conte-nos sobre o seu sonho e nossa equipe entrará em contato para criar uma
                proposta exclusiva.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a key={index} href={info.href} className="group flex items-center justify-center gap-3 lg:justify-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-stone-950 text-stone-50 transition-colors group-hover:bg-stone-800">
                    <info.icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 text-left">
                    <span className="block text-[10px] uppercase tracking-[0.15em] text-stone-500">{info.label}</span>
                    <span className="text-sm font-medium text-stone-900">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none lg:justify-self-end xl:max-w-md">
            <div className="bg-transparent px-0 py-2 sm:px-2 sm:py-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <FieldGroup className="gap-4">
                  <Field className="gap-2">
                    <FieldLabel htmlFor="name" className="text-[11px] uppercase tracking-wide text-stone-600">
                      Nome completo
                    </FieldLabel>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={control}
                      required
                    />
                  </Field>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3">
                    <Field className="gap-2">
                      <FieldLabel htmlFor="email" className="text-[11px] uppercase tracking-wide text-stone-600">
                        E-mail
                      </FieldLabel>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={control}
                        required
                      />
                    </Field>

                    <Field className="gap-2">
                      <FieldLabel htmlFor="phone" className="text-[11px] uppercase tracking-wide text-stone-600">
                        Telefone
                      </FieldLabel>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={control}
                        required
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3">
                    <Field className="gap-2">
                      <FieldLabel htmlFor="eventDate" className="text-[11px] uppercase tracking-wide text-stone-600">
                        Data do evento
                      </FieldLabel>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className={control}
                        required
                      />
                    </Field>

                    <Field className="gap-2">
                      <FieldLabel htmlFor="eventType" className="text-[11px] uppercase tracking-wide text-stone-600">
                        Tipo de evento
                      </FieldLabel>
                      <Select
                        value={formData.eventType}
                        onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                      >
                        <SelectTrigger className={`${control} w-full min-w-0 justify-between`}>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="casamento">Casamento</SelectItem>
                          <SelectItem value="corporativo">Evento Corporativo</SelectItem>
                          <SelectItem value="aniversario">Aniversário</SelectItem>
                          <SelectItem value="jantar">Jantar Íntimo</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>
                </FieldGroup>

                <Button
                  type="submit"
                  className="h-10 w-full rounded-none bg-stone-950 text-xs uppercase tracking-[0.12em] text-stone-50 transition-colors hover:bg-stone-800"
                >
                  Solicitar Orçamento
                </Button>

                <p className="text-center text-[11px] text-stone-500">Respondemos em até 24 horas úteis</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
