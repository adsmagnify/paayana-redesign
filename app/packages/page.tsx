import PackageSearchHero from "@/components/sections/PackageSearchHero";
import PackageCategorySection from "@/components/sections/PackageCategorySection";

// Dummy data - structured to match Sanity package schema
// This will be replaced with Sanity queries later

const specialisedDestinations = [
  {
    _id: "spec-1",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    name: "Maldives",
    rating: 5,
    reviews: 42,
    location: "Maldives",
    duration: "6 Days / 5 Nights",
    slug: "maldives-paradise",
  },
  {
    _id: "spec-2",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
    name: "Santorini",
    rating: 5,
    reviews: 38,
    location: "Greece",
    duration: "5 Days / 4 Nights",
    slug: "santorini-sunset",
  },
  {
    _id: "spec-3",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    name: "Bali",
    rating: 4,
    reviews: 56,
    location: "Indonesia",
    duration: "7 Days / 6 Nights",
    slug: "bali-retreat",
  },
  {
    _id: "spec-4",
    image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80",
    name: "Iceland",
    rating: 5,
    reviews: 29,
    location: "Iceland",
    duration: "8 Days / 7 Nights",
    slug: "iceland-northern-lights",
  },
];

const internationalPackages = [
  {
    _id: "int-1",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    name: "France",
    rating: 4,
    reviews: 15,
    location: "France",
    duration: "6 Day / 5 Nights",
    slug: "france-paris",
  },
  {
    _id: "int-2",
    image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&q=80",
    name: "Switzerland",
    rating: 5,
    reviews: 15,
    location: "Switzerland",
    duration: "6 Days / 5 Nights",
    slug: "switzerland-alps",
  },
  {
    _id: "int-3",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    name: "Germany",
    rating: 4,
    reviews: 10,
    location: "Germany",
    duration: "6 Days / 5 Nights",
    slug: "germany-city-tour",
  },
  {
    _id: "int-4",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    name: "Japan",
    rating: 5,
    reviews: 28,
    location: "Japan",
    duration: "7 Days / 6 Nights",
    slug: "japan-tokyo",
  },
  {
    _id: "int-5",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    name: "Dubai",
    rating: 4,
    reviews: 35,
    location: "UAE",
    duration: "5 Days / 4 Nights",
    slug: "dubai-adventure",
  },
  {
    _id: "int-6",
    image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800&q=80",
    name: "Thailand",
    rating: 5,
    reviews: 48,
    location: "Thailand",
    duration: "6 Days / 5 Nights",
    slug: "thailand-beaches",
  },
];

const domesticPackages = [
  {
    _id: "dom-1",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    name: "Kerala",
    rating: 5,
    reviews: 38,
    location: "Kerala",
    duration: "5 Day / 4 Nights",
    slug: "kerala-backwaters",
  },
  {
    _id: "dom-2",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    name: "Goa",
    rating: 5,
    reviews: 42,
    location: "Goa",
    duration: "4 Day / 3 Nights",
    slug: "goa-beach-paradise",
  },
  {
    _id: "dom-3",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    name: "Manali",
    rating: 4,
    reviews: 35,
    location: "Himachal Pradesh",
    duration: "5 Day / 4 Nights",
    slug: "manali-mountain-escape",
  },
  {
    _id: "dom-4",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    name: "Rajasthan",
    rating: 4,
    reviews: 32,
    location: "Rajasthan",
    duration: "7 Days / 6 Nights",
    slug: "rajasthan-heritage",
  },
  {
    _id: "dom-5",
    image: "https://images.unsplash.com/photo-1588416381073-3c0b5b0b5b0b?w=800&q=80",
    name: "Darjeeling",
    rating: 4,
    reviews: 27,
    location: "West Bengal",
    duration: "4 Days / 3 Nights",
    slug: "darjeeling-tea-gardens",
  },
  {
    _id: "dom-6",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    name: "Shimla",
    rating: 4,
    reviews: 29,
    location: "Himachal Pradesh",
    duration: "5 Days / 4 Nights",
    slug: "shimla-hill-station",
  },
];

const fixedDepartures = [
  {
    _id: "fix-1",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    name: "Europe Tour",
    rating: 5,
    reviews: 18,
    location: "Multiple Cities",
    duration: "10 Days / 9 Nights",
    slug: "europe-tour-2024",
  },
  {
    _id: "fix-2",
    image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&q=80",
    name: "Swiss Alps",
    rating: 5,
    reviews: 12,
    location: "Switzerland",
    duration: "7 Days / 6 Nights",
    slug: "swiss-alps-departure",
  },
  {
    _id: "fix-3",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    name: "South India",
    rating: 4,
    reviews: 25,
    location: "Kerala & Tamil Nadu",
    duration: "8 Days / 7 Nights",
    slug: "south-india-tour",
  },
  {
    _id: "fix-4",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    name: "Dubai Special",
    rating: 4,
    reviews: 20,
    location: "Dubai",
    duration: "5 Days / 4 Nights",
    slug: "dubai-special-departure",
  },
];

export default function PackagesPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Search Section */}
      <PackageSearchHero />

      {/* Specialised Destination Section */}
      <PackageCategorySection
        title="Specialised Destination"
        subtitle="Unique and niche destinations for extraordinary travel experiences"
        packages={specialisedDestinations}
        bgColor="white"
      />

      {/* International Holiday Packages Section */}
      <PackageCategorySection
        title="International Holiday Packages"
        subtitle="Explore the world with our curated international travel packages"
        packages={internationalPackages}
        bgColor="gray"
      />

      {/* Domestic Holiday Packages Section */}
      <PackageCategorySection
        title="Domestic Holiday Packages"
        subtitle="Discover the beauty of India with our domestic travel packages"
        packages={domesticPackages}
        bgColor="white"
      />

      {/* Fixed Departures Section */}
      <PackageCategorySection
        title="Fixed Departures"
        subtitle="Join our scheduled group tours with fixed departure dates"
        packages={fixedDepartures}
        bgColor="gray"
      />
    </main>
  );
}
