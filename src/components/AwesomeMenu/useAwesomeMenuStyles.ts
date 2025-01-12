import { createStyles } from '@mantine/core';
import * as animations from '@mo';
import { colors } from '@mo';

interface AwesomeMenuStylesProps {
  isNavigationVisible: boolean;
  menuHovered: boolean;
}

const bounce = 'cubic-bezier(0, 0.96, 0.58, 1.58)';

export const useAwesomeMenuStyles = createStyles(
  (theme, { isNavigationVisible }: AwesomeMenuStylesProps) => ({
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
      path: {
        fill: theme.colorScheme === 'dark' ? colors.white : colors.black,
        stroke: theme.colorScheme === 'dark' ? colors.white : colors.black,
      },
    },

    carsGroup: {
      transformOrigin: 'center',
      transformBox: 'fill-box',
    },

    car: {
      transformOrigin: 'center',
      transformBox: 'fill-box',
      path: {
        fill: theme.colorScheme === 'dark' ? colors.white : colors.black,
        stroke: theme.colorScheme === 'dark' ? colors.white : colors.black,
      },
      '&.menuPause': {
        animationPlayState: 'paused',
      },
    },

    // -------------------- //
    // ------- SWAY ------- //
    // -------------------- //

    menuCarInner: {
      transformOrigin: '50% 0',
      transformBox: 'fill-box',
      '&.animate': {
        animation: `${animations.carSubtleSwayDamped} 2000ms 1`,
      },
    },

    carMask: {
      mixBlendMode: 'soft-light', // PLEASANT!
      path: {
        '&.bucketPath': {
          fill: theme.colorScheme === 'dark' ? colors.black : colors.white,
          stroke: theme.colorScheme === 'dark' ? colors.black : colors.white,
        },
      },
      '& g[id*="umbrella"] path, & g[id*="rail"] path, & g[id*="bar"] > path': {
        fill: theme.colorScheme === 'dark' ? colors.black : colors.white,
        stroke: theme.colorScheme === 'dark' ? colors.black : colors.white,
      },
      // PAUSE STATES
      '&.menuPause': {
        animationPlayState: 'paused',
      },
    },

    ferrisWheelMasks: {
      mixBlendMode: 'overlay',
      '& circle': {
        stroke: theme.colorScheme === 'dark' ? colors.black : colors.white,
      },
      '& ellipse': {
        stroke: theme.colorScheme === 'dark' ? colors.black : colors.white,
      },

      '& path': {
        '@media (prefers-color-scheme: dark)': {
          fill: theme.colorScheme === 'dark' ? `${colors.black}86` : colors.white,
          stroke: theme.colorScheme === 'dark' ? `${colors.black}86` : colors.white,
        },
      },
    },

    ferrisWheelDarkModeStrokeWhite: {
      stroke: theme.colorScheme === 'dark' ? colors.white : colors.black,
    },

    ferrisWheelDarkMoveFillWhite: {
      fill: theme.colorScheme === 'dark' ? colors.white : colors.black,
    },

    menuTooltip: {
      fontFamily: '"Urbanist", sans-serif',
      color: colors.white,
      fontWeight: 600,
      padding: '0.5em 1em',
    },
  })
);
