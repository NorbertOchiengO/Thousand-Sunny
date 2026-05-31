'use client'

import { useEffect, useState } from 'react'

type Dot = {
  id: number
  left: number
  top: number
  size: number
  delay: number
  duration: number
  opacity: number
}

/** Soft floating ambient particles (golden dust / light motes). Client-only to avoid hydration mismatch. */
export function Particles({ count = 18 }: { count?: number }) {
  const [dots, setDots] = useState<Dot[]>([])

  useEffect(() => {
    setDots(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 6 + 2,
        delay: Math.random() * 8,
        duration: Math.random() * 6 + 7,
        opacity: Math.random() * 0.5 + 0.2,
      })),
    )
  }, [count])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {dots.map((d) => (
        <span
          key={d.id}
          className="animate-float-slow absolute rounded-full bg-gold blur-[1px]"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
