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
      transform: 'translateX(47%)',
      height: '100vh',
      width: 'auto',

      '& g': {
        transformOrigin: 'center',
        transformBox: 'fill-box',
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
      //   opacity: isNavigationVisible ? 1 : 0,
      transformOrigin: 'center',
      transformBox: 'fill-box',
      //   filter: isNavigationVisible ? 'none' : 'blur(100px)',
      transform: isNavigationVisible ? 'translateX(0)' : 'translateX(-50%)',
      //important SEPARATE ANIMATE IN
      //important ANIMATE SEPARATE THIGNS IN
      transition: 'transform 5000ms ease-out 400ms',
    },

    barsGroup: {
      '& path': {
        '@media (prefers-color-scheme: dark)': {
          fill: '#F9F9F9',
          stroke: '#F9F9F9',
        },
      },
    },

    carsGroup: {
      transformOrigin: 'center',
      transformBox: 'fill-box',
    },

    car: {
      transformOrigin: 'center',
      transformBox: 'fill-box',
      '& path': {
        '@media (prefers-color-scheme: dark)': {
          fill: '#F9F9F9',
          stroke: '#F9F9F9',
        },
      },
    },

    // effect on white car borders
    carMask: {
      // mixBlendMode: 'difference', // revisit trippy
      // mixBlendMode: 'exclusion', // revisit also trippy
      // mixBlendMode: 'hue', // revisit gray
      // mixBlendMode: 'overlay',
      mixBlendMode: 'soft-light', // PLEASANT!
      '& path': {
        '@media (prefers-color-scheme: dark)': {
          fill: '#191716',
          stroke: '#191716',
        },
      },
    },

    ferrisWheelMasks: {
      mixBlendMode: 'overlay',
      '& circle': {
        '@media (prefers-color-scheme: dark)': {
          stroke: '#191716',
        },
      },
      '& ellipse': {
        '@media (prefers-color-scheme: dark)': {
          stroke: '#191716',
        },
      },
      
        '& path': {
          '@media (prefers-color-scheme: dark)': {
            fill: '#19171686',
            stroke: '#19171686',
          },
        },
    
    },

    ferrisWheelDarkModeStrokeWhite: {
      '@media (prefers-color-scheme: dark)': {
        stroke: '#F9F9F9',
      },
    },

    ferrisWheelDarkMoveFillWhite: {
      '@media (prefers-color-scheme: dark)': {
        fill: '#F9F9F9',
      },
    },
  })
);
