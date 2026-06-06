import Link from 'next/link'
import { SKOLA_APP_URL } from '@/lib/env'

export default function ParentDemoPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <Link href="/demo" className="text-sm font-semibold text-skola-700 hover:text-skola-900">← Back to persona selection</Link>
      <div className="mt-8">
        <p className="eyebrow">For families</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-950">Child Progress & Home Support</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Understand what your child is working on, where they need help, and how to support them — without overwhelming detail.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-skola-700">This week at a glance</p>
            <div className="mt-4 grid grid-cols-4 gap-4">
              {[
                { label: 'Days practiced', value: '4 / 5' },
                { label: 'Questions done', value: '38' },
                { label: 'Accuracy', value: '72%' },
                { label: 'Attendance', value: '100%' },
              ].map(m => (
                <div key={m.label} className="text-center">
                  <p className="text-2xl font-bold text-ink-950">{m.value}</p>
                  <p className="mt-1 text-xs text-slate-500">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-skola-700">What&apos;s improving</p>
            <div className="mt-4 space-y-3">
              {[
                { subject: 'Science', detail: 'Improved accuracy on Force from 45% → 72% over 2 weeks' },
                { subject: 'Math', detail: 'Completed all Fractions mission tasks this week' },
              ].map(m => (
                <div key={m.subject} className="flex items-start gap-3 rounded-lg border border-green-100 bg-green-50 p-3">
                  <span className="mt-0.5 text-green-600">↑</span>
                  <div><p className="text-sm font-medium">{m.subject}</p><p className="mt-0.5 text-xs text-slate-600">{m.detail}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-skola-700">Areas to support</p>
            <div className="mt-4 space-y-3">
              {[
                { area: 'Force and Pressure', detail: 'Still working on identifying balanced vs unbalanced forces', effort: 'needs-encouragement' },
                { area: 'English Grammar', detail: 'Consistent errors with past perfect tense', effort: 'needs-practice' },
              ].map(m => (
                <div key={m.area} className="flex items-start gap-3 rounded-lg border border-amber-100 bg-amber-50 p-3">
                  <span className="mt-0.5 text-amber-600">→</span>
                  <div><p className="text-sm font-medium">{m.area}</p><p className="mt-0.5 text-xs text-slate-600">{m.detail}</p></div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-skola-700">Home support suggestions</p>
            <div className="mt-4 space-y-3">
              {[
                { action: 'Ask: "Can you show me what balanced forces look like?"', why: 'Reinforces classroom learning through conversation' },
                { action: 'Encourage 10 min of English practice before dinner', why: 'Short daily practice builds grammar confidence' },
              ].map(s => (
                <div key={s.action} className="rounded-lg border border-slate-100 bg-canvas p-3">
                  <p className="text-sm">{s.action}</p>
                  <p className="mt-1 text-xs text-slate-500">{s.why}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-skola-700">Upcoming tasks</p>
            <div className="mt-4 space-y-2">
              {[
                { task: 'Science Assessment — Friday', status: 'pending' },
                { task: 'Project: Forces around us — Due 15 Jun', status: 'pending' },
              ].map(t => (
                <div key={t.task} className="flex items-center justify-between rounded-lg border border-slate-100 bg-canvas p-3">
                  <p className="text-sm">{t.task}</p>
                  <span className="rounded-full border border-amber-200 px-2.5 py-0.5 text-xs font-medium text-amber-700">Upcoming</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a href={`${SKOLA_APP_URL}/parent`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-skola-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-skola-700">Open the real parent dashboard →</a>
        <p className="mt-2 text-xs text-slate-500">Opens skola-web at {SKOLA_APP_URL}/parent</p>
      </div>

      <div className="mt-12 rounded-2xl bg-ink-950 p-8 text-white">
        <p className="text-sm font-semibold text-skola-300">Privacy-safe parent API</p>
        <p className="mt-2 text-lg">GET /api/v1/parent-safe/children/{'{childId}'}/summary</p>
        <p className="mt-2 text-sm text-slate-400">Returns only this child&apos;s data — no class ranks, no other students, no internal risk labels. Designed for family-friendly dashboards.</p>
      </div>
    </div>
  )
}
