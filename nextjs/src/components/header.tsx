import Link from "next/link";
import { SideMenu } from "@/components/side-menu";

export function Header() {
  return (
    <header className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-6 md:px-6 lg:px-8">
      <Link href="/" className="flex items-center">
        <div className="h-12 w-28 bg-black" />
      </Link>
      <SideMenu />
    </header>
  );
}
