import { createStyles } from '@mantine/emotion';

export const useLayoutStyles = createStyles(() => ({
  layoutWrapper: {
    overflow: 'hidden',
    height: '100vh',
    background: 'transparent',
    
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: 'clamp(2.75rem, 5vw, 4rem)',
      fontWeight: 700,
      lineHeight: '1.15em',
      marginBlock: 0,
      textWrap: 'balance',
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: 'clamp(2.25rem, 4vw, 3rem)',
      fontWeight: 600,
      lineHeight: '1.15em',
      marginBlock: 0,
      textWrap: 'balance',
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
      fontWeight: 500,
      lineHeight: '1.15em',
      marginBlock: 0,
      textWrap: 'balance',
    },
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
      fontWeight: 500,
      lineHeight: '1.15em',
      marginBlock: 0,
      textWrap: 'balance',
    },
    h5: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: 'clamp(1.125rem, 1.4vw, 1.25rem)',
      fontWeight: 500,
      lineHeight: '1.15em',
      marginBlock: 0,
      textWrap: 'balance',
    },
    h6: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: 'clamp(0.75rem, 1.15vw, 0.9rem)',
      fontWeight: 400,
      lineHeight: '1.25em',
      marginBlock: 0,
      textWrap: 'balance',
    },
    p: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
      fontWeight: 400,
      lineHeight: '1.35em',
      textWrap: 'balance',
    },
  },

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
