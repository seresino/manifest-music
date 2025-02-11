"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { usePathname } from "next/navigation";
import type React from "react";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) {
    return children;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white px-4 py-8 md:px-6 lg:px-8">{children}</main>
      <Footer />
    </>
  );
}
