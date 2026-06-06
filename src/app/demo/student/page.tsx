import Link from 'next/link'
import { SKOLA_APP_URL } from '@/lib/env'

export default function StudentDemoPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <Link href="/demo" className="text-sm font-semibold text-skola-700 hover:text-skola-900">← Back to persona selection</Link>
      <div className="mt-8">
        <p className="eyebrow">For learners</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-950">Today&apos;s Learning Mission</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Every day starts with a clear focus: a personalised mission with practice, progress visible, and a passport that grows.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-skola-700">Today&apos;s mission</p>
            <div className="mt-4 space-y-3">
              {[
                { title: 'Master Force and Pressure: Day 3', progress: 66, type: 'Practice' },
                { title: 'Complete Science Assessment', progress: 40, type: 'Assessment' },
                { title: 'Review Fractions mistakes', progress: 0, type: 'Repair' },
              ].map(m => (
                <div key={m.title} className="rounded-lg border border-slate-100 p-4">
                  <div className="flex items-center justify-between">
                    <div><p className="text-sm font-medium">{m.title}</p><p className="text-xs text-slate-500">{m.type}</p></div>
                    <span className="text-sm font-semibold">{m.progress}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-slate-100"><div className="h-full rounded-full bg-skola-500" style={{ width: `${m.progress}%` }} /></div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-skola-700">Passport progress</p>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold">18</span>
                <span className="text-sm text-slate-500">/ 24 micro-skills</span>
              </div>
              <div className="mt-3 h-3 rounded-full bg-slate-100"><div className="h-full w-[75%] rounded-full bg-skola-600" /></div>
              <p className="mt-2 text-sm text-slate-600">6 skills remaining this term</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-skola-700">Mock drill — Vertical learning trail</p>
            <div className="mt-4 space-y-3">
              {[
                { q: 'What is the SI unit of force?', correct: true },
                { q: 'A ball is rolling on a frictionless surface. What keeps it moving?', correct: false },
                { q: 'Which of these is a contact force?', correct: true },
              ].map((q, i) => (
                <div key={i} className={`flex items-center justify-between rounded-lg border p-3 ${q.correct ? 'border-green-200 bg-green-50' : 'border-rose-200 bg-rose-50'}`}>
                  <p className="text-sm">{q.q}</p>
                  <span className="text-sm">{q.correct ? '✓' : '✗'}</span>
                </div>
              ))}
              <p className="text-xs text-slate-500">Reinforcement question every 4th attempt</p>
            </div>
            <button className="mt-4 inline-flex rounded-xl bg-skola-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-skola-700">Start new drill (in-app)</button>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-skola-700">Recent mistakes to repair</p>
            <div className="mt-4 space-y-2">
              {[
                { skill: 'Force and Pressure', mistakes: 4, trend: 'improving' },
                { skill: 'Fractions', mistakes: 3, trend: 'stable' },
              ].map(m => (
                <div key={m.skill} className="flex items-center justify-between rounded-lg border border-slate-100 bg-canvas p-3">
                  <div><p className="text-sm font-medium">{m.skill}</p><p className="text-xs text-slate-500">{m.mistakes} recent mistakes</p></div>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${m.trend === 'improving' ? 'bg-green-100 text-green-800' : 'bg-slate-100 text-slate-800'}`}>{m.trend}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a href={`${SKOLA_APP_URL}/student`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-skola-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-skola-700">Open the real student dashboard →</a>
        <p className="mt-2 text-xs text-slate-500">Opens skola-web at {SKOLA_APP_URL}/student</p>
      </div>

      <div className="mt-12 rounded-2xl bg-ink-950 p-8 text-white">
        <p className="text-sm font-semibold text-skola-300">Mock drill API</p>
        <p className="mt-2 text-lg">POST /api/v1/mock-drill/start → submit → summary</p>
        <p className="mt-2 text-sm text-slate-400">Vertical learning trail with 10 mixed-topic questions, reinforcement every 4 questions, accuracy breakdown by skill.</p>
      </div>
    </div>
  )
}
