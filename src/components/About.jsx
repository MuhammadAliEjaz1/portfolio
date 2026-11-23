import { skills } from '../data/projects.js'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-5 py-20">
      <h2 className="font-display text-3xl font-bold tracking-tight">About me</h2>
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div className="max-w-prose space-y-4 leading-relaxed text-muted">
          <p>
            I am Muhammad Ali Ejaz, a final-year BS Data Science student at The Islamia University of Bahawalpur, working toward a career as an ML/AI engineer.
          </p>
          <p>
            I like projects that get deployed and used, not only trained in a notebook. I am most interested in AI tools with real impact in Pakistan, especially in agriculture and public health.
          </p>
          <p>
            I report results honestly, including when a model does not beat a simple baseline. You will find those limits written in every README.
          </p>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold">Education</h3>
          <p className="mt-2 text-muted">BS Data Science, The Islamia University of Bahawalpur (2023 to 2027). CGPA 3.55 out of 4.00.</p>
          <h3 className="mt-8 font-display text-xl font-bold">Tools I work with</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {skills.map((s) => (
              <li key={s} className="rounded-md border border-line bg-surface px-3 py-1 text-sm">{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
