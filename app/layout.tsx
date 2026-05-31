import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Thousand Sunny Resort — Where Luxury Meets Paradise',
  description:
    'A luxury tropical destination for unforgettable weddings, executive retreats, relaxation, and elevated hospitality. Reserve your sanctuary beneath the sun.',
  generator: 'v0.app',
  keywords: [
    'luxury resort',
    'tropical paradise',
    'destination wedding',
    'spa wellness',
    'executive retreat',
    'beachfront resort',
  ],
  openGraph: {
    title: 'Thousand Sunny Resort — Where Luxury Meets Paradise',
    description:
      'A sanctuary of celebration, luxury, relaxation, and unforgettable moments.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbf7ee' },
    { media: '(prefers-color-scheme: dark)', color: '#10182b' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${cormorant.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
