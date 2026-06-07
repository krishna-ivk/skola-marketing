'use client'

import { motion } from 'framer-motion'
import { useSafeMotion } from './use-safe-motion'

interface ProgressMetricProps {
  value: number
  max?: number
  label: string
  sublabel?: string
  color?: string
  delay?: number
  showValue?: boolean
}

export function ProgressMetric({
  value,
  max = 100,
  label,
  sublabel,
  color = 'bg-skola-600',
  delay = 0,
  showValue = true,
}: ProgressMetricProps) {
  const reduce = useSafeMotion()
  const pct = Math.min(Math.round((value / max) * 100), 100)

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-900">{label}</span>
        {showValue && (
          <motion.span
            initial={!reduce ? { opacity: 0 } : undefined}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.4 }}
            className="text-sm font-semibold text-slate-700"
          >
            {value}{max > 100 ? '' : `/${max}`}
          </motion.span>
        )}
      </div>
      {sublabel && (
        <p className="text-xs text-slate-500">{sublabel}</p>
      )}
      <div className="h-2 overflow-hidden rounded-full bg-slate-200">
        <motion.div
          initial={!reduce ? { width: 0 } : { width: `${pct}%` }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </div>
  )
}
