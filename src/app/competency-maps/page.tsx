import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Grade",
    description: "Select a grade (e.g., Grade 8)",
  },
  {
    number: "02",
    title: "Subject",
    description: "Choose subject (e.g., Mathematics)",
  },
  {
    number: "03",
    title: "Competency",
    description: "View competencies (e.g., Algebra, Geometry)",
  },
  {
    number: "04",
    title: "Skill",
    description: "Drill into individual skills with mastery levels",
  },
];

const masteryLevels = [
  {
    color: "bg-green-500",
    label: "Mastered",
    description: "Student demonstrates consistent proficiency",
  },
  {
    color: "bg-yellow-400",
    label: "Developing",
    description: "Student is progressing but not yet consistent",
  },
  {
    color: "bg-orange-500",
    label: "Struggling",
    description: "Student needs targeted intervention",
  },
  {
    color: "bg-red-500",
    label: "Critical",
    description: "Student requires immediate support",
  },
  {
    color: "bg-gray-300",
    label: "Not Attempted",
    description: "Skill has not been assessed yet",
  },
];

const teacherUseCases = [
  {
    title: "Class Overview",
    description:
      "See which skills the entire class has mastered vs. struggling with",
  },
  {
    title: "Individual View",
    description: "Drill into any student's skill profile",
  },
  {
    title: "Intervention Planning",
    description:
      "Group students by skill gaps and assign targeted activities",
  },
];

const studentUseCases = [
  {
    title: "Student Passport",
    description:
      "Students see their own skill rings with badges and progress",
  },
  {
    title: "Parent Report",
    description:
      "Parents receive weekly skill-level updates with recommended home activities",
  },
];

export default function CompetencyMapsPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-skola-50 to-white px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            See Every Child&apos;s Skill Journey at a Glance
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Circular heatmaps show competency from grade level to individual
            skill — giving teachers, students, and parents a clear, actionable
            view of learning.
          </p>
          <div className="mt-10">
            <Link
              href="/book-demo/"
              className="rounded-lg bg-skola-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-skola-700"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How Competency Maps Work
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-skola-600 text-lg font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Visual Mastery at Every Level
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-gray-600">
            Skola&apos;s circular heatmap shows mastery in concentric rings —
            from broad competencies at the outer ring to specific skills at the
            center. Colors indicate mastery level: green (mastered), yellow
            (developing), orange (struggling), red (critical), gray (not
            attempted).
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {masteryLevels.map((level) => (
              <div
                key={level.label}
                className="rounded-xl border border-gray-200 bg-white p-5 text-center"
              >
                <div
                  className={`mx-auto h-6 w-6 rounded-full ${level.color}`}
                />
                <h3 className="mt-3 text-sm font-semibold text-gray-900">
                  {level.label}
                </h3>
                <p className="mt-1 text-xs text-gray-600">
                  {level.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Teachers See
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {teacherUseCases.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-xl border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {useCase.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Students and Parents See
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {studentUseCases.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {useCase.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-skola-600 px-6 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Make Every Child&apos;s Learning Visible
          </h2>
          <div className="mt-10">
            <Link
              href="/book-demo/"
              className="rounded-lg bg-white px-8 py-3 text-base font-semibold text-skola-600 shadow-sm hover:bg-gray-100"
            >
              Book a School Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
