import Link from "next/link";

const whyCards = [
  {
    emoji: "✓",
    title: "CBSE CBE Ready",
    description:
      "Full alignment with CBSE Competency-Based Education guidelines",
  },
  {
    emoji: "⚡",
    title: "30-Minute Teacher Onboarding",
    description:
      "Teachers can start using Skola within a single training session",
  },
  {
    emoji: "📱",
    title: "Zero Infrastructure Required",
    description:
      "Works on any device with a browser; no installations or hardware",
  },
  {
    emoji: "🎯",
    title: "Pilot-First Approach",
    description:
      "Start with one class or one subject; expand based on results",
  },
];

const steps = [
  {
    number: "01",
    title: "Pilot Setup",
    description:
      "Choose a class and subject for the pilot (1 week)",
  },
  {
    number: "02",
    title: "Teacher Training",
    description: "30-minute teacher onboarding session",
  },
  {
    number: "03",
    title: "Student Onboarding",
    description: "Students start missions and skill practice",
  },
  {
    number: "04",
    title: "Review & Expand",
    description:
      "Review heatmap data with academic team; expand to more classes",
  },
];

const tiers = [
  {
    name: "Pilot",
    price: "Free",
    description: "For schools exploring competency-based learning",
    features: [
      "1 class",
      "1 subject",
      "Up to 40 students",
      "3 months free",
    ],
    cta: "Start Free Pilot",
    highlighted: false,
  },
  {
    name: "School",
    price: "₹X per student/yr",
    description: "For schools ready for full adoption",
    features: [
      "All modules",
      "Full school access",
      "Priority support",
      "Dedicated account manager",
    ],
    cta: "Contact for Quote",
    highlighted: true,
  },
  {
    name: "Trust",
    price: "Custom",
    description: "For multi-school groups and chains",
    features: [
      "Multi-school group",
      "Dedicated support",
      "Custom integrations",
      "Bulk pricing",
    ],
    cta: "Talk to Us",
    highlighted: false,
  },
];

const faqs = [
  {
    q: "How long does it take to implement Skola?",
    a: "Pilot setup takes about 1 week. Teachers can start using Skola after a 30-minute training session.",
  },
  {
    q: "Does Skola work with our existing curriculum?",
    a: "Yes. Skola's skill maps align with CBSE, ICSE, and state board curricula. We map your existing curriculum to competency frameworks.",
  },
  {
    q: "What devices do students need?",
    a: "Skola works on any device with a modern browser — desktops, laptops, tablets, and smartphones. No software installation required.",
  },
  {
    q: "How does Skola handle data privacy?",
    a: "Skola follows Indian data protection guidelines. Student data is encrypted, role-accessible, and never shared with third parties.",
  },
];

export default function ForSchoolsPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-skola-50 to-white px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Transform Your School with Competency-Based Learning
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Skola helps schools align with CBSE CBE guidelines while giving
            every teacher, parent, and student a clear view of skill
            development.
          </p>
          <div className="mt-10">
            <Link
              href="/book-demo/"
              className="rounded-lg bg-skola-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-skola-700"
            >
              Book a School Demo
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Indian Schools Are Moving to Skola
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-gray-200 p-6 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-skola-100 text-xl text-skola-600">
                  {card.emoji}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From Pilot to School-Wide Adoption
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

      <section className="bg-white px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl border p-8 ${
                  tier.highlighted
                    ? "border-skola-600 ring-2 ring-skola-600"
                    : "border-gray-200"
                }`}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {tier.name}
                </h3>
                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {tier.price}
                </p>
                <p className="mt-2 text-sm text-gray-600">{tier.description}</p>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-skola-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/book-demo/"
                  className={`mt-8 block w-full rounded-lg px-4 py-2.5 text-center text-sm font-semibold ${
                    tier.highlighted
                      ? "bg-skola-600 text-white hover:bg-skola-700"
                      : "border border-skola-600 text-skola-600 hover:bg-skola-50"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <h3 className="text-base font-semibold text-gray-900">
                  {faq.q}
                </h3>
                <p className="mt-3 text-sm text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-skola-600 px-6 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Start Your Skola Pilot Today
          </h2>
          <div className="mt-10">
            <Link
              href="/book-demo/"
              className="rounded-lg bg-white px-8 py-3 text-base font-semibold text-skola-600 shadow-sm hover:bg-gray-100"
            >
              Book a Free Pilot
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
