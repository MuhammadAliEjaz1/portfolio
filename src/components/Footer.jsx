export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-sm text-muted">
        <p>© {new Date().getFullYear()} Muhammad Ali Ejaz</p>
        <p>ML/AI engineer, Pakistan</p>
      </div>
    </footer>
  )
}
