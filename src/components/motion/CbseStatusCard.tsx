'use client'

import { motion } from 'framer-motion'
import { StatusPill } from './StatusPill'
import { useSafeMotion } from './use-safe-motion'
import type { CbseFeatureDescriptor } from '../cbse-features'

interface CbseStatusCardProps {
  feature: CbseFeatureDescriptor
  progress: number
  maxProgress: number
  statusVariant: 'active' | 'pending' | 'attention' | 'completed'
  statusLabel: string
  icon: string
  index: number
}

export function CbseStatusCard({
  feature,
  progress,
  maxProgress,
  statusVariant,
  statusLabel,
  index,
}: CbseStatusCardProps) {
  const reduce = useSafeMotion()
  const pct = Math.min(Math.round((progress / maxProgress) * 100), 100)

  return (
    <motion.article
      initial={!reduce ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={!reduce ? { y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' } : undefined}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[var(--shadow-card)] transition-colors hover:border-skola-200"
    >
      {!reduce && (
        <motion.div
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
          whileHover={{ x: '200%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
      )}
      <div className="mb-3 flex items-center justify-between">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-skola-100 text-skola-700">
          <span className="text-lg font-bold">{feature.icon[0]}</span>
        </div>
        <StatusPill label={statusLabel} variant={statusVariant} pulse={statusVariant === 'active'} />
      </div>
      <h3 className="text-lg font-semibold">{feature.label}</h3>
      <p className="mt-1 text-xs text-slate-500">{feature.shortLabel}</p>
      <div className="mt-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-600">{progress} / {maxProgress} checks</span>
          <span className="font-semibold text-slate-800">{pct}%</span>
        </div>
        <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-slate-200">
          <motion.div
            initial={!reduce ? { width: 0 } : { width: `${pct}%` }}
            whileInView={{ width: `${pct}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 + index * 0.05, ease: 'easeOut' }}
            className="h-full rounded-full bg-skola-600"
          />
        </div>
      </div>
    </motion.article>
  )
}
