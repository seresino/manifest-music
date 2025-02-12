import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Keep this public
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Keep this public
  apiVersion: "2024-01-01", // Use the latest version
  useCdn: false, // Disable CDN since dataset is private
  token: process.env.SANITY_API_READ_TOKEN, // Use API token for authentication
});
