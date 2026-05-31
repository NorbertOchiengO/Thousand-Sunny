'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Waves, Baby, Music4, Wine } from 'lucide-react'
import { Reveal, Eyebrow } from '@/components/reveal'

const PANELS = [
  {
    key: 'pool',
    title: 'Infinity Pool',
    tagline: 'Where the water meets the sky',
    desc: 'A mirror-calm infinity edge spilling into the horizon, framed by private cabanas and glowing at dusk.',
    icon: Waves,
    img: '/images/pool.png',
  },
  {
    key: 'club',
    title: 'Club & Nightlife',
    tagline: 'Evenings that glow',
    desc: 'Rooftop lounges, hand-crafted cocktails and resident DJs beneath a canopy of warm amber light.',
    icon: Music4,
    img: '/images/club.png',
  },
  {
    key: 'wine',
    title: 'Wine Tasting',
    tagline: 'A cellar beneath candlelight',
    desc: 'Intimate sommelier-led journeys through rare vintages in our candle-lit underground cellar.',
    icon: Wine,
    img: '/images/wine.png',
  },
  {
    key: 'kids',
    title: 'Family Playground',
    tagline: 'Joy, beautifully designed',
    desc: 'A lush, naturally-crafted play garden where little guests adventure under attentive care.',
    icon: Baby,
    img: '/images/kids.png',
  },
]

export function Experiences() {
  const [active, setActive] = useState(0)

  return (
    <section id="experiences" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <Reveal>
            <Eyebrow className="justify-center">Curated Experiences</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl font-light leading-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
              Days of wonder, nights of glow.
            </h2>
          </Reveal>
        </div>

        {/* Expanding panels (desktop) */}
        <Reveal delay={0.15} className="mt-14 hidden gap-3 lg:flex lg:h-[30rem]">
          {PANELS.map((p, i) => {
            const isActive = active === i
            return (
              <motion.button
                key={p.key}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                animate={{ flex: isActive ? 4 : 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-border text-left"
              >
                <Image
                  src={p.img || '/placeholder.svg'}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <p.icon className="size-6 text-gold" strokeWidth={1.6} />
                  <motion.div animate={{ opacity: isActive ? 1 : 0.85 }}>
                    <h3
                      className={`mt-4 font-serif font-light text-white ${
                        isActive ? 'text-3xl' : 'text-xl [writing-mode:horizontal-tb]'
                      }`}
                    >
                      {p.title}
                    </h3>
                    <motion.div
                      animate={{ opacity: isActive ? 1 : 0, height: isActive ? 'auto' : 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-1 text-sm font-medium uppercase tracking-widest text-gold">
                        {p.tagline}
                      </p>
                      <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">
                        {p.desc}
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.button>
            )
          })}
        </Reveal>

        {/* Stacked cards (mobile) */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:hidden">
          {PANELS.map((p, i) => (
            <Reveal key={p.key} delay={i * 0.08} className="group relative h-72 overflow-hidden rounded-2xl border border-border">
              <Image src={p.img || '/placeholder.svg'} alt={p.title} fill className="object-cover" sizes="(max-width:640px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p.icon className="size-5 text-gold" strokeWidth={1.6} />
                <h3 className="mt-3 font-serif text-2xl font-light text-white">{p.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-gold">{p.tagline}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
