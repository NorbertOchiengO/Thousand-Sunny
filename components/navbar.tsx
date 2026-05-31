'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X, Sun } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Stay', href: '#stay' },
  { label: 'Weddings', href: '#weddings' },
  { label: 'Meetings', href: '#meetings' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Wellness', href: '#wellness' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
      >
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-500 ${
            scrolled
              ? 'border-border/60 bg-background/70 shadow-lg shadow-black/5 backdrop-blur-xl'
              : 'border-white/15 bg-white/5 backdrop-blur-md'
          }`}
        >
          <a
            href="#home"
            className={`flex items-center gap-2 transition-colors ${
              scrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            <Sun className="size-5 text-gold" strokeWidth={1.6} />
            <span className="font-serif text-lg font-medium tracking-wide">
              Thousand&nbsp;Sunny
            </span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`group relative text-sm font-medium transition-colors ${
                    scrolled
                      ? 'text-muted-foreground hover:text-foreground'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#reservations"
              className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-transform hover:scale-[1.04] sm:inline-flex"
            >
              Reserve
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 backdrop-blur-md lg:hidden ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-navy/95 backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <span className="flex items-center gap-2 text-white">
                <Sun className="size-5 text-gold" strokeWidth={1.6} />
                <span className="font-serif text-lg">Thousand Sunny</span>
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white"
              >
                <X className="size-5" />
              </button>
            </div>
            <ul className="flex flex-1 flex-col justify-center gap-2 px-8">
              {[...LINKS, { label: 'Reservations', href: '#reservations' }].map(
                (l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * i + 0.1 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block font-serif text-4xl font-light text-white/90 transition-colors hover:text-gold"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ),
              )}
            </ul>
            <p className="px-8 pb-10 text-sm text-white/50">
              Paradise Bay · Open year-round · +1 (800) SUNNY-00
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
