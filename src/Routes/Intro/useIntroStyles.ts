import { createStyles } from '@mantine/core';

interface IntroStylesProps {
  isNavigationVisible: boolean;
}

export const useIntroStyles = createStyles((_, { isNavigationVisible }: IntroStylesProps) => ({
  ferrisWheelIconButton: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: '0.25em',
    inset: 'auto',
    margin: 'auto',
    cursor: isNavigationVisible ? 'default' : 'pointer',
    pointerEvents: isNavigationVisible ? 'none' : 'auto',
    opacity: isNavigationVisible ? 0 : 1,
    transform: isNavigationVisible ? 'translateY(0)' : 'translateY(-30px)',
    transition: 'transform 1400ms ease-out, opacity 900ms ease-out',
  },
}));
