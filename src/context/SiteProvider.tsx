import React, { useEffect, useState } from 'react';
import { SiteContext, SiteContextType } from './SiteContext';

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [isNavigationVisible, setIsNavigationVisible] = useState(false);
  const [isMenuFullyLoaded, setIsMenuFullyLoaded] = useState(false);
  const [hasInteractedWithIntroIcon, setHasInteractedWithIntroIcon] = useState(false);
  const [introIconHovered, setIntroIconHovered] = useState(false);
  const [menuHovered, setMenuHovered] = useState(false);
  const [linkName, setLinkName] = useState<string | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);

  // Timer logic: when navigation is visible, mark the menu as fully loaded after 1000ms.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isNavigationVisible) {
      timer = setTimeout(() => {
        console.log('isMenuFullyLoaded turning true');
        setIsMenuFullyLoaded(true);
      }, 1000);
    } else {
      setIsMenuFullyLoaded(false);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isNavigationVisible]);

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
    isMenuFullyLoaded,
    setIsMenuFullyLoaded,
    toggleNavigation,
    resetNavigation,
    hasInteractedWithIntroIcon, 
    setHasInteractedWithIntroIcon,
    introIconHovered,
    setIntroIconHovered,
    menuHovered,
    setMenuHovered,
    linkName,
    setLinkName,
    isNavigating,
    setIsNavigating,
  };

  return <SiteContext.Provider value={contextValue}>{children}</SiteContext.Provider>;
}
