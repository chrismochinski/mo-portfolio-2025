import { MantineThemeOverride } from '@mantine/core';
import { createStyles } from '@mantine/emotion';
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

  lineHeights: {
    xs: '1.125em',
    sm: '1.25em',
    md: '1.35em',
    lg: '1.5em',
    xl: '1.75em',
    xxl: '2em',
  },

  headings: {
    fontFamily: "'Bitter', serif",
    textWrap: 'balance',
  },
};

export const useGlobalStyles = createStyles(() => ({
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

  balance: {
    textWrap: 'balance',
  },

  row: {
    // marginBlock: "max(calc(1.5vw + 1.5vw), 2em)", // revisit
    paddingInline: 'max(6vw, (100vw - 1280px)/2)',
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

  // ---------- Z-INDEXES ---------- //

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

  // IMPORTANT - pause animation play state
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
