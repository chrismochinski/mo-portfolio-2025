import { createStyles } from '@mantine/emotion';
import { AwesomeMenuProps } from '.';
import { colors } from '../../Global';

export const useAwesomeMenuStyles = createStyles(
  (_, { isNavigationVisible }: AwesomeMenuProps) => ({
    awesomeMenuSvgFull: {
      overflow: 'hidden',
      position: 'absolute',
      top: '0',
      right: '100%', // revisit
      transformOrigin: 'center',
      transformBox: 'fill-box',
      transform: 'translateX(41%)',
      height: '100vh',
      width: 'auto',

      '& g': {
        transformOrigin: 'center',
        transformBox: 'fill-box',
      },
    },

    // ----------- COLOR SHAPES GROUP ----------- //
    // ----------- COLOR SHAPES GROUP ----------- //
    // ----------- COLOR SHAPES GROUP ----------- //
    // ----------- COLOR SHAPES GROUP ----------- //

    colorShapes: {
      overflow: 'hidden',
      position: 'absolute',
      transformOrigin: 'center',
      transformBox: 'fill-box',
      filter: isNavigationVisible ? 'none' : 'blur(40px)',
      opacity: isNavigationVisible ? 1 : 0.7,
      transition: 'filter 1400ms ease-out, opacity 1400ms ease-out',
      '& > g': {
        transformOrigin: 'center',
        transformBox: 'fill-box',
        transform: isNavigationVisible ? 'scale(1) translate(8%,0)' : 'scale(1.3) translate(-12%,0)',
        transition: 'transform 2000ms ease-out 200ms',
      },
    },

    // ----------- FERRIS WHEEL GROUP ----------- //
    // ----------- FERRIS WHEEL GROUP ----------- //
    // ----------- FERRIS WHEEL GROUP ----------- //
    // ----------- FERRIS WHEEL GROUP ----------- //
    ferrisWheelMenu: {
      transformOrigin: 'center',
      transformBox: 'fill-box',
      transform: 'scale(0.8) translateX(-45%)',
      transition: 'transform 3000ms ease-out 1100ms',

     
      '#bars': {
        opacity: 0,
        filter: 'blur(40px)',
        transition: 'opacity 2000ms ease-out 3000ms, filter 1000ms ease-out 3800ms',
      },
      '& #wheels': {
        opacity: 0,
        filter: 'blur(40px)',
        transition: 'opacity 2000ms ease-out 3000ms, filter 1000ms ease-out 3800ms',
      },
      '& #cars': {
        opacity: 0,
        filter: 'blur(40px)',
        transition: 'opacity 2000ms ease-out 3000ms, filter 1000ms ease-out 3800ms',
      },
    },

    navigationEnter: {
      transform: 'scale(1.125) translateX(0)',
      
      '& #bars': {
        opacity: 1,
        filter: 'none',
      },
      '& #wheels': {
        opacity: 1,
        filter: 'none',
      },
      '& #cars': {
        opacity: 1,
        filter: 'none',
      },
    },

    barsGroup: {
      '& path': {
        '@media (prefers-color-scheme: dark)': {
          fill: colors.white,
          stroke: colors.white,
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
          fill: colors.white,
          stroke: colors.white,
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
          fill: colors.black,
          stroke: colors.black,
        },
      },
    },

    ferrisWheelMasks: {
      mixBlendMode: 'overlay',
      '& circle': {
        '@media (prefers-color-scheme: dark)': {
          stroke: colors.black,
        },
      },
      '& ellipse': {
        '@media (prefers-color-scheme: dark)': {
          stroke: colors.black,
        },
      },

      '& path': {
        '@media (prefers-color-scheme: dark)': {
          fill: `${colors.black}86`,
          stroke: `${colors.black}86`,
        },
      },
    },

    ferrisWheelDarkModeStrokeWhite: {
      '@media (prefers-color-scheme: dark)': {
        stroke: colors.white,
      },
    },

    ferrisWheelDarkMoveFillWhite: {
      '@media (prefers-color-scheme: dark)': {
        fill: colors.white,
      },
    },
  })
);
