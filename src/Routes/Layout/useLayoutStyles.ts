import { createStyles } from '@mantine/core';
import { mq } from '@mo';

export const useLayoutStyles = createStyles(() => ({
  layoutWrapper: {
    height: '100%',
    width: '100%',
    background: 'transparent',

    h1: {
      fontFamily: '"Urbanist", sans-serif',
      fontSize: 'clamp(2.75rem, 6vw, 4rem)',
      lineHeight: '1.15em',
      textWrap: 'balance',
    },
    h2: {
      fontFamily: '"Urbanist", sans-serif',
      fontSize: 'clamp(2.25rem, 4.75vw, 3rem)',
      lineHeight: '1.15em',
      textWrap: 'balance',
    },
    h3: {
      fontFamily: '"Urbanist", sans-serif',
      fontSize: 'clamp(1.5rem, 3.75vw, 1.75rem)',
      lineHeight: '1.15em',
      textWrap: 'balance',
    },
    h4: {
      fontFamily: '"Urbanist", sans-serif',
      fontSize: 'clamp(1.25rem, 2.75vw, 1.5rem)',
      lineHeight: '1.15em',
      textWrap: 'balance',
    },
    h5: {
      fontFamily: '"Urbanist", sans-serif',
      fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
      lineHeight: '1.15em',
      textWrap: 'balance',
    },
    h6: {
      fontFamily: '"Urbanist", sans-serif',
      fontSize: 'clamp(0.75rem, 1.75vw, 0.9rem)',
      lineHeight: '1.25em',
      textWrap: 'balance',
    },
    p: {
      fontFamily: '"Urbanist", sans-serif',
      fontSize: 'clamp(1rem, 1.65vw, 1.25rem)',
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
    position: 'relative',
    marginLeft: 'max(calc(310px + 8vw), calc(100vw - 1280px)/2)',
    marginRight: 'max(10vw, (100vw - 1000px)/2)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'fit-content',
    transition: 'margin 700ms ease-in-out',
    [mq.mobile]: {
      marginInline: 'unset',
    },
    [mq.customMax(575)]: {
      // revisit clean up
    },
  },

  prevPage: {
    position: 'absolute',
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'opacity 800ms ease-out, transform 800ms ease-out',
    '&.fade': {
      opacity: 0,
      transform: 'translateY(-20px)',
    },
  },

  currentPage: {
    position: 'absolute',
    
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 800ms ease-out, transform 800ms ease-out',
    '&.fade': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
}));
