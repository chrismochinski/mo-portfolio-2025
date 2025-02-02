import { createStyles } from '@mantine/core';

export const useBubbleStyles = createStyles((theme) => ({
  bubblesContainer: {
    width: 'clamp(300px, calc(55%), 800px)',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    mixBlendMode: theme.colorScheme === 'dark' ? 'lighten' : 'normal',
  },
  bubblesFront: {
    width: '50%',
    height: '100%',
    position: 'absolute',
    opacity: 1,
    filter: 'blur(0)',
    display: 'block',
    top: 0,
    left: 0,
    zIndex: 1,
    transitionProperty: 'display opacity filter',
    transitionDuration: '3000ms',
    transitionBehavior: 'allow-discrete',
    '&.navigation-visible': {
      opacity: 0,
      filter: 'blur(5px)',
      display: 'none',
      '@startingStyle': {
        display: 'block',
        opacity: 1,
      },
    },
  },

  bubblesLight: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
  },
}));
