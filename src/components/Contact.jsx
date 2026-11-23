import { useState } from 'react'

const WHATSAPP =
  'https://wa.me/923097006754?text=' +
  encodeURIComponent("Hi Ali, I saw your portfolio and I'd like to discuss a project.")

const messages = {
  sent: 'Thanks, your message was sent. I will reply to your email.',
  error: 'Something went wrong. Please use WhatsApp or email instead.',
  nokey: 'The form is not set up yet. Please use WhatsApp or email instead.',
}

const field = 'mt-1 w-full rounded-lg border border-line bg-bg px-4 py-3'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function onSubmit(e) {
    e.preventDefault()
    const key = import.meta.env.VITE_WEB3FORMS_KEY
    if (!key) return setStatus('nokey')
    const form = e.target
    const fd = new FormData(form)
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: key,
          subject: 'New message from your portfolio',
          from_name: 'Portfolio site',
          name: fd.get('name'),
          email: fd.get('email'),
          message: fd.get('message'),
          ...(fd.get('botcheck') ? { botcheck: true } : {}),
        }),
      })
      const data = await res.json()
      if (data.success) {
        form.reset()
        setStatus('sent')
      } else setStatus('error')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-surface">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-20 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight">Let us talk about your project</h2>
          <p className="mt-3 max-w-md leading-relaxed text-muted">
            Tell me what you want to build or fix. WhatsApp is the fastest way to reach me.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#1a8f4c] px-6 py-3 font-semibold text-white">
              Chat on WhatsApp
            </a>
            <a href="mailto:maliejaz54@gmail.com" className="rounded-full border border-line bg-bg px-6 py-3 font-semibold hover:border-ink">
              Email me
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-accent">
            <li><a href="https://www.linkedin.com/in/muhammad-ali-ejaz-855117341" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
            <li><a href="https://github.com/MuhammadAliEjaz1" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a></li>
            <li><a href="https://www.kaggle.com/chaliejaz" target="_blank" rel="noopener noreferrer" className="hover:underline">Kaggle</a></li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-line bg-bg p-6">
          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
          <div>
            <label htmlFor="name" className="text-sm font-medium">Your name</label>
            <input id="name" name="name" required autoComplete="name" className={field} />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium">Your email</label>
            <input id="email" name="email" type="email" required autoComplete="email" className={field} />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium">What do you need?</label>
            <textarea id="message" name="message" rows={5} required className={field} />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="rounded-full bg-brand px-6 py-3 font-semibold text-on-brand disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>
          {messages[status] && (
            <p role="status" className={`text-sm ${status === 'sent' ? 'text-accent' : 'text-muted'}`}>
              {messages[status]}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
