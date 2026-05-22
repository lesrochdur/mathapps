import type { Metadata } from 'next'
import { Orbitron, Rajdhani, Rubik } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-orbitron',
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-rajdhani',
})

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-rubik',
})

export const metadata: Metadata = {
  title: "Math'APPS — Les RochDur",
  description:
    "Applications de théorie et d'exercices pour aider à la préparation au CEB — par Les RochDur",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${orbitron.variable} ${rajdhani.variable} ${rubik.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
