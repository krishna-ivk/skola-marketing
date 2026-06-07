'use client'

import { CbseStatusCard } from './motion/CbseStatusCard'
import type { CbseFeatureDescriptor } from './cbse-features'
import { cbseFeatureCards } from '../content/cbse-marketing'

export function CbseFeatureGrid() {
  return (
    <section className="bg-canvas py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Built around CBSE school workflows</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Skola translates CBSE portals, compliance vocabulary, and academic workflows into daily school execution.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cbseFeatureCards.map((f, i) => (
            <CbseStatusCard
              key={f.key}
              feature={{
                key: f.key as CbseFeatureDescriptor['key'],
                label: f.label,
                shortLabel: f.shortLabel,
                description: '',
                icon: f.icon,
                stakeholderVisibility: ['principal'],
              }}
              progress={f.progress}
              maxProgress={f.maxProgress}
              statusVariant={f.statusVariant}
              statusLabel={f.statusLabel}
              icon={f.icon}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
