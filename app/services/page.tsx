import Link from "next/link";
import { Metadata } from "next";
import { getServices } from "@/lib/sanity/queries";
import ServiceCard from "@/components/ui/ServiceCard";

export const metadata: Metadata = {
  title: "Our Services | Payaana",
  description:
    "Comprehensive travel solutions including air ticketing, visa assistance, passport services, travel insurance, holiday planning, and more. Your one-stop travel solution.",
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function ServicesPage() {
  // Fetch services from Sanity
  const sanityServices = await getServices();

  // Add School/College Trips as a dummy service (not in Sanity)
  const schoolCollegeTripsService = {
    _id: "school-college-trips",
    title: "School/College Trips and Camps",
    slug: { current: "school-college-trips" },
    shortDescription:
      "Educational and adventure trips for schools and colleges",
    icon: "/school-college-trips.webp",
    iconEmoji: "🎓",
    colorGradient: "from-purple-400 to-pink-500",
  };

  const services = [...sanityServices, schoolCollegeTripsService];

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
            <source src="/services-hero.webm" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        {/* Content - No animations */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 tracking-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-light-pink">
              Services
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8 px-2">
            Comprehensive travel solutions tailored to meet all your needs. From
            bookings to documentation, we&apos;ve got you covered every step of
            the way.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              href="/packages"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-brand-purple text-white font-semibold rounded-full hover:bg-brand-purple-dark transition-all duration-300 hover:shadow-lg hover:shadow-brand-purple/30 text-sm sm:text-base"
            >
              Explore Packages
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
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
            <div className="inline-block mb-4 px-5 py-2 bg-brand-purple/10 border-2 border-brand-purple/30 rounded-full shadow-md">
              <span className="text-brand-purple font-semibold text-sm uppercase tracking-wider">
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
    </main>
  );
}
