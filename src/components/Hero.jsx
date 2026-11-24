import { useEffect, useState } from 'react'
import { liveDemos } from '../data/projects.js'
import CountUp from './CountUp.jsx'

const words = ['computer vision', 'RAG assistants', 'AI agents', 'forecasting', 'data analysis']

const stats = [
  { to: 96.3, decimals: 1, suffix: '%', label: 'average validation accuracy across six crop models (CropGuard AI)' },
  { to: 81, decimals: 0, suffix: '%', label: 'of the areas that flooded in 2022 caught by the Flood Risk model' },
  { to: 2.02, decimals: 2, suffix: ' stars', label: 'lost on reviews when a delivery arrives late (Olist analysis)' },
]

function Rotator() {
  const [i, setI] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setI((n) => (n + 1) % words.length), 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <span className="sr-only">computer vision, RAG assistants, AI agents, forecasting and data analysis</span>
      <span key={i} aria-hidden="true" className="word-in inline-block font-semibold text-accent">
        {words[i]}
      </span>
    </>
  )
}

function Photo() {
  const [failed, setFailed] = useState(false)
  const size = 'aspect-[4/5] w-40 sm:w-56 md:w-72'

  return (
    <div className={`relative ${size}`}>
      <div aria-hidden="true" className="glow absolute -inset-6 -z-10 rounded-full bg-accent/25 blur-3xl" />
      {failed ? (
        <div className={`grid place-items-center rounded-3xl border border-line bg-brand font-display text-6xl font-extrabold text-on-brand ${size}`}>
          AE
        </div>
      ) : (
        <img
          src="/ali.jpg"
          alt="Muhammad Ali Ejaz"
          onError={() => setFailed(true)}
          className={`rounded-3xl border border-line object-cover shadow-xl ${size}`}
        />
      )}
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-14 pt-10 sm:pb-20 sm:pt-16">
      <div className="grid items-center gap-8 md:grid-cols-[1.25fr_1fr] md:gap-12">
        <div className="order-2 md:order-1">
          <a
            href="#contact"
            className="rise mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-[#1a8f4c] opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#1a8f4c]" />
            </span>
            Available for remote projects and ML/AI roles
          </a>
          <h1 className="rise font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Muhammad Ali Ejaz
          </h1>
          <p className="rise mt-5 max-w-xl text-xl font-semibold leading-snug sm:text-2xl" style={{ animationDelay: '0.12s' }}>
            ML/AI engineer who builds and deploys AI systems for real-world problems.
          </p>
          <p className="rise mt-4 text-lg text-muted" style={{ animationDelay: '0.24s' }}>
            I work on <Rotator />.
          </p>
          <p className="rise mt-3 max-w-xl leading-relaxed text-muted" style={{ animationDelay: '0.36s' }}>
            Final-year Data Science student at IUB Bahawalpur. I build ML and AI systems, and my projects already span agriculture, healthcare, manufacturing, e-commerce and disaster risk.
          </p>
          <div className="rise mt-7 flex flex-wrap gap-3" style={{ animationDelay: '0.48s' }}>
            <a href="#projects" className="rounded-full bg-brand px-6 py-3 font-semibold text-on-brand">
              View projects
            </a>
            <a href="#contact" className="rounded-full border border-line px-6 py-3 font-semibold hover:bg-surface">
              Contact me
            </a>
          </div>
        </div>

        <div className="rise order-1 md:order-2 md:justify-self-center" style={{ animationDelay: '0.2s' }}>
          <Photo />
        </div>
      </div>

      <ul className="mt-14 grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <li key={s.label} className="rounded-2xl border border-line bg-surface p-5">
            <p className="font-display text-4xl font-bold tracking-tight text-accent">
              <CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm leading-snug text-muted">{s.label}</p>
          </li>
        ))}
      </ul>

      <div className="mt-10 border-t border-line pt-6">
        <p className="text-sm text-muted">Working demos you can open right now</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {liveDemos.map((d) => (
            <li key={d.url}>
              <a
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-surface px-4 py-2 text-sm font-medium text-accent hover:underline"
              >
                {d.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
