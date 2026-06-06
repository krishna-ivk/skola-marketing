import Link from 'next/link'

const phases = [
  {
    title: '1. Discovery',
    duration: 'Week 1',
    items: ['Head of academics and IT alignment call', 'Curriculum mapping workshop', 'Data privacy review', 'Demo account setup for leadership team'],
  },
  {
    title: '2. Teacher activation',
    duration: 'Week 2-3',
    items: ['Teacher workspace onboarding with 2-4 pilot teachers', 'Class & roster setup with your SIS export', 'Practice and assessment configuration', 'Daily cockpit walkthrough'],
  },
  {
    title: '3. Classroom rollout',
    duration: 'Week 4-5',
    items: ['Student passport launch with class', 'Parent dashboard activation', 'Evidence review workflow in use', 'Mock drill sessions with vertical learning trail'],
  },
  {
    title: '4. Review & expand',
    duration: 'Week 6-8',
    items: ['Pilot readiness review with school leadership', 'Adoption metrics and teacher feedback analysis', 'Intervention workflow fine-tuning', 'Scale planning for next term'],
  },
]

export default function PilotPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="text-center">
        <p className="eyebrow">For school leaders</p>
        <h1 className="mx-auto mt-4 max-w-4xl text-balance text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">
          Run a school pilot with real classroom data in 8 weeks
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Skola&apos;s school pilot programme is designed to show measurable impact on learner progress visibility, teacher response time, and parent engagement — with minimal operational overhead.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <p className="text-4xl font-bold text-skola-700">8</p>
          <p className="mt-2 font-semibold">Week programme</p>
          <p className="mt-1 text-sm text-slate-600">From kick-off to readiness review</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <p className="text-4xl font-bold text-skola-700">2-4</p>
          <p className="mt-2 font-semibold">Pilot teachers</p>
          <p className="mt-1 text-sm text-slate-600">Start small, grow from classroom insights</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <p className="text-4xl font-bold text-skola-700">1</p>
          <p className="mt-2 font-semibold">Dedicated support contact</p>
          <p className="mt-1 text-sm text-slate-600">Weekly check-ins and rapid issue resolution</p>
        </div>
      </div>

      <div className="mt-20">
        <p className="eyebrow text-center">What happens in each phase</p>
        <h2 className="mt-3 text-center text-3xl font-bold tracking-tight">Pilot timeline</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {phases.map(p => (
            <div key={p.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold">{p.title}</p>
                <span className="rounded-full bg-skola-100 px-3 py-1 text-xs font-semibold text-skola-800">{p.duration}</span>
              </div>
              <ul className="mt-5 space-y-3">
                {p.items.map((item, i) => <li key={i} className="flex items-start gap-3 text-sm text-slate-700"><span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-skola-500" />{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 rounded-3xl bg-ink-950 p-10 text-white sm:p-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-skola-300">What you get at the end</p>
        <h2 className="mt-4 text-3xl font-bold">Pilot readiness score and adoption report</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
          A comprehensive report showing student adoption, evidence review rate, parent engagement, practice completion, and teacher actions — with recommendations for full-school rollout.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { label: 'Learner adoption', weight: '25%' },
            { label: 'Evidence reviewed', weight: '20%' },
            { label: 'Parent engagement', weight: '20%' },
            { label: 'Practice completion', weight: '20%' },
            { label: 'Teacher actions', weight: '15%' },
          ].map(m => (
            <div key={m.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <p className="text-lg font-bold text-white">{m.weight}</p>
              <p className="mt-1 text-xs text-slate-400">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Start your school pilot</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600">
          Book a focused walkthrough with our team. We&apos;ll show you the pilot dashboard, walk through the setup, and answer your questions.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/book-demo/" className="rounded-xl bg-skola-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-skola-700">Book a walkthrough</Link>
          <Link href="/demo/" className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-skola-300 hover:text-skola-700">Try the live demo</Link>
        </div>
      </div>
    </div>
  )
}
