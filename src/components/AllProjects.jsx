import { useState } from 'react'
import { projects, categories } from '../data/projects.js'

export default function AllProjects() {
  const [active, setActive] = useState('All')
  const shown = projects.filter((p) => active === 'All' || p.categories.includes(active))

  return (
    <section id="all-projects" className="mx-auto max-w-5xl px-5 pb-20">
      <h2 className="font-display text-3xl font-bold tracking-tight">All projects</h2>
      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium ${
              active === c ? 'border-brand bg-brand text-on-brand' : 'border-line text-muted hover:text-ink'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {shown.map((p) => (
          <li key={p.id} className="flex flex-col rounded-xl border border-line p-5">
            <p className="text-sm font-semibold text-accent">{p.categories.join(', ')}</p>
            <h3 className="mt-1 font-display text-xl font-bold">{p.title}</h3>
            <p className="mt-2 leading-snug">{p.result}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.summary}</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <li key={t} className="rounded-md border border-line px-2 py-0.5 text-xs text-muted">{t}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-on-brand">
                  Open live demo
                </a>
              )}
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="rounded-full border border-line px-4 py-2 text-sm font-semibold hover:border-ink">
                View on GitHub
              </a>
            </div>
            {p.status === 'sleeps' && <p className="mt-3 text-xs text-muted">The free demo may take about 30 seconds to wake up.</p>}
            {p.note && <p className="mt-2 text-xs text-muted">{p.note}</p>}
          </li>
        ))}
      </ul>
    </section>
  )
}
