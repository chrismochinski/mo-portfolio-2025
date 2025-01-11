import { createStyles } from '@mantine/emotion';
import { colors } from '../../Global';

interface IntroStylesProps {
  isNavigationVisible: boolean;
}

export const useIntroStyles = createStyles((_, { isNavigationVisible }: IntroStylesProps) => ({
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
        color: colors.black,
        fontWeight: 500,
        transition: 'letter-spacing 270ms ease-out',
        // dark mode
        '@media (prefers-color-scheme: dark)': {
            color: colors.white,
        },
    },
    '&:hover': {
        svg: {
            transition: 'transform 190ms ease-out',
            transform: 'translateY(-3%)',
        },
      h5: {
        letterSpacing: '0.075em',
        transition: 'letter-spacing 170ms ease-out',
      },
    },
  },
}));
