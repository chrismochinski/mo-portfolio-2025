import { createStyles } from '@mantine/core';

export const useLayoutStyles = createStyles(() => ({
  layoutWrapper: {
    height: '100%',
    width: '100%',
    background: 'transparent',

    h1: {
      fontFamily: '"Urbanist", sans-serif',
      fontSize: 'clamp(2.75rem, 5vw, 4rem)',
      lineHeight: '1.15em',
      textWrap: 'balance',
    },
    h2: {
      fontFamily: '"Urbanist", sans-serif',
      fontSize: 'clamp(2.25rem, 4vw, 3rem)',
      lineHeight: '1.15em',
      textWrap: 'balance',
    },
    h3: {
      fontFamily: '"Urbanist", sans-serif',
      fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
      lineHeight: '1.15em',
      textWrap: 'balance',
    },
    h4: {
      fontFamily: '"Urbanist", sans-serif',
      fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
      lineHeight: '1.15em',
      textWrap: 'balance',
    },
    h5: {
      fontFamily: '"Urbanist", sans-serif',
      fontSize: 'clamp(1.125rem, 1.4vw, 1.25rem)',
      lineHeight: '1.15em',
      textWrap: 'balance',
    },
    h6: {
      fontFamily: '"Urbanist", sans-serif',
      fontSize: 'clamp(0.75rem, 1.15vw, 0.9rem)',
      lineHeight: '1.25em',
      textWrap: 'balance',
    },
    p: {
      fontFamily: '"Urbanist", sans-serif',
      fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
      lineHeight: '1.35em',
      textWrap: 'pretty',
    },
  },

  // -------------------------------------- //
  // -------------------------------------- //
  // -------------------------------------- //

  layoutInnerWrapper: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  layoutContentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginInline: 'auto',
    width: '100%',
    height: '100%',
  },
}));
