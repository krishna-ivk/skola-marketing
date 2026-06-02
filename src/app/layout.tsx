import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Skola — Competency Learning Network for Schools",
    template: "%s | Skola",
  },
  description:
    "Skola helps schools track every child's skills, misconceptions, evidence, projects, and next learning actions — across students, teachers, and parents. Competency-based learning for Indian schools.",
  openGraph: {
    title: "Skola — Competency Learning Network for Schools",
    description:
      "Make every child's learning visible through skill maps, adaptive practice, teacher insights, parent support, and evidence-based portfolios.",
    type: "website",
    locale: "en_IN",
  },
};

const navItems = [
  { label: "Product", href: "/product/" },
  { label: "For Schools", href: "/for-schools/" },
  { label: "Competency Maps", href: "/competency-maps/" },
  { label: "Book Demo", href: "/book-demo/" },
  { label: "Contact", href: "/contact/" },
];

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Product", href: "/product/" },
      { label: "For Schools", href: "/for-schools/" },
      { label: "Competency Maps", href: "/competency-maps/" },
      { label: "Book Demo", href: "/book-demo/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Competency Maps", href: "/competency-maps/" },
      { label: "Privacy", href: "/privacy/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/" },
      { label: "Contact", href: "/contact/" },
      { label: "Privacy", href: "/privacy/" },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b border-gray-200 bg-white">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <Link href="/" className="text-xl font-bold text-skola-700">
              Skola
            </Link>
            <div className="hidden md:flex md:items-center md:gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-skola-600"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/book-demo/"
                className="rounded-md bg-skola-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-skola-700"
              >
                Book a Demo
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-3">
              {footerColumns.map((col) => (
                <div key={col.title}>
                  <h3 className="text-sm font-semibold text-gray-900">{col.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-600 hover:text-skola-600"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
              &copy; 2026 Skola. A Skyforce product.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
