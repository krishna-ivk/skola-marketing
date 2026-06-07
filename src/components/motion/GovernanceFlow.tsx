'use client'

import { motion } from 'framer-motion'
import { StatusPill } from './StatusPill'
import { useSafeMotion } from './use-safe-motion'
import { cbseGovernanceSteps } from '../../content/cbse-marketing'

export function GovernanceFlow() {
  const reduce = useSafeMotion()

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Governance pulse</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Every action leaves an audit trail.
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Role-based approvals, automated notifications, and tamper-proof audit logs — governance built into every workflow.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-8 top-0 h-full w-0.5 bg-slate-200" />

          <div className="space-y-6">
            {cbseGovernanceSteps.map((step, index) => (
              <motion.div
                key={step.role}
                initial={!reduce ? { opacity: 0, x: -12 } : { opacity: 1, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.15, duration: 0.4 }}
                className="relative flex items-center gap-5"
              >
                <motion.div
                  animate={
                    !reduce
                      ? {
                          scale: [1, 1.05, 1],
                          boxShadow: [
                            '0 0 0 0 rgba(99,102,241,0)',
                            '0 0 0 8px rgba(99,102,241,0.08)',
                            '0 0 0 0 rgba(99,102,241,0)',
                          ],
                        }
                      : undefined
                  }
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  className={`relative z-10 grid h-14 w-14 place-items-center rounded-2xl text-lg shadow-md ${step.color}`}
                >
                  {step.icon}
                </motion.div>

                <div className="flex-1 rounded-xl border border-slate-200/80 bg-slate-50 px-5 py-3.5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-semibold text-slate-900">{step.role}</span>
                      <span className="ml-1.5 text-sm text-slate-500">{step.action}</span>
                    </div>
                    <StatusPill
                      label={step.statusLabel}
                      variant={step.statusVariant}
                      pulse={step.statusVariant === 'active'}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
