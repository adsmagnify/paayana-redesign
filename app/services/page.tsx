import Link from "next/link";
import { Metadata } from "next";
import { getServices } from "@/lib/sanity/queries";
import { services as fallbackServices } from "@/lib/data/services";
import ServiceCard from "@/components/ui/ServiceCard";

export const metadata: Metadata = {
  title: "Our Services | Payaana",
  description:
    "Comprehensive travel solutions including air ticketing, visa assistance, passport services, travel insurance, holiday planning, and more. Your one-stop travel solution.",
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function ServicesPage() {
  // Fetch services from Sanity, fallback to static data
  let services = await getServices();

  // If no services from Sanity, use fallback
  if (!services || services.length === 0) {
    services = fallbackServices.map((service) => ({
      _id: service.slug,
      title: service.title,
      slug: { current: service.slug },
      shortDescription: service.shortDescription,
      fullDescription: service.fullDescription,
      icon: service.icon,
      colorGradient: service.colorGradient,
      category: service.category,
    }));
  }
  return (
    <main className="overflow-hidden">
      {/* Hero Section - Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/services-hero2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        {/* Content - No animations */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-payaana-pink to-yellow-400">
              Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Comprehensive travel solutions tailored to meet all your needs. From
            bookings to documentation, we've got you covered every step of the
            way.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-8 py-4 bg-payaana-pink text-white font-semibold rounded-full hover:bg-payaana-pink-dark transition-all duration-300 hover:shadow-lg hover:shadow-payaana-pink/30"
            >
              Explore Packages
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-payaana-pink/10 rounded-full">
              <span className="text-payaana-pink font-semibold text-sm uppercase tracking-wider">
                One-Stop Travel Solution
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete travel solutions for all your needs, including business,
              leisure, education, and residence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: any) => (
              <ServiceCard
                key={
                  service._id ||
                  (typeof service.slug === "string"
                    ? service.slug
                    : service.slug?.current) ||
                  ""
                }
                service={service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-payaana-pink via-rose-500 to-pink-600 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Let our expert team help you plan your perfect trip. Get in touch
            today and experience hassle-free travel planning.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-payaana-pink font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
            >
              Browse Packages
              <svg
                className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-transparent text-white font-bold text-lg rounded-full border-2 border-white hover:bg-white/10 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
