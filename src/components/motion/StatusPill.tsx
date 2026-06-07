'use client'

import { motion } from 'framer-motion'
import { useSafeMotion } from './use-safe-motion'

interface StatusPillProps {
  label: string
  variant?: 'active' | 'pending' | 'attention' | 'completed' | 'default'
  pulse?: boolean
}

const variantStyles: Record<string, string> = {
  active: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  pending: 'bg-amber-50 text-amber-700 border-amber-200',
  attention: 'bg-rose-50 text-rose-700 border-rose-200',
  completed: 'bg-skola-50 text-skola-700 border-skola-200',
  default: 'bg-slate-50 text-slate-600 border-slate-200',
}

export function StatusPill({ label, variant = 'default', pulse = false }: StatusPillProps) {
  const reduce = useSafeMotion()

  return (
    <motion.span
      initial={pulse && !reduce ? { opacity: 0.7, scale: 0.98 } : undefined}
      animate={
        pulse && !reduce
          ? { opacity: [0.7, 1, 0.7], scale: [0.98, 1, 0.98] }
          : undefined
      }
      transition={{
        duration: 2.4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${variantStyles[variant] || variantStyles.default}`}
    >
      {label}
    </motion.span>
  )
}
