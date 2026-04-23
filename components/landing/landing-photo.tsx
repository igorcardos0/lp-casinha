import Image from "next/image"
import { cn } from "@/lib/utils"

const aspectClasses = {
  hero: "aspect-[16/10] sm:aspect-[16/9]",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  banner: "aspect-[21/9] max-h-[min(280px,40vh)]",
} as const

type AspectKey = keyof typeof aspectClasses

export function LandingPhoto({
  src,
  alt,
  className,
  imageClassName,
  aspectRatio = "landscape",
  priority,
  sizes,
}: {
  src: string
  alt: string
  className?: string
  imageClassName?: string
  aspectRatio?: AspectKey
  priority?: boolean
  sizes?: string
}) {
  const encodedSrc = encodeURI(src)

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-sm border border-stone-300/40 bg-stone-200 shadow-sm",
        aspectClasses[aspectRatio],
        className
      )}
    >
      <Image
        src={encodedSrc}
        alt={alt}
        fill
        className={cn("object-cover object-center", imageClassName)}
        sizes={sizes ?? "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"}
        priority={priority}
      />
    </div>
  )
}
