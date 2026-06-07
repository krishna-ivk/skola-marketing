'use client'

import { motion } from 'framer-motion'
import { StatusPill } from './StatusPill'
import { useSafeMotion } from './use-safe-motion'
import { cbseExamSteps } from '../../content/cbse-marketing'

export function ExamReadinessTimeline() {
  const reduce = useSafeMotion()

  return (
    <section className="border-y bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Pariksha Sangam Readiness</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Exam lifecycle, step by step.
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            From academic calendar to result communication — every exam phase tracked and aligned with CBSE requirements.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-[23px] top-0 h-full w-0.5 bg-slate-200 md:left-1/2 md:-translate-x-px" />

          <div className="space-y-8">
            {cbseExamSteps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={!reduce ? { opacity: 0, x: index % 2 === 0 ? -20 : 20 } : { opacity: 1, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.12, duration: 0.5 }}
                className={`relative flex items-center gap-6 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[var(--shadow-card)] ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-sm font-semibold text-slate-900">{step.label}</h3>
                      <StatusPill
                        label={step.status === 'active' ? 'Active' : step.status === 'attention' ? 'Attention' : 'Pending'}
                        variant={step.status}
                        pulse={step.status === 'active'}
                      />
                    </div>
                    <p className="text-xs text-slate-500">{step.detail}</p>
                  </div>
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    animate={
                      !reduce && step.status === 'active'
                        ? { scale: [1, 1.15, 1] }
                        : undefined
                    }
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`grid h-12 w-12 place-items-center rounded-full text-sm font-bold text-white shadow-md ${
                      step.status === 'active'
                        ? 'bg-emerald-500'
                        : step.status === 'attention'
                          ? 'bg-amber-500'
                          : 'bg-slate-300'
                    }`}
                  >
                    {index + 1}
                  </motion.div>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
