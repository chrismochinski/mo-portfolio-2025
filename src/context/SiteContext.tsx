import { createContext } from 'react';

export interface SiteContextType {
  isNavigationVisible: boolean;
  setIsNavigationVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuFullyLoaded: boolean;
  setIsMenuFullyLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  toggleNavigation: () => void;
  resetNavigation: () => void;
  hasInteractedWithIntroIcon: boolean;
  setHasInteractedWithIntroIcon: React.Dispatch<React.SetStateAction<boolean>>;
  introIconHovered: boolean;
  setIntroIconHovered: React.Dispatch<React.SetStateAction<boolean>>;
  menuHovered: boolean;
  setMenuHovered: React.Dispatch<React.SetStateAction<boolean>>;
  linkName: string | null;
  setLinkName: React.Dispatch<React.SetStateAction<string | null>>;
}

export const SiteContext = createContext<SiteContextType | undefined>(undefined);
