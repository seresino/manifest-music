// src/components/artist-grid.tsx
import { ArtistCard } from "@/components/artist-card";
import { urlFor } from "@/sanity/image"; // Import the urlFor helper

interface ArtistGridProps {
  artists: Artist[];
}

export function ArtistGrid({ artists }: ArtistGridProps) {
  if (artists.length === 0) {
    return <div>No artists found</div>;
  }

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {artists.map((artist) => (
        <ArtistCard
          key={artist._id} // Use the _id from Sanity
          name={artist.name}
          image={artist.image ? urlFor(artist.image).url() : "/placeholder.svg"} // Get image URL using urlFor
          instagram={artist.instagram} // Pass instagram URL
          spotify={artist.spotify} // Pass spotify URL
        />
      ))}
    </div>
  );
}
