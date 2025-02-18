import { client } from "@/sanity/client";
import { ArtistGrid } from "@/components/artist-grid";
import { type SanityDocument } from "next-sanity";
import { QUERIES } from "@/constants/queries";
import { Title } from "@/components/title";

const options = { next: { revalidate: 30 } };

export default async function ProducerWriterPage() {
  const artists = await client.fetch<SanityDocument[]>(
    QUERIES.PRODUCER_WRITERS,
    {},
    options
  );

  return (
    <div className="container mx-auto max-w-8xl">
      <Title />
      <ArtistGrid artists={artists} />
    </div>
  );
}
