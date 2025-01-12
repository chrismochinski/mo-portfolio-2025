import { createStyles } from '@mantine/core';
import * as animations from '../../Global/Animations';
import { colors } from '../../Global';

export const useFerrisWheelIconStyles = createStyles((theme) => ({
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

    path: {
      fill: theme.colorScheme === 'dark' ? colors.white : colors.black,
      stroke: theme.colorScheme === 'dark' ? colors.white : colors.black,
    },
    '& #center-wheel': {
      fill: theme.colorScheme === 'dark' ? colors.white : colors.black,
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

      fill: theme.colorScheme === 'dark' ? '#999999' : '#444444',
    },
  },

  wheelMask: {
    opacity: 0, // make 1 to bring back white
    circle: {
      mixBlendMode: theme.colorScheme === 'dark' ? 'overlay' : 'difference',
    },
  },

  wheelFill: {
    stroke: theme.colorScheme === 'dark' ? colors.white : colors.black,
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
