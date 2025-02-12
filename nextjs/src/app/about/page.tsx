import { Instagram, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-7xl py-20">
      <div className="grid gap-20 lg:grid-cols-4">
        {/* Left Column */}
        <div className="space-y-16 lg:col-span-3">
          <Image
            src="/logos/manifest-text-logo-black.svg"
            alt="Logo"
            width={250}
            height={48}
          />
          <p className="text-xl font-bold text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.instagram.com/manifestmusic__/"
              className="rounded-full border border-black/20 p-2 transition-colors hover:bg-black/5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-8 w-8" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="mailto:info@manifestmusic.com"
              className="rounded-full border border-black/20 p-2 transition-colors hover:bg-black/5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="h-8 w-8" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        {/* Right Column - Placeholder */}
        <div className="h-96 lg:h-auto"></div>
      </div>
    </div>
  );
}
