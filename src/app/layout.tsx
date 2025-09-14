import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Divine Astro Summit - Divine Guidance for a Brighter Tomorrow',
  description: 'Transform uncertainty into clarity with ancient wisdom. Expert KP Astrology, Numerology, Lal Kitab, and Vastu consultations.',
  keywords: 'astrology, numerology, KP astrology, Lal Kitab, Vastu, mobile numerology, name numerology',
}

export default function RootLayout({ children }:{children:any}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}