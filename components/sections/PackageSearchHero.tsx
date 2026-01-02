"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PackageSearchHero() {
  const router = useRouter();
  const [searchData, setSearchData] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    participants: "",
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to packages with search params
    const params = new URLSearchParams();
    if (searchData.location) params.set("search", searchData.location);
    router.push(`/packages?${params.toString()}`);
  };

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/home-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center pt-24">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto text-center mb-16">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              Discover Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-payaana-pink to-yellow-400">
                Dream
              </span>
              <br />
              Travel Package
            </h1>

            {/* Sub-headline */}
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Explore curated travel experiences from around the world, tailored to create unforgettable memories
            </p>
          </div>
        </div>

        {/* Search/Booking Form Card */}
        <div className="container mx-auto px-4 pb-12 -mt-16 relative z-20">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Find the best place
              </h2>

              <form onSubmit={handleSearch} className="space-y-6">
                {/* Input Fields */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      placeholder="Type the destination"
                      value={searchData.location}
                      onChange={(e) =>
                        setSearchData({
                          ...searchData,
                          location: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-payaana-pink focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Check In
                    </label>
                    <input
                      type="date"
                      placeholder="Add date"
                      value={searchData.checkIn}
                      onChange={(e) =>
                        setSearchData({
                          ...searchData,
                          checkIn: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-payaana-pink focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Check Out
                    </label>
                    <input
                      type="date"
                      placeholder="Add date"
                      value={searchData.checkOut}
                      onChange={(e) =>
                        setSearchData({
                          ...searchData,
                          checkOut: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-payaana-pink focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Participants
                    </label>
                    <input
                      type="number"
                      placeholder="Add guests"
                      min="1"
                      value={searchData.participants}
                      onChange={(e) =>
                        setSearchData({
                          ...searchData,
                          participants: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-payaana-pink focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Filter Options and Search Button */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-sm font-medium text-gray-700">
                      Filter:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "All Packages",
                        "Adventure",
                        "Relaxation",
                        "Cultural",
                      ].map((filter) => (
                        <button
                          key={filter}
                          type="button"
                          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium transition-colors"
                        >
                          {filter}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="bg-payaana-pink hover:bg-payaana-pink-dark text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span>Search Packages</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

