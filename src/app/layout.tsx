import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Skola - Make every learner's progress visible", template: "%s | Skola" },
  description: "Competency-based learning infrastructure for Indian schools, connecting evidence, interventions, teachers, learners, and families.",
};

const navItems = [
  { label: "Product", href: "/product/" },
  { label: "For Schools", href: "/for-schools/" },
  { label: "Competency Maps", href: "/competency-maps/" },
  { label: "Contact", href: "/contact/" },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
          <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-skola-600 text-lg font-bold text-white">S</span>
              <span className="text-xl font-bold tracking-tight text-ink-950">Skola</span>
            </Link>
            <div className="hidden items-center gap-7 md:flex">
              {navItems.map((item) => <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-skola-700">{item.label}</Link>)}
            </div>
            <Link href="/book-demo/" className="rounded-xl bg-skola-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-skola-700">Book a demo</Link>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-ink-950 text-slate-300">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
            <div><div className="text-lg font-bold text-white">Skola</div><p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">A competency learning network that helps schools turn daily evidence into timely support.</p></div>
            <div><p className="text-sm font-semibold text-white">Explore</p><div className="mt-4 space-y-3 text-sm"><Link className="block hover:text-white" href="/product/">Product</Link><Link className="block hover:text-white" href="/for-schools/">For schools</Link><Link className="block hover:text-white" href="/competency-maps/">Competency maps</Link></div></div>
            <div><p className="text-sm font-semibold text-white">Trust</p><div className="mt-4 space-y-3 text-sm"><Link className="block hover:text-white" href="/privacy/">Privacy</Link><Link className="block hover:text-white" href="/contact/">Contact</Link><Link className="block hover:text-white" href="/book-demo/">Book a demo</Link></div></div>
          </div>
          <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-slate-500">© 2026 Skola. A Skyforce product.</div>
        </footer>
      </body>
    </html>
  );
}
