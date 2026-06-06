import Link from "next/link";

const outcomes = [
  { number: "01", title: "See the learning gap", description: "Move from chapter scores to a clear map of the exact competencies each learner has mastered or needs to revisit." },
  { number: "02", title: "Choose the next action", description: "Give teachers practical class and learner-level recommendations while there is still time to help." },
  { number: "03", title: "Build trusted evidence", description: "Connect practice, projects, rubrics, feedback, and certified skills in one durable learner record." },
];

const roles = [
  { role: "Teachers", result: "A calm daily cockpit", detail: "Review evidence, spot class-wide gaps, and plan targeted support without spreadsheet archaeology." },
  { role: "Learners", result: "Progress they can understand", detail: "Clear goals, meaningful practice, project evidence, and a growing passport of demonstrated skills." },
  { role: "School leaders", result: "Signals, not more reports", detail: "See cohort health, intervention follow-through, and curriculum coverage across the school." },
  { role: "Families", result: "Useful visibility", detail: "Understand what improved, where support is needed, and what to do next at home." },
];

function ProductPreview() {
  return (
    <div className="relative mx-auto max-w-5xl rounded-[2rem] border border-white/70 bg-white p-3 shadow-[var(--shadow-hero)]">
      <div className="overflow-hidden rounded-[1.4rem] border border-slate-200 bg-canvas">
        <div className="flex h-12 items-center justify-between border-b bg-white px-5"><div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-300"/><span className="h-2.5 w-2.5 rounded-full bg-warm"/><span className="h-2.5 w-2.5 rounded-full bg-skola-300"/></div><span className="text-xs font-medium text-slate-400">Teacher workspace</span></div>
        <div className="grid min-h-[360px] md:grid-cols-[210px_1fr]">
          <div className="hidden bg-ink-950 p-5 md:block"><div className="mb-7 flex items-center gap-2 text-sm font-bold text-white"><span className="grid h-7 w-7 place-items-center rounded-lg bg-skola-600">S</span>Skola</div>{["Today", "Class insights", "Evidence review", "Learners", "Reports"].map((item, i) => <div key={item} className={`mb-1 rounded-lg px-3 py-2 text-xs ${i === 0 ? "bg-white text-ink-950" : "text-slate-400"}`}>{item}</div>)}</div>
          <div className="p-5 sm:p-8">
            <p className="eyebrow">Class 8 science</p><h3 className="mt-2 text-2xl font-bold tracking-tight">Three actions deserve your attention</h3><p className="mt-2 text-sm text-slate-500">Prioritised from this week&apos;s practice and project evidence.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">{[{n:"12",l:"Evidence items to review",c:"bg-indigo-500"},{n:"8",l:"Learners need support",c:"bg-warm"},{n:"74%",l:"Competency coverage",c:"bg-skola-600"}].map(x=><div key={x.l} className="relative overflow-hidden rounded-2xl border bg-white p-4 shadow-sm"><span className={`absolute inset-y-0 left-0 w-1 ${x.c}`}/><p className="text-2xl font-bold">{x.n}</p><p className="mt-1 text-xs leading-5 text-slate-500">{x.l}</p></div>)}</div>
            <div className="mt-4 rounded-2xl border bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><div><p className="text-sm font-semibold">Revisit force and pressure</p><p className="mt-1 text-xs text-slate-500">6 learners share the same misconception</p></div><span className="rounded-full bg-skola-100 px-3 py-1 text-xs font-semibold text-skola-800">Plan support</span></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#d7f3e7_0,transparent_38%),radial-gradient(circle_at_90%_20%,#e8e7ff_0,transparent_28%),#fff]">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 text-center sm:pt-28 lg:px-8">
          <p className="eyebrow">Competency learning infrastructure for schools</p>
          <h1 className="mx-auto mt-5 max-w-5xl text-balance text-5xl font-bold tracking-[-0.04em] text-ink-950 sm:text-6xl lg:text-7xl">Make every learner&apos;s progress visible and actionable.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-8 text-slate-600">Skola connects curriculum, practice, project evidence, teacher judgement, and family support so schools can respond to learning needs earlier.</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"><Link href="/book-demo/" className="rounded-xl bg-skola-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-skola-700">Book a school walkthrough</Link><Link href="/product/" className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-skola-300 hover:text-skola-700">Explore the product</Link></div>
          <div className="mt-16"><ProductPreview /></div>
        </div>
      </section>

      <section className="border-y bg-white py-20"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="max-w-2xl"><p className="eyebrow">From signal to support</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A simpler operating rhythm for competency-based learning.</h2></div><div className="mt-12 grid gap-8 md:grid-cols-3">{outcomes.map(item=><article key={item.number} className="border-t border-slate-200 pt-6"><span className="text-sm font-bold text-skola-700">{item.number}</span><h3 className="mt-5 text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p></article>)}</div></div></section>

      <section className="bg-canvas py-24"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="text-center"><p className="eyebrow">One shared learning picture</p><h2 className="mx-auto mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">Purpose-built views for every person supporting a learner.</h2></div><div className="mt-12 grid gap-5 md:grid-cols-2">{roles.map(item=><article key={item.role} className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[var(--shadow-card)]"><p className="text-sm font-semibold text-skola-700">{item.role}</p><h3 className="mt-3 text-xl font-semibold">{item.result}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p></article>)}</div></div></section>

      <section className="bg-ink-950 py-20 text-white"><div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1fr_auto] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-skola-300">Trust is a product feature</p><h2 className="mt-3 text-3xl font-bold tracking-tight">Designed for responsible use of learner data.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">Clear roles, evidence provenance, review workflows, and privacy-conscious defaults help schools adopt competency learning with confidence.</p></div><Link href="/privacy/" className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold transition hover:bg-white hover:text-ink-950">Read our privacy approach</Link></div></section>

      <section className="bg-skola-600 py-20 text-white"><div className="mx-auto max-w-4xl px-6 text-center"><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">See how Skola fits your school&apos;s learning model.</h2><p className="mx-auto mt-4 max-w-2xl text-skola-100">A focused walkthrough for academic leaders, teachers, and implementation teams.</p><Link href="/book-demo/" className="mt-8 inline-flex rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-skola-800 shadow-sm transition hover:-translate-y-0.5">Book a demo</Link></div></section>
    </>
  );
}
