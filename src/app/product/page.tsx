import Link from "next/link"

const modules = [
  {
    title: "Skill Maps",
    description: "Circular heatmaps that give every teacher, student, and parent a live view of competency across every skill.",
    features: ["Class-level heatmap", "Student-level skill passport", "Skill gap identification", "Real-time mastery tracking"],
  },
  {
    title: "Adaptive QA Bridge",
    description: "Smart assessment that detects weak concepts and recommends targeted reinforcement activities.",
    features: ["Adaptive difficulty", "Concept-level diagnostics", "Spaced repetition", "Auto-generated practice sets"],
  },
  {
    title: "Teacher Cockpit",
    description: "A command center for teachers to review evidence, group students by skill level, and assign interventions.",
    features: ["Evidence review queue", "Student grouping by mastery", "Intervention planning", "Rubric-based assessment"],
  },
  {
    title: "Parent Companion",
    description: "Simple weekly reports and home activity guides that help parents support their child's learning journey.",
    features: ["Weekly learning summaries", "Home activity recommendations", "Skill progress notifications", "Parent-school communication"],
  },
  {
    title: "Student Skill Passport",
    description: "A gamified portfolio where students earn badges, complete missions, and showcase their evidence of learning.",
    features: ["Badge achievements", "Mission-based learning", "Progress tracking", "Portfolio of evidence"],
  },
  {
    title: "STEM Studio",
    description: "A hands-on project lab with rubrics, safety guidelines, and submission workflows for practical assessments.",
    features: ["Project templates", "Rubric-based grading", "Submission management", "Lab safety guides"],
  },
  {
    title: "Evidence Portfolio",
    description: "A rich portfolio supporting photo, video, audio, handwritten, and project-based evidence with teacher review.",
    features: ["Multi-format evidence", "Teacher review workflow", "Skill-tagged submissions", "Longitudinal growth tracking"],
  },
]

export default function ProductPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-skola-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-balance">
              The Skola Product Suite
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Seven interconnected modules that transform how schools track, assess, and develop student competency.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl space-y-12">
            {modules.map((mod, i) => (
              <div key={mod.title} className="rounded-2xl border border-gray-200 p-8">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-skola-100 text-lg font-bold text-skola-700">
                    {i + 1}
                  </span>
                  <h2 className="text-2xl font-semibold text-gray-900">{mod.title}</h2>
                </div>
                <p className="mt-4 text-gray-600">{mod.description}</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {mod.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-skola-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-skola-600 py-24">
        <div className="mx-auto max-w-2xl text-center px-6">
          <h2 className="text-3xl font-bold text-white sm:text-4xl text-balance">
            See Skola in Action
          </h2>
          <p className="mt-4 text-lg text-skola-100">
            Book a 30-minute demo tailored to your school&apos;s needs.
          </p>
          <Link
            href="/book-demo/"
            className="mt-8 inline-block rounded-md bg-white px-8 py-3 text-sm font-semibold text-skola-600 shadow-sm hover:bg-skola-50"
          >
            Book a School Demo
          </Link>
        </div>
      </section>
    </div>
  )
}
