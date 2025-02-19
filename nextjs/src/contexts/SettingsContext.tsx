"use client";

import { createContext, useContext } from "react";
import { PortableTextBlock } from "@portabletext/types";

interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  caption?: string;
}

export interface Settings {
  name: string; // Company Name
  logo1?: SanityImage; // Primary logo - Used in header - black version
  logo2?: SanityImage; // Primary logo - white version
  logo3?: SanityImage; // Full Logo (small) - Compact version for mobile
  logo4?: SanityImage; // Full logo (large) - Used as button on landing page
  logo5?: SanityImage; // Wordmark logo black - Used on about page
  logo6?: SanityImage; // Wordmark logo white - Used in footer
  about: PortableTextBlock[]; // Rich text content for about page
  instagram?: string; // Instagram URL
  email: string; // Contact email
}

const SettingsContext = createContext<Settings | null>(null);

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === null) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
}

export default SettingsContext;
