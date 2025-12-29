import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, getServices } from "@/lib/sanity/queries";
import { services as fallbackServices } from "@/lib/data/services";
import ServiceCard from "@/components/ui/ServiceCard";

export async function generateStaticParams() {
  // Try to get services from Sanity first
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

  return services.map((service) => ({
    slug:
      typeof service.slug === "string"
        ? service.slug
        : service.slug?.current || "",
  }));
}

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Payaana",
    };
  }

  return {
    title: `${service.title} | Payaana Services`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // Try to get service from Sanity
  let service = await getServiceBySlug(slug);
  
  // If not found in Sanity, try fallback data
  if (!service) {
    const fallbackService = fallbackServices.find(
      (s) => s.slug === slug
    );
    if (fallbackService) {
      service = {
        _id: fallbackService.slug,
        title: fallbackService.title,
        slug: { current: fallbackService.slug },
        shortDescription: fallbackService.shortDescription,
        fullDescription: fallbackService.fullDescription,
        icon: fallbackService.icon,
        colorGradient: fallbackService.colorGradient,
        category: fallbackService.category,
      };
    }
  }

  if (!service) {
    notFound();
  }

  // Get related services
  let allServices = await getServices();
  if (!allServices || allServices.length === 0) {
    allServices = fallbackServices.map((s) => ({
      _id: s.slug,
      title: s.title,
      slug: { current: s.slug },
      shortDescription: s.shortDescription,
      fullDescription: s.fullDescription,
      icon: s.icon,
      colorGradient: s.colorGradient,
      category: s.category,
    }));
  }

  const relatedServices = allServices
    .filter(
      (s) =>
        (typeof s.slug === "string"
          ? s.slug
          : s.slug?.current || "") !== slug
    )
    .slice(0, 3);

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-payaana-pink rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Service Icon */}
            <div
              className={`w-32 h-32 mx-auto mb-8 bg-gradient-to-br ${service.colorGradient || "from-blue-400 to-indigo-500"} rounded-3xl flex items-center justify-center text-6xl shadow-2xl transform hover:scale-110 transition-transform duration-500`}
            >
              {service.icon || "✨"}
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              {service.shortDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-payaana-pink text-white font-semibold rounded-full hover:bg-payaana-pink-dark transition-all duration-300 hover:shadow-lg hover:shadow-payaana-pink/30"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-4 px-4 py-1.5 bg-payaana-pink/10 rounded-full">
              <span className="text-payaana-pink font-semibold text-sm uppercase tracking-wider">
                {service.category || "Service Details"}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              About {service.title}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                {service.fullDescription || service.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      {relatedServices.length > 0 && (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1.5 bg-payaana-pink/10 rounded-full">
                <span className="text-payaana-pink font-semibold text-sm uppercase tracking-wider">
                  Explore More
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Related Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover other services that might interest you
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedServices.map((relatedService) => (
                <ServiceCard
                  key={relatedService.slug}
                  service={relatedService}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-payaana-pink via-rose-500 to-pink-600 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Contact our expert team today and let us help you with your travel
            needs. We're here to make your journey smooth and hassle-free.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-payaana-pink font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
            >
              Contact Us
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
              href="/packages"
              className="inline-flex items-center gap-2 px-10 py-5 bg-transparent text-white font-bold text-lg rounded-full border-2 border-white hover:bg-white/10 transition-all duration-300"
            >
              Browse Packages
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

