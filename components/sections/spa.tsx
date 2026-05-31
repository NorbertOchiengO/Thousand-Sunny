'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { Reveal, Eyebrow } from '@/components/reveal'

const RITUALS = [
  { name: 'Ocean Mineral Ritual', time: '90 min' },
  { name: 'Volcanic Stone Therapy', time: '75 min' },
  { name: 'Golden Hour Facial', time: '60 min' },
  { name: 'Sunset Sound Bath', time: '45 min' },
]

export function Spa() {
  return (
    <section id="wellness" className="relative overflow-hidden py-24 sm:py-32">
      <Image src="/images/spa.png" alt="Tranquil spa treatment room" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-background/82 backdrop-blur-[2px]" />

      {/* ambient drifting glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-gold/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <Eyebrow>Spa & Wellness</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-4xl font-light leading-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
              Restore Mind, <span className="italic text-primary">Body &amp; Soul.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Drift into stillness amid misted air, warm stone and the distant
              hush of waterfalls. Our therapists compose rituals that quiet the
              mind and renew the body.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <a href="#reservations" className="mt-9 inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.04]">
              Reserve a Ritual
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <ul className="divide-y divide-border rounded-2xl border border-border bg-card/70 backdrop-blur-xl">
            {RITUALS.map((r) => (
              <li key={r.name} className="flex items-center justify-between px-6 py-5 transition-colors hover:bg-secondary/50">
                <span className="font-serif text-xl font-light text-foreground">{r.name}</span>
                <span className="text-sm uppercase tracking-widest text-muted-foreground">{r.time}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
