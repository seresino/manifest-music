import Link from "next/link";
import Image from "next/image";
import VideoBackground from "@/components/video-background";
import { Instagram, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden">
      <VideoBackground />

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
            <Instagram className="h-8 w-8" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="mailto:info@manifestmusic.com"
            className="rounded-full border border-white/20 p-2 text-white transition-colors hover:bg-white/10"
          >
            <Mail className="h-8 w-8" />
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
              height={200}
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
