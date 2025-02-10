import { ArtistCard } from "@/components/artist-card";

export function ArtistGrid() {
  const artists = [
    {
      id: 1,
      name: "Artist One",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      name: "Artist Two",
      image: "/images/post-malone.avif",
    },
    {
      id: 3,
      name: "Artist Three",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      name: "Artist Four",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      name: "Artist Five",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      name: "Artist Six",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 7,
      name: "Artist Seven",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 8,
      name: "Artist Eight",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 9,
      name: "Artist Nine",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 10,
      name: "Artist Ten",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 11,
      name: "Artist Eleven",
      image: "/placeholder.svg?height=400&width=600",
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {artists.map((artist) => (
        <ArtistCard key={artist.id} {...artist} />
      ))}
    </div>
  );
}
