'use client';

import { createContext, useContext } from 'react';
import { SanityImageAsset } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "@portabletext/types";

export interface Settings {
  name: string; // Company Name
  logo1?: SanityImageAsset; // Primary logo - Used in header - black version
  logo2?: SanityImageAsset; // Primary logo - white version
  logo3?: SanityImageAsset; // Full Logo (small) - Compact version for mobile
  logo4?: SanityImageAsset; // Full logo (large) - Used as button on landing page
  logo5?: SanityImageAsset; // Wordmark logo black - Used on about page
  logo6?: SanityImageAsset; // Wordmark logo white - Used in footer
  about: PortableTextBlock[]; // Rich text content for about page
  instagram?: string; // Instagram URL
  email: string; // Contact email
}

const SettingsContext = createContext<Settings | null>(null);

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === null) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}

export default SettingsContext;
