import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="text-6xl font-bold text-skola-600">404</p>
      <h1 className="mt-4 text-2xl font-bold tracking-tight text-ink-950">Page not found</h1>
      <p className="mt-2 text-sm text-slate-600">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="rounded-xl bg-skola-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-skola-700">Go home</Link>
        <Link href="/demo/" className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-skola-300">Try the demo</Link>
      </div>
    </div>
  )
}
