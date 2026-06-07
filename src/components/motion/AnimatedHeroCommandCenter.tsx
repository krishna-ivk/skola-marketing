'use client'

import { motion } from 'framer-motion'
import { StatusPill } from './StatusPill'
import { ProgressMetric } from './ProgressMetric'
import { useSafeMotion } from './use-safe-motion'
import { cbseHeroMetrics } from '../../content/cbse-marketing'

export function AnimatedHeroCommandCenter() {
  const reduce = useSafeMotion()

  return (
    <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-[var(--shadow-hero)] backdrop-blur-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Live School Operations
          </p>
          <h3 className="mt-1 text-xl font-semibold text-ink-950">
            CBSE Command Center
          </h3>
        </div>
        <motion.span
          animate={!reduce ? { opacity: [0.5, 1, 0.5] } : undefined}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
        >
          Active
        </motion.span>
      </div>

      <div className="space-y-4">
        {cbseHeroMetrics.map((row, index) => (
          <motion.div
            key={row.label}
            initial={!reduce ? { opacity: 0, y: 12 } : { opacity: 1, y: 0 }}
            whileInView={!reduce ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 transition hover:border-skola-200 hover:bg-white"
          >
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-slate-900">{row.label}</p>
                <StatusPill label={row.statusLabel} variant={row.statusVariant} pulse />
              </div>
            </div>
            <ProgressMetric
              value={row.value}
              max={row.max}
              label=""
              color={row.color}
              delay={0.3 + index * 0.1}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
