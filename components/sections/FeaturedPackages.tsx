import { getPackages } from "@/lib/sanity/queries";
import PackageCard from "@/components/ui/PackageCard";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Suspense } from "react";

/* =========================
   Types
========================= */

type Package = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage?: any;
  price?: number;
  duration?: string;
};

/* =========================
   Server Component
========================= */

async function PackagesList() {
  const packages: Package[] = await getPackages();
  const featured = packages.slice(0, 3);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {featured.map((pkg) => (
          <PackageCard key={pkg._id} package={pkg} />
        ))}
      </div>

      {packages.length > 3 && (
        <div className="text-center">
          <Link href="/packages">
            <Button variant="primary">View All Packages</Button>
          </Link>
        </div>
      )}
    </>
  );
}

/* =========================
   Wrapper Section
========================= */

export default function FeaturedPackages() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Featured Packages
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Handpicked travel experiences designed to create lasting memories
          </p>
        </div>

        <Suspense
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="h-48 bg-gray-200 animate-pulse" />
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded mb-4 animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          }
        >
          <PackagesList />
        </Suspense>
      </div>
    </section>
  );
}
