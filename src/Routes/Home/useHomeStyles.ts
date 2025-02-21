import { createStyles } from '@mantine/core';

interface HomeStylesProps {
  isNavigationVisible: boolean;
  isMenuFullyLoaded: boolean;
}

export const useHomeStyles = createStyles((_, { isNavigationVisible, isMenuFullyLoaded }: HomeStylesProps) => ({
  homeWrapper: {
    backgroundColor: 'transparent',
    zIndex: 5,
  },

  salutation: {
    transformOrigin: '50% 50%',
    opacity: isNavigationVisible ? 1 : 0,
    filter: isNavigationVisible ? 'none' : 'blur(14px)',
    transform: isNavigationVisible ? 'translateY(0) scaleX(1)' : 'translateY(-50px) scaleX(1.2)',
    transition: 'transform 1400ms ease-out, opacity 900ms ease-out, filter 900ms ease-out',
    
  },

}));
