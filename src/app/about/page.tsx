import { Instagram, Mail } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-7xl py-20">
      <div className="grid gap-20 lg:grid-cols-4">
        {/* Left Column */}
        <div className="space-y-16 lg:col-span-3">
          <h1 className="text-5xl font-bold tracking-tight">MANIFEST</h1>
          <p className="text-2xl font-bold text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://instagram.com" className="rounded-full border border-black/20 p-2 transition-colors hover:bg-black/5" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="mailto:contact@manifest.com" className="rounded-full border border-black/20 p-2 transition-colors hover:bg-black/5">
              <Mail className="h-5 w-5" />
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
