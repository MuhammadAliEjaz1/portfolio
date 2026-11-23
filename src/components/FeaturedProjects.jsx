import { projects } from '../data/projects.js'

function ProjectCard({ project, wide }) {
  const { categories, title, result, summary, tags, live, github, status, note } = project

  return (
    <article className={`flex flex-col rounded-2xl border border-line bg-surface p-6 sm:p-8 ${wide ? 'md:col-span-2' : ''}`}>
      <p className="text-sm font-semibold text-accent">{categories.join(", ")}</p>
      <h3 className={`mt-2 font-display font-bold tracking-tight ${wide ? 'text-3xl' : 'text-2xl'}`}>{title}</h3>
      <p className="mt-4 text-lg font-medium leading-snug">{result}</p>
      <p className="mt-3 max-w-2xl leading-relaxed text-muted">{summary}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {tags.map((t) => (
          <li key={t} className="rounded-md border border-line bg-bg px-2.5 py-1 text-sm text-muted">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-on-brand"
          >
            Open live demo
          </a>
        )}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-line bg-bg px-5 py-2.5 text-sm font-semibold hover:border-ink"
        >
          View on GitHub
        </a>
      </div>

      {status === 'sleeps' && (
        <p className="mt-4 text-sm text-muted">The free demo may take about 30 seconds to wake up on the first click.</p>
      )}
      {note && <p className="mt-4 text-sm text-muted">{note}</p>}
    </article>
  )
}

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="mx-auto max-w-5xl px-5 pb-20">
      <h2 className="font-display text-3xl font-bold tracking-tight">Featured projects</h2>
      <p className="mt-2 max-w-xl text-muted">Four systems that are built end to end, with honest results and limits in each README.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {featured.map((p, i) => (
          <ProjectCard key={p.id} project={p} wide={i === 0} />
        ))}
      </div>
    </section>
  )
}
