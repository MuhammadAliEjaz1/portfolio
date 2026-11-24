const steps = [
  { title: 'You describe the problem', text: 'Tell me what you want to solve and share your data if you have it. A short WhatsApp message is enough to start.' },
  { title: 'I propose a plan', text: 'I reply with what I would build, how we will measure success, and what I need from you.' },
  { title: 'I build and show progress', text: 'You see working results along the way, so there are no surprises at the end.' },
  { title: 'I deliver and support', text: 'You get the code, a clear README, and help with deployment and questions after delivery.' },
]

export default function HowIWork() {
  return (
    <section id="process" className="mx-auto max-w-5xl px-5 py-20">
      <h2 className="font-display text-3xl font-bold tracking-tight">How I work</h2>
      <p className="mt-2 max-w-xl text-muted">A simple process, so you always know what happens next.</p>
      <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="rounded-xl border border-line p-5">
            <p className="font-display text-4xl font-extrabold text-accent">{i + 1}</p>
            <h3 className="mt-3 font-display text-lg font-bold leading-snug">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
