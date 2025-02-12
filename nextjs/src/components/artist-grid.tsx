// src/components/artist-grid.tsx
import { ArtistCard } from "@/components/artist-card";

interface ArtistGridProps {
  artists: any[];
}

export function ArtistGrid({ artists }: ArtistGridProps) {
  if (!artists || artists.length === 0) {
    return <div>No artists found</div>;
  }

  return (
    <div className="mt-8 mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {artists.map((artist) => (
        <ArtistCard key={artist._id} artist={artist} />
      ))}
    </div>
  );
}
