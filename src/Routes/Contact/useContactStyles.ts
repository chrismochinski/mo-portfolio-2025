import { createStyles } from '@mantine/core';
import { colors } from '@mo';

export const useContactStyles = createStyles((theme) => ({
  contactWrapper: {
    zIndex: 5,
    textAlign: 'center',
    
  },

  emailLink: {
    color: theme.colorScheme === 'dark' ? colors.yellow : colors.orange,
    textDecoration: 'none',
    '&:hover': {
      color: theme.colorScheme === 'dark' ? colors.gold : colors.red,
    },
  },
}));
