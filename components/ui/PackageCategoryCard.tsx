"use client";

import Image from "next/image";
import Link from "next/link";

interface PackageCategoryCardProps {
  image: string;
  name: string;
  rating: number;
  reviews: number;
  location: string;
  duration: string;
  slug: string;
}

export default function PackageCategoryCard({
  image,
  name,
  rating,
  reviews,
  location,
  duration,
  slug,
}: PackageCategoryCardProps) {
  return (
    <Link href={`/packages/${slug}`} className="group block h-full">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
        {/* Image */}
        <div className="relative w-full h-56 overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Destination Name - Bold, Uppercase */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">
            {name}
          </h3>

          {/* Rating and Reviews */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-600">({reviews} reviews)</span>
          </div>

          {/* Location and Duration */}
          <div className="space-y-3 mb-6 flex-grow">
            <div className="flex items-center gap-2 text-gray-700">
              <svg
                className="w-5 h-5 text-payaana-pink flex-shrink-0"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-medium">{location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <svg
                className="w-5 h-5 text-payaana-pink flex-shrink-0"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">{duration}</span>
            </div>
          </div>

          {/* Enquiry Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `/packages/${slug}`;
            }}
            className="w-full bg-payaana-pink hover:bg-payaana-pink-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 mt-auto"
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
              <path d="M5 13l4 4L19 7" />
            </svg>
            <span>Enquiry Here</span>
          </button>
        </div>
      </div>
    </Link>
  );
}

