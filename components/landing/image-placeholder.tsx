import { Camera } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImagePlaceholderProps {
  className?: string
  aspectRatio?: "hero" | "square" | "portrait" | "landscape"
}

export function ImagePlaceholder({ 
  className, 
  aspectRatio = "landscape" 
}: ImagePlaceholderProps) {
  const aspectClasses = {
    hero: "aspect-[16/9]",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
  }

  return (
    <div 
      className={cn(
        "bg-stone-200 border border-stone-300/50 flex items-center justify-center rounded-sm",
        aspectClasses[aspectRatio],
        className
      )}
    >
      <Camera className="w-12 h-12 text-stone-400" />
    </div>
  )
}
