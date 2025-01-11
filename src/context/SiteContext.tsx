import { createContext } from 'react';

export interface SiteContextType {
  isNavigationVisible: boolean;
  setIsNavigationVisible: React.Dispatch<React.SetStateAction<boolean>>;
  toggleNavigation: () => void;
  resetNavigation: () => void;
  introIconHovered: boolean;
  setIntroIconHovered: React.Dispatch<React.SetStateAction<boolean>>;
  menuHovered: boolean;
  setMenuHovered: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SiteContext = createContext<SiteContextType | undefined>(undefined);
