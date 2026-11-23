import { liveDemos } from '../data/projects.js'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-14 pt-16 sm:pb-20 sm:pt-24">
      <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
        ML/AI engineer who builds and deploys AI systems for real-world problems.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        I am a final-year Data Science student at IUB Bahawalpur. I build computer vision, retrieval assistants, AI agents and
        forecasting tools, with a focus on agriculture and public health in Pakistan.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#projects" className="rounded-full bg-brand px-6 py-3 font-semibold text-on-brand">
          View projects
        </a>
        <a href="#contact" className="rounded-full border border-line px-6 py-3 font-semibold hover:bg-surface">
          Contact me
        </a>
      </div>

      <div className="mt-14 border-t border-line pt-6">
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
