'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import { Eyebrow } from '@/components/reveal'

type Petal = { id: number; left: number; delay: number; duration: number; size: number }

function Petals() {
  const [petals, setPetals] = useState<Petal[]>([])
  useEffect(() => {
    setPetals(
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: Math.random() * 6 + 8,
        size: Math.random() * 8 + 6,
      })),
    )
  }, [])
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {petals.map((p) => (
        <motion.span
          key={p.id}
          className="absolute -top-10 rounded-[40%_60%_60%_40%] bg-coral/50"
          style={{ left: `${p.left}%`, width: p.size, height: p.size * 0.7 }}
          animate={{ y: ['0vh', '110vh'], x: [0, 40, -20, 30], rotate: [0, 180, 360] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'linear' }}
        />
      ))}
    </div>
  )
}

export function Weddings() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section id="weddings" ref={ref} className="relative min-h-[90svh] overflow-hidden">
      <motion.div style={{ y, scale: 1.12 }} className="absolute inset-0">
        <Image src="/images/wedding.png" alt="Beachfront wedding at sunset" fill className="object-cover" sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/45 to-navy/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
      <Petals />

      <div className="relative z-10 mx-auto flex min-h-[90svh] max-w-6xl items-center px-6 py-28">
        <div className="max-w-xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <Eyebrow className="!text-gold">Destination Weddings</Eyebrow>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mt-6 font-serif text-5xl font-light leading-[1.02] text-balance text-white sm:text-6xl lg:text-7xl"
          >
            Celebrate Love <span className="italic text-gold">In Paradise.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-7 text-pretty text-lg leading-relaxed text-white/80"
          >
            Exchange vows as the sun melts into the sea. From candle-lit aisles
            and cascading florals to barefoot receptions beneath the stars, our
            wedding atelier composes a day that lingers forever.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a href="#reservations" className="rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-gold-foreground transition-transform hover:scale-[1.04]">
              Plan Your Wedding
            </a>
            <a href="#reservations" className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-gold hover:text-gold">
              Request a Brochure
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
