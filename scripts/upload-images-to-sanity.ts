#!/usr/bin/env tsx
/**
 * Upload images from public folder to Sanity and match them with destinations/packages
 *
 * This script:
 * 1. Uploads gallery images (imgi_XX_YY.webp without place names) to Sanity gallery
 * 2. Matches destination images based on file names and updates them
 * 3. Matches package images based on file names and updates them
 *
 * Usage:
 *   npx tsx scripts/upload-images-to-sanity.ts
 *
 * Or with environment variables:
 *   SANITY_API_TOKEN=your-token npx tsx scripts/upload-images-to-sanity.ts
 */

import { createClient } from "@sanity/client";
import * as fs from "fs";
import * as path from "path";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "q2w6jxdi";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error("❌ Error: SANITY_API_TOKEN environment variable is required");
  console.log("\nTo get your token:");
  console.log("1. Go to https://sanity.io/manage");
  console.log("2. Select your project");
  console.log("3. Go to API > Tokens");
  console.log("4. Create a new token with 'Editor' permissions");
  console.log("   ⚠️  IMPORTANT: The token MUST have 'Editor' permissions to create documents and upload assets");
  console.log("\nThen run:");
  console.log(
    "  SANITY_API_TOKEN=your-token npx tsx scripts/upload-images-to-sanity.ts"
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

const publicDir = path.join(process.cwd(), "public");

// Helper function to normalize place names for matching
function normalizePlaceName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .trim();
}

// Extract place name from image filename
function extractPlaceName(filename: string): string | null {
  // Pattern: imgi_XX_PLACENAME.webp or PLACENAME.webp
  const match = filename.match(/imgi_\d+_(.+?)\.webp$/i) || filename.match(/^(.+?)\.webp$/i);
  if (match && match[1]) {
    return match[1].trim();
  }
  return null;
}

// Check if image is a gallery image (imgi_XX_YY.webp without place name)
function isGalleryImage(filename: string): boolean {
  // Gallery images: imgi_XX_YY.webp where YY is just numbers
  const galleryPattern = /^imgi_\d+_\d+\.webp$/i;
  return galleryPattern.test(filename);
}

// Upload image to Sanity
async function uploadImageToSanity(imagePath: string): Promise<string | null> {
  try {
    const imageBuffer = fs.readFileSync(imagePath);
    const filename = path.basename(imagePath);

    console.log(`  📤 Uploading: ${filename}...`);

    const asset = await client.assets.upload("image", imageBuffer, {
      filename: filename,
      contentType: "image/webp",
    });

    return asset._id;
  } catch (error: any) {
    console.error(`  ❌ Failed to upload ${imagePath}:`, error.message);
    return null;
  }
}

// Upload gallery images
async function uploadGalleryImages() {
  console.log("\n" + "=".repeat(50));
  console.log("STEP 1: Uploading Gallery Images");
  console.log("=".repeat(50));

  const files = fs.readdirSync(publicDir);
  const galleryImages = files.filter((file) => isGalleryImage(file));

  if (galleryImages.length === 0) {
    console.log("✅ No gallery images found");
    return;
  }

  console.log(`Found ${galleryImages.length} gallery images`);

  let uploaded = 0;
  let failed = 0;

  for (const imageFile of galleryImages) {
    try {
      const imagePath = path.join(publicDir, imageFile);
      const assetId = await uploadImageToSanity(imagePath);

      if (!assetId) {
        failed++;
        continue;
      }

      // Check if gallery document already exists
      const existing = await client.fetch(
        `*[_type == "gallery" && image.asset._ref == $assetId][0]`,
        { assetId }
      );

      if (existing) {
        console.log(`  ⏭️  Already exists: ${imageFile}`);
        continue;
      }

      // Create gallery document
      const imageNumber = imageFile.match(/imgi_(\d+)_(\d+)/)?.[1] || "0";
      await client.create({
        _type: "gallery",
        title: `Gallery Image ${imageNumber}`,
        alt: `Gallery Image ${imageNumber}`,
        image: {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: assetId,
          },
        },
        category: "adventure", // Default category
        displayOrder: parseInt(imageNumber) || 0,
      });

      console.log(`  ✅ Created gallery document: ${imageFile}`);
      uploaded++;
    } catch (error: any) {
      console.error(`  ❌ Failed to create gallery document for ${imageFile}:`, error.message);
      failed++;
    }
  }

  console.log(`\nGallery: ${uploaded} uploaded, ${failed} failed`);
}

// Match and update destination images
async function updateDestinationImages() {
  console.log("\n" + "=".repeat(50));
  console.log("STEP 2: Matching Destination Images");
  console.log("=".repeat(50));

  // Fetch all destinations
  const destinations = await client.fetch(
    `*[_type == "destination" && !(_id in path("drafts.**"))] {
      _id,
      name,
      slug,
      mainImage
    }`
  );

  if (destinations.length === 0) {
    console.log("✅ No destinations found");
    return;
  }

  console.log(`Found ${destinations.length} destinations`);

  const files = fs.readdirSync(publicDir);
  const imageFiles = files.filter((file) => file.endsWith(".webp") && !isGalleryImage(file));

  let updated = 0;
  let notFound = 0;

  for (const destination of destinations) {
    const destName = normalizePlaceName(destination.name);
    let matchedImage: string | null = null;

    // Try to find matching image
    for (const imageFile of imageFiles) {
      const placeName = extractPlaceName(imageFile);
      if (placeName && normalizePlaceName(placeName) === destName) {
        matchedImage = imageFile;
        break;
      }
    }

    // Also try direct filename match (e.g., "Kerala.webp" for "Kerala")
    if (!matchedImage) {
      const directMatch = imageFiles.find(
        (file) => normalizePlaceName(file.replace(".webp", "")) === destName
      );
      if (directMatch) {
        matchedImage = directMatch;
      }
    }

    if (!matchedImage) {
      console.log(`  ⚠️  No image found for: ${destination.name}`);
      notFound++;
      continue;
    }

    try {
      const imagePath = path.join(publicDir, matchedImage);
      const assetId = await uploadImageToSanity(imagePath);

      if (!assetId) {
        notFound++;
        continue;
      }

      // Update destination with new image
      await client
        .patch(destination._id)
        .set({
          mainImage: {
            _type: "image",
            asset: {
              _type: "reference",
              _ref: assetId,
            },
          },
        })
        .commit();

      console.log(`  ✅ Updated: ${destination.name} with ${matchedImage}`);
      updated++;
    } catch (error: any) {
      console.error(`  ❌ Failed to update ${destination.name}:`, error.message);
      notFound++;
    }
  }

  console.log(`\nDestinations: ${updated} updated, ${notFound} not found`);
}

// Match and update package images
async function updatePackageImages() {
  console.log("\n" + "=".repeat(50));
  console.log("STEP 3: Matching Package Images");
  console.log("=".repeat(50));

  // Fetch all packages with their destination references
  const packages = await client.fetch(
    `*[_type == "packages" && !(_id in path("drafts.**"))] {
      _id,
      title,
      slug,
      destination->{name},
      mainImage
    }`
  );

  if (packages.length === 0) {
    console.log("✅ No packages found");
    return;
  }

  console.log(`Found ${packages.length} packages`);

  const files = fs.readdirSync(publicDir);
  const imageFiles = files.filter((file) => file.endsWith(".webp") && !isGalleryImage(file));

  let updated = 0;
  let notFound = 0;

  for (const pkg of packages) {
    const destName = pkg.destination?.name ? normalizePlaceName(pkg.destination.name) : null;
    let matchedImage: string | null = null;

    if (destName) {
      // Try to find matching image based on destination name
      for (const imageFile of imageFiles) {
        const placeName = extractPlaceName(imageFile);
        if (placeName && normalizePlaceName(placeName) === destName) {
          matchedImage = imageFile;
          break;
        }
      }

      // Also try direct filename match
      if (!matchedImage) {
        const directMatch = imageFiles.find(
          (file) => normalizePlaceName(file.replace(".webp", "")) === destName
        );
        if (directMatch) {
          matchedImage = directMatch;
        }
      }
    }

    if (!matchedImage) {
      console.log(`  ⚠️  No image found for package: ${pkg.title} (${destName || "no destination"})`);
      notFound++;
      continue;
    }

    try {
      const imagePath = path.join(publicDir, matchedImage);
      const assetId = await uploadImageToSanity(imagePath);

      if (!assetId) {
        notFound++;
        continue;
      }

      // Update package with new image
      await client
        .patch(pkg._id)
        .set({
          mainImage: {
            _type: "image",
            asset: {
              _type: "reference",
              _ref: assetId,
            },
          },
        })
        .commit();

      console.log(`  ✅ Updated: ${pkg.title} with ${matchedImage}`);
      updated++;
    } catch (error: any) {
      console.error(`  ❌ Failed to update ${pkg.title}:`, error.message);
      notFound++;
    }
  }

  console.log(`\nPackages: ${updated} updated, ${notFound} not found`);
}

async function main() {
  console.log("🚀 Starting image upload and matching process...");
  console.log(`Project: ${projectId}`);
  console.log(`Dataset: ${dataset}`);
  console.log(`Public directory: ${publicDir}`);

  try {
    await uploadGalleryImages();
    await updateDestinationImages();
    await updatePackageImages();

    console.log("\n" + "=".repeat(50));
    console.log("✅ Image upload and matching completed!");
    console.log("=".repeat(50));
  } catch (error: any) {
    console.error("❌ Fatal error:", error);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error("❌ Fatal error:", error);
  process.exit(1);
});
