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
    transition: 'color 150ms ease-out, padding 150ms ease-out',
    letterSpacing: 'normal',
    fontWeight: 600,
    padding: '0.25em 0 0.15em',
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? colors.yellow : colors.orange,
    '&:hover': {
      textDecoration: 'none',
      color: theme.colorScheme === 'dark' ? colors.white : colors.red,
      padding: '0.4em 0 0',
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
    color: theme.colorScheme === 'dark' ? colors.lightGray : colors.darkGray,
    fontWeight: theme.colorScheme === 'dark' ? 300 : 700,
  },
}));
