import { createStyles, MantineTheme } from '@mantine/core';
import { colors, mq, smoothBezierOut } from '@mo';

interface AwesomeMenuStylesProps {
  isNavigationVisible: boolean;
  linkName: string | null;
  rotation: number;
  deviceType: 'mobile' | 'tablet' | 'desktop';
}

export const getThemedColor = (
  theme: MantineTheme,
  lightColor: string,
  darkColor: string
): string => (theme.colorScheme === 'light' ? lightColor : darkColor);

export const generateGlow = (
  theme: MantineTheme,
  activeLink: string | null,
  currentLink: string,
  lightColor: string,
  darkColor: string
) => {
  if (activeLink !== currentLink) return 'none'; // No glow if not hovered

  const glowColor = getThemedColor(theme, lightColor, darkColor); // Get correct color
  return `
    drop-shadow(40px 40px 40px ${glowColor}50) 
    drop-shadow(-40px -40px 40px ${glowColor}50) 
    drop-shadow(40px -40px 40px ${glowColor}50) 
    drop-shadow(-40px 40px 40px ${glowColor}50)
  `;
};

const softWheelBezier = 'cubic-bezier(0.53, 0.24, 0.56, 0.84)';

const softCarBezier = 'cubic-bezier(0.44, 0.38, 0.47, 1.87)';

export const useAwesomeMenuStyles = createStyles(
  (theme, { isNavigationVisible, rotation, linkName, deviceType }: AwesomeMenuStylesProps) => ({
    // menuWrapper: {
    //   containerType: 'inline-size',
    // },

    awesomeMenuSvgFull: {
      position: 'absolute',
      overflow: deviceType === 'desktop' ? 'visible !important' : 'hidden',
      top: '50%',
      transform: 'translateY(-50%) translateX(41%)',
      right: '100%',
      transformOrigin: 'center',
      transformBox: 'fill-box',
      height: '100dvh',
      maxHeight: '1000px',
      maxWidth: '1000px',
      width: 'auto',
      cursor: linkName ? 'pointer' : 'default',

      '& g': {
        transformOrigin: 'center',
        transformBox: 'fill-box',
      },

      [mq.customMax(991)]: {
        overflow: 'hidden !important', // idea
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
      transition: `filter 1500ms ${smoothBezierOut}, opacity 1500ms ${smoothBezierOut}`,
      '& > g': {
        transformOrigin: 'center',
        transformBox: 'fill-box',
        transform: isNavigationVisible
          ? 'scale(0.95) translate(8%,0)'
          : 'scale(1.3) translate(-10%,0)',
        transition: `transform 1200ms ${smoothBezierOut}`,
      },

      [mq.mobile]: {
        filter: 'none',
        opacity: isNavigationVisible ? 0.6 : 0.3,
        transform: isNavigationVisible ? 'scale(1) rotate(4deg)' : 'scale(0.85) rotate(6deg)',
        transition: `transform 1300ms ${smoothBezierOut}, opacity 1500ms ${smoothBezierOut}`,
        '& > g': {
          transform: isNavigationVisible ? 'scale(1)' : 'scale(1.4)',
        },
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
      [mq.mobile]: {
        display: 'none',
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
        fill: getThemedColor(theme, colors.black, colors.white),
        stroke: getThemedColor(theme, colors.black, colors.white),
      },

      // --------------------------------- //
      // ----- HOVER ANIMATIONS CARS ----- //
      // --------------------------------- //
      '&[class*="car-"]': {
        '& [id*="black-"]': {
          transformOrigin: '50% 100%',
          transformBox: 'fill-box',
          transition: `transform 220ms ease-in-out`,
        },
        '&.car-home': {
          '& #black-1': {
            transform: linkName === 'Home' ? 'scale(1.077)' : 'scale(1)',
            '& path': {
              fill: getThemedColor(
                theme,
                linkName === 'Home' ? colors.darkBlue : colors.black,
                linkName === 'Home' ? colors.lightBlue : colors.white
              ),
              stroke: getThemedColor(
                theme,
                linkName === 'Home' ? colors.darkBlue : colors.black,
                linkName === 'Home' ? colors.lightBlue : colors.white
              ),
            },
          },
        },
        '&.car-about': {
          '& #black-2': {
            transform: linkName === 'About' ? 'scale(1.077)' : 'scale(1)',
            '& path': {
              fill: getThemedColor(
                theme,
                linkName === 'About' ? colors.gold : colors.black,
                linkName === 'About' ? colors.yellow : colors.white
              ),
              stroke: getThemedColor(
                theme,
                linkName === 'About' ? colors.gold : colors.black,
                linkName === 'About' ? colors.yellow : colors.white
              ),
            },
          },
        },
        '&.car-projects': {
          '& #black-3': {
            transform: linkName === 'Projects' ? 'scale(1.077)' : 'scale(1)',
            '& path': {
              fill: getThemedColor(
                theme,
                linkName === 'Projects' ? colors.red : colors.black,
                linkName === 'Projects' ? colors.orange : colors.white
              ),
              stroke: getThemedColor(
                theme,
                linkName === 'Projects' ? colors.red : colors.black,
                linkName === 'Projects' ? colors.orange : colors.white
              ),
            },
          },
        },
        '&.car-contact': {
          '& #black-4': {
            transform: linkName === 'Contact' ? 'scale(1.077)' : 'scale(1)',
            '& path': {
              fill: getThemedColor(
                theme,
                linkName === 'Contact' ? colors.emerald : colors.black,
                linkName === 'Contact' ? colors.green : colors.white
              ),
              stroke: getThemedColor(
                theme,
                linkName === 'Contact' ? colors.emerald : colors.black,
                linkName === 'Contact' ? colors.green : colors.white
              ),
            },
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
      mixBlendMode: 'overlay',
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
          opacity: linkName === 'Home' ? 0.6 : 1,
          transform: linkName === 'Home' ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 200ms ease-out, filter 200ms ease-out, opacity 200ms ease-out',
          filter: generateGlow(theme, linkName, 'Home', colors.darkBlue, colors.lightBlue),
        },
      },
      '&.car-mask-about': {
        '& #black-2-mask': {
          opacity: linkName === 'About' ? 0.6 : 1,
          transform: linkName === 'About' ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 200ms ease-out, filter 200ms ease-out, opacity 200ms ease-out',
          filter: generateGlow(theme, linkName, 'About', colors.gold, colors.yellow),
        },
      },
      '&.car-mask-projects': {
        '& #black-3-mask': {
          opacity: linkName === 'Projects' ? 0.6 : 1,
          transform: linkName === 'Projects' ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 200ms ease-out, filter 200ms ease-out, opacity 200ms ease-out',
          filter: generateGlow(theme, linkName, 'Projects', colors.red, colors.orange),
        },
      },
      '&.car-mask-contact': {
        '& #black-4-mask': {
          opacity: linkName === 'Contact' ? 0.6 : 1,
          transform: linkName === 'Contact' ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 200ms ease-out, filter 200ms ease-out, opacity 200ms ease-out',
          filter: generateGlow(theme, linkName, 'Contact', colors.emerald, colors.green),
        },
      },
    },

    ferrisWheelMasks: {
      mixBlendMode: 'overlay',
      '& circle': {
        filter: isNavigationVisible ? 'none' : 'blur(12px)',
        transition: 'stroke-width 1500ms ease-out, filter 1500ms ease-out',
        stroke: theme.colorScheme === 'dark' ? colors.black : colors.white,
      },
      '& ellipse': {
        filter: isNavigationVisible ? 'none' : 'blur(12px)',
        transition: 'stroke-width 1500ms ease-out, filter 1500ms ease-out',
        stroke: theme.colorScheme === 'dark' ? colors.black : colors.white,
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

    // ------- ANIMATED PARTS ------- //
    ferrisWheelAnimationPart: {
      opacity: isNavigationVisible ? 1 : 0,
      filter: isNavigationVisible ? 'none' : 'blur(60px)',
      transition: 'opacity 400ms ease-out, filter 700ms ease-out',
      transitionDelay: isNavigationVisible ? '500ms' : '0ms',
    },

    /* 
    Testing area for hovers
    Uncomment the four <rect> elements 
    in AwesomeMenu svg to see hover area
    linked to 4x menu items
    */
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

    // TOOLTIPS LABELS EFFECTS EXPORTED
  })
);
