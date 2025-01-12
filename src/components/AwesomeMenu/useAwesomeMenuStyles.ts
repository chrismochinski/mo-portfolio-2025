import { createStyles } from '@mantine/core';
import { colors } from '../../Global';
import * as animations from '../../Global/Animations';

interface AwesomeMenuStylesProps {
  isNavigationVisible: boolean;
  menuHovered: boolean;
}

const bounce = 'cubic-bezier(0, 0.96, 0.58, 1.58)';

export const useAwesomeMenuStyles = createStyles(
  (_, { isNavigationVisible }: AwesomeMenuStylesProps) => ({
    awesomeMenuSvgFull: {
      overflow: 'hidden',
      position: 'absolute',
      top: '0',
      right: '100%',
      transformOrigin: 'center',
      transformBox: 'fill-box',
      transform: 'translateX(41%)',
      height: '100vh',
      width: 'auto',
      cursor: 'pointer',

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
        transform: isNavigationVisible
          ? 'scale(1) translate(8%,0)'
          : 'scale(1.3) translate(-12%,0)',
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
      transform: 'scale(1.125) translateX(-45%)',
      transition: 'transform 800ms ease-out',

      '#bars': {
        opacity: 0,
        filter: 'blur(40px)',
        transition: 'filter 500ms ease-out',
      },
      '& #wheels': {
        opacity: 0,
        filter: 'blur(40px)',
        transition: 'filter 500ms ease-out',
      },
      '& #cars': {
        opacity: 0,
        filter: 'blur(40px)',
        transition: 'filter 500ms ease-out',
      },
      '& #base-legs, & #base-back': {
        opacity: 0,
        filter: 'blur(40px)',
        transition: 'filter 500ms ease-out',
      },
    },

    navigationEnter: {
      transform: 'scale(1.125) translateX(0)',
      transition: `transform 600ms ${bounce} 900ms`,

      '& #bars': {
        opacity: 1,
        filter: 'none',
        transition: `opacity  1000ms ease-out 1000ms, filter  1000ms ease-out 1000ms`,
      },
      '& #wheels': {
        opacity: 1,
        filter: 'none',
        transition: `opacity  1000ms ease-out 1000ms, filter  1000ms ease-out 1000ms`,
      },
      '& #cars': {
        opacity: 1,
        filter: 'none',
        transition: `opacity  1000ms ease-out 1000ms, filter  1000ms ease-out 1000ms`,
      },
      '& #base-legs, & #base-back': {
        opacity: 1,
        filter: 'none',
        transition: `opacity  1000ms ease-out 1000ms, filter  1000ms ease-out 1000ms`,
      },
    },

    barsGroup: {
      '& path': {
        // dark mode
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
        // dark mode
        '@media (prefers-color-scheme: dark)': {
          fill: colors.white,
          stroke: colors.white,
        },
      },
      '&.menuPause': {
        animationPlayState: 'paused',
      },
    },

    // SWAY
    // SWAY
    // SWAY
    menuCarInner: {
      transformOrigin: '50% 0',
      transformBox: 'fill-box',
      '&.animate': {
        animation: `${animations.carSubtleSwayDamped} 2000ms 1`,
      },
    },

    carMask: {
      mixBlendMode: 'soft-light', // PLEASANT!
    

      // dark mode
      '@media (prefers-color-scheme: dark)': {
        '& path': {
          '&.bucketPath': {
            fill: colors.black,
            stroke: colors.black,
          },
        },
        '& g[id*="umbrella"] path, & g[id*="rail"] path, & g[id*="bar"] > path': {
          fill: colors.black,
          stroke: colors.black,
        },
      },
      // PAUSE STATES
      '&.menuPause': {
        animationPlayState: 'paused',
      },
    },

    ferrisWheelMasks: {
      mixBlendMode: 'overlay',
      '& circle': {
        // dark mode
        '@media (prefers-color-scheme: dark)': {
          stroke: colors.black,
        },
      },
      '& ellipse': {
        // dark mode
        '@media (prefers-color-scheme: dark)': {
          stroke: colors.black,
        },
      },

      '& path': {
        // dark mode
        '@media (prefers-color-scheme: dark)': {
          fill: `${colors.black}86`,
          stroke: `${colors.black}86`,
        },
      },
    },

    ferrisWheelDarkModeStrokeWhite: {
      // dark mode
      '@media (prefers-color-scheme: dark)': {
        stroke: colors.white,
      },
    },

    ferrisWheelDarkMoveFillWhite: {
      // dark mode
      '@media (prefers-color-scheme: dark)': {
        fill: colors.white,
      },
    },

    menuTooltip: {
      fontFamily: '"Urbanist", sans-serif',
      color: colors.white,
      fontWeight: 600,
      padding: '0.5em 1em',
    },
  })
);
