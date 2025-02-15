import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-02-15",
  useCdn: false, // Disable CDN since dataset is private
  token: process.env.SANITY_API_READ_TOKEN,
});
