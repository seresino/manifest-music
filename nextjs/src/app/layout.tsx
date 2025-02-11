import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/client-layout";
import type React from "react";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manifest Music",
  description: "Music Publishing • Management • Creative Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body /* className={inter.className} */>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
