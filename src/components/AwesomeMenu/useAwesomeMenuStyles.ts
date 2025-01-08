import { createStyles } from '@mantine/emotion';
import { AwesomeMenuProps } from '.';

export const useAwesomeMenuStyles = createStyles(
  (_, { isNavigationVisible }: AwesomeMenuProps) => ({
    awesomeMenuSvgFull: {
      overflow: 'hidden',
      position: 'absolute',
      top: '0',
      right: '100%', // revisit
      transformOrigin: 'center',
      transformBox: 'fill-box',
      transform: 'translateX(48%)',
      height: '100vh',
      width: 'auto',

      '& g': {
        transformOrigin: 'center',
        transformBox: 'fill-box',
      },

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

    colorShapes: {
      position: 'absolute',
      transformOrigin: 'center',
      transformBox: 'fill-box',
      filter: isNavigationVisible ? 'none' : 'blur(40px)',
      opacity: isNavigationVisible ? 1 : 0.7,
      transition: 'filter 1400ms ease-out, opacity 1400ms ease-out',
    },

    ferrisWheelMenu: {
      opacity: isNavigationVisible ? 1 : 0,
      transformOrigin: 'center',
      transformBox: 'fill-box',
      filter: isNavigationVisible ? 'none' : 'blur(30px)',
      transform: isNavigationVisible ? 'translateX(0)' : 'translateX(-20%)',
      transition:
        'transform 3000ms ease-out 300ms, opacity 2200ms ease-out 600ms, filter 2500ms ease-out 1000ms',
    },

    carsGroup: {
      transformOrigin: 'center',
      transformBox: 'fill-box',
    },

    car: {
      transformOrigin: 'center',
      transformBox: 'fill-box',
    },

    // effect on white car borders
    carMask: {

        // mixBlendMode: 'difference', // revisit trippy
        // mixBlendMode: 'exclusion', // revisit also trippy
        // mixBlendMode: 'hue', // revisit gray
        // mixBlendMode: 'overlay', 
        mixBlendMode: 'soft-light', // PLEASANT!
    },
  })
);
