import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-skola-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-balance">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-gray-500">Last updated: June 2026</p>

          <div className="mt-12 space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-900">1. Introduction</h2>
              <p className="mt-2">
                Skola ("we," "our," or "us") is committed to protecting the privacy of students, parents, teachers, and schools using our platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">2. Information We Collect</h2>
              <p className="mt-2">We collect information that you provide directly to us:</p>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>School name, contact details, and demographic information</li>
                <li>Student names, grade levels, and learning progress data</li>
                <li>Teacher names, subjects, and classroom assignments</li>
                <li>Parent names, contact information, and preferences</li>
                <li>Learning artifacts including assignments, assessments, projects, and skill evidence</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">3. How We Use Information</h2>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>To provide and maintain the Skola learning platform</li>
                <li>To generate skill maps, heatmaps, and learning insights</li>
                <li>To communicate with schools, teachers, and parents about platform updates</li>
                <li>To improve our platform based on usage patterns</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">4. Data Protection</h2>
              <p className="mt-2">
                We implement appropriate technical and organizational measures to protect personal data against unauthorized access, alteration, disclosure, or destruction. All data is encrypted in transit and at rest. Access is role-based and strictly controlled.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">5. Data Retention</h2>
              <p className="mt-2">
                We retain personal data for as long as the school maintains an active account. Upon request, we will delete or anonymize student data within 30 days. School administrators can export their data at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">6. Third-Party Sharing</h2>
              <p className="mt-2">
                We do not sell personal data. We do not share student data with third parties for advertising or marketing purposes. We may share data with service providers who help us operate the platform (e.g., cloud hosting), under strict data processing agreements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">7. Contact</h2>
              <p className="mt-2">
                For privacy-related inquiries, contact us at{" "}
                <a href="mailto:privacy@skola.skyforce.online" className="text-skola-600 hover:text-skola-700 underline">
                  privacy@skola.skyforce.online
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
