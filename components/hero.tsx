'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { Particles } from '@/components/particles'
import { ReservationCard } from '@/components/reservation-card'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '24%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const words = ['Where', 'Luxury', 'Meets', 'Paradise.']

  return (
    <section id="home" ref={ref} className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Parallax background */}
      <motion.div style={mounted ? { y: bgY, scale: bgScale } : undefined} className="absolute inset-0">
        <Image
          src="/images/hero-resort.png"
          alt="Aerial view of Thousand Sunny Resort at golden hour"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/20 to-navy/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      <Particles count={22} />

      {/* Content */}
      <motion.div
        style={mounted ? { y: contentY, opacity: fade } : undefined}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 pb-32 pt-32"
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-6 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-luxury text-gold"
        >
          <span className="h-px w-10 bg-gold/70" />
          A Sanctuary Beneath the Sun
        </motion.span>

        <h1 className="max-w-4xl font-serif text-5xl font-light leading-[0.95] text-balance text-white sm:text-7xl lg:text-8xl">
          {words.map((w, i) => (
            <motion.span
              key={w}
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 1,
                delay: 0.5 + i * 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`mr-4 inline-block ${i === 1 ? 'italic text-gold' : ''}`}
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg"
        >
          A luxury destination for unforgettable weddings, executive retreats,
          relaxation, and elevated hospitality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#reservations"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-[1.04]"
          >
            Book Your Stay
          </a>
          <a
            href="#experiences"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:border-gold/70 hover:text-gold"
          >
            Explore Experiences
          </a>
        </motion.div>
      </motion.div>

      {/* Floating reservation card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
        style={mounted ? { opacity: fade } : undefined}
        className="absolute inset-x-0 bottom-0 z-20 px-6"
      >
        <ReservationCard />
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={mounted ? { opacity: fade } : undefined}
        className="absolute bottom-[19rem] left-1/2 z-10 -translate-x-1/2 sm:bottom-44"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1 text-white/60"
        >
          <span className="text-[10px] uppercase tracking-luxury">Scroll</span>
          <ChevronDown className="size-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
