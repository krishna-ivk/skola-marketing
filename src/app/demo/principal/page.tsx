import Link from 'next/link'
import { SKOLA_APP_URL } from '@/lib/env'

export default function PrincipalDemoPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <Link href="/demo" className="text-sm font-semibold text-skola-700 hover:text-skola-900">← Back to persona selection</Link>
      <div className="mt-8">
        <p className="eyebrow">For school leaders</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-950">Principal Pilot Command Centre</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Understand pilot status in two minutes. Monitor adoption, learning health, teacher workload, and parent engagement — all from one screen.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-skola-700">Pilot Readiness Score</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-3xl sm:text-4xl font-bold text-ink-950">76%</span>
              <div className="flex flex-wrap gap-2 sm:gap-4 text-center">
                <div><p className="text-base sm:text-xl font-bold">210</p><p className="text-xs text-slate-500">Learners</p></div>
                <div><p className="text-base sm:text-xl font-bold">12</p><p className="text-xs text-slate-500">Teachers</p></div>
                <div><p className="text-base sm:text-xl font-bold">8</p><p className="text-xs text-slate-500">Classes</p></div>
              </div>
            </div>
            <div className="mt-4 h-2.5 rounded-full bg-slate-100"><div className="h-full w-[76%] rounded-full bg-skola-500" /></div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-skola-700">Adoption Overview</p>
            <div className="mt-4 space-y-3">
              {[
                { label: 'Learner adoption', value: '86%' },
                { label: 'Teacher engagement', value: '92%' },
                { label: 'Parent engagement', value: '68%' },
                { label: 'Evidence reviewed', value: '54 / 87' },
                { label: 'Active missions', value: '24' },
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between border-b border-slate-100 pb-2 last:border-0">
                  <span className="text-sm text-slate-600">{item.label}</span>
                  <span className="font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="font-semibold text-ink-950">Risk indicators</p>
            <div className="mt-4 space-y-3">
              {[
                { title: 'Evidence review backlog', desc: '33 submissions waiting, concentrated across 3 teachers', severity: 'attention' },
                { title: 'Grade 7 adoption uneven', desc: '1 class has not reached weekly activity threshold', severity: 'attention' },
                { title: 'Weak skill cluster', desc: '8 students struggling with force and pressure concepts', severity: 'critical' },
              ].map(r => (
                <div key={r.title} className={`rounded-xl border p-4 ${r.severity === 'critical' ? 'border-rose-200 bg-rose-50' : 'border-amber-200 bg-white'}`}>
                  <p className="font-semibold text-ink-950">{r.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-skola-700">Weakest skills across classes</p>
            <div className="mt-4 space-y-3">
              {[
                { name: 'Force and Pressure', affected: 8, struggling: '72%' },
                { name: 'Fractions and Decimals', affected: 6, struggling: '58%' },
                { name: 'Tenses and Grammar', affected: 5, struggling: '45%' },
              ].map(s => (
                <div key={s.name} className="flex items-center justify-between">
                  <div><p className="text-sm font-medium">{s.name}</p><p className="text-xs text-slate-500">{s.affected} students affected</p></div>
                  <span className="text-sm font-semibold text-rose-600">{s.struggling} struggling</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a href={`${SKOLA_APP_URL}/principal`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-skola-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-skola-700">Open the real principal dashboard →</a>
        <p className="mt-2 text-xs text-slate-500">Opens skola-web at {SKOLA_APP_URL}/principal</p>
      </div>

      <div className="mt-12 rounded-2xl bg-ink-950 p-8 text-white">
        <p className="text-sm font-semibold text-skola-300">Pilot summary endpoint</p>
        <p className="mt-2 text-lg">GET /api/v1/school/pilot-summary</p>
        <p className="mt-2 text-sm text-slate-400">Returns school identity, adoption metrics, class health, teacher engagement, student risk distribution, assessment completion, parent engagement, and recommended next actions.</p>
      </div>
    </div>
  )
}
