import Link from "next/link";
import Image from "next/image";
import { getServices, getPackagesByCategory } from "@/lib/sanity/queries";

export const revalidate = 60; // Revalidate every 60 seconds

interface Service {
  _id: string;
  title: string;
  slug: { current: string };
}

interface Package {
  _id: string;
  title: string;
  slug: { current: string };
}

export default async function Footer() {
  // Fetch services and packages dynamically from Sanity
  const [services, internationalPackages, domesticPackages] = await Promise.all(
    [
      getServices(),
      getPackagesByCategory("international"),
      getPackagesByCategory("domestic"),
    ]
  );

  // Limit packages to show (e.g., first 6 of each category)
  const featuredInternational = internationalPackages.slice(0, 6);
  const featuredDomestic = domesticPackages.slice(0, 6);

  return (
    <footer className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&h=1080&fit=crop"
          alt="Travel landscape"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/85" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12 md:py-20">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-20 mb-12 md:mb-16">
            {/* Logo & About Section */}
            <div>
              <Link href="/" className="inline-block mb-6">
                <div className="relative w-44 h-14">
                  <Image
                    src="/payaana-logo.webp"
                    alt="Payaana Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Your trusted partner in creating unforgettable travel
                experiences worldwide.
              </p>
              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:pravita@payaana.in"
                  className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-purple/20 flex items-center justify-center group-hover:bg-brand-purple/30 transition-colors flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-brand-purple"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">pravita@payaana.in</span>
                </a>
                <a
                  href="tel:+919632203005"
                  className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-purple/20 flex items-center justify-center group-hover:bg-brand-purple/30 transition-colors flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-brand-purple"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="text-sm">+91-9632203005</span>
                </a>
                <div className="flex items-start gap-3 text-gray-300">
                  <div className="w-10 h-10 rounded-lg bg-brand-purple/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-brand-purple"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm leading-relaxed">
                    50-12/1 Vishnu Vardhan Main Road (Uttarahalli Main Road),
                    Opp DR Complex Subramanyapura Post Uttarahalli Bengaluru -
                    560061
                  </span>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-brand-purple to-light-pink rounded-full"></span>
                Services
              </h3>
              <ul className="space-y-2.5">
                {services.length > 0 ? (
                  <>
                    {services.map((service: Service) => (
                      <li key={service._id}>
                        <Link
                          href={`/services/${service.slug.current}`}
                          className="text-gray-300 hover:text-white text-sm transition-all duration-200 flex items-center gap-2 group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-purple opacity-0 group-hover:opacity-100 transition-opacity"></span>
                          <span className="group-hover:translate-x-1 transition-transform inline-block">
                            {service.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/services/school-college-trips"
                        className="text-gray-300 hover:text-white text-sm transition-all duration-200 flex items-center gap-2 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-purple opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        <span className="group-hover:translate-x-1 transition-transform inline-block">
                          School/College Trips and Camps
                        </span>
                      </Link>
                    </li>
                  </>
                ) : (
                  <li className="text-gray-400 text-sm">
                    No services available
                  </li>
                )}
              </ul>
            </div>

            {/* International Packages */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-brand-purple to-light-pink rounded-full"></span>
                International Packages
              </h3>
              <ul className="space-y-2">
                {featuredInternational.length > 0 ? (
                  featuredInternational.map((pkg: Package) => (
                    <li key={pkg._id}>
                      <Link
                        href={`/packages/${pkg.slug.current}`}
                        className="text-gray-300 hover:text-white text-sm transition-colors line-clamp-1"
                      >
                        {pkg.title}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-400 text-sm">No packages</li>
                )}
                {internationalPackages.length > 6 && (
                  <li>
                    <Link
                      href="/packages?category=international"
                      className="text-brand-purple hover:text-light-pink text-sm font-medium transition-colors"
                    >
                      View All →
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            {/* Domestic Packages */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-brand-purple to-light-pink rounded-full"></span>
                Domestic Packages
              </h3>
              <ul className="space-y-2">
                {featuredDomestic.length > 0 ? (
                  featuredDomestic.map((pkg: Package) => (
                    <li key={pkg._id}>
                      <Link
                        href={`/packages/${pkg.slug.current}`}
                        className="text-gray-300 hover:text-white text-sm transition-colors line-clamp-1"
                      >
                        {pkg.title}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-400 text-sm">No packages</li>
                )}
                {domesticPackages.length > 6 && (
                  <li>
                    <Link
                      href="/packages?category=domestic"
                      className="text-brand-purple hover:text-light-pink text-sm font-medium transition-colors"
                    >
                      View All →
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Payaana. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm">
                Designed by{" "}
                <a
                  href="https://adsmagnify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text- hover:text-payaana-pink transition-colors underline"
                >
                  adsmagnify.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
