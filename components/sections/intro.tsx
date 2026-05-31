'use client'

import { Reveal, Eyebrow } from '@/components/reveal'

const STATS = [
  { value: '120', label: 'Private Suites & Villas' },
  { value: '8', label: 'Curated Experiences' },
  { value: '24/7', label: 'Concierge Service' },
  { value: '5★', label: 'Forbes Travel Guide' },
]

export function Intro() {
  return (
    <section className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <Reveal>
              <Eyebrow>The Thousand Sunny Promise</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-4xl font-light leading-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
                A sanctuary of celebration, luxury, relaxation, and
                <span className="italic text-primary"> unforgettable moments.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">
              Nestled where the tide meets the palms, Thousand Sunny is more than
              a resort — it is an invitation to slow down. Wake to golden light
              over the ocean, celebrate love beneath the stars, and let every
              detail be quietly perfected on your behalf.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className="bg-card px-6 py-8 text-center"
            >
              <div className="font-serif text-4xl font-light text-primary sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
