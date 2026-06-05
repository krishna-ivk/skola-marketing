import BookDemoForm from '../../components/BookDemoForm';

export default function BookDemoPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-skola-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-balance">
              Book a School Demo
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              See Skola in action. A 30-minute walkthrough tailored to your school&apos;s needs.
            </p>
          </div>
          <BookDemoForm />
        </div>
      </section>
    </div>
  );
}
