import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black px-4 py-12 text-white md:px-6 lg:px-8">
      <div className="container mx-auto max-w-8xl">
        <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
          <div className="text-sm">
            <Image src="/logos/manifest-text-logo-white.svg" alt="Logo" width={160} height={40} />
            <div className="mt-2 text-xs text-gray-300">© 2023 Manifest Music Ltd. All Rights Reserved.</div>
          </div>
          <div className="text-sm">Music Publishing • Management • Creative Services</div>
          <div className="text-sm">
            <a href="mailto:info@manifestmusic.com" className="hover:underline">
              info@manifestmusic.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
