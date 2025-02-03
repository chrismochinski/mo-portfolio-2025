import { createStyles } from '@mantine/core';
import { colors } from '@mo';

interface GreetingsStylesProps {
  introIconHovered: boolean;
  isNavigationVisible: boolean;
}

export const useGreetingsStyles = createStyles(
  (theme, { introIconHovered, isNavigationVisible }: GreetingsStylesProps) => ({
    greetingsFullWord: {
      transformOrigin: 'center center',
      transformBox: 'fill-box',
      willChange: 'transform',
      transform: introIconHovered ? 'translate(0, 26%) scale(1)' : 'translate(0, 0) scale(1)',
      transition: introIconHovered ? 'transform 320ms ease-out' : 'transform 550ms ease-in-out',
    },

    greetingsLetter: {
      transformOrigin: 'center center',
      transformBox: 'fill-box',
      transitionProperty: 'transform',
      transitionDuration: introIconHovered ? '280ms' : '600ms',
      transitionTimingFunction: introIconHovered ? 'ease-out' : 'ease-in-out',
      path: {
        transformOrigin: 'center center',
        transformBox: 'fill-box',
        fill: theme.colorScheme === 'dark' ? colors.white : colors.black,
      },
    },

    enterLetter: {
      willChange: 'transform',
      '&#e': {
        transform: introIconHovered ? 'translate(-4px, 0px) rotate(0)' : 'none',
        path: {},
      },
      '&#n': {
        transform: introIconHovered ? 'translate(-36px, 0px) rotate(0)' : 'none',
        path: {},
      },
      '&#t': {
        transform: introIconHovered ? 'translate(-2px, 0px) rotate(360deg)' : 'none',
        path: {},
      },
      '&#e2': {
        transform: introIconHovered ? 'translate(24px, 0px) rotate(0)' : 'none',
        path: {},
      },
      '&#r': {
        transform: introIconHovered ? 'translate(66px, 0px) scaleX(1)' : 'none',
        path: {},
      },
    },

    junkLetter: {
      willChange: 'transform opacity filter',
      transition: 'transform 400ms ease-out, opacity 600ms ease-out, filter 400ms ease-out',
      transform: introIconHovered ? 'translate(0, -8px)' : 'translate(0, 0)',
      opacity: introIconHovered ? 0 : 1,
      filter: introIconHovered ? 'blur(3px)' : 'none',
      display: isNavigationVisible ? 'none' : 'block',

      '&#g': {
        transform: introIconHovered
          ? 'translate(-20px, 0) rotate(-30deg)'
          : 'translate(0, 0) rotate(0deg)',
      },
      '&#i': {
        transform: introIconHovered
          ? 'translate(0, 23px) rotate(50deg)'
          : 'translate(0, 0) rotate(0deg)',
      },
      '&#g2': {
        transform: introIconHovered
          ? 'translate(6px, -12px) rotate(-15deg)'
          : 'translate(0, 0) rotate(0deg)',
      },

      '&#s': {
        transform: introIconHovered
          ? 'translate(30px, 0) rotate(100deg)'
          : 'translate(0, 0) rotate(0deg)',
      },
    },
  })
);
