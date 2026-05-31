'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Eyebrow } from '@/components/reveal'

const QUOTES = [
  {
    quote:
      'The most transporting week of our lives. From the candle-lit cellar to our sunrise on the terrace, every moment felt quietly perfect.',
    name: 'Amara & Théo',
    role: 'Honeymoon · Overwater Villa',
  },
  {
    quote:
      'We hosted our leadership offsite here and left genuinely renewed. Serene, seamless, and impossibly beautiful.',
    name: 'Daniel Okafor',
    role: 'Chief Executive · Lumen Group',
  },
  {
    quote:
      'Our wedding on the sand at golden hour was a dream made real. The team anticipated every wish before we spoke it.',
    name: 'Sofia Marchetti',
    role: 'Destination Wedding',
  },
]

export function Testimonials() {
  const [i, setI] = useState(0)
  const go = (d: number) => setI((p) => (p + d + QUOTES.length) % QUOTES.length)

  return (
    <section className="bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Eyebrow className="justify-center">Guest Stories</Eyebrow>
        <div className="mt-8 flex justify-center gap-1 text-gold">
          {Array.from({ length: 5 }).map((_, k) => (
            <Star key={k} className="size-4 fill-gold" />
          ))}
        </div>

        <div className="relative mt-8 min-h-[14rem]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -24, filter: 'blur(6px)' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-serif text-2xl font-light leading-snug text-balance text-foreground sm:text-3xl">
                &ldquo;{QUOTES[i].quote}&rdquo;
              </p>
              <footer className="mt-7">
                <div className="font-medium text-foreground">{QUOTES[i].name}</div>
                <div className="text-sm text-muted-foreground">{QUOTES[i].role}</div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronLeft className="size-4" />
          </button>
          <div className="flex gap-2">
            {QUOTES.map((_, k) => (
              <button
                key={k}
                aria-label={`Go to testimonial ${k + 1}`}
                onClick={() => setI(k)}
                className={`h-1.5 rounded-full transition-all ${
                  k === i ? 'w-6 bg-primary' : 'w-1.5 bg-border'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
