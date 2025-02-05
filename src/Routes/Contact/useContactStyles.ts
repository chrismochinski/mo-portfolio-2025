import { createStyles } from '@mantine/core';
import { colors } from '@mo';

export const useContactStyles = createStyles(() => ({
  contactWrapper: {
    zIndex: 5,
    textAlign: 'center',
    
  },

  emailLink: {
    color: colors.yellow,
    textDecoration: 'none',
    '&:hover': {
      color: colors.white,
    },
  },
}));
