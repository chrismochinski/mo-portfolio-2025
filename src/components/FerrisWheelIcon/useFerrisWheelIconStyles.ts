import { createStyles } from '@mantine/core';
import * as animations from '../../Global/Animations';
import { colors } from '../../Global';

export const useFerrisWheelIconStyles = createStyles(() => ({
  ferrisWheelIconSvg: {
    width: '160px',
    height: 'auto',
    aspectRatio: '1/1',
    padding: 'min(0.5em, 1vw)',

    '& *': {
      transformOrigin: 'center',
      transformBox: 'fill-box',
    },

    transformOrigin: 'center',
    transformBox: 'fill-box',

    // dark mode
    '@media (prefers-color-scheme: dark)': {
      '& path': {
        fill: colors.white,
        stroke: colors.white,
      },
      '& #center-wheel': {
        fill: colors.white,
      },
    },
  },
  // BLUR OUT
  blurOut: {
    transformOrigin: '50% 70%',
    filter: 'blur(13px)',
    transform: 'scale(1.2, 0.8)',
    transition: 'filter 1400ms ease-out, transform 1200ms ease-out',
  },

  baseBack: {
    path: {
      fill: '#444444',
      // dark mode
      '@media (prefers-color-scheme: dark)': {
        fill: '#999999',
      },
    },
  },

  wheelMask: {
    opacity: 0, // make 1 to bring back white
    circle: {
      mixBlendMode: 'difference',

      // dark mode
      '@media (prefers-color-scheme: dark)': {
        mixBlendMode: 'overlay',
      },
    },
  },

  wheelFill: {
    // dark mode
    '@media (prefers-color-scheme: dark)': {
      stroke: colors.white,
    },
  },

  carsGroup: {
    transformOrigin: 'center',
    transformBox: 'fill-box',
  },

  barsGroup: {
    transformOrigin: 'center',
    transformBox: 'fill-box',
  },

  car: {
    transformOrigin: 'center',
    transformBox: 'fill-box',
  },

  carInnerForSwaying: {
    transformOrigin: '50% 0',
    transformBox: 'fill-box',
    '&.ferrisWheelPause': {
       animation: `${animations.carSwayDamped} 6000ms 1`,
    },
  },
}));
