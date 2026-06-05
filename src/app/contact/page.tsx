import Link from "next/link"
import ContactForm from "../../components/ContactForm"

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
              Have questions? We&apos;d love to hear from you.
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

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
