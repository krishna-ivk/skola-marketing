import Link from 'next/link'

const personas = [
  {
    id: 'principal',
    name: 'School Principal',
    title: 'School Pilot Command Centre',
    description: 'See school health, class adoption, teacher engagement, learning risk summary, and pilot readiness score.',
    features: ['Pilot readiness dashboard', 'School-wide adoption metrics', 'Class-wise health comparison', 'Risk escalation workflow'],
    ctaLabel: 'View principal demo',
    href: '/demo/principal',
  },
  {
    id: 'teacher',
    name: 'Teacher',
    title: 'Classroom Cockpit',
    description: 'Identify struggling students, spot misconception clusters, assign interventions, and review evidence.',
    features: ['Students needing attention', 'Misconception clusters', 'Intervention suggestions', 'Evidence review queue'],
    ctaLabel: 'View teacher demo',
    href: '/demo/teacher',
  },
  {
    id: 'student',
    name: 'Student',
    title: 'Today\'s Learning Mission',
    description: 'See your daily mission, continue practice, repair mistakes, and track passport progress.',
    features: ['Personalised learning mission', 'Mock drill with learning trail', 'Passport progress tracking', 'Streak and daily goals'],
    ctaLabel: 'View student demo',
    href: '/demo/student',
  },
  {
    id: 'parent',
    name: 'Parent / Guardian',
    title: 'Child Progress & Home Support',
    description: 'Understand what your child is learning, where they need help, and how to support them at home.',
    features: ['Weekly activity summary', 'Strengths and focus areas', 'Home support suggestions', 'Attendance and effort signals'],
    ctaLabel: 'View parent demo',
    href: '/demo/parent',
  },
]

export default function DemoPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="text-center">
        <p className="eyebrow">School Pilot Demo</p>
        <h1 className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">
          Experience Skola as your role
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Choose a persona below to explore Skola with realistic pilot school data.
          No account needed — each demo is pre-seeded with Sri Vidya Pilot School data.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {personas.map(p => (
          <Link key={p.id} href={p.href} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-skola-300 hover:shadow-md">
            <p className="text-sm font-semibold text-skola-700">{p.name}</p>
            <h2 className="mt-2 text-xl font-bold text-ink-950">{p.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{p.description}</p>
            <ul className="mt-4 space-y-2">
              {p.features.map(f => <li key={f} className="flex items-center gap-2 text-sm text-slate-600"><span className="h-1.5 w-1.5 rounded-full bg-skola-500" />{f}</li>)}
            </ul>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-skola-700 transition-colors group-hover:text-skola-900">
              {p.ctaLabel} →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-slate-200 bg-canvas p-8 text-center">
        <p className="text-sm font-semibold text-slate-500">All demo data is synthetic and pre-seeded</p>
        <p className="mt-2 text-sm text-slate-500">No real student data is used. The Sri Vidya Pilot School is a fictional CBSE school created for demonstration purposes.</p>
      </div>
    </div>
  )
}
