import type { Metadata } from "next";
import "./globals.css";
import { ClientLayout } from "@/components/client-layout";
import type React from "react";

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
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
