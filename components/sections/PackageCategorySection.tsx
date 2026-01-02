"use client";

import PackageCategoryCard from "@/components/ui/PackageCategoryCard";

interface Package {
  _id: string;
  image: string;
  name: string;
  rating: number;
  reviews: number;
  location: string;
  duration: string;
  slug: string;
}

interface PackageCategorySectionProps {
  title: string;
  subtitle?: string;
  packages: Package[];
  bgColor?: "white" | "gray";
}

export default function PackageCategorySection({
  title,
  subtitle,
  packages,
  bgColor = "white",
}: PackageCategorySectionProps) {
  if (packages.length === 0) {
    return null;
  }

  const bgClass =
    bgColor === "gray"
      ? "bg-gradient-to-b from-white to-gray-50"
      : "bg-white";

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <PackageCategoryCard
              key={pkg._id}
              image={pkg.image}
              name={pkg.name}
              rating={pkg.rating}
              reviews={pkg.reviews}
              location={pkg.location}
              duration={pkg.duration}
              slug={pkg.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

