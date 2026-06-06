'use client'

import Link from 'next/link'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="text-6xl font-bold text-rose-500">!</p>
      <h1 className="mt-4 text-2xl font-bold tracking-tight text-ink-950">Something went wrong</h1>
      <p className="mt-2 text-sm text-slate-600">{error.message || 'An unexpected error occurred.'}</p>
      <div className="mt-8 flex justify-center gap-3">
        <button onClick={reset} className="rounded-xl bg-skola-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-skola-700">Try again</button>
        <Link href="/" className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-skola-300">Go home</Link>
      </div>
    </div>
  )
}
