import { createContext } from "react";

export interface SiteContextType {
  isNavigationVisible: boolean;
  setIsNavigationVisible: React.Dispatch<React.SetStateAction<boolean>>;
  toggleNavigation: () => void;
  resetNavigation: () => void;
  introIconHovered: boolean;
  setIntroIconHovered: React.Dispatch<React.SetStateAction<boolean>>;
  hoveredCar: string | null;
  setHoveredCar: React.Dispatch<React.SetStateAction<string | null>>;
  clickedCar: string | null;
  setClickedCar: React.Dispatch<React.SetStateAction<string | null>>;
}

export const SiteContext = createContext<SiteContextType | undefined>(undefined);

