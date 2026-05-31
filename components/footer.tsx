'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { Sun } from 'lucide-react'
import { Particles } from '@/components/particles'

const COLUMNS = [
  {
    title: 'Discover',
    links: ['Suites & Villas', 'Weddings', 'Meetings', 'Spa & Wellness', 'Dining'],
  },
  {
    title: 'Resort',
    links: ['Our Story', 'Sustainability', 'Gallery', 'Careers', 'Press'],
  },
  {
    title: 'Connect',
    links: ['Instagram', 'Pinterest', 'Journal', 'Newsletter', 'Contact'],
  },
]

export function Footer() {
  return (
    <footer id="reservations" className="relative overflow-hidden">
      <Image src="/images/footer-horizon.png" alt="" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/85 to-navy" />
      <Particles count={16} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-12 pt-28 text-white">
        {/* CTA */}
        <div className="border-b border-white/15 pb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mx-auto max-w-3xl font-serif text-5xl font-light leading-[1.02] text-balance sm:text-7xl"
          >
            Your Paradise <span className="italic text-gold">Awaits.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mx-auto mt-6 max-w-lg text-pretty leading-relaxed text-white/70"
          >
            Reserve your sanctuary beneath the sun and let the celebration begin.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-9 flex flex-wrap justify-center gap-4"
          >
            <a href="#home" className="rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-gold-foreground transition-transform hover:scale-[1.04]">
              Book Your Stay
            </a>
            <a href="#weddings" className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-gold hover:text-gold">
              Reserve An Event
            </a>
          </motion.div>
        </div>

        {/* Links */}
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Sun className="size-6 text-gold" strokeWidth={1.6} />
              <span className="font-serif text-xl">Thousand Sunny</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              A sanctuary of celebration, luxury, relaxation, and unforgettable
              moments. Paradise Bay, somewhere warm.
            </p>
          </div>
          {COLUMNS.map((c) => (
            <div key={c.title}>
              <h3 className="text-xs font-medium uppercase tracking-luxury text-gold">
                {c.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/70 transition-colors hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Thousand Sunny Resort. All rights reserved.</p>
          <p className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">Privacy</a>
            <a href="#" className="transition-colors hover:text-white">Terms</a>
            <a href="#" className="transition-colors hover:text-white">Accessibility</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
