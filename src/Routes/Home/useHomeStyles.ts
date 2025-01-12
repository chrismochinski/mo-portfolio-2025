import { createStyles } from '@mantine/core';
import { colors } from '@mo';

interface HomeStylesProps {
  isNavigationVisible: boolean;
}

export const useHomeStyles = createStyles((theme, { isNavigationVisible }: HomeStylesProps) => ({
  homeWrapper: {
    backgroundColor: 'transparent',
  },

  personalLinks: {
    filter: isNavigationVisible ? 'none' : 'blur(3px)',
    opacity: isNavigationVisible ? 1 : 0,
    transition: 'filter 1000ms ease-out 1200ms, opacity 1000ms ease-out 1200ms',
  },

  personalAnchorText: {
    fontFamily: '"Urbanist", sans-serif',

    transition:
      'color 400ms ease-out, letter-spacing 400ms ease-out, fontWeight 400ms ease-out, padding-inline 400ms ease-out',
    letterSpacing: 'normal',
    fontWeight: 600,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? colors.yellow : colors.orange,
    '&:hover': {
      textDecoration: 'none',
      fontWeight: 700,
      paddingInline: '0.35em',
      color: theme.colorScheme === 'dark' ? colors.gold : colors.red,
      letterSpacing: '0.04em',
      transition:
        'color 160ms ease-out, letter-spacing 160ms ease-out, fontWeight 180ms ease-out, padding-inline 180ms ease-out',
    },
  },

  // DISAPPEARING
  salutation: {
    transformOrigin: '50% 50%',
    opacity: isNavigationVisible ? 1 : 0,
    filter: isNavigationVisible ? 'none' : 'blur(14px)',
    transform: isNavigationVisible ? 'translateY(0) scaleX(1)' : 'translateY(-50px) scaleX(1.2)',
    transition: 'transform 1400ms ease-out, opacity 900ms ease-out, filter 900ms ease-out',
  },

  copyright: {
    fontSize: '0.75rem',
    textAlign: 'center',
    position: 'fixed',
    letterSpacing: '0.085em',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    color: theme.colorScheme === 'dark' ? colors.lightGray : colors.gray,
    fontWeight: theme.colorScheme === 'dark' ? 300 : 400,
    
  },
}));
