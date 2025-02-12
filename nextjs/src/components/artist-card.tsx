// src/components/artist-card.tsx
import Image from "next/image";
import { SiSpotify, SiInstagram } from "react-icons/si";
import Link from "next/link";
import { urlFor } from "@/sanity/image";

interface ArtistCardProps {
  artist: {
    name?: string;
    image?: any;
    instagram?: string;
    spotify?: string;
  };
}

export function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <div className="group relative">
      {/* Image section */}
      <Image
        src={artist.image ? urlFor(artist.image).url() : "/placeholder.svg"}
        alt={artist.name || "Artist"}
        width={600}
        height={400}
        className="aspect-[3/2] w-full object-cover rounded-[20px] transition-transform duration-300 group-hover:filter group-hover:blur-sm"
      />
      {/* Overlay with name and social links */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="mb-6 text-2xl font-bold">
          {artist.name || "Unknown Artist"}
        </h3>

        <div className="flex space-x-4">
          {artist.spotify && (
            <Link
              href={artist.spotify}
              className="transition-transform hover:scale-110"
            >
              <SiSpotify className="h-6 w-6" />
            </Link>
          )}
          {artist.instagram && (
            <Link
              href={artist.instagram}
              className="transition-transform hover:scale-110"
            >
              <SiInstagram className="h-6 w-6" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
