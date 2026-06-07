import Link from "next/link";
import { CbseFeatureGrid } from "../components/cbse-feature-grid";
import { CbseStakeholderSection } from "../components/cbse-stakeholder-section";
import { AnimatedHeroCommandCenter } from "../components/motion/AnimatedHeroCommandCenter";
import { StakeholderFlow } from "../components/motion/StakeholderFlow";
import { ExamReadinessTimeline } from "../components/motion/ExamReadinessTimeline";
import { SkillLabPulse } from "../components/motion/SkillLabPulse";
import { GovernanceFlow } from "../components/motion/GovernanceFlow";
import { LiveOperationsTicker } from "../components/motion/LiveOperationsTicker";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#d7f3e7_0,transparent_38%),radial-gradient(circle_at_90%_20%,#e8e7ff_0,transparent_28%),#fff]">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 sm:pt-28 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="eyebrow">CBSE operating layer for schools</p>
              <h1 className="mt-5 text-balance text-5xl font-bold tracking-[-0.04em] text-ink-950 sm:text-6xl lg:text-7xl">
                Skola OS for CBSE Schools
              </h1>
              <p className="mt-6 max-w-xl text-balance text-lg leading-8 text-slate-600">
                Run academics, exams, compliance, skill education, parent communication, and governance from one CBSE-aware operating layer.
              </p>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                From Pariksha Sangam readiness to Composite Skill Lab operations — Skola helps every stakeholder work from the same trusted school system.
              </p>
              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
                <Link href="/book-demo/" className="rounded-xl bg-skola-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-skola-700">Book a school walkthrough</Link>
                <Link href="/product/" className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-skola-300 hover:text-skola-700">Explore the product</Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <AnimatedHeroCommandCenter />
            </div>
          </div>
        </div>
      </section>

      <LiveOperationsTicker />

      <CbseFeatureGrid />

      <StakeholderFlow />

      <ExamReadinessTimeline />

      <SkillLabPulse />

      <GovernanceFlow />

      <CbseStakeholderSection />

      <section className="bg-skola-600 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Translate CBSE compliance into daily school execution.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-skola-100">See how Skola maps to Pariksha Sangam, SARAS, OASIS, Composite Skill Labs, NCrF, and more.</p>
          <Link href="/book-demo/" className="mt-8 inline-flex rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-skola-800 shadow-sm transition hover:-translate-y-0.5">Book a demo</Link>
        </div>
      </section>
    </>
  );
}
