import Link from "next/link";
import Image from "next/image";
import { SideMenu } from "@/components/side-menu";

export function Header() {
  return (
    <header className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-6 md:px-6 lg:px-8">
      <Link href="/" className="flex items-center">
        <Image
          src="/logos/manifest-crown-logo-black.svg"
          alt="Logo"
          width={112}
          height={48}
        />
      </Link>
      <SideMenu />
    </header>
  );
}
