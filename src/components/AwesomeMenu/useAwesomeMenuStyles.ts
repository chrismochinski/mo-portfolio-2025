import { createStyles } from '@mantine/core';
// import * as animations from '@mo';
import { colors } from '@mo';

interface AwesomeMenuStylesProps {
  isNavigationVisible: boolean;
  tooltipLabel: string | null;
  rotation: number;
}

// const enterBounce = 'cubic-bezier(0, 0.96, 0.58, 1.58)';

const softWheelBezier = 'cubic-bezier(0.53, 0.24, 0.56, 0.84)';

const softCarBezier = 'cubic-bezier(0.44, 0.38, 0.47, 1.87)';

const barBezier = 'cubic-bezier(0.03, 0.96, 0.59, 0.99)';

export const useAwesomeMenuStyles = createStyles(
  (theme, { isNavigationVisible, rotation, tooltipLabel }: AwesomeMenuStylesProps) => ({
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
      cursor: tooltipLabel ? 'pointer' : 'default',

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
      filter: isNavigationVisible ? 'none' : 'blur(40px) grayscale(90%)',
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
      transition: 'transform 800ms ease-out, filter 800ms ease-out, opacity 800ms ease-out',
      '& #wheels': {
        circle: {
          opacity: 0,
          filter: 'blur(80px)',
          transition: 'filter 500ms ease-out, opacity 500ms ease-out',
        },
      },

      '& #bars': {
        path: {
          transformOrigin: 'center',
          transformBox: 'fill-box',
          opacity: 0,
          filter: 'blur(80px)',
          // transform: 'rotate(-600deg)',
          transition: `filter 1200ms ease-out 200ms, opacity 900ms ease-out 200ms, transform 1600ms ${softWheelBezier}`,
        },
      },

      '& [id*="wheel-mask"]': {
        opacity: 1, // NO ANIMATION (or try display?)
      },
      '& [id*="car-"]': {
        opacity: 0,
        filter: 'blur(60px)',
        transitionProperty: 'display opacity filter',
        transitionDuration: '1000ms',
        transitionDelay: '000ms',
        transitionBehavior: 'allow-discrete',
        '@startingStyle': {
          display: 'none',
          filter: 'blur(50px)',
          opacity: 0,
        },
      },
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
        circle: {
          opacity: 1,
          filter: 'blur(0px)',
          transition: `opacity 800ms ease-out 800ms, filter 1400ms ease-out 1000ms`,
        },
      },

      '& #bars': {
        path: {
          opacity: 1,
          filter: 'none',
          // transform: 'rotate(0deg)',
          transition: `opacity 800ms ease-out 580ms, filter 1400ms ease-out 1000ms, transform 1700ms ${barBezier} 400ms`,
        },
      },
      '& [id*="car-"]': {
        opacity: 1,
        display: 'block',
        filter: 'blur(0px)',
        transitionDelay: '1400ms',
        transitionDuration: '1200ms',
      },
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
      transition: `transform 500ms ${softWheelBezier}`,
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
      transition: `transform 500ms ${softWheelBezier}`,
    },

    // REVERSE ANIMATE WITH ROTATE
    car: {
      transformOrigin: 'center',
      transformBox: 'fill-box',
      path: {
        fill: theme.colorScheme === 'dark' ? colors.white : colors.black,
        stroke: theme.colorScheme === 'dark' ? colors.white : colors.black,
      },

      // --------------------------------- //
      // --------------------------------- //
      // ----- HOVER ANIMATIONS CARS ----- //
      // --------------------------------- //
      // --------------------------------- //
      '&[class*="car-"]': {
        '& [id*="black-"]': {
          transformOrigin: '50% 100%',
          transformBox: 'fill-box',
          transition: `transform 350ms ease-in-out`,
        },
        '&.car-home': {
          '& #black-1': {
            transform: tooltipLabel === 'Home' ? 'scale(1.077)' : 'scale(1)',
          },
        },
        '&.car-about': {
          '& #black-2': {
            transform: tooltipLabel === 'About' ? 'scale(1.077)' : 'scale(1)',
          },
        },
        '&.car-projects': {
          '& #black-3': {
            transform: tooltipLabel === 'Projects' ? 'scale(1.077)' : 'scale(1)',
          },
        },
        '&.car-contact': {
          '& #black-4': {
            transform: tooltipLabel === 'Contact' ? 'scale(1.077)' : 'scale(1)',
          },
        },
      },
    },

    // -------------------- //
    // ------- SWAY ------- //
    // -------------------- //

    menuCarInner: {
      transformOrigin: '50% 0',
      transformBox: 'fill-box',
      transform: `rotate(${-rotation}deg)`,
      transition: `transform 1150ms ${softCarBezier} 220ms`,
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

      // --------------------------------- //
      // --------------------------------- //
      // ----- HOVER ANIMATE CAR MASK ---- //
      // --------------------------------- //
      // --------------------------------- //
      '& [id*="black-"]': {
        transformOrigin: '50% 80%',
        transformBox: 'fill-box',
        transition: `transform 350ms ease-in-out`,
      },

      '&.car-mask-home': { 
        '& #black-1-mask': {
          transform: tooltipLabel === 'Home' ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 500ms ease-out',
        },
      },
      '&.car-mask-about': {
        '& #black-2-mask': {
          transform: tooltipLabel === 'About' ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 500ms ease-out',
        },
      },
      '&.car-mask-projects': {
        '& #black-3-mask': {
          transform: tooltipLabel === 'Projects' ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 500ms ease-out',
        },
      },
      '&.car-mask-contact': {
        '& #black-4-mask': {
          transform: tooltipLabel === 'Contact' ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 500ms ease-out',
        },
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
      display: tooltipLabel ? 'block' : 'none',
      color: colors.white,
      fontWeight: 600,
      fontSize: 'clamp(1.25em, 2.5vw, 2em)',
      padding: '0.25em 0.65em',
    },
  })
);
