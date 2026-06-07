'use client'

import { motion } from 'framer-motion'
import { useSafeMotion } from './use-safe-motion'
import { cbseTickerItems } from '../../content/cbse-marketing'

export function LiveOperationsTicker() {
  const reduce = useSafeMotion()

  if (reduce) {
    return (
      <div className="overflow-hidden border-y bg-ink-950 px-6 py-3 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
          {cbseTickerItems.map((item) => (
            <span key={item} className="flex items-center gap-2 whitespace-nowrap">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-skola-400" />
              {item}
            </span>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div
      className="overflow-hidden border-y bg-ink-950 py-3 text-white"
      onMouseEnter={(e) => {
        const el = e.currentTarget.querySelector('.ticker-content') as HTMLElement
        if (el) el.style.animationPlayState = 'paused'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget.querySelector('.ticker-content') as HTMLElement
        if (el) el.style.animationPlayState = 'running'
      }}
    >
      <motion.div
        className="ticker-content flex w-max gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...cbseTickerItems, ...cbseTickerItems].map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-2 text-sm text-slate-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-skola-400" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
