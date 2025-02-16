'use client';

import type { Settings } from '@/contexts/SettingsContext';
import SettingsContext from '@/contexts/SettingsContext';

interface SettingsProviderClientProps {
  initialSettings: Settings;
  children: React.ReactNode;
}

function SettingsProviderClient({ initialSettings, children }: SettingsProviderClientProps) {
  return (
    <SettingsContext.Provider value={initialSettings}>
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsProviderClient;
