import Link from "next/link"

export default function ContactPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-skola-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-balance">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Email</h2>
              <p className="mt-2 text-gray-600">
                <a href="mailto:hello@skola.skyforce.online" className="text-skola-600 hover:text-skola-700">
                  hello@skola.skyforce.online
                </a>
              </p>

              <h2 className="mt-8 text-lg font-semibold text-gray-900">Book a Demo</h2>
              <p className="mt-2 text-gray-600">
                Ready to see Skola in action?{" "}
                <Link href="/book-demo/" className="text-skola-600 hover:text-skola-700 underline">
                  Schedule a walkthrough
                </Link>
              </p>

              <h2 className="mt-8 text-lg font-semibold text-gray-900">Office</h2>
              <p className="mt-2 text-gray-600">
                Skyforce Technologies<br />
                Bangalore, India
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">Name</label>
                <input id="name" type="text" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-skola-500 focus:outline-none focus:ring-1 focus:ring-skola-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
                <input id="email" type="email" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-skola-500 focus:outline-none focus:ring-1 focus:ring-skola-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900">Message</label>
                <textarea id="message" rows={4} required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-skola-500 focus:outline-none focus:ring-1 focus:ring-skola-500" />
              </div>
              <button type="submit" className="w-full rounded-md bg-skola-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-skola-700 focus:outline-none focus:ring-2 focus:ring-skola-500 focus:ring-offset-2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
