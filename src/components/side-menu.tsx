"use client";

import * as React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function SideMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="flex items-center space-x-2 hover:opacity-70">
          <Menu className="h-6 w-6" />
          <span className="text-sm font-medium">MENU</span>
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] border-none bg-black p-0">
        <div className="flex h-full flex-col px-6">
          <SheetHeader className="h-20 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="h-8 w-20 bg-white" />
              <button onClick={() => setOpen(false)} className="flex items-center space-x-2 text-white hover:opacity-70">
                <span className="text-sm font-medium">CLOSE MENU</span>
                <X className="h-6 w-6" />
              </button>
            </div>
          </SheetHeader>
          <nav className="flex-1 py-8">
            <ul className="space-y-6 text-sm">
              <li>
                <Link href="/about" className="text-white/70 transition-colors hover:text-white" onClick={() => setOpen(false)}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/artists" className="text-white/70 transition-colors hover:text-white" onClick={() => setOpen(false)}>
                  ARTISTS
                </Link>
              </li>
              <li>
                <Link href="/producers-writers" className="text-white/70 transition-colors hover:text-white" onClick={() => setOpen(false)}>
                  PRODUCERS & WRITERS
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 transition-colors hover:text-white" onClick={() => setOpen(false)}>
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
          <div className="border-t border-white/10 py-6">
            <div className="relative">
              <input type="search" placeholder="Search..." className="w-full border-b border-white/10 bg-transparent pb-2 text-sm text-white placeholder-white/50 outline-none" />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
