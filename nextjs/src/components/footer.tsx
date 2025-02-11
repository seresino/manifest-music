import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black px-4 py-8 text-white md:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
          <Image
            src="/logos/manifest-text-logo-white.svg"
            alt="Logo"
            width={120}
            height={48}
          />
          <div className="text-sm">
            Music Publishing • Management • Creative Services
          </div>
          <div className="text-sm">info@manifestmusic.com</div>
        </div>
        <div className="mt-8 text-xs text-gray-400">
          © 2023 Manifest Music Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
