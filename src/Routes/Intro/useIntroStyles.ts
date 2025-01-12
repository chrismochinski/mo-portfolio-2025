import { createStyles } from '@mantine/core';
import { colors } from '@mo';

interface IntroStylesProps {
  isNavigationVisible: boolean;
}

export const useIntroStyles = createStyles((theme, { isNavigationVisible }: IntroStylesProps) => ({
  ferrisWheelIconButton: {
    position: 'absolute',
    inset: 'auto',
    margin: 'auto',
    cursor: isNavigationVisible ? 'default' : 'pointer',
    pointerEvents: isNavigationVisible ? 'none' : 'auto',
    opacity: isNavigationVisible ? 0 : 1,
    transform: isNavigationVisible ? 'translateY(0)' : 'translateY(-30px)',
    transition: 'transform 1400ms ease-out, opacity 900ms ease-out',
    svg: {
      transition: 'transform 270ms ease-out',
    },
    h5: {
      textAlign: 'center',
      fontWeight: 600,
      transition: 'letter-spacing 270ms ease-out',
      color: theme.colorScheme === 'dark' ? colors.white : colors.black,
    },
    '&:hover': {
      textDecoration: 'none',

      svg: {
        transition: 'transform 190ms ease-out',
        transform: 'translateY(-2%)',
      },
      h5: {
        letterSpacing: '0.065em',
        transition: 'letter-spacing 170ms ease-out',
      },
    },
  },
}));
