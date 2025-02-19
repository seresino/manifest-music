import Image from "next/image";
import { SiSpotify, SiInstagram } from "react-icons/si";
import Link from "next/link";
import { urlFor } from "@/sanity/image";

interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  caption?: string;
}

interface ArtistCardProps {
  artist: {
    name?: string;
    image?: SanityImage;
    instagram?: string;
    spotify?: string;
  };
}

export function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <div className="group relative">
      <Image
        src={artist.image ? urlFor(artist.image).url() : "/placeholder.svg"}
        alt={artist.name || "Artist"}
        width={600}
        height={400}
        className="aspect-[3/2] w-full object-cover rounded-[20px] transition-transform duration-300 group-hover:filter group-hover:blur-sm"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="mb-6 text-2xl font-bold">
          {artist.name || "Unknown Artist"}
        </h3>

        <div className="flex space-x-4">
          {artist.spotify && (
            <Link
              href={artist.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <SiSpotify className="h-6 w-6" />
            </Link>
          )}
          {artist.instagram && (
            <Link
              href={artist.instagram}
              target="_blank"
              rel="noopener noreferrer"
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
