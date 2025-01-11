import { createStyles } from '@mantine/emotion';
import { colors } from '../../Global';
// import {useSiteContext} from '../../context/useSiteContext';

interface HomeStylesProps {
  isNavigationVisible: boolean;
}

export const useHomeStyles = createStyles((_, { isNavigationVisible }: HomeStylesProps) => ({
  homeWrapper: {},

  personalLinks: {
    filter: isNavigationVisible ? 'none' : 'blur(3px)',
    opacity: isNavigationVisible ? 1 : 0,
    transition: 'filter 1000ms ease-out 1200ms, opacity 1000ms ease-out 1200ms',
  },

  personalAnchorText: {
    color: colors.lightBlue,
    transition:
      'color 400ms ease-out, letter-spacing 400ms ease-out, fontWeight 400ms ease-out, padding-inline 400ms ease-out',
    letterSpacing: 'normal',
    fontWeight: 400,
    '&:hover': {
      fontWeight: 500,
      paddingInline: '0.5em',
      color: colors.emerald,
      letterSpacing: '0.085em',
      transition:
        'color 140ms ease-out, letter-spacing 140ms ease-out, fontWeight 200ms ease-out, padding-inline 200ms ease-out',
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
    color: colors.purple,
    fontWeight: 400,
    // dark mode
    '@media (prefers-color-scheme: dark)': {
      fontWeight: 300,
      color: colors.emerald,
    },
  },
}));
