import { getPackageBySlug, getPackages } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import Image from "next/image";
import PackageInquiryForm from "@/components/forms/PackageInquiryForm";
import PackageCard from "@/components/ui/PackageCard";
import { notFound } from "next/navigation";

export const revalidate = 60;

/* =========================
   Types
========================= */

type Destination = {
  name: string;
};

type ItineraryDay = {
  title?: string;
  description?: string;
};

type TravelPackage = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage?: any;
  duration?: string;
  price?: number;
  destination?: Destination;
  description?: string;
  highlights?: string[];
  itinerary?: ItineraryDay[];
};

/* =========================
   Static Params
========================= */

export async function generateStaticParams() {
  const packages: TravelPackage[] = await getPackages();

  return packages.map((pkg) => ({
    slug: pkg.slug.current,
  }));
}

/* =========================
   Page
========================= */

export default async function PackageDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const packageData: TravelPackage | null = await getPackageBySlug(params.slug);

  if (!packageData) {
    notFound();
  }

  const allPackages: TravelPackage[] = await getPackages();

  const relatedPackages = allPackages
    .filter((pkg) => pkg._id !== packageData._id)
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          {packageData.title}
        </h1>

        {packageData.mainImage && (
          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={urlFor(packageData.mainImage).width(1200).height(600).url()}
              alt={packageData.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {packageData.duration && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Duration</p>
              <p className="text-xl font-semibold text-gray-900">
                {packageData.duration}
              </p>
            </div>
          )}

          {packageData.price && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Starting from</p>
              <p className="text-xl font-semibold text-payaana-pink">
                ₹{packageData.price}
              </p>
            </div>
          )}

          {packageData.destination && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Destination</p>
              <p className="text-xl font-semibold text-gray-900">
                {packageData.destination.name}
              </p>
            </div>
          )}
        </div>

        {packageData.description && (
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 whitespace-pre-line">
              {packageData.description}
            </p>
          </div>
        )}

        {packageData.highlights && packageData.highlights.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Highlights
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {packageData.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}

        {packageData.itinerary && packageData.itinerary.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Itinerary</h2>
            <div className="space-y-6">
              {packageData.itinerary.map((day, index) => (
                <div
                  key={index}
                  className="border-l-4 border-payaana-pink pl-4"
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    Day {index + 1}
                  </h3>
                  {day.title && (
                    <p className="text-lg text-gray-800 mt-1">{day.title}</p>
                  )}
                  {day.description && (
                    <p className="text-gray-700 mt-2">{day.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Inquire About This Package
          </h2>
          <PackageInquiryForm
            packageName={packageData.title}
            packageId={packageData._id}
          />
        </div>
      </div>

      {relatedPackages.length > 0 && (
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Related Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPackages.map((pkg) => (
              <PackageCard key={pkg._id} package={pkg} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
