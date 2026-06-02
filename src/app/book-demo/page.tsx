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

          <form className="mx-auto mt-12 max-w-xl space-y-6">
            <div>
              <label htmlFor="school" className="block text-sm font-medium text-gray-900">School name</label>
              <input id="school" name="school" type="text" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-skola-500 focus:outline-none focus:ring-1 focus:ring-skola-500" placeholder="e.g. Delhi Public School" />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-900">City</label>
              <input id="city" name="city" type="text" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-skola-500 focus:outline-none focus:ring-1 focus:ring-skola-500" placeholder="e.g. Mumbai" />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-900">Your role</label>
              <select id="role" name="role" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-skola-500 focus:outline-none focus:ring-1 focus:ring-skola-500">
                <option value="">Select your role</option>
                <option value="principal">Principal</option>
                <option value="owner">School Owner</option>
                <option value="academic-head">Academic Head</option>
                <option value="teacher">Teacher</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="students" className="block text-sm font-medium text-gray-900">Number of students</label>
              <select id="students" name="students" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-skola-500 focus:outline-none focus:ring-1 focus:ring-skola-500">
                <option value="">Select range</option>
                <option value="<200">Less than 200</option>
                <option value="200-500">200 – 500</option>
                <option value="501-1000">501 – 1,000</option>
                <option value="1001-2000">1,001 – 2,000</option>
                <option value=">2000">More than 2,000</option>
              </select>
            </div>
            <div>
              <label htmlFor="board" className="block text-sm font-medium text-gray-900">Board</label>
              <select id="board" name="board" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-skola-500 focus:outline-none focus:ring-1 focus:ring-skola-500">
                <option value="">Select board</option>
                <option value="cbse">CBSE</option>
                <option value="state">State Board</option>
                <option value="icse">ICSE</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-900">Phone number</label>
              <input id="phone" name="phone" type="tel" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-skola-500 focus:outline-none focus:ring-1 focus:ring-skola-500" placeholder="e.g. 98765 43210" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email address</label>
              <input id="email" name="email" type="email" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-skola-500 focus:outline-none focus:ring-1 focus:ring-skola-500" placeholder="principal@school.edu" />
            </div>
            <div>
              <label htmlFor="goal" className="block text-sm font-medium text-gray-900">What are you trying to improve?</label>
              <textarea id="goal" rows={3} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-skola-500 focus:outline-none focus:ring-1 focus:ring-skola-500" placeholder="e.g. Better skill tracking, CBE alignment, parent engagement..." />
            </div>
            <button type="submit" className="w-full rounded-md bg-skola-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-skola-700 focus:outline-none focus:ring-2 focus:ring-skola-500 focus:ring-offset-2">
              Book a School Demo
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
