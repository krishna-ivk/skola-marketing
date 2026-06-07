'use client'

import { stakeholderPromises } from './cbse-features'
import { cbseFeatureGridDisclaimer } from '../content/cbse-marketing'

export function CbseStakeholderSection() {
  return (
    <section className="border-y bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="eyebrow">One system for every stakeholder</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Every role sees the school through a CBSE-aligned lens.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stakeholderPromises.map((item) => (
            <article key={item.role} className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[var(--shadow-card)]">
              <p className="text-sm font-semibold text-skola-700">{item.role}</p>
              <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-xs text-slate-400 max-w-2xl mx-auto">
          {cbseFeatureGridDisclaimer}
        </p>
      </div>
    </section>
  )
}
