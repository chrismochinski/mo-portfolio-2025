import React, { useState } from 'react';
import { SiteContext, SiteContextType } from './SiteContext';

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [isNavigationVisible, setIsNavigationVisible] = useState(false);
  const [introIconHovered, setIntroIconHovered] = useState(false);
  const [ menuHovered, setMenuHovered] = useState(false);


  // CONTEXT - show navigation - on click or enter route via URL slug
  const toggleNavigation = () => {
    setIsNavigationVisible((prev) => !prev);
  };

  // CONTEXT - reset navigation if user clicks back or ends up back at intro / route
  const resetNavigation = () => {
    setIsNavigationVisible(false);
  };

  // ALL CONTEXT
  const contextValue: SiteContextType = {
    isNavigationVisible,
    setIsNavigationVisible,
    toggleNavigation,
    resetNavigation,
    introIconHovered,
    setIntroIconHovered,
    menuHovered,
    setMenuHovered,
  };

  return <SiteContext.Provider value={contextValue}>{children}</SiteContext.Provider>;
}
