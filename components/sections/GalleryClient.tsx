"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/ui/Modal";
import { urlFor } from "@/lib/sanity/image";

interface GalleryImage {
  _id: string;
  title: string;
  image: any;
  category: string;
  alt: string;
  displayOrder?: number;
}

interface GalleryClientProps {
  images: GalleryImage[];
  categoryLabels: Record<string, string>;
}

export default function GalleryClient({
  images,
  categoryLabels,
}: GalleryClientProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(
    null
  );
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { value: "all", label: "All" },
    { value: "adventure", label: categoryLabels.adventure || "Adventure" },
    { value: "nature", label: categoryLabels.nature || "Nature" },
    { value: "culture", label: categoryLabels.culture || "Culture" },
    {
      value: "happyCustomers",
      label: categoryLabels.happyCustomers || "Happy Customers",
    },
  ];

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((img) => img.category === filter);

  const getImageUrl = (image: any) => {
    if (!image) return "";
    return urlFor(image).width(1200).height(1200).url() || "";
  };

  const getThumbnailUrl = (image: any) => {
    if (!image) return "";
    return urlFor(image).width(600).height(600).url() || "";
  };

  if (images.length === 0) {
    return (
      <div className="container mx-auto px-4">
        <div className="text-center py-20">
          <p className="text-gray-600 text-lg">
            No images available yet. Check back soon!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setFilter(category.value)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              filter === category.value
                ? "bg-brand-purple text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImages.map((image) => {
          const imageUrl = getThumbnailUrl(image.image);
          return (
            <div
              key={image._id}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-xl group shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => setSelectedImage(image)}
            >
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={image.alt || image.title || "Gallery image"}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">No image</span>
                </div>
              )}
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <p className="text-white font-semibold text-sm mb-1">
                    {image.title}
                  </p>
                  <p className="text-white/80 text-xs">
                    {categoryLabels[image.category] || image.category}
                  </p>
                </div>
              </div>
              {/* View Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-brand-purple"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-600 text-lg">
            No images found in this category.
          </p>
        </div>
      )}

      {/* Modal */}
      {selectedImage && (
        <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
          <div className="relative w-full max-w-5xl mx-auto">
            <div className="relative aspect-video w-full bg-gray-100 rounded-t-lg overflow-hidden">
              {getImageUrl(selectedImage.image) ? (
                <Image
                  src={getImageUrl(selectedImage.image)}
                  alt={selectedImage.alt || selectedImage.title || "Gallery image"}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-500">No image available</span>
                </div>
              )}
            </div>
            <div className="p-6 bg-white rounded-b-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {categoryLabels[selectedImage.category] ||
                  selectedImage.category}
              </p>
              {selectedImage.alt && (
                <p className="text-gray-500 text-sm">{selectedImage.alt}</p>
              )}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

