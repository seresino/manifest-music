'use client';

import Link from "next/link";
import Image from "next/image";
import { SideMenu } from "@/components/side-menu";
import { usePathname } from "next/navigation";
import { useSettings } from "@/contexts/SettingsContext";
import { urlFor } from "@/sanity/image";

export function Header() {
  const pathname = usePathname();
  const settings = useSettings();

  const PAGE_TITLES = {
    "/all": "Roster",
    "/artists": "Artists",
    "/producer-writers": "Producer & Writers",
    "/about": "About"
  };

  const getPageTitle = () => PAGE_TITLES[pathname] || "";

  const pageTitle = getPageTitle();
  const logoUrl = settings.logo1 ? urlFor(settings.logo1).url() : "/logos/manifest-crown-logo-black.svg";

  return (
    <header className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-6 md:px-6 lg:px-8">
      <Link href="/all" className="flex items-center">
        <Image 
          src={logoUrl} 
          alt="Manifest Music Logo" 
          width={112} 
          height={48} 
          className="scale-75 md:scale-100" 
        />
      </Link>
      {pageTitle && <h1 className="text-xl font-medium text-black">{pageTitle.toUpperCase()}</h1>}
      <SideMenu />
    </header>
  );
}
