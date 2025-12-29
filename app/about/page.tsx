"use client";

import Image from "next/image";
import Link from "next/link";
import StatsSection from "@/components/sections/StatsSection";

export default function AboutPage() {
  const services = [
    {
      title: "International Bookings",
      description:
        "Specialized expertise in worldwide travel destinations with the lowest airfares and exclusive deals",
      icon: "✈️",
      color: "from-blue-400 to-indigo-500",
    },
    {
      title: "Hotel Discounts",
      description:
        "Exclusive discounts on hotel bookings across the globe for comfortable stays",
      icon: "🏨",
      color: "from-orange-400 to-red-500",
    },
    {
      title: "Visa & Passport",
      description:
        "Complete guidance on passport issuance, renewal and all kinds of visa procedures",
      icon: "📄",
      color: "from-green-400 to-teal-500",
    },
    {
      title: "Handcrafted Experiences",
      description:
        "Personalized sightseeing itineraries tailored to your unique preferences",
      icon: "✨",
      color: "from-pink-400 to-rose-500",
    },
  ];

  const travelTypes = [
    { title: "Solo Backpacking", icon: "🎒" },
    { title: "Honeymoon Trips", icon: "💕" },
    { title: "Family Vacations", icon: "👨‍👩‍👧‍👦" },
    { title: "Business Travel", icon: "💼" },
    { title: "Group Tours", icon: "👥" },
    { title: "Adventure Trips", icon: "🏔️" },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section - Bigger with Video Background */}
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
            <source src="/about-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        {/* Content - No animations */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-payaana-pink to-yellow-400">
              Payaana
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Your trusted partner for pocket-friendly travel experiences
            worldwide. Based in Bangalore, serving travelers across the globe.
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

      {/* Our Story Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent" />

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=600&h=700&fit=crop"
                  alt="Travel memories"
                  width={600}
                  height={700}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl z-20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-payaana-pink to-rose-500 rounded-full flex items-center justify-center text-2xl">
                    🌟
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">2012</p>
                    <p className="text-gray-600 text-sm">Established</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-payaana-pink/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 left-1/2 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl" />
            </div>

            {/* Right - Content */}
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 bg-payaana-pink/10 rounded-full">
                <span className="text-payaana-pink font-semibold text-sm uppercase tracking-wider">
                  Who We Are
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Your Journey Begins
                <br />
                <span className="text-payaana-pink">With Our Story</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Ever since its launch in 2012, Payaana is a company that
                  strives to offer an array of excellent pocket-friendly
                  packages for worldwide travel destinations. Based out of
                  Bangalore, the company specializes in international bookings
                  catering to the needs of the customer.
                </p>
                <p>
                  It offers some of the lowest airfares, exclusive discounts on
                  hotel bookings, sightseeing itineraries, and handcrafted
                  experiences. Payaana also gives complete guidance on the
                  issuance of fresh or renewal of passports and all kinds of
                  visa procedures making it a one-stop service provider for all
                  travel requirements be it business, leisure, education, or
                  residence.
                </p>
                <p>
                  With its wide range of packages, Payaana has something for
                  everyone—solo backpacking trips, honeymooning, leisure travels
                  with friends or family, business trips, and everything else in
                  between. The overall booking experience with Payaana and its
                  well-trained team is completely hassle-free and adds value to
                  the product while providing the best to its customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Our Services Section */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title} className="group relative">
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden h-full text-center">
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <div
                    className={`w-20 h-20 mx-auto bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-payaana-pink transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gray-50 rounded-tl-full opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&h=1080&fit=crop"
            alt="Travel landscape"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-white font-semibold text-sm uppercase tracking-wider">
                Why Choose Payaana
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Hassle-Free Travel Experience
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-payaana-pink to-yellow-400">
                That Adds Value
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Pocket-Friendly
                </h3>
                <p className="text-white/70">
                  Excellent packages at the most competitive prices without
                  compromising quality
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  One-Stop Solution
                </h3>
                <p className="text-white/70">
                  From flights to visas, hotels to itineraries, all your travel
                  needs under one roof
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Expert Team
                </h3>
                <p className="text-white/70">
                  Well-trained professionals dedicated to making your journey
                  smooth and memorable
                </p>
              </div>
            </div>

            <div className="mt-12 flex items-center justify-center gap-4 text-white/60">
              <div className="w-12 h-0.5 bg-payaana-pink" />
              <span className="italic">
                &quot;The overall booking experience with Payaana is completely
                hassle-free&quot;
              </span>
              <div className="w-12 h-0.5 bg-payaana-pink" />
            </div>
          </div>
        </div>
      </section>

      {/* Travel Types Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-payaana-pink/10 rounded-full">
              <span className="text-payaana-pink font-semibold text-sm uppercase tracking-wider">
                Something For Everyone
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We Cater To All Travel Needs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From solo adventures to family vacations, we have the perfect
              package for every traveler
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {travelTypes.map((type) => (
              <div
                key={type.title}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {type.icon}
                </div>
                <h3 className="font-semibold text-gray-800 group-hover:text-payaana-pink transition-colors">
                  {type.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-payaana-pink via-rose-500 to-pink-600 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of happy travelers who have discovered the world with
            Payaana. Your dream destination awaits.
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
