export default function ContactPage() {
  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 text-gray-800">
        <p className="mb-2">
          Have questions, suggestions, or need support? The UnitConverters.net
          team is here to help! We value your feedback and strive to respond
          promptly to all inquiries.
        </p>
        <p className="mb-2">
          Email us at{' '}
          <a
            href="mailto:support@unitconverter.com"
            className="text-blue-600 underline"
          >
            support@unitconverter.com
          </a>{' '}
          and we will get back to you as soon as possible.
        </p>
        <p>
          Thank you for using UnitConverters.net. Your input helps us improve
          and provide the best conversion experience online.
        </p>
      </div>
    </main>
  );
}
