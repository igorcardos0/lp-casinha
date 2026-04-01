"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const MAX_CELLS = 1100

/** Tamanho base ~9px/10px → +30% ≈ 12px / 13px */
const CROSS_TEXT = "text-[12px] leading-none sm:text-[13px]"

type GridState = { cols: number; rows: number }

type GlowCenter = { c: number; r: number }

function computeGrid(width: number, height: number): GridState {
  let cell = 22
  let cols = Math.max(10, Math.ceil(width / cell))
  let rows = Math.max(10, Math.ceil(height / cell))
  while (cols * rows > MAX_CELLS && cell < 80) {
    cell += 2
    cols = Math.max(10, Math.ceil(width / cell))
    rows = Math.max(10, Math.ceil(height / cell))
  }
  return { cols, rows }
}

/**
 * Distância euclidiana no grid (células ~ quadradas) → halo circular ao redor do cursor,
 * em vez do “quadrado” da distância de Chebyshev.
 */
function glowTier(i: number, cols: number, center: GlowCenter | null): 0 | 1 | 2 | 3 | "idle" {
  if (!center) return "idle"
  const row = Math.floor(i / cols)
  const col = i % cols
  const dist = Math.hypot(col - center.c, row - center.r)
  /* Raios em “unidades de célula” para um disco suave */
  if (dist > 3.15) return "idle"
  if (dist <= 0.35) return 0
  if (dist <= 1.15) return 1
  if (dist <= 2.05) return 2
  return 3
}

const tierClass: Record<0 | 1 | 2 | 3, string> = {
  0: "text-white [text-shadow:0_0_14px_rgba(255,255,255,0.98),0_0_28px_rgba(255,255,255,0.55),0_0_42px_rgba(255,255,255,0.2)]",
  1: "text-white/95 [text-shadow:0_0_10px_rgba(255,255,255,0.85),0_0_20px_rgba(255,255,255,0.4)]",
  2: "text-white/75 [text-shadow:0_0_8px_rgba(255,255,255,0.55),0_0_16px_rgba(255,255,255,0.25)]",
  3: "text-white/48 [text-shadow:0_0_6px_rgba(255,255,255,0.35)]",
}

export function HeroDotBackground() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [grid, setGrid] = useState<GridState>({ cols: 36, rows: 28 })
  const [center, setCenter] = useState<GlowCenter | null>(null)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    const update = () => {
      const { width, height } = el.getBoundingClientRect()
      if (width < 1 || height < 1) return
      setGrid(computeGrid(width, height))
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const onPointer = useCallback(
    (clientX: number, clientY: number) => {
      const el = wrapRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      if (
        clientX < rect.left ||
        clientX > rect.right ||
        clientY < rect.top ||
        clientY > rect.bottom
      ) {
        setCenter(null)
        return
      }
      const x = clientX - rect.left
      const y = clientY - rect.top
      const { cols, rows } = grid
      const c = Math.min(cols - 1, Math.max(0, Math.floor((x / rect.width) * cols)))
      const r = Math.min(rows - 1, Math.max(0, Math.floor((y / rect.height) * rows)))
      setCenter({ c, r })
    },
    [grid]
  )

  useEffect(() => {
    let raf = 0
    const move = (e: MouseEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => onPointer(e.clientX, e.clientY))
    }
    const leave = () => setCenter(null)

    window.addEventListener("mousemove", move, { passive: true })
    window.addEventListener("mouseleave", leave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseleave", leave)
    }
  }, [onPointer])

  const { cols, rows } = grid
  const total = cols * rows

  return (
    <div
      ref={wrapRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div
        className="grid h-full w-full"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: total }, (_, i) => {
          const tier = glowTier(i, cols, center)
          return (
            <span
              key={i}
              className={cn(
                "flex select-none items-center justify-center font-light",
                CROSS_TEXT,
                "transition-[color,text-shadow] duration-150 ease-out",
                tier === "idle" ? "text-white/[0.14]" : tierClass[tier]
              )}
            >
              +
            </span>
          )
        })}
      </div>
    </div>
  )
}
