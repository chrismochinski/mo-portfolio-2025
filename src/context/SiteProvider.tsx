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
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  // detect device type carefully 
  useEffect(() => {
    const detectDeviceType = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const screenWidth = window.innerWidth;
  
      if (/iphone|ipod|android.*mobile|blackberry|windows phone/.test(userAgent)) {
        setDeviceType('mobile');
      } else if (
        /ipad|android(?!.*mobile)/.test(userAgent) || 
        (isTouch && screenWidth > 600 && screenWidth <= 1024) // Fallback for Chrome Emulator inaccuracies
      ) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };
  
    detectDeviceType();
    window.addEventListener('resize', detectDeviceType);
  
    return () => {
      window.removeEventListener('resize', detectDeviceType);
    };
  }, []);
  

  useEffect(() => {
    console.log(`Detected device type: ${deviceType}`);
  }, [deviceType]);



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

  // ALL CONTEXT
  const contextValue: SiteContextType = {
    isNavigationVisible,
    setIsNavigationVisible,
    isMenuFullyLoaded,
    setIsMenuFullyLoaded,
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
    deviceType,
  };

  return <SiteContext.Provider value={contextValue}>{children}</SiteContext.Provider>;
}
