import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { ArtistGrid } from "@/components/artist-grid";

// Query to fetch all artist documents from Sanity
const ARTISTS_QUERY = `*[_type == "artist" && defined(name)]`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const artists = await client.fetch<SanityDocument[]>(
    ARTISTS_QUERY,
    {},
    options
  );

  return (
    <div className="container mx-auto max-w-7xl">
      {/* Pass the fetched artists to ArtistGrid component */}
      <ArtistGrid artists={artists} />
    </div>
  );
}
