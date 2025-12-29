import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      description: "Brief description shown on service cards",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "fullDescription",
      title: "Full Description",
      type: "text",
      description: "Complete description shown on service detail page",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      description: "Emoji icon (e.g., ✈️, 🏨, 📄)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "colorGradient",
      title: "Color Gradient",
      type: "string",
      description:
        "Tailwind gradient classes (e.g., from-blue-400 to-indigo-500)",
      validation: (Rule) => Rule.required(),
      initialValue: "from-blue-400 to-indigo-500",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "Service category (e.g., Booking, Documentation, Planning)",
      options: {
        list: [
          { title: "Booking", value: "Booking" },
          { title: "Documentation", value: "Documentation" },
          { title: "Planning", value: "Planning" },
          { title: "Protection", value: "Protection" },
          { title: "Financial", value: "Financial" },
          { title: "Connectivity", value: "Connectivity" },
        ],
      },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Order in which services appear (lower numbers first)",
      validation: (Rule) => Rule.min(0),
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "title",
      icon: "icon",
      category: "category",
    },
    prepare({ title, icon, category }) {
      return {
        title: `${icon || ""} ${title}`,
        subtitle: category || "No category",
      };
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Title",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
});
