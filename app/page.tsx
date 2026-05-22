import { APPS } from '@/lib/apps'
import AppCard from '@/components/AppCard'

const SOCIAL_LINKS = [
  {
    icon: 'fab fa-linkedin',
    url: 'https://www.linkedin.com/in/aurelie-duriau/',
    label: 'LinkedIn',
  },
  {
    icon: 'fab fa-facebook-f',
    url: 'https://www.facebook.com/LesRochDur',
    label: 'Facebook',
  },
  {
    icon: 'fab fa-youtube',
    url: 'https://www.youtube.com/channel/UC-cKCYnQREQVaAHb-y2bUQg',
    label: 'YouTube',
  },
  {
    icon: 'fab fa-instagram',
    url: 'https://www.instagram.com/lesrochdur/',
    label: 'Instagram',
  },
]

export default function Home() {
  return (
    <div style={{ backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
      {/* ─── HEADER ─── */}
      <header className="relative" style={{ borderBottom: '4px solid #00e0ff' }}>
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url(/images/header-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#0b1c26',
          }}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(11,28,38,0.88)' }}
        />

        {/* Content */}
        <div className="relative z-10 px-6 pt-5 pb-10">
          {/* Top bar: logo left · social right */}
          <div className="flex items-center justify-between mb-8">
            <a
              href="https://lesrochdur.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Les RochDur"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lesrochdur.com/wp-content/uploads/2025/04/logo-les-rochdur-2.png"
                alt="Les RochDur"
                style={{ height: '90px', width: 'auto' }}
              />
            </a>

            <div className="flex gap-5 items-center">
              {SOCIAL_LINKS.map(({ icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-xl transition-colors text-white/80 hover:text-[#00e0ff]"
                >
                  <i className={icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Title & subtitle */}
          <div className="text-center">
            <h1
              className="text-5xl md:text-6xl font-bold mb-5"
              style={{
                fontFamily: 'var(--font-orbitron)',
                color: '#8f67ca',
                textShadow: '0 0 12px rgba(143,103,202,0.7), 0 0 25px rgba(143,103,202,0.4), 0 0 40px rgba(143,103,202,0.2)',
              }}
            >
              MATH'APPS
            </h1>
            <p
              className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-rubik)' }}
            >
              Des applications de théorie et d'exercices pour aider à la préparation au
              CEB… Mais pas que !{' '}
              <span className="text-gray-400">— par </span>
              <a
                href="https://lesrochdur.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#00e0ff] hover:underline"
              >
                Les RochDur
              </a>
            </p>
          </div>
        </div>
      </header>

      {/* ─── MAIN ─── */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Global PDF card */}
        <div className="flex justify-center mb-12">
          <div className="rounded-2xl p-10 text-center w-full max-w-lg shadow-2xl" style={{ backgroundColor: '#0b1c26', border: '2px solid #00e0ff' }}>
            <div className="flex justify-center mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/MathAPPS-Theorie.gif" alt="PDF général Math'APPS" style={{ width: '100%', maxWidth: '320px', height: 'auto', objectFit: 'contain', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,224,255,0.3)' }} />
            </div>
            <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-orbitron)', color: '#00e0ff' }}>
              Télécharger le PDF général
            </h2>
            <p className="text-gray-400 mb-6 text-sm" style={{ fontFamily: 'var(--font-rubik)' }}>
              Toute la théorie Math'APPS
            </p>
            <a href="/pdf/MathAPPS-Theorie.pdf" download className="inline-block py-3 px-10 rounded-xl text-lg font-bold transition-all hover:opacity-90 hover:-translate-y-0.5" style={{ backgroundColor: '#00e0ff', color: '#0b1c26', fontFamily: 'var(--font-rajdhani)' }}>
              Télécharger
            </a>
          </div>
        </div>

        {/* Apps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {APPS.map((app) => (
            <AppCard key={app.slug} slug={app.slug} nom={app.nom} description={app.description} />
          ))}
        </div>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="mt-16 py-12 px-6" style={{ backgroundColor: '#0b1c26' }}>
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          {/* Logo */}
          <a
            href="https://lesrochdur.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Les RochDur"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lesrochdur.com/wp-content/uploads/2025/04/logo-les-rochdur-2.png"
              alt="Les RochDur"
              className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </a>

          {/* Social */}
          <div className="flex gap-6">
            {SOCIAL_LINKS.map(({ icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-xl transition-colors text-white/40 hover:text-[#00e0ff]"
              >
                <i className={icon} />
              </a>
            ))}
          </div>

          {/* Text */}
          <div
            className="text-center text-sm text-gray-500 leading-relaxed"
            style={{ fontFamily: 'var(--font-rubik)' }}
          >
            <p className="mb-1">Math'APPS par Les RochDur</p>
            <p>
              <a
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors underline underline-offset-2"
              >
                Licence Creative Commons BY-NC-SA 4.0
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
