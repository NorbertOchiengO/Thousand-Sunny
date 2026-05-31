'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { Presentation, Wifi, Coffee, Building2 } from 'lucide-react'
import { Reveal, Eyebrow } from '@/components/reveal'

const FEATURES = [
  { icon: Building2, label: 'Ocean-view boardrooms', value: '6 venues' },
  { icon: Presentation, label: 'AV & hybrid streaming', value: '4K ready' },
  { icon: Wifi, label: 'Dedicated fibre network', value: '10 Gbps' },
  { icon: Coffee, label: 'Executive catering', value: 'Bespoke' },
]

const BARS = [
  { label: 'Engagement', pct: 92 },
  { label: 'Satisfaction', pct: 98 },
  { label: 'Repeat bookings', pct: 87 },
]

export function Meetings() {
  return (
    <section id="meetings" className="relative overflow-hidden bg-navy py-24 text-white sm:py-32">
      <div className="absolute inset-0 opacity-30">
        <Image src="/images/meeting.png" alt="" fill className="object-cover" sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-navy/70" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <Eyebrow className="!text-gold">Executive Meetings & Retreats</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-4xl font-light leading-tight text-balance sm:text-5xl lg:text-6xl">
              Business Beyond <span className="italic text-gold">The Boardroom.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-white/70">
              Where strategy meets serenity. Convene your team in light-filled
              spaces above the water, then unwind with curated experiences that
              turn meetings into momentum.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <Reveal
                key={f.label}
                delay={i * 0.08}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <f.icon className="size-5 text-gold" strokeWidth={1.6} />
                <div className="mt-4 font-serif text-2xl font-light">{f.value}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/55">
                  {f.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* glass data card */}
        <Reveal delay={0.2}>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
            <div className="flex items-baseline justify-between">
              <h3 className="font-serif text-2xl font-light">Retreat Outcomes</h3>
              <span className="text-xs uppercase tracking-widest text-gold">2025</span>
            </div>
            <div className="mt-8 space-y-7">
              {BARS.map((b, i) => (
                <div key={b.label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-white/70">{b.label}</span>
                    <span className="font-medium text-gold">{b.pct}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${b.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + i * 0.15, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-gold to-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm leading-relaxed text-white/55">
              Based on 240+ corporate retreats hosted at Thousand Sunny over the
              past year.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
