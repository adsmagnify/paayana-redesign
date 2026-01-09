import Image from "next/image";
import Link from "next/link";

export default function WhyPayaana() {
  const features = [
    {
      image: "/personalized-packages.webp",
      title: "Personalized Packages",
      description: "Tailored travel experiences designed just for you",
      link: "/packages",
      color: "from-brand-purple to-brand-purple-dark",
    },
    {
      image: "/services-doorstep.webp",
      title: "Services at Your Doorstep",
      description: "Easy booking and reliable support, anytime, anywhere",
      link: "/services",
      color: "from-blue-400 to-indigo-500",
    },
    {
      image: "/pocketfriendly-prices.webp",
      title: "Pocket-Friendly Prices",
      description: "Affordable travel packages without compromising quality",
      link: "/packages",
      color: "from-orange-400 to-red-500",
    },
    {
      image: "/superfast-services.webp",
      title: "Super Fast Service",
      description: "Quick bookings and instant confirmations",
      link: "/services",
      color: "from-green-400 to-teal-500",
    },
    {
      image: "/school-college-trips.webp",
      title: "School/College Trips and Camps",
      description: "Educational and adventure trips for schools and colleges",
      link: "/services/school-college-trips",
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight">
            WHY PAYAANA?
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-16 h-0.5 bg-brand-purple"></div>
            <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
            <div className="w-16 h-0.5 bg-brand-purple"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="relative bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden h-full text-center">
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon/Image Container */}
                <div className="mx-auto mb-1 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  {feature.image ? (
                    <div
                      className={`relative mx-auto ${feature.title.includes("School")
                        ? "w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 mb-0"
                        : "w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44"
                        }`}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-40 h-40 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg
                        className="w-16 h-16 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <h3 className="text-base sm:text-lg md:text-2xl font-bold text-gray-900 -mt-4 md:-mt-7 mb-2 md:mb-3 group-hover:text-brand-purple transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed hidden sm:block">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
