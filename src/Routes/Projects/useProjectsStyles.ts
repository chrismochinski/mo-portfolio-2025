import { createStyles } from '@mantine/core';
import { colors } from '@mo';

export const useProjectsStyles = createStyles((theme) => ({
  projectsWrapper: {
    textAlign: 'center',
  },

  personalLinks: {
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
}));
