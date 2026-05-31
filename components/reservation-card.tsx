'use client'

import { useState } from 'react'
import { CalendarDays, Users, Sparkles } from 'lucide-react'

export function ReservationCard() {
  const today = new Date().toISOString().split('T')[0]
  const [submitted, setSubmitted] = useState(false)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 2500)
      }}
      className="mx-auto grid max-w-5xl grid-cols-1 gap-4 rounded-2xl border border-white/15 bg-background/70 p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end"
    >
      <Field label="Arrival" icon={<CalendarDays className="size-4 text-gold" />}>
        <input
          type="date"
          defaultValue={today}
          className="w-full bg-transparent text-sm text-foreground outline-none [color-scheme:light] dark:[color-scheme:dark]"
        />
      </Field>
      <Field label="Departure" icon={<CalendarDays className="size-4 text-gold" />}>
        <input
          type="date"
          defaultValue={today}
          className="w-full bg-transparent text-sm text-foreground outline-none [color-scheme:light] dark:[color-scheme:dark]"
        />
      </Field>
      <Field label="Guests & Experience" icon={<Users className="size-4 text-gold" />}>
        <select className="w-full bg-transparent text-sm text-foreground outline-none">
          <option className="bg-background">2 Guests · Suite</option>
          <option className="bg-background">2 Guests · Wedding</option>
          <option className="bg-background">Group · Meeting</option>
          <option className="bg-background">Family · Villa</option>
        </select>
      </Field>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-[1.03]"
      >
        <Sparkles className="size-4" />
        {submitted ? 'Reserved!' : 'Check Availability'}
      </button>
    </form>
  )
}

function Field({
  label,
  icon,
  children,
}: {
  label: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <label className="flex flex-col gap-1.5 rounded-xl border border-border/50 bg-card/40 px-4 py-2.5">
      <span className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
        {icon}
        {label}
      </span>
      {children}
    </label>
  )
}
