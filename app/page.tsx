import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Intro } from '@/components/sections/intro'
import { Accommodation } from '@/components/sections/accommodation'
import { Weddings } from '@/components/sections/weddings'
import { Meetings } from '@/components/sections/meetings'
import { Experiences } from '@/components/sections/experiences'
import { Spa } from '@/components/sections/spa'
import { Testimonials } from '@/components/sections/testimonials'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Intro />
      <Accommodation />
      <Weddings />
      <Meetings />
      <Experiences />
      <Spa />
      <Testimonials />
      <Footer />
    </main>
  )
}
