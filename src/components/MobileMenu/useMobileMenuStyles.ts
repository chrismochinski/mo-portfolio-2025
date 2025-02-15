import { createStyles } from '@mantine/core';
import { mq, colors } from '@mo';

interface MobileMenuStylesProps {
  isNavigationVisible: boolean;
}

export const useMobileMenuStyles = createStyles(
  (theme, { isNavigationVisible }: MobileMenuStylesProps) => ({
    mobileMenu: {
      cursor: 'pointer',
      position: 'fixed',
      top: 0,
      right: 0,
      padding: '0.75em 0.6em',
      width: 'clamp(84px, 17vw, 100px)',
      height: 'auto',
      transform: 'translateX(100%)',
      transition: 'transform 700ms ease-in-out, opacity 600ms ease-in-out 100ms',
      opacity: 0,
      '& path': {
        fill: theme.colorScheme === 'dark' ? colors.white : colors.black,
      },
      '& circle': {
        stroke: theme.colorScheme === 'dark' ? colors.white : colors.black,
        '&[id*="mask"]': {
          stroke: theme.colorScheme === 'dark' ? colors.black : colors.white,
        },
      },
      [mq.mobile]: {
        transform: isNavigationVisible ? 'translateX(0)' : 'translateX(100%)',
        opacity: isNavigationVisible ? 1 : 0,
        top: 0,
        right: 0,
      },

      '&.hidden': {
        visibility: 'hidden',
        opacity: 0,
        transform: 'translateX(100%)',
        pointerEvents: 'none',
        transition: 'transform 700ms ease-in-out, opacity 600ms ease-in-out',

      },
    },
    mobileMenuBars: {
      // animate ferris wheel spin
      transformOrigin: '50% 50%',
      transformBox: 'fill-box',
      // animation: `${animations.slowSpin} 10s linear infinite`,
    },

    mobileMenuCars: {
      transformOrigin: '50% 50%',
      transformBox: 'fill-box',
      // animation: `${animations.slowSpin} 10s linear infinite`,
      '&{id*="car"}': {
        transformOrigin: '50% 50%',
        transformBox: 'fill-box',
        // animation: `${animations.slowSpinReverse} 20s linear infinite`,
      },
    },

    mobileMenuCar: {
      transformOrigin: '50% 50%',
      transformBox: 'fill-box',
    },
  })
);
