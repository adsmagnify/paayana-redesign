"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";
import Button from "@/components/ui/Button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent pt-8">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 relative">
          {/* Logo in white rounded pill - positioned absolute left */}
          <Link href="/" className="absolute left-0 flex items-center">
            <div className="bg-white rounded-full px-3 py-2 shadow-lg">
              <div className="relative w-32 h-10">
                <Image
                  src="/payaana-logo.webp"
                  alt="Payaana Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </Link>

          {/* Header navigation in separate white rounded container - centered */}
          <div className="hidden lg:flex items-center">
            <div className="bg-white rounded-full px-8 py-4 shadow-lg">
              <Navigation />
            </div>
          </div>

          {/* Get Started button in pink rounded pill - positioned absolute right */}
          <div className="hidden lg:flex items-center absolute right-0">
            <Link href="/packages">
              <button className="bg-white hover:bg-gray-100 text-brand-purple px-6 py-3 rounded-full font-semibold transition-colors shadow-lg">
                Book Now
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-white bg-white/20 backdrop-blur-sm rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
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
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-2xl shadow-xl p-4">
            <Navigation mobile />
            <div className="pt-4">
              <Link href="/packages">
                <button className="bg-brand-purple hover:bg-brand-purple/90 text-white px-6 py-3 rounded-full font-semibold transition-colors w-full">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
