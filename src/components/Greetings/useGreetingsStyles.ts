import { createStyles } from '@mantine/core';
import { colors, mq } from '@mo';
import * as animations from '@mo';

interface GreetingsStylesProps {
  introIconHovered: boolean;
  isNavigationVisible: boolean;
  hasInteractedWithIntroIcon: boolean;
}

export const useGreetingsStyles = createStyles(
  (
    theme,
    { introIconHovered, isNavigationVisible, hasInteractedWithIntroIcon }: GreetingsStylesProps
  ) => ({
    greetingsFullWord: {
      transformOrigin: 'center center',
      transformBox: 'fill-box',
      willChange: 'transform',
      transform: introIconHovered ? 'translate(0, 26%) scale(1)' : 'translate(0, 0) scale(1)',
      transition: introIconHovered ? 'transform 320ms ease-out' : 'transform 550ms ease-in-out',
      [mq.customMax(768)]: { 
        transform: 'scale(0.85)',
      },
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
        transitionProperty: 'fill',
        transitionDuration: introIconHovered ? '250ms' : '500ms',
        transitionDelay: introIconHovered ? '20ms' : '0ms',
        transitionTimingFunction: introIconHovered ? 'ease-out' : 'ease-in-out',
      },
    },

    enterLetter: {
      willChange: 'transform',
      display: isNavigationVisible ? 'none' : 'block',
      '&#e': {
        transform: introIconHovered ? 'translate(-4px, 0px)' : 'none',
        transformOrigin: '80% 20%',
        transitionDuration: introIconHovered ? '240ms' : '500ms',
        path: {},
      },
      '&#n': {
        animation: hasInteractedWithIntroIcon
          ? introIconHovered
            ? `${animations.enterLetterN} forwards 180ms ease-out`
            : `${animations.exitLetterN} forwards 500ms`
          : 'none',
        animationDuration: introIconHovered ? '360ms' : '500ms',
        path: {},
      },
      '&#t': {
        transform: introIconHovered ? 'translate(-2px, 0px) rotate(360deg) scaleY(1)' : 'none',
        transitionDuration: introIconHovered ? '280ms' : '500ms',
        transitionTimingFunction: 'ease-in-out', // Smooth transition
        path: {},
      },
      '&#e2': {
        transformOrigin: '50% 0',
        animation: hasInteractedWithIntroIcon
          ? introIconHovered
            ? `${animations.enterLetterE2} forwards 240ms ease-out`
            : `${animations.exitLetterE2} forwards 500ms`
          : 'none',
        animationDuration: introIconHovered ? '360ms' : '500ms',
        path: {},
      },
      '&#r': {
        transform: introIconHovered ? 'translate(66px, 0px) rotate(-360deg)' : 'none',
        transformTimingFunction: 'linear',
        transformOrigin: '-350% 100%',
        transitionDuration: introIconHovered ? '370ms' : '560ms',
        path: {},
      },
      path: {
        fill: theme.colorScheme === 'dark' ? colors.white : colors.black,
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
          ? 'translate(0, 0) rotate(190deg) scale(0.5)'
          : 'translate(0, 0) rotate(0deg) scale(1)',
        transitionDuration: introIconHovered ? '370ms' : '500ms',
      },
      '&#i': {
        transform: introIconHovered
          ? 'translate(0, -18px) rotate(-20deg)'
          : 'translate(0, 0) rotate(0deg)',
      },
      '&#g2': {
        transform: introIconHovered
          ? 'translate(6px, 3px) rotate(12deg)'
          : 'translate(0, 0) rotate(0deg)',
      },

      '&#s': {
        transform: introIconHovered
          ? 'translate(14px, -7px) rotate(-40deg)'
          : 'translate(0, 0) rotate(0deg)',
      },
      path: {
        fill: theme.colorScheme === 'dark' ? colors.white : colors.black,
      },
    },
  })
);
