import Image from "next/image";

export default function WhyPayaana() {
  const features = [
    {
      image: "/personalized-packages.webp",
      title: "Personalized Packages",
      description: "Tailored travel experiences designed just for you",
    },
    {
      image: "/services-doorstep.webp",
      title: "Services at Your Doorstep",
      description: "Easy booking and reliable support, anytime, anywhere",
    },
    {
      image: "/pocketfriendly-prices.webp",
      title: "Pocket-Friendly Prices",
      description: "Affordable travel packages without compromising quality",
    },
    {
      image: "/superfast-services.webp", // Placeholder for Super Fast Service
      title: "Super Fast Service",
      description: "Quick bookings and instant confirmations",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            WHY PAYAANA?
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-16 h-0.5 bg-payaana-pink"></div>
            <div className="w-2 h-2 rounded-full bg-payaana-pink"></div>
            <div className="w-16 h-0.5 bg-payaana-pink"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="group relative flex">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 w-full flex flex-col">
                {/* Icon/Image Container */}
                <div className="relative w-40 h-36 mx-auto mb-6 flex items-center justify-center flex-shrink-0 bg-transparent">
                  {feature.image ? (
                    <div className="relative w-full h-full bg-transparent">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-contain drop-shadow-lg"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg
                        className="w-12 h-12 text-white"
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

                {/* Content */}
                <div className="text-center flex-grow flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-payaana-pink transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-payaana-pink group-hover:w-16 transition-all duration-300 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
