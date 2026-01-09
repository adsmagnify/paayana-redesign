"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to packages with search params
    if (searchQuery.trim()) {
      const params = new URLSearchParams();
      params.set("search", searchQuery.trim());
      router.push(`/packages?${params.toString()}`);
    } else {
      router.push("/packages");
    }
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
          <source src="/home-hero.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center pt-24">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 tracking-tight">
              Explore the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-light-pink">
                World
              </span>
              <br />
              One Journey at a Time
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8 md:mb-12 px-2">
              Your trusted partner since 2012 for personalized and hassle-free
              travel experiences, tailored to meet your unique preferences and
              needs.
            </p>
          </div>
        </div>

        {/* Search Form Card */}
        <div className="container mx-auto px-4 pb-12 -mt-16 relative z-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Search Packages & Destinations
              </h2>

              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search by destination, package name, or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-brand-purple text-base sm:text-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-brand-purple hover:bg-brand-purple-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-colors shadow-lg hover:shadow-xl"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>Search</span>
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Find packages and destinations by name, location, or description
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
