import { createStyles } from '@mantine/core';
// import * as animations from '@mo';
import { colors } from '@mo';

interface AwesomeMenuStylesProps {
  isNavigationVisible: boolean;

  rotation: number;
}

// const enterBounce = 'cubic-bezier(0, 0.96, 0.58, 1.58)';

const softWheelBezier = 'cubic-bezier(0.53, 0.24, 0.56, 0.84)';

const aggressiveWheelBezier = 'cubic-bezier(0.49, 0.21, 0.38, 1)';

const softCarBezier = 'cubic-bezier(0.54, 0.08, 0.28, 2.29)';

export const useAwesomeMenuStyles = createStyles(
  (theme, { isNavigationVisible, rotation }: AwesomeMenuStylesProps) => ({
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
      filter: isNavigationVisible ? 'none' : 'blur(40px) grayscale(80%)',
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
      transform: 'scale(0.9) translateX(-8%)',
      filter: isNavigationVisible ? 'none' : 'blur(30px) grayscale(80%)',
      opacity: isNavigationVisible ? 1 : 0.3,
      transition: 'transform 800ms ease-out, filter 800ms ease-out, opacity 800ms ease-out',

      '& #wheels': {
        opacity: 0,
        filter: 'blur(40px)',
        transition: 'filter 500ms ease-out',
      },
      // '& #cars': {
      //   opacity: 0,
      //   filter: 'blur(40px)',
      //   transition: 'filter 500ms ease-out',
      // },
      '& #base-legs, & #base-back': {
        opacity: 0,
        filter: 'blur(40px)',
        transition: 'filter 500ms ease-out',
      },
    },

    navigationEnter: {
      transform: 'scale(1.125) translateX(0)',
      transition: `transform 1400ms ${softWheelBezier} 240ms, filter 1400ms ease-out 240ms, opacity 1400ms ease-out 240ms`,

      '& #wheels': {
        opacity: 1,
        filter: 'none',
        transition: `opacity  1000ms ease-out 1000ms, filter  1000ms ease-out 1000ms`,
      },
      // '& #cars': {
      //   opacity: 1,
      //   filter: 'none',
      //   transition: `opacity  1000ms ease-out 1000ms, filter  1000ms ease-out 1000ms`,
      // },
      '& #base-legs, & #base-back': {
        opacity: 1,
        filter: 'none',
        transition: `opacity  1000ms ease-out 1000ms, filter  1000ms ease-out 1000ms`,
      },
    },

    // ANIMATE WITH ROTATE
    // ANIMATE WITH ROTATE
    // ANIMATE WITH ROTATE
    // ANIMATE WITH ROTATE
    // ANIMATE WITH ROTATE
    barsGroup: {
      transformOrigin: 'center',
      transformBox: 'fill-box',
      transform: `rotate(${rotation}deg)`,
      transition: `transform 1000ms ${aggressiveWheelBezier}`,
      path: {
        fill: theme.colorScheme === 'dark' ? colors.white : colors.black,
        stroke: theme.colorScheme === 'dark' ? colors.white : colors.black,
      },
    },

    // ANIMATE WITH ROTATE
    // ANIMATE WITH ROTATE
    // ANIMATE WITH ROTATE
    // ANIMATE WITH ROTATE
    // ANIMATE WITH ROTATE
    carsGroup: {
      transformOrigin: 'center',
      transformBox: 'fill-box',
      transform: `rotate(${rotation}deg)`,
      transition: `transform 1000ms ${aggressiveWheelBezier}`,
    },

    // REVERSE ANIMATE WITH ROTATE
    car: {
      transformOrigin: 'center',
      transformBox: 'fill-box',
      path: {
        fill: theme.colorScheme === 'dark' ? colors.white : colors.black,
        stroke: theme.colorScheme === 'dark' ? colors.white : colors.black,
      },
    },

    // -------------------- //
    // ------- SWAY ------- //
    // -------------------- //

    menuCarInner: {
      transformOrigin: '50% 0',
      transformBox: 'fill-box',
      transform: `rotate(${-rotation}deg)`,
      transition: `transform 1000ms ${softCarBezier} 180ms`,
    },

    carMask: {
      transformOrigin: 'center',
      transformBox: 'fill-box',

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
