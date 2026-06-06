import Link from 'next/link'

export default function TeacherDemoPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <Link href="/demo" className="text-sm font-semibold text-skola-700 hover:text-skola-900">← Back to persona selection</Link>
      <div className="mt-8">
        <p className="eyebrow">For teachers</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-950">Classroom Cockpit</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Know exactly who needs help, which concepts need reteaching, and what to do next — all before class starts.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-skola-700">Students needing attention</p>
            <div className="mt-4 space-y-3">
              {[
                { name: 'Arun Kumar', subject: 'Science', issue: 'Critical — No practice in 7 days', severity: 'critical' },
                { name: 'Priya Sharma', subject: 'Math', issue: 'Attention — Below 50% in force problems', severity: 'warning' },
                { name: 'Ravi Patel', subject: 'English', issue: 'Attention — 3 undone assignments', severity: 'warning' },
              ].map(s => (
                <div key={s.name} className={`flex items-center justify-between rounded-xl border p-4 ${s.severity === 'critical' ? 'border-rose-200 bg-rose-50' : 'border-amber-200 bg-amber-50'}`}>
                  <div><p className="font-medium text-ink-950">{s.name}</p><p className="text-xs text-slate-500">{s.subject}</p></div>
                  <span className="text-xs font-medium">{s.issue}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-skola-700">Class health — Class 8 Science</p>
            <div className="mt-4 space-y-3">
              {[
                { metric: 'Practice completion', value: '74%' },
                { metric: 'Avg accuracy', value: '62%' },
                { metric: 'Missions active', value: '24 / 30' },
                { metric: 'Interventions in progress', value: '3' },
              ].map(m => (
                <div key={m.metric} className="flex items-center justify-between border-b border-slate-100 pb-2 last:border-0">
                  <span className="text-sm text-slate-600">{m.metric}</span>
                  <span className="font-semibold">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-skola-700">Misconception clusters</p>
            <div className="mt-4 space-y-3">
              {[
                { cluster: 'Force = constant motion', count: 6, level: 'Grade 8' },
                { cluster: 'Misidentifying numerators', count: 4, level: 'Grade 6' },
                { cluster: 'Past tense vs present perfect', count: 3, level: 'Grade 7' },
              ].map(m => (
                <div key={m.cluster} className="flex items-center justify-between rounded-lg border border-slate-100 bg-canvas p-3">
                  <div><p className="text-sm font-medium">{m.cluster}</p><p className="text-xs text-slate-500">{m.level}</p></div>
                  <span className="rounded-full bg-skola-100 px-3 py-1 text-xs font-semibold text-skola-800">{m.count} learners</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-skola-700">Suggested interventions</p>
            <div className="mt-4 space-y-3">
              {[
                { title: 'Small group — Force concepts', students: '6 students', reason: 'Shared misconception' },
                { title: 'Recheck — Fractions pretest', students: '4 students', reason: 'Below threshold' },
                { title: '1:1 check-in — Arun K', students: '1 student', reason: 'No practice in 7 days' },
              ].map(i => (
                <div key={i.title} className="rounded-lg border border-slate-100 bg-canvas p-3">
                  <p className="text-sm font-medium">{i.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{i.students} · {i.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a href="http://localhost:3000/teacher" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-skola-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-skola-700">Open the real teacher cockpit →</a>
        <p className="mt-2 text-xs text-slate-500">Opens skola-web at localhost:3000/teacher</p>
      </div>

      <div className="mt-12 rounded-2xl bg-ink-950 p-8 text-white">
        <p className="text-sm font-semibold text-skola-300">Intervention API</p>
        <p className="mt-2 text-lg">GET /api/v1/interventions</p>
        <p className="mt-2 text-sm text-slate-400">Returns active intervention list. GET /api/v1/interventions/suggestions returns AI-generated suggestions from practice data.</p>
      </div>
    </div>
  )
}
