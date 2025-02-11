import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/placeholder.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Social Icons - Top Right */}
        <div className="absolute right-8 top-8 flex items-center gap-4">
          <Link
            href="https://www.instagram.com/manifestmusic__/"
            className="rounded-full border border-white/20 p-2 text-white transition-colors hover:bg-white/10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="mailto:info@manifestmusic.com"
            className="rounded-full border border-white/20 p-2 text-white transition-colors hover:bg-white/10"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>

        {/* Centered Logo */}
        <div className="flex h-full flex-col items-center justify-center px-4">
          <Link href="/artists" className="group">
            <Image
              src="/logos/manifest-crown-text-logo-white.svg"
              alt="Logo"
              width={200}
              height={48}
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </div>
        <div className="absolute bottom-10 w-full text-center">
          <p className="text-sm text-white/70 md:text-base">
            Music Publishing • Management • Creative Services
          </p>
        </div>
      </div>
    </div>
  );
}
