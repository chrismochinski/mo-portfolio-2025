import { createStyles } from '@mantine/core';
import { mq, colors } from '@mo';

interface MobileMenuStylesProps {
  isNavigationVisible: boolean;
}

export const useMobileMenuStyles = createStyles(
  (theme, { isNavigationVisible }: MobileMenuStylesProps) => ({
    mobileMenu: {
      position: 'fixed',
      top: 0,
      right: 0,
      padding: '0.7em 0.6em',
      width: 'clamp(84px, 17vw, 100px)',
      height: 'auto',
      transform: 'translateX(100%)',
      transition: 'transform 800ms ease-in-out',
      '& path': {
        fill: theme.colorScheme === 'dark' ? colors.white : colors.black,
      },
      '& circle': {
        stroke: theme.colorScheme === 'dark' ? colors.white : colors.black,
        '&[id*="mask"]': {
          stroke: theme.colorScheme === 'dark' ? colors.black : colors.white,
        },
      },
      [mq.mobile]: {
        transform: isNavigationVisible ? 'translateX(0)' : 'translateX(100%)',
        top: 0,
        right: 0,
      },
    },
  })
);
