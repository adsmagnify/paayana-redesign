import { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Payaana",
  description:
    "Get in touch with Payaana Travels. We're here to help you plan your perfect journey. Contact us for inquiries, bookings, and travel assistance.",
};

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-purple rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-light-pink rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary-green rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 tracking-tight">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-light-pink">
              Touch
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed px-2">
            Have questions? We&apos;d love to hear from you. Send us a message
            and we&apos;ll respond as soon as possible.
          </p>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
          <svg
            className="w-full h-12 md:h-20 block"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Contact Content - Equal Height Columns */}
      <section className="py-12 md:py-20 bg-white -mt-1">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
                    Let&apos;s Start a Conversation
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We&apos;re here to help you plan your perfect journey. Reach
                    out to us through any of the following channels, and our
                    team will get back to you promptly.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-5">
                  <div className="bg-gradient-to-br from-brand-purple/5 to-brand-purple/10 rounded-2xl p-6 border border-brand-purple/20 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-brand-purple rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-7 h-7 text-white"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:pravita@payaana.in"
                          className="text-brand-purple hover:text-brand-purple/80 transition-colors text-lg"
                        >
                          pravita@payaana.in
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-secondary-green/5 to-secondary-green/10 rounded-2xl p-6 border border-secondary-green/20 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-secondary-green rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-7 h-7 text-white"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          Phone
                        </h3>
                        <a
                          href="tel:+91-9632203005"
                          className="text-secondary-green hover:text-secondary-green/80 transition-colors text-lg"
                        >
                          +91 9632203005
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-7 h-7 text-white"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          Address
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          50-12/1 Vishnu Vardhan Main Road (Uttarahalli Main
                          Road), Opp DR Complex Subramanyapura Post Uttarahalli
                          Bengaluru - 560061, Karnataka, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-purple/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Office Hours</p>
                      <p className="font-bold text-gray-900 text-lg">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-200 flex flex-col h-full">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we&apos;ll get back to you as
                    soon as possible.
                  </p>
                </div>
                <div className="flex-grow">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-block mb-4 px-5 py-2 bg-brand-purple/10 border-2 border-brand-purple/30 rounded-full shadow-md">
                <span className="text-brand-purple font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Our Location
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Visit Us at Our Office
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Located in the heart of Bengaluru, our office is easily accessible.
                Drop by to discuss your travel plans in person!
              </p>
            </div>

            {/* Map Container */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl border border-gray-200">
              <div className="hidden sm:block absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-purple rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">PAYAANA</h3>
                    <p className="text-sm text-gray-600 leading-tight">
                      Vishnu Vardhan Main Road, Uttarahalli, Bengaluru
                    </p>
                  </div>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0074723256473!2d77.5442391!3d12.9074272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fd9db2b3a97%3A0xdae1ceff58f1b7c4!2sPAYAANA!5e0!3m2!1sen!2sin!4v1704825600000!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>

            {/* Get Directions Button */}
            <div className="text-center mt-8">
              <a
                href="https://www.google.com/maps/dir//PAYAANA+50-12%2F1+Vishnu+Vardhan+Main+Road+(Uttarahalli+Main+Road),+Opp+DR+Complex+Subramanyapura+Post,+Uttarahalli+Hobli+Bengaluru,+Karnataka+560061/@12.9074272,77.546814,13z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-purple hover:bg-brand-purple-dark text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
