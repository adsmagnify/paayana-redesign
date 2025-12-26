import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

if (!projectId || !dataset) {
  throw new Error("Missing Sanity environment variables");
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
