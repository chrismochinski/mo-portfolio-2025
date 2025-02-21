import { createStyles } from '@mantine/core';
import { colors  } from '@mo';
import * as animations from '@mo';

interface GreetingsStylesProps {
  introIconHovered: boolean;
  isNavigationVisible: boolean;
  hasInteractedWithIntroIcon: boolean;
  deviceType: 'mobile' | 'tablet' | 'desktop';
}

const shouldAnimate = (introIconHovered: boolean, deviceType: string) =>
  introIconHovered && deviceType === 'desktop';

export const useGreetingsStyles = createStyles(
  (
    theme,
    { introIconHovered, isNavigationVisible, hasInteractedWithIntroIcon, deviceType }: GreetingsStylesProps
  ) => ({
    greetingsFullWord: {
      transformOrigin: 'center center',
      transformBox: 'fill-box',
      willChange: 'transform',
      transform: introIconHovered ? 'translate(0, 26%)' : 'translate(0, 0)',
      transition: introIconHovered ? 'transform 320ms ease-out' : 'transform 550ms ease-in-out',
    },

    greetingsLetter: {
      transformOrigin: 'center center',
      transformBox: 'fill-box',
      transitionProperty: 'transform',
      transitionDuration: shouldAnimate(introIconHovered, deviceType) ? '380ms' : '600ms',
      transitionTimingFunction: shouldAnimate(introIconHovered, deviceType) ? 'ease-out' : 'ease-in-out',
      path: {
        transformOrigin: 'center center',
        transformBox: 'fill-box',
        transitionProperty: 'fill',
        transitionDuration: shouldAnimate(introIconHovered, deviceType) ? '350ms' : '500ms',
        transitionDelay: shouldAnimate(introIconHovered, deviceType) ? '20ms' : '0ms',
        transitionTimingFunction: shouldAnimate(introIconHovered, deviceType) ? 'ease-out' : 'ease-in-out',
      },
    },

    enterLetter: {
      willChange: 'transform',
      '&#e': {
        transform: shouldAnimate(introIconHovered, deviceType) ? 'translate(-4px, 0px)' : 'none',
        transformOrigin: '80% 20%',
        transitionDuration: shouldAnimate(introIconHovered, deviceType) ? '340ms' : '500ms',
        path: {},
      },
      '&#n': {
        animation: hasInteractedWithIntroIcon
          ? shouldAnimate(introIconHovered, deviceType)
            ? `${animations.enterLetterN} forwards 180ms ease-out`
            : `${animations.exitLetterN} forwards 500ms`
          : 'none',
        animationDuration: shouldAnimate(introIconHovered, deviceType) ? '460ms' : '500ms',
        path: {},
      },
      '&#t': {
        transform: shouldAnimate(introIconHovered, deviceType) ? 'translate(-2px, 0px) rotate(360deg) scaleY(1)' : 'none',
        transitionDuration: shouldAnimate(introIconHovered, deviceType) ? '380ms' : '500ms',
        transitionTimingFunction: 'ease-in-out', // Smooth transition
        path: {},
      },
      '&#e2': {
        transformOrigin: '50% 0',
        animation: hasInteractedWithIntroIcon
          ? shouldAnimate(introIconHovered, deviceType)
            ? `${animations.enterLetterE2} forwards 340ms ease-out`
            : `${animations.exitLetterE2} forwards 500ms`
          : 'none',
        animationDuration: shouldAnimate(introIconHovered, deviceType) ? '460ms' : '500ms',
        path: {},
      },
      '&#r': {
        transform: shouldAnimate(introIconHovered, deviceType) ? 'translate(66px, 0px) rotate(-360deg)' : 'none',
        transformTimingFunction: 'linear',
        transformOrigin: '-350% 100%',
        transitionDuration: shouldAnimate(introIconHovered, deviceType) ? '520ms' : '600ms',
        path: {},
      },
      path: {
        fill: theme.colorScheme === 'dark' ? colors.white : colors.black,
      },
    },

    junkLetter: {
      willChange: 'transform opacity filter',
      transition: 'transform 500ms ease-out, opacity 700ms ease-out, filter 500ms ease-out',
      transform: shouldAnimate(introIconHovered, deviceType) ? 'translate(0, -8px)' : 'translate(0, 0)',
      opacity: shouldAnimate(introIconHovered, deviceType) ? 0 : 1,
      filter: shouldAnimate(introIconHovered, deviceType) ? 'blur(3px)' : 'none',
      display: isNavigationVisible ? 'none' : 'block',

      '&#g': {
        transform: shouldAnimate(introIconHovered, deviceType)
          ? 'translate(0, 0) rotate(190deg) scale(0.5)'
          : 'translate(0, 0) rotate(0deg) scale(1)',
        transitionDuration: shouldAnimate(introIconHovered, deviceType) ? '470ms' : '500ms',
      },
      '&#i': {
        transform: shouldAnimate(introIconHovered, deviceType)
          ? 'translate(0, -18px) rotate(-20deg)'
          : 'translate(0, 0) rotate(0deg)',
      },
      '&#g2': {
        transform: shouldAnimate(introIconHovered, deviceType)
          ? 'translate(6px, 3px) rotate(12deg)'
          : 'translate(0, 0) rotate(0deg)',
      },

      '&#s': {
        transform: shouldAnimate(introIconHovered, deviceType)
          ? 'translate(14px, -7px) rotate(-40deg)'
          : 'translate(0, 0) rotate(0deg)',
      },
      path: {
        fill: theme.colorScheme === 'dark' ? colors.white : colors.black,
      },
    },
  })
);
