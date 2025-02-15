import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { ArtistGrid } from "@/components/artist-grid";

const ARTISTS_QUERY = `*[_type == "artist"]`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const artists = await client.fetch<SanityDocument[]>(
    ARTISTS_QUERY,
    {},
    options
  );

  return (
    <div className="container mx-auto max-w-7xl">
      <ArtistGrid artists={artists} />
    </div>
  );
}
