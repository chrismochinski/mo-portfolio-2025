import { MantineThemeOverride } from '@mantine/core';
import { createStyles } from '@mantine/core';
import * as animations from './Animations';

export const colors = {
  black: '#191716',
  white: '#F9F9F9',
  red: '#911E1E',
  orange: '#FF9A5C',
  gold: '#FBAF00',
  yellow: '#F9EA9A',
  green: '#5EFFAC',
  emerald: '#79D49E',
  lightBlue: '#11C7FF',
  darkBlue: '#134074',
  purple: '#611E91',
  pink: '#EE92C2',
  lightGray: '#D5D5D5',
  gray: '#758190',
  darkGray: '#575757',
  trueBlack: '#000000',
  trueWhite: '#FFFFFF',
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
      },
    };
  },

  fontFamily: '"Urbanist", sans-serif',

  colors: {
    black: ['#191716'],
    white: ['#F9F9F9'],
    red: ['#911E1E'],
    orange: ['#FF9A5C'],
    gold: ['#BAB700'],
    yellow: ['#F9EA9A'],
    green: ['#5EFFAC'],
    emerald: ['#79D49E'],
    lightBlue: ['#11C7FF'],
    darkBlue: ['#145C9E'],
    purple: ['#611E91'],
    pink: ['#D479D4'],
    lightGray: ['#D5D5D5'],
    gray: ['#758190'],
    darkGray: ['#575757'],
    trueBlack: ['#000000'],
    trueWhite: ['#FFFFFF'],
  },

  breakpoints: {
    xs: '575px',
    sm: '768px',
    md: '991px',
    lg: '1200px',
    xl: '1400px',
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
    paddingLeft: 'max(calc(300px + 10vw), calc(100vw - 1280px)/2)',
    paddingRight: 'max(3vw, (100vw - 1280px)/2)',
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

  textContrastShadow: {
    textShadow:
      theme.colorScheme === 'dark'
        ? `1px 1px 1px ${theme.black}, -1px -1px 1px ${theme.black}, 1px -1px 1px ${theme.black}, -1px 1px 1px ${theme.black}`
        : `1px 1px 1px ${theme.white}, -1px -1px 1px ${theme.white}, 1px -1px 1px ${theme.white}, -1px 1px 1px ${theme.white}`,
  },

  textContrastShadowSubtle: {
    textShadow:
      theme.colorScheme === 'dark'
        ? `1px 1px 2px ${theme.black}80, -1px -1px 2px ${theme.black}80, 1px -1px 2px ${theme.black}80, -1px 1px 2px ${theme.black}80`
        : `1px 1px 2px ${theme.white}80, -1px -1px 2px ${theme.white}80, 1px -1px 2px ${theme.white}80, -1px 1px 2px ${theme.white}80`,
  },

  textContrastShadowHeavy: {
    textShadow:
      theme.colorScheme === 'dark'
        ? `1px 1px 2px ${theme.black}, -1px -1px 2px ${theme.black}, 1px -1px 2px ${theme.black}, -1px 1px 2px ${theme.black}`
        : `1px 1px 2px ${theme.white}, -1px -1px 2px ${theme.white}, 1px -1px 2px ${theme.white}, -1px 1px 2px ${theme.white}`,
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
    animation: `${animations.slowSpin} 20s linear infinite`,
    animationDelay: '1500ms',
  },

  menuFerrisWheelCarSpinReverse: {
    animation: `${animations.slowSpinReverse} 20s linear infinite`,
    animationDelay: '1500ms',
  },

  // junk?? Old bubbles animation
  moveAround: {
    animation: `${animations.moveAround} infinite`,
  },
}));
