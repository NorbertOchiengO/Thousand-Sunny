'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Reveal, Eyebrow } from '@/components/reveal'

const ROOMS = [
  {
    name: 'Ocean Horizon Suite',
    desc: 'Floor-to-ceiling glass framing endless turquoise, with a private sun terrace.',
    price: 'from $890 / night',
    img: '/images/suite.png',
    span: 'lg:row-span-2',
  },
  {
    name: 'Overwater Villa',
    desc: 'Step from your deck into a private plunge pool above the lagoon.',
    price: 'from $1,450 / night',
    img: '/images/suite-ocean.png',
    span: '',
  },
  {
    name: 'Garden Sanctuary',
    desc: 'A secluded retreat wrapped in orchids with an open-air stone bath.',
    price: 'from $640 / night',
    img: '/images/garden-suite.png',
    span: '',
  },
]

export function Accommodation() {
  return (
    <section id="stay" className="relative bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <Eyebrow>Luxury Accommodation</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 max-w-xl font-serif text-4xl font-light leading-tight text-balance text-foreground sm:text-5xl">
                Rooms that breathe with the ocean.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <a
              href="#reservations"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              View all residences
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[18rem] gap-5 sm:grid-cols-2">
          {ROOMS.map((room, i) => (
            <Reveal
              key={room.name}
              delay={i * 0.1}
              className={`group relative overflow-hidden rounded-2xl border border-border ${room.span}`}
            >
              <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="absolute inset-0">
                <Image
                  src={room.img || '/placeholder.svg'}
                  alt={room.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="text-xs font-medium uppercase tracking-widest text-gold">
                  {room.price}
                </span>
                <h3 className="mt-1.5 font-serif text-2xl font-light text-white">
                  {room.name}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/75">
                  {room.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
