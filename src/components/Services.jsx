import { services } from '../data/projects.js'

export default function Services() {
  return (
    <section id="services" className="bg-surface">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <h2 className="font-display text-3xl font-bold tracking-tight">What I can build for you</h2>
        <p className="mt-2 max-w-xl text-muted">Each service is backed by a project you can open and check.</p>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((s) => (
            <li key={s.title} className="rounded-xl border border-line bg-bg p-6">
              <h3 className="font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
              <p className="mt-4 text-sm text-muted">See it in:</p>
              <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                {s.proof.map((p) => (
                  <li key={p.href}>
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-accent hover:underline">
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
