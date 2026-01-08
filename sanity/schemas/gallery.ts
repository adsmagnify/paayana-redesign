import { defineField, defineType } from "sanity";

export default defineType({
  name: "gallery",
  title: "Gallery Image",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      description: "Upload an image for the gallery",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Title or caption for the image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Alt Text",
      type: "string",
      description:
        "Alternative text for accessibility (auto-filled from title if left empty)",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Adventure", value: "adventure" },
          { title: "Nature", value: "nature" },
          { title: "Culture", value: "culture" },
          { title: "Happy Customers", value: "happyCustomers" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
      initialValue: "adventure",
    }),
    defineField({
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      description:
        "Order in which the image appears (lower numbers appear first)",
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    }),
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      media: "image",
    },
    prepare({ title, category, media }) {
      const categoryLabels: Record<string, string> = {
        adventure: "Adventure",
        nature: "Nature",
        culture: "Culture",
        happyCustomers: "Happy Customers",
      };
      return {
        title: title || "Untitled",
        subtitle: categoryLabels[category] || category,
        media,
      };
    },
  },
});
