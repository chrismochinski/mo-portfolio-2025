import { createStyles } from '@mantine/core';

interface HomeStylesProps {
  isMenuFullyLoaded: boolean;
  isNavigating: boolean;
}

export const useHomeStyles = createStyles((_, { isMenuFullyLoaded, isNavigating }: HomeStylesProps) => ({
  homeWrapper: {
    backgroundColor: 'transparent',
    zIndex: 5,
  },

  salutation: {
    transformOrigin: '50% 50%',
    opacity: isMenuFullyLoaded ? 1 : 0,
    filter: isMenuFullyLoaded ? 'none' : 'blur(14px)',
    transform: isMenuFullyLoaded ? 'translateY(0) scaleX(1)' : 'translateY(-50px) scaleX(1.2)',
    transition: 'transform 900ms ease-out, opacity 500ms ease-out, filter 500ms ease-out',
    
  },

}));
