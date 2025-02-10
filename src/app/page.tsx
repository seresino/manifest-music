import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src="/placeholder.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Social Icons - Top Right */}
        <div className="absolute right-8 top-8 flex items-center gap-4">
          <Link href="https://instagram.com" className="rounded-full border border-white/20 p-2 text-white transition-colors hover:bg-white/10" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="mailto:contact@manifest.com" className="rounded-full border border-white/20 p-2 text-white transition-colors hover:bg-white/10">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>

        {/* Centered Logo */}
        <div className="flex h-full flex-col items-center justify-center px-4">
          <Link href="/artists" className="group">
            <div className="mb-8 h-40 w-96 bg-white transition-transform duration-300 group-hover:scale-105 md:h-48 md:w-[480px] lg:h-56 lg:w-[560px]" />
            <p className="text-center text-sm text-white/70 md:text-base">Music Publishing • Management • Creative Services</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
