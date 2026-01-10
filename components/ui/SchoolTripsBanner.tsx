"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function SchoolTripsBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasDismissed = localStorage.getItem("schoolTripsBannerDismissed");
    if (hasDismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("schoolTripsBannerDismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed left-4 bottom-4 sm:left-6 sm:bottom-6 z-50 animate-fade-in-up">
      <div className="relative group">
        {/* Close Button - Always Visible */}
        <button
          onClick={(e) => {
            e.preventDefault();
            handleDismiss();
          }}
          className="absolute -top-2 -right-2 bg-white text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-full p-1.5 shadow-lg transition-all z-20 border border-gray-200"
          aria-label="Close widget"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <Link
          href="/services/school-college-trips"
          className="block"
          onClick={() => handleDismiss()}
        >
          {/* Gradient Border Container */}
          <div className="relative p-[3px] rounded-2xl bg-gradient-to-r from-brand-purple via-light-pink to-brand-purple">
            {/* Inner Content */}
            <div className="relative bg-brand-purple text-white pl-4 pr-5 sm:pl-5 sm:pr-7 py-3 sm:py-4 rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(150,39,103,0.4)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center gap-3 sm:gap-4 overflow-hidden group">
              {/* Icon with Enhanced Animation */}
              <div className="relative flex-shrink-0">
                <span className="text-4xl sm:text-6xl block animate-bounce" style={{ animationDuration: '2s' }}>
                  🎓
                </span>
                {/* Sparkle Effect */}
                <div className="absolute -top-1 -right-1 text-yellow-300 text-lg animate-pulse">
                  ✨
                </div>
              </div>
              
              {/* Text Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-yellow-400 text-yellow-900 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-md animate-pulse">
                    NEW
                  </span>
                  <span className="text-white/90 text-[9px] sm:text-[10px] font-medium uppercase tracking-widest">
                    Introducing
                  </span>
                </div>
                <p className="font-bold text-sm sm:text-base whitespace-nowrap leading-tight">
                  School & College Trips
                </p>
                <p className="text-white/80 text-[10px] sm:text-xs mt-0.5">
                  Explore Now →
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
