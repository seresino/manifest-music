// src/components/artist-card.tsx
import Image from "next/image";
import { SiSpotify, SiInstagram } from "react-icons/si";
import Link from "next/link";

interface ArtistCardProps {
  name: string;
  image?: string; // Optional image field
  instagram?: string; // Optional Instagram URL
  spotify?: string; // Optional Spotify URL
}

export function ArtistCard({
  name,
  image, // Fallback to placeholder image if no image provided
  instagram,
  spotify,
}: ArtistCardProps) {
  return (
    <div className="group relative">
      {/* Image section */}
      <Image
        src={image} // Use the provided image or fallback to placeholder
        alt={name || "Artist"} // Fallback alt text if name is missing
        width={600}
        height={400}
        className="aspect-[3/2] w-full object-cover rounded-[20px] transition-transform duration-300 group-hover:filter group-hover:blur-sm"
      />
      {/* Overlay with name and social links */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="mb-6 text-2xl font-bold">{name || "Unknown Artist"}</h3>{" "}
        {/* Fallback name if missing */}
        <div className="flex space-x-4">
          {/* Render Spotify link if available */}
          {spotify ? (
            <Link
              href={spotify}
              className="transition-transform hover:scale-110"
            >
              <SiSpotify className="h-6 w-6" />
            </Link>
          ) : (
            <span className="h-6 w-6" /> // Empty space if no Spotify link
          )}

          {/* Render Instagram link if available */}
          {instagram ? (
            <Link
              href={instagram}
              className="transition-transform hover:scale-110"
            >
              <SiInstagram className="h-6 w-6" />
            </Link>
          ) : (
            <span className="h-6 w-6" /> // Empty space if no Instagram link
          )}
        </div>
      </div>
    </div>
  );
}
