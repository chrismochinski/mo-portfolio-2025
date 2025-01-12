import { createStyles } from '@mantine/core';


export const useBubbleStyles = createStyles(() => ({
  bubblesContainer: {
    width: 'clamp(300px, calc(65%), 800px)',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100vh',
    // this container holds the bottom two, with bubbles left and bubbles Light on the right, flex, to create illusion of bubbles lessening from left to right
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // dark mode
    '@media (prefers-color-scheme: dark)': {
      mixBlendMode: 'plus-lighter',
    },
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
