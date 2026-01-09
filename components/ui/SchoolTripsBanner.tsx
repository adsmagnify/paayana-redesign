"use client";

import { useState } from "react";
import Link from "next/link";

export default function SchoolTripsBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed left-3 bottom-3 sm:left-6 sm:bottom-6 z-50 animate-fade-in-up">
      <div className="relative group">
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsVisible(false);
          }}
          className="absolute -top-2 -right-2 bg-white text-gray-500 hover:text-red-500 rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
          aria-label="Close widget"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <Link
          href="/services/school-college-trips"
          className="block"
        >
          <div className="bg-gradient-to-r from-brand-purple to-brand-purple-dark text-white pl-3 pr-4 sm:pl-4 sm:pr-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center gap-2 sm:gap-3 animate-pulse-glow border border-white/20 backdrop-blur-sm">
            <span className="text-3xl sm:text-5xl animate-bounce">🎓</span>
            <div>
              <p className="text-[10px] sm:text-xs font-medium text-white/80 uppercase tracking-wider">
                New
              </p>
              <p className="font-bold text-xs sm:text-sm whitespace-nowrap">
                School & College Trips
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
