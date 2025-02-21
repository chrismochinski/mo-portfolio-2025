import { createStyles } from '@mantine/core';

interface HomeStylesProps {
  animateHomeElements: boolean;
}

export const useHomeStyles = createStyles((_, { animateHomeElements }: HomeStylesProps) => ({
  homeWrapper: {
    backgroundColor: 'transparent',
    zIndex: 5,
  },

  salutation: {

    h1: {
      transformOrigin: '50% 50%',
      transform: animateHomeElements ? 'translateX(0) skewX(0)' : 'translateX(-80px) skewX(-16deg)',
      opacity: animateHomeElements ? 1 : 0,
      filter: animateHomeElements ? 'blur(0)' : 'blur(8px)',
      transition: 'transform 500ms ease-out, opacity 400ms ease-out, filter 400ms ease-out',
    },
    h4: {
      transformOrigin: '50% 50%',
      transform: animateHomeElements ? 'translateX(0) skewX(0)' : 'translateX(60px) skewX(16deg)',
      opacity: animateHomeElements ? 1 : 0,
      filter: animateHomeElements ? 'blur(0)' : 'blur(6px)',
      transition: 'transform 700ms ease-out 300ms, opacity 600ms ease-out 300ms, filter 600ms ease-out 300ms',
    },
  },

}));
