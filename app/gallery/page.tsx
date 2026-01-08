import { Metadata } from "next";
import { getGalleryImages } from "@/lib/sanity/queries";
import GalleryClient from "@/components/sections/GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | Payaana",
  description:
    "Explore our collection of travel memories - adventure, nature, culture, and happy customers from around the world.",
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function GalleryPage() {
  const images = await getGalleryImages();

  const categoryLabels: Record<string, string> = {
    adventure: "Adventure",
    nature: "Nature",
    culture: "Culture",
    happyCustomers: "Happy Customers",
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section - No Hero Video */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-purple via-brand-purple/90 to-brand-purple/80">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Our Gallery
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Explore our collection of travel memories from around the world
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16">
        <GalleryClient images={images} categoryLabels={categoryLabels} />
      </section>
    </main>
  );
}
