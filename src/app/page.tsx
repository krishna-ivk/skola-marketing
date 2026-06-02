import Link from "next/link";

const benefits = [
  {
    title: "Identify Every Learning Gap",
    description:
      "Report cards show grades, not skills. Skola maps every child's competencies across the curriculum so teachers know exactly where each student needs support.",
  },
  {
    title: "Adaptive Practice That Works",
    description:
      "Students get personalised drill questions. Wrong answers trigger immediate reinforcement. Mastery is measured at the micro-skill level, not by exam scores.",
  },
  {
    title: "Teacher Heatmaps & Insights",
    description:
      "See class-wide competency gaps at a glance. Filter by subject, class, or chapter. Know which skills need whole-class remediation vs. individual intervention.",
  },
  {
    title: "Parent Visibility, Not Surprises",
    description:
      "Parents receive weekly reports showing practice sessions, accuracy trends, skills improved, and suggested focus areas. No more report-card surprises.",
  },
  {
    title: "Evidence-Based Portfolios",
    description:
      "Students submit project evidence — photos, reflections, peer reviews. Teachers assess against rubrics. Skills are certified in a verifiable passport.",
  },
  {
    title: "STEM Studio & Projects",
    description:
      "Hands-on STEM activities mapped to competencies. Students build circuits, design experiments, and document their work as part of their skill portfolio.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-skola-50 via-white to-blue-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Make Learning Visible
              <br />
              <span className="text-skola-600">Beyond Marks</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Skola helps schools track every child&apos;s skills, misconceptions, evidence, and
              next learning actions — across students, teachers, and parents.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href="/book-demo/"
                className="rounded-md bg-skola-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-skola-700"
              >
                Book a Demo
              </Link>
              <Link
                href="/for-schools/"
                className="rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 shadow-sm hover:bg-gray-50"
              >
                For Schools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Why Indian Schools Choose Skola
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From CBSE to state boards, schools use Skola to move beyond marks and build visible
              competency for every child.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-900">{b.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-skola-700 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to make learning visible in your school?
          </h2>
          <p className="mt-4 text-lg text-skola-100">
            Join schools across India that are using Skola to track competencies, support teachers,
            and engage parents.
          </p>
          <div className="mt-10">
            <Link
              href="/book-demo/"
              className="rounded-md bg-white px-8 py-4 text-base font-semibold text-skola-700 shadow-sm hover:bg-skola-50"
            >
              Book a Free Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
