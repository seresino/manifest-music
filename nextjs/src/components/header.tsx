import Link from "next/link";
import Image from "next/image";
import { SideMenu } from "@/components/side-menu";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const getPageTitle = () => {
    switch (pathname) {
      case "/all":
        return "Roster";
      case "/artists":
        return "Artists";
      case "/producer-writers":
        return "Producer & Writers";
      case "/about":
        return "About";
      default:
        return "";
    }
  };

  const pageTitle = getPageTitle();

  return (
    <header className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-6 md:px-6 lg:px-8">
      <Link href="/all" className="flex items-center">
        <Image src="/logos/manifest-crown-logo-black.svg" alt="Logo" width={112} height={48} className="scale-75 md:scale-100" />
      </Link>
      {pageTitle && <h1 className="text-xl font-medium text-black">{pageTitle.toUpperCase()}</h1>}
      <SideMenu />
    </header>
  );
}
