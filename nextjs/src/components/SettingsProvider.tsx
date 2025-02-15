import { client } from "@/sanity/client";
import { QUERIES } from "@/constants/queries";
import type { Settings } from "@/contexts/SettingsContext";
import SettingsProviderClient from "./SettingsProviderClient";

async function SettingsProvider({ children }: { children: React.ReactNode }) {
  const initialSettings = await client.fetch<Settings>(QUERIES.SETTINGS);

  return <SettingsProviderClient initialSettings={initialSettings}>{children}</SettingsProviderClient>;
}

export default SettingsProvider;
