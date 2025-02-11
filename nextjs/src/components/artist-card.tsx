import Image from "next/image";
import { SiSpotify, SiInstagram } from "react-icons/si";
import Link from "next/link";

interface ArtistCardProps {
  name: string;
  image: string;
}

export function ArtistCard({ name, image }: ArtistCardProps) {
  return (
    <div className="group relative">
      <Image
        src={image || "/placeholder.svg"}
        alt={name}
        width={600}
        height={400}
        className="aspect-[3/2] w-full object-cover rounded-[20px] transition-transform duration-300 group-hover:filter group-hover:blur-sm"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="mb-6 text-2xl font-bold">{name}</h3>
        <div className="flex space-x-4">
          <Link href="#" className="transition-transform hover:scale-110">
            <SiSpotify className="h-6 w-6" />
          </Link>
          <Link href="#" className="transition-transform hover:scale-110">
            <SiInstagram className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
