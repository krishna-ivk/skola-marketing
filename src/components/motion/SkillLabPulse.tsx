'use client'

import { motion } from 'framer-motion'
import { StatusPill } from './StatusPill'
import { ProgressMetric } from './ProgressMetric'
import { useSafeMotion } from './use-safe-motion'
import { cbseSkillLabMetrics, cbseSkillSectors, cbseSkillLabStatuses } from '../../content/cbse-marketing'

export function SkillLabPulse() {
  const reduce = useSafeMotion()

  return (
    <section className="bg-ink-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-skola-300">
              Composite Skill Lab
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Operationalise your skill lab.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              CBSE mandates Composite Skill Labs by August 2027. Skola helps you track equipment, safety, projects, and utilisation — all from one dashboard.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {cbseSkillLabMetrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={!reduce ? { opacity: 0, y: 12 } : { opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <ProgressMetric
                    value={m.value}
                    max={m.max}
                    label={m.label}
                    color={m.color}
                    delay={0.2 + i * 0.08}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.div
              initial={!reduce ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <p className="mb-4 text-sm font-semibold text-skola-300">Skill sectors</p>
              <div className="flex flex-wrap gap-2">
                {cbseSkillSectors.map((sector, i) => (
                  <motion.span
                    key={sector}
                    initial={!reduce ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="rounded-full border border-white/20 px-3.5 py-1.5 text-xs font-medium text-slate-300 transition hover:border-skola-400 hover:text-white"
                  >
                    {sector}
                  </motion.span>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                {cbseSkillLabStatuses.map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3">
                    <span className="text-sm text-slate-400">{item.label}</span>
                    <StatusPill label={item.detail} variant={item.statusVariant} pulse={item.statusVariant === 'active'} />
                  </div>
                ))}
                <div className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3">
                  <span className="text-sm text-slate-400">CBSE deadline</span>
                  <motion.span
                    animate={!reduce ? { opacity: [0.6, 1, 0.6] } : undefined}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="rounded-full border border-rose-400/30 bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-300"
                  >
                    Aug 2027
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
