import { getDestinationBySlug, getDestinations } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import Image from "next/image";
import PackageCard from "@/components/ui/PackageCard";
import { notFound } from "next/navigation";

export const revalidate = 60;

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

type Destination = {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  mainImage?: any;
  description?: string;
  location?: string;
  featuredPackages?: Package[];
};

/* =========================
   Static Params
========================= */

export async function generateStaticParams() {
  const destinations: Destination[] = await getDestinations();

  return destinations.map((destination) => ({
    slug: destination.slug.current,
  }));
}

/* =========================
   Page
========================= */

export default async function DestinationDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const destination: Destination | null = await getDestinationBySlug(
    params.slug
  );

  if (!destination) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          {destination.name}
        </h1>

        {destination.mainImage && (
          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={urlFor(destination.mainImage).width(1200).height(600).url()}
              alt={destination.name}
              fill
              className="object-cover"
            />
          </div>
        )}

        {destination.description && (
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 whitespace-pre-line">
              {destination.description}
            </p>
          </div>
        )}

        {destination.location && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Location</h2>
            <p className="text-gray-700">{destination.location}</p>
          </div>
        )}

        {destination.featuredPackages &&
          destination.featuredPackages.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Packages in {destination.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {destination.featuredPackages.map((pkg) => (
                  <PackageCard key={pkg._id} package={pkg} />
                ))}
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
