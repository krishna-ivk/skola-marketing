'use client'

import { motion } from 'framer-motion'
import { useSafeMotion } from './use-safe-motion'
import { cbseStakeholderSteps, cbseWorkflowExamples } from '../../content/cbse-marketing'

export function StakeholderFlow() {
  const reduce = useSafeMotion()

  return (
    <section className="bg-canvas py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">One school, every stakeholder aligned</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            One action flows across every role.
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="grid gap-0 md:grid-cols-5">
            {cbseStakeholderSteps.map((item, index) => (
              <div key={item.role} className="relative flex flex-col items-center">
                <motion.div
                  initial={!reduce ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative z-10 flex flex-col items-center"
                >
                  <motion.div
                    animate={!reduce ? { y: [0, -3, 0] } : undefined}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.4,
                      ease: 'easeInOut',
                    }}
                    className={`grid h-16 w-16 place-items-center rounded-2xl text-2xl shadow-lg ${index === 0 ? 'bg-indigo-100' : index === 1 ? 'bg-skola-100' : index === 2 ? 'bg-amber-100' : index === 3 ? 'bg-teal-100' : 'bg-rose-100'}`}
                  >
                    {item.icon}
                  </motion.div>
                  <p className="mt-3 text-sm font-semibold text-slate-900">{item.role}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.action}</p>
                </motion.div>

                {index < cbseStakeholderSteps.length - 1 && (
                  <div className="absolute left-[60%] top-8 hidden md:block">
                    <motion.div
                      animate={!reduce ? { x: [0, 8, 0] } : undefined}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.4,
                        ease: 'easeInOut',
                      }}
                      className="text-slate-300"
                    >
                      →
                    </motion.div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <motion.div
            initial={!reduce ? { opacity: 0, y: 16 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[var(--shadow-card)]"
          >
            <p className="mb-3 text-sm font-semibold text-slate-700">
              CBSE workflow examples
            </p>
            <div className="space-y-2">
              {cbseWorkflowExamples.map((ex, i) => (
                <motion.div
                  key={ex}
                  initial={!reduce ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-2.5 text-sm text-slate-600"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-skola-100 text-xs font-bold text-skola-700">
                    {i + 1}
                  </span>
                  {ex}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
