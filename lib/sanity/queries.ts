import { client } from "./client";

export async function getPackages() {
  try {
    const packages = await client.fetch(`
      *[_type == "packages" && !(_id in path("drafts.**"))] | order(_createdAt desc) {
        _id,
        title,
        slug,
        mainImage,
        price,
        duration,
        description,
        highlights,
        destination-> {
          _id,
          name,
          slug
        }
      }
    `);
    return packages || [];
  } catch (error) {
    console.error("Error fetching packages:", error);
    return [];
  }
}

export async function getPackageBySlug(slug: string) {
  try {
    const packageData = await client.fetch(
      `
      *[_type == "packages" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
        _id,
        title,
        slug,
        mainImage,
        price,
        duration,
        description,
        highlights,
        itinerary[] {
          title,
          description
        },
        destination-> {
          _id,
          name,
          slug
        }
      }
    `,
      { slug }
    );
    return packageData || null;
  } catch (error) {
    console.error("Error fetching package:", error);
    return null;
  }
}

export async function getDestinations() {
  try {
    const destinations = await client.fetch(`
      *[_type == "destination" && !(_id in path("drafts.**"))] | order(name asc) {
        _id,
        name,
        slug,
        mainImage,
        description,
        location
      }
    `);
    return destinations || [];
  } catch (error) {
    console.error("Error fetching destinations:", error);
    return [];
  }
}

export async function getDestinationBySlug(slug: string) {
  try {
    const destination = await client.fetch(
      `
      *[_type == "destination" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
        _id,
        name,
        slug,
        mainImage,
        description,
        location,
        "featuredPackages": *[_type == "packages" && references(^._id) && !(_id in path("drafts.**"))] {
          _id,
          title,
          slug,
          mainImage,
          price,
          duration
        }
      }
    `,
      { slug }
    );
    return destination || null;
  } catch (error) {
    console.error("Error fetching destination:", error);
    return null;
  }
}

export async function getServices() {
  try {
    const services = await client.fetch(`
      *[_type == "services" && !(_id in path("drafts.**"))] | order(order asc, title asc) {
        _id,
        title,
        slug,
        shortDescription,
        fullDescription,
        icon,
        colorGradient,
        category
      }
    `);
    return services || [];
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}

export async function getPopularDomesticDestinations() {
  try {
    const destinations = await client.fetch(`
      *[_type == "destination" && type == "domestic" && isPopular == true && !(_id in path("drafts.**"))] | order(displayOrder asc, name asc) {
        _id,
        name,
        slug,
        mainImage,
        description,
        location,
        type,
        isPopular
      }
    `);
    return destinations || [];
  } catch (error) {
    console.error("Error fetching popular domestic destinations:", error);
    return [];
  }
}

export async function getPopularInternationalDestinations() {
  try {
    const destinations = await client.fetch(`
      *[_type == "destination" && type == "international" && isPopular == true && !(_id in path("drafts.**"))] | order(displayOrder asc, name asc) {
        _id,
        name,
        slug,
        mainImage,
        description,
        location,
        type,
        isPopular
      }
    `);
    return destinations || [];
  } catch (error) {
    console.error("Error fetching popular international destinations:", error);
    return [];
  }
}

export async function getPackagesByCategory(category: string) {
  try {
    const packages = await client.fetch(
      `
      *[_type == "packages" && category == $category && !(_id in path("drafts.**"))] | order(displayOrder asc, title asc) {
        _id,
        title,
        slug,
        mainImage,
        price,
        duration,
        description,
        highlights,
        category,
        isFeatured,
        destination-> {
          _id,
          name,
          slug
        }
      }
    `,
      { category }
    );
    return packages || [];
  } catch (error) {
    console.error(`Error fetching packages for category ${category}:`, error);
    return [];
  }
}

export async function getFeaturedPackages() {
  try {
    const packages = await client.fetch(`
      *[_type == "packages" && isFeatured == true && !(_id in path("drafts.**"))] | order(displayOrder asc, title asc) {
        _id,
        title,
        slug,
        mainImage,
        price,
        duration,
        description,
        highlights,
        category,
        destination-> {
          _id,
          name,
          slug
        }
      }
    `);
    return packages || [];
  } catch (error) {
    console.error("Error fetching featured packages:", error);
    return [];
  }
}

export async function getPackagesByCategoryWithDestinations(category: string) {
  try {
    const packages = await client.fetch(
      `
      *[_type == "packages" && category == $category && !(_id in path("drafts.**"))] | order(displayOrder asc, title asc) {
        _id,
        title,
        slug,
        mainImage,
        price,
        duration,
        description,
        highlights,
        category,
        isFeatured,
        destination-> {
          _id,
          name,
          slug,
          mainImage,
          location,
          type
        }
      }
    `,
      { category }
    );
    return packages || [];
  } catch (error) {
    console.error(
      `Error fetching packages with destinations for category ${category}:`,
      error
    );
    return [];
  }
}

export async function getServiceBySlug(slug: string) {
  try {
    const service = await client.fetch(
      `
      *[_type == "services" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
        _id,
        title,
        slug,
        shortDescription,
        fullDescription,
        icon,
        colorGradient,
        category
      }
    `,
      { slug }
    );
    return service || null;
  } catch (error) {
    console.error("Error fetching service:", error);
    return null;
  }
}

export async function getGalleryImages(category?: string) {
  try {
    const filter = category
      ? `category == "${category}" && !(_id in path("drafts.**"))`
      : `!(_id in path("drafts.**"))`;

    const images = await client.fetch(`
      *[_type == "gallery" && ${filter}] | order(displayOrder asc, _createdAt desc) {
        _id,
        title,
        image,
        category,
        alt,
        displayOrder
      }
    `);
    return images || [];
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return [];
  }
}

export async function getGalleryImagesByCategory(category: string) {
  try {
    const images = await client.fetch(
      `
      *[_type == "gallery" && category == $category && !(_id in path("drafts.**"))] | order(displayOrder asc, _createdAt desc) {
        _id,
        title,
        image,
        category,
        alt,
        displayOrder
      }
    `,
      { category }
    );
    return images || [];
  } catch (error) {
    console.error(`Error fetching gallery images for category ${category}:`, error);
    return [];
  }
}
