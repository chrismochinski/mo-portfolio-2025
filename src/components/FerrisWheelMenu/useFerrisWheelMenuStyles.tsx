import { createStyles } from '@mantine/emotion';
import { FerrisWheelMenuProps } from '.';

export const useFerrisWheelMenuStyles = createStyles(
  (_, { isNavigationVisible }: FerrisWheelMenuProps) => ({
    ferrisWheelMenuSvg: {
      // mixBlendMode: isNavigationVisible ? "overlay" : "saturation",
      position: 'absolute',
      top: '50%',
      right: '80%',
      opacity: isNavigationVisible ? 1 : 0.2,
      filter: isNavigationVisible ? 'none' : 'blur(15px) brightness(0.5)',
      transform: isNavigationVisible
        ? 'translateY(-50%) translateX(20%)'
        : 'translateY(-50%) translateX(-10%)',
      height: '90vh',
      width: 'auto',
      transition:
        'transform 2000ms ease-out, opacity 140ms ease-out, filter 2000ms ease-out, mix-blend-mode 3000ms ease-out',

      '& > g': {
        transformOrigin: 'center',
        transformBox: 'fill-box',
      },

      // dark mode             
      '@media (prefers-color-scheme: dark)': {
        '& path': {
          fill: '#F9F9F9',
          stroke: '#F9F9F9',
          '&[fill="white"]': {
            fill: '#191716',
          },
        },
        '& circle': {
          stroke: '#F9F9F9',
          '&[stroke="white"]': {
            stroke: '#191716',
          },
        },
      },
    },

    car: {
      transformOrigin: 'center',
      transformBox: 'fill-box',
    },

    mask: {
      mixBlendMode: 'overlay',
    },
  })
);
