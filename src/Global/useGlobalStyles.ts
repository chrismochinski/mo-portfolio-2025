import { MantineThemeOverride } from '@mantine/core';
import { createStyles } from '@mantine/core';
import * as animations from './Animations';

export const addOpacity = (hex: string, opacity: number) => {
  // Convert hex to RGBA and apply opacity
  const alpha = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, '0');
  return `${hex}${alpha}`;
};

export const mq = {
  customMax: (max: number) => `@media (max-width: ${max}px)`,
  customMin: (min: number) => `@media (min-width: ${min}px)`,
};

export const colors = {
  black: '#191716', // Eerie black
  white: '#F9F9F9', // Seasalt
  red: '#89043D', // Claret
  orange: '#FF571F', // Coquelicot
  gold: '#F7B538', // Xanthous
  yellow: '#FFFD77', // Icterine
  green: '#20FC8F', // Spring green
  emerald: '#1FAD9D', // Keppel
  lightBlue: '#51E5FF', // Electric blue
  darkBlue: '#235789', // Lapis lazuli
  purple: '#9F6AA0', // Pomp and Power
  pink: '#F2B5D4', // Lavender pink
  lightGray: '#DBDFE6', // Platinum
  gray: '#95B2B8', // Cadet gray
  darkGray: '#4F5D75', // Payne's grey
  trueBlack: '#000000', // True black
  trueWhite: '#FFFFFF', // True white
};

export const globalTheme: MantineThemeOverride = {
  globalStyles(theme) {
    return {
      ':root': {
        '--bitter': '"Bitter", serif',
        '--afacad': '"Afacad", sans-serif',
        '--raleway': '"Raleway", sans-serif',
        '--raleway-dots': '"Raleway Dots", sans-serif',
        '--doto': '"Doto", sans-serif',
        '--tilt-neon': '"Tilt Neon", sans-serif',
        '--poppins': '"Poppins", sans-serif',
        '--urbanist': '"Urbanist", sans-serif',
      },

      body: {
        backgroundColor: theme.colorScheme === 'dark' ? colors.black : colors.white,
        color: theme.colorScheme === 'dark' ? colors.white : colors.black,
        fontFamily: 'Urbanist, sans-serif',
        height: '100vh',
        width: '100%',
        overflow: 'hidden', // idea page always fits viewport
        '& #root': {
          height: '100%',
          width: '100%',
        },
      },
    };
  },

  fontFamily: '"Urbanist", sans-serif',

  colors: {
    black: ['#191716'], // Eerie black
    white: ['#F9F9F9'], // Seasalt
    red: ['#89043D'], // Claret
    orange: ['#FF571F'], // Coquelicot
    gold: ['#F7B538'], // Xanthous
    yellow: ['#FFFD77'], // Icterine
    green: ['#20FC8F'], // Spring green
    emerald: ['#1FAD9D'], // Keppel
    lightBlue: ['#51E5FF'], // Electric blue
    darkBlue: ['#235789'], // Lapis lazuli
    purple: ['#9F6AA0'], // Pomp and Power
    pink: ['#F2B5D4'], // Lavender pink
    lightGray: ['#DBDFE6'], // Platinum
    gray: ['#95B2B8'], // Cadet gray
    darkGray: ['#4F5D75'], // Payne's grey
    trueBlack: ['#000000'], // True black
    trueWhite: ['#FFFFFF'], // True white
  },

  breakpoints: {
    xs: '575',
    sm: '768',
    md: '991',
    lg: '1200',
    xl: '1400',
  },

  spacing: {
    xs: '0.125em',
    sm: '0.25em',
    md: '0.5em',
    lg: '1em',
    xl: '1.5em',
    xxl: '2em',
  },

  fontSizes: {
    xxs: 'clamp(0.7rem, 1vw, 0.85rem)',
    xs: 'clamp(0.85rem, 1.1125vw, 1rem)',
    sm: 'clamp(1rem, 1.3vw, 1.15rem)',
    md: 'clamp(1.125rem, 1.6vw, 1.25rem)',
    lg: 'clamp(1.25rem, 1.8vw, 1.5rem)',
    xl: 'clamp(1.75rem, 3vw, 2rem)',
    xxl: 'clamp(2.25rem, 4vw, 3rem)',
    xxxl: 'clamp(3rem, 5vw, 4rem)',
  },

  shadows: {
    xs: '0px 1px 2px #00000015',
    sm: '0px 2px 4px #00000015',
    md: '0px 4px 8px #00000018',
    lg: '0px 8px 16px #00000020',
    xl: '0px 16px 32px #00000020',
  },
};

export const useGlobalStyles = createStyles((theme) => ({
  // ------------------------------------------ //
  // ------------------------------------------ //
  // --------------- TEXT STUFF --------------- //
  // ------------------------------------------ //
  // ------------------------------------------ //

  bitter: {
    fontFamily: "'Bitter', serif",
  },
  afacad: {
    fontFamily: "'Afacad', sans-serif",
  },
  raleway: {
    fontFamily: "'Raleway', sans-serif",
  },
  ralewayDots: {
    fontFamily: "'Raleway Dots', sans-serif",
  },
  doto: {
    fontFamily: "'Doto', sans-serif",
  },
  poppins: {
    fontFamily: "'Poppins', sans-serif",
  },
  urbanist: {
    fontFamily: "'Urbanist', sans-serif",
  },

  balance: {
    textWrap: 'balance',
  },

  evenRow: {
    paddingInline: 'max(5vw, (100vw - 1280px)/2)',
  },

  row: {
    marginLeft: 'max(calc(310px + 8vw), calc(100vw - 1280px)/2)',
    marginRight: 'max(10vw, (100vw - 1000px)/2)',
  },

  container: {
    containerType: 'inline-size',
  },

  columnCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
    textContrastShadowSubtle: {
      textShadow:
        theme.colorScheme === 'dark'
          ? `1px 1px 5px ${colors.black}16, -1px -1px 5px ${colors.black}16, 1px -1px 5px ${colors.black}16, -1px 1px 5px ${colors.black}16`
          : `1px 1px 5px ${colors.white}16, -1px -1px 5px ${colors.white}16, 1px -1px 5px ${colors.white}16, -1px 1px 5px ${colors.white}16`,
    },

  textContrastShadow: {
    textShadow:
      theme.colorScheme === 'dark'
        ? `1px 1px 6px ${colors.black}22, -1px -1px 6px ${colors.black}22, 1px -1px 6px ${colors.black}22, -1px 1px 6px ${colors.black}22`
        : `1px 1px 6px ${colors.white}22, -1px -1px 6px ${colors.white}22, 1px -1px 6px ${colors.white}22, -1px 1px 6px ${colors.white}22`,
  },

  textContrastShadowHeavy: {
    textShadow:
      theme.colorScheme === 'dark'
        ? `1px 1px 5px ${colors.black}30, -1px -1px 5px ${colors.black}30, 1px -1px 5px ${colors.black}30, -1px 1px 5px ${colors.black}30`
        : `1px 1px 5px ${colors.white}30, -1px -1px 5px ${colors.white}30, 1px -1px 5px ${colors.white}30, -1px 1px 5px ${colors.white}30`,
  },

  // ----------------------------------------- //
  // ----------------------------------------- //
  // --------------- Z-INDEXES --------------- //
  // ----------------------------------------- //
  // ----------------------------------------- //

  z0: {
    zIndex: 0,
  },
  z1: {
    zIndex: 1,
  },
  z2: {
    zIndex: 2,
  },
  z3: {
    zIndex: 3,
  },
  z4: {
    zIndex: 4,
  },
  z5: {
    zIndex: 5,
  },
  z6: {
    zIndex: 6,
  },
  z7: {
    zIndex: 7,
  },
  z8: {
    zIndex: 8,
  },
  z9: {
    zIndex: 9,
  },
  z10: {
    zIndex: 10,
  },
  z15: {
    zIndex: 15,
  },
  z20: {
    zIndex: 20,
  },


  copyright: {
    fontSize: 'clamp(12px, 1vw, 0.75rem)',
    textAlign: 'center',
    position: 'fixed',
    letterSpacing: '0.085em',
    bottom: '0',
    color: theme.colorScheme === 'dark' ? colors.lightGray : colors.darkGray,
    fontWeight: theme.colorScheme === 'dark' ? 300 : 600,
  },

  // ------------------------------------------ //
  // ------------------------------------------ //
  // --------------- ANIMATIONS --------------- //
  // ------------------------------------------ //
  // ------------------------------------------ //

  pauseAnimation: {
    animationPlayState: 'paused',
  },

  slowSpin: {
    animation: `${animations.slowSpin} 10s linear infinite`,
    animationDelay: '300ms',
  },

  slowSpinReverse: {
    animation: `${animations.slowSpinReverse} 10s linear infinite`,
    animationDelay: '300ms',
    '&.ferrisWheelPause': {
      animationPlayState: 'paused',
    },
  },

  menuFerrisWheelSpin: {
    // animation: `${animations.slowSpin} 20s linear infinite`,
    // animationDelay: '1500ms',
  },

  menuFerrisWheelCarSpinReverse: {
    // animation: `${animations.slowSpinReverse} 20s linear infinite`,
    // animationDelay: '1500ms',
  },

  // junk?? Old bubbles animation
  moveAround: {
    animation: `${animations.moveAround} infinite`,
  },
}));
