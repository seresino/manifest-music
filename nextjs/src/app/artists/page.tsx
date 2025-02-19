import { client } from "@/sanity/client";
import { ArtistGrid } from "@/components/artist-grid";
import { type SanityDocument } from "next-sanity";
import { QUERIES } from "@/constants/queries";
import { Title } from "@/components/title";

const options = { next: { revalidate: 30 } };

export default async function ProducerWriterPage() {
  const artists = await client.fetch<SanityDocument[]>(
    QUERIES.ARTISTS,
    {},
    options
  );

  return (
    <div className="container mx-auto">
      <Title />
      <ArtistGrid artists={artists} />
    </div>
  );
}
