import { createStyles } from '@mantine/core';
import { colors } from '@mo';

interface AwesomeMenuStylesProps {
  isNavigationVisible: boolean;
  linkName: string | null;
  rotation: number;
}

const getTooltipColor = (linkName: string | null) => {
  switch (linkName) {
    case 'Home':
      return colors.red;
    case 'About':
      return colors.emerald;
    case 'Projects':
      return colors.orange;
    case 'Contact':
      return colors.darkBlue;
    default:
      return colors.black;
  }
};

const softWheelBezier = 'cubic-bezier(0.53, 0.24, 0.56, 0.84)';

const softCarBezier = 'cubic-bezier(0.44, 0.38, 0.47, 1.87)';

// const barBezier = 'cubic-bezier(0.03, 0.96, 0.59, 0.99)';

export const useAwesomeMenuStyles = createStyles(
  (theme, { isNavigationVisible, rotation, linkName }: AwesomeMenuStylesProps) => ({
    awesomeMenuSvgFull: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%) translateX(41%)',
      right: '100%',
      transformOrigin: 'center',
      transformBox: 'fill-box',
      height: '100vh',
      maxHeight: '1000px',
      width: 'auto',
      cursor: linkName ? 'pointer' : 'default',

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
      filter: isNavigationVisible ? 'none' : 'blur(60px) grayscale(40%)',
      opacity: isNavigationVisible ? 1 : 0.7,
      transition: 'filter 1400ms ease-out, opacity 1400ms ease-out',
      '& > g': {
        transformOrigin: 'center',
        transformBox: 'fill-box',
        transform: isNavigationVisible
          ? 'scale(0.95) translate(8%,0)'
          : 'scale(1.3) translate(-10%,0)',
        transition: 'transform 1200ms ease-out',
      },
    },

    // ----------- FERRIS WHEEL GROUP ----------- //
    // ----------- FERRIS WHEEL GROUP ----------- //
    // ----------- FERRIS WHEEL GROUP ----------- //
    // ----------- FERRIS WHEEL GROUP ----------- //
    ferrisWheelMenu: {
      transformOrigin: 'center',
      transformBox: 'fill-box',
      transform: 'scale(1.125)',
      '& #bars': {
        path: {
          transformOrigin: 'center',
          transformBox: 'fill-box',
          opacity: 0,
          filter: 'blur(80px)',
          transition: `filter 1100ms ease-out, opacity 700ms ease-out`,
        },
      },
      '& [id*="car-"]': {
        opacity: 0,
        filter: 'blur(80px)',
        transform: 'scaleX(1.1)',
        transitionProperty: 'display opacity filter transform',
        transitionDuration: '1000ms',
        transitionBehavior: 'allow-discrete',
        '@startingStyle': {
          display: 'none',
          transform: 'scaleX(2)',
          filter: 'blur(50px)',
          opacity: 0,
        },
      },
    },

    // FERRIS WHEEL WHEN NAV BECOMES VISIBLE
    navigationEnter: {
      opacity: 1,
      transform: 'scale(1.125) translateX(0)',

      '& #bars': {
        path: {
          opacity: 1,
          filter: 'none',
          transitionDelay: '500ms',
        },
      },
      '& [id*="car-"]': {
        opacity: 1,
        display: 'block',
        transform: 'scaleX(1)',
        filter: 'blur(0px)',
        transitionDelay: '700ms',
        transitionDuration: '1000ms',
      },
      '& #base-legs, & #base-back': {
        opacity: 1,
        filter: 'none',
        transitionDelay: '600ms',
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
            transform: linkName === 'Home' ? 'scale(1.077)' : 'scale(1)',
          },
        },
        '&.car-about': {
          '& #black-2': {
            transform: linkName === 'About' ? 'scale(1.077)' : 'scale(1)',
          },
        },
        '&.car-projects': {
          '& #black-3': {
            transform: linkName === 'Projects' ? 'scale(1.077)' : 'scale(1)',
          },
        },
        '&.car-contact': {
          '& #black-4': {
            transform: linkName === 'Contact' ? 'scale(1.077)' : 'scale(1)',
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
          transform: linkName === 'Home' ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 500ms ease-out',
        },
      },
      '&.car-mask-about': {
        '& #black-2-mask': {
          transform: linkName === 'About' ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 500ms ease-out',
        },
      },
      '&.car-mask-projects': {
        '& #black-3-mask': {
          transform: linkName === 'Projects' ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 500ms ease-out',
        },
      },
      '&.car-mask-contact': {
        '& #black-4-mask': {
          transform: linkName === 'Contact' ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 500ms ease-out',
        },
      },
    },

    ferrisWheelMasks: {
      mixBlendMode: 'overlay',
      '& circle': {
        filter: isNavigationVisible ? 'none' : 'blur(12px)',
        transition: 'stroke-width 1500ms ease-out, filter 1500ms ease-out',
        stroke: theme.colorScheme === 'dark' ? colors.black : colors.white,
        // transitionDelay: '500ms',
      },
      '& ellipse': {
        filter: isNavigationVisible ? 'none' : 'blur(12px)',
        transition: 'stroke-width 1500ms ease-out, filter 1500ms ease-out',
        stroke: theme.colorScheme === 'dark' ? colors.black : colors.white,
        // transitionDelay: '500ms',
      },

      '& path': {
        '@media (prefers-color-scheme: dark)': {
          fill: theme.colorScheme === 'dark' ? `${colors.black}86` : colors.white,
          stroke: theme.colorScheme === 'dark' ? `${colors.black}86` : colors.white,
        },
      },
    },

    // fill unfortunate gap in umbrella
    umbrellaBody: {
      '& > path': {
        '&:first-of-type': {
          transformOrigin: '100% 50%',
          transformBox: 'fill-box',
          transform: 'scaleX(1.025)',
        },
        '&:last-of-type': {
          transformOrigin: '0% 50%',
          transformBox: 'fill-box',
          transform: 'scaleX(1.025)',
        },
      },
    },

    ferrisWheelDarkModeStrokeWhite: {
      // wheels
      stroke: theme.colorScheme === 'dark' ? colors.white : colors.black,
    },

    ferrisWheelDarkModeFillWhite: {
      // legs
      fill: theme.colorScheme === 'dark' ? colors.white : colors.black,
    },

    menuTooltip: {
      fontFamily: '"Urbanist", sans-serif',
      display: isNavigationVisible && linkName ? 'block' : 'none',
      color: colors.white,
      backgroundColor: getTooltipColor(linkName),
      fontWeight: 600,
      fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
      padding: '0.2em 0.6em',
      boxShadow: '1px 2px 8px #00000070',
    },

    // ------- ANIMATED PARTS ------- //
    ferrisWheelAnimationPart: {
      opacity: isNavigationVisible ? 1 : 0,
      filter: isNavigationVisible ? 'none' : 'blur(60px)',
      transition: 'opacity 400ms ease-out, filter 700ms ease-out',
      transitionDelay: isNavigationVisible ? '500ms' : '0ms',
    },

    hoverZone: {
      fill: 'transparent', // Transparent by default
      stroke: 'rgba(255, 255, 255, 0.3)', // Light white stroke for visibility
      strokeWidth: 1,
      pointerEvents: 'none', // Prevents interfering with interactions
    },
  
    homeZone: { fill: 'rgba(0, 0, 255, 0.4)' }, // Light Blue (Home)
    aboutZone: { fill: 'rgba(0, 255, 0, 0.4)' }, // Light Green (About)
    projectsZone: { fill: 'rgba(255, 165, 0, 0.4)' }, // Light Orange (Projects)
    contactZone: { fill: 'rgba(255, 0, 255, 0.4)' }, // Light Purple (Contact)
  })
);
