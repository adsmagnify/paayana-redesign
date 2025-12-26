import { getDestinations } from "@/lib/sanity/queries";
import DestinationCard from "@/components/ui/DestinationCard";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function DestinationsPage() {
  const destinations: Array<{
    _id: string;
    name: string;
    slug: { current: string };
    mainImage?: any;
    description?: string;
  }> = await getDestinations();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Destinations</h1>
        <p className="text-gray-600 text-lg">
          Explore amazing destinations around the world
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>

      {destinations.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">
            No destinations found. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
}
