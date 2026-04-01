import { ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"

const variants = {
  light:
    "border-stone-300/90 bg-background/90 text-stone-700 shadow-sm hover:bg-stone-100 hover:text-stone-950",
  dark:
    "border-stone-500/80 bg-stone-950/80 text-stone-200 shadow-md hover:bg-stone-800 hover:text-stone-50",
} as const

type SectionScrollHintProps = {
  href: string
  variant?: keyof typeof variants
  className?: string
}

export function SectionScrollHint({ href, variant = "light", className }: SectionScrollHintProps) {
  return (
    <a
      href={href}
      aria-label="Ir para a próxima seção"
      className={cn(
        "pointer-events-auto absolute bottom-6 left-1/2 z-30 flex h-12 w-12 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full border backdrop-blur-sm transition-colors",
        variants[variant],
        className
      )}
    >
      <ArrowDown className="h-5 w-5 shrink-0" aria-hidden />
    </a>
  )
}
