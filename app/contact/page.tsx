import ContactForm from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Contact Us</h1>
          <p className="text-gray-600 text-lg">
            Have questions? We&apos;d love to hear from you. Send us a message
            and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Get in Touch
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p>info@payaana.in</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p>+91 XXX XXX XXXX</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p>
                  Payaana Travels
                  <br />
                  Your City, State
                  <br />
                  India
                </p>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
