import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "6t8mgkgb",
  dataset: "roster",
  apiVersion: "2024-01-01",
  useCdn: false,
});
