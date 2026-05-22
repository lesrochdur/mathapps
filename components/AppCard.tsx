'use client'

import { useState } from 'react'

interface AppCardProps {
  slug: string
  nom: string
  description: string
}

export default function AppCard({ slug, nom, description }: AppCardProps) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Image / fallback */}
      <div
        className="relative h-44 flex items-center justify-center"
        style={{ backgroundColor: '#0b1c26' }}
      >
        {!imgFailed && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`/images/${slug}.png`}
            alt={nom}
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setImgFailed(true)}
          />
        )}
        {imgFailed && (
          <span
            className="text-4xl font-bold select-none"
            style={{
              fontFamily: 'var(--font-orbitron)',
              color: '#00e0ff',
              opacity: 0.25,
            }}
          >
            {nom.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3
          className="text-base font-bold mb-2 text-gray-900 leading-tight"
          style={{ fontFamily: 'var(--font-orbitron)' }}
        >
          {nom}
        </h3>
        <p
          className="text-sm text-gray-600 mb-5 flex-1"
          style={{ fontFamily: 'var(--font-rubik)' }}
        >
          {description}
        </p>

        {/* Buttons */}
        <div className="flex gap-2">
          <a
            href={`/apps/${slug}.html`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 px-3 rounded-xl text-white text-sm font-bold transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{
              backgroundColor: '#8f67ca',
              fontFamily: 'var(--font-rajdhani)',
            }}
          >
            🎮 Jouer
          </a>
          <a
            href={`/pdf/${slug}-theorie.pdf`}
            download
            className="flex-1 text-center py-2 px-3 rounded-xl text-sm font-bold transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{
              backgroundColor: '#00e0ff',
              color: '#0b1c26',
              fontFamily: 'var(--font-rajdhani)',
            }}
          >
            📥 PDF Théorie
          </a>
        </div>
      </div>
    </div>
  )
}
