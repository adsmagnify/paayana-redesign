import type { StructureResolver } from "sanity/structure";
import {
  FolderIcon,
  PackageIcon,
  PinIcon,
  WrenchIcon,
  EarthGlobeIcon,
  HomeIcon,
  CalendarIcon,
  SparklesIcon,
  ImageIcon,
} from "@sanity/icons";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Payaana Content")
    .items([
      // Services - No bifurcation needed
      S.listItem()
        .title("Services")
        .icon(WrenchIcon)
        .child(
          S.documentList().title("All Services").filter('_type == "services"')
        ),

      S.divider(),

      // Destinations - Organized in folders
      S.listItem()
        .title("Destinations")
        .icon(PinIcon)
        .child(
          S.list()
            .title("Destinations")
            .items([
              // International Destinations Folder
              S.listItem()
                .title("International Destinations")
                .icon(EarthGlobeIcon)
                .child(
                  S.documentList()
                    .title("International Destinations")
                    .filter('_type == "destination" && type == "international"')
                    .defaultOrdering([
                      { field: "displayOrder", direction: "asc" },
                    ])
                ),
              // Domestic Destinations Folder
              S.listItem()
                .title("Domestic Destinations")
                .icon(HomeIcon)
                .child(
                  S.documentList()
                    .title("Domestic Destinations")
                    .filter('_type == "destination" && type == "domestic"')
                    .defaultOrdering([
                      { field: "displayOrder", direction: "asc" },
                    ])
                ),
            ])
        ),

      S.divider(),

      // Packages - Organized in folders by category
      S.listItem()
        .title("Packages")
        .icon(PackageIcon)
        .child(
          S.list()
            .title("Packages")
            .items([
              // International Holiday Packages Folder
              S.listItem()
                .title("International Holiday Packages")
                .icon(EarthGlobeIcon)
                .child(
                  S.documentList()
                    .title("International Holiday Packages")
                    .filter(
                      '_type == "packages" && category == "international"'
                    )
                    .defaultOrdering([
                      { field: "displayOrder", direction: "asc" },
                    ])
                ),
              // Domestic Holiday Packages Folder
              S.listItem()
                .title("Domestic Holiday Packages")
                .icon(HomeIcon)
                .child(
                  S.documentList()
                    .title("Domestic Holiday Packages")
                    .filter('_type == "packages" && category == "domestic"')
                    .defaultOrdering([
                      { field: "displayOrder", direction: "asc" },
                    ])
                ),
              // Fixed Departures Folder
              S.listItem()
                .title("Fixed Departures")
                .icon(CalendarIcon)
                .child(
                  S.documentList()
                    .title("Fixed Departures")
                    .filter(
                      '_type == "packages" && category == "fixedDeparture"'
                    )
                    .defaultOrdering([
                      { field: "displayOrder", direction: "asc" },
                    ])
                ),
              // Specialised Destination Folder
              S.listItem()
                .title("Specialised Destination")
                .icon(SparklesIcon)
                .child(
                  S.documentList()
                    .title("Specialised Destination")
                    .filter('_type == "packages" && category == "specialised"')
                    .defaultOrdering([
                      { field: "displayOrder", direction: "asc" },
                    ])
                ),
            ])
        ),

      S.divider(),

      // Gallery - Organized by categories
      S.listItem()
        .title("Gallery")
        .icon(ImageIcon)
        .child(
          S.list()
            .title("Gallery")
            .items([
              // All Gallery Images - This one will have the create button
              S.listItem()
                .title("All Gallery Images")
                .icon(ImageIcon)
                .child(
                  S.documentTypeList("gallery")
                    .title("All Gallery Images")
                    .defaultOrdering([
                      { field: "displayOrder", direction: "asc" },
                    ])
                ),
              // Adventure Category - Has create button
              S.listItem()
                .title("Adventure")
                .icon(SparklesIcon)
                .child(
                  S.documentTypeList("gallery")
                    .title("Adventure Images")
                    .defaultOrdering([
                      { field: "displayOrder", direction: "asc" },
                    ])
                ),
              // Nature Category - Has create button
              S.listItem()
                .title("Nature")
                .icon(SparklesIcon)
                .child(
                  S.documentTypeList("gallery")
                    .title("Nature Images")
                    .defaultOrdering([
                      { field: "displayOrder", direction: "asc" },
                    ])
                ),
              // Culture Category - Has create button
              S.listItem()
                .title("Culture")
                .icon(EarthGlobeIcon)
                .child(
                  S.documentTypeList("gallery")
                    .title("Culture Images")
                    .defaultOrdering([
                      { field: "displayOrder", direction: "asc" },
                    ])
                ),
              // Happy Customers Category - Has create button
              S.listItem()
                .title("Happy Customers")
                .icon(SparklesIcon)
                .child(
                  S.documentTypeList("gallery")
                    .title("Happy Customers Images")
                    .defaultOrdering([
                      { field: "displayOrder", direction: "asc" },
                    ])
                ),
            ])
        ),
    ]);
