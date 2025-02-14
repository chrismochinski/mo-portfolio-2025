import { createStyles } from '@mantine/core';
import { colors, mq } from '@mo';
import * as animations from '@mo';

interface FerrisWheelIconStylesProps {
  introIconHovered: boolean;
};


export const useFerrisWheelIconStyles = createStyles((theme, { introIconHovered }: FerrisWheelIconStylesProps) => ({  
  ferrisWheelIconSvg: {
    width: '170px',
    height: 'auto',
    aspectRatio: '1/1',
    padding: '0.5em',
    marginInline: 'auto',
    transform: introIconHovered ? 'translateY(-2%)' : 'none',
    transition: introIconHovered ? 'transform 200ms ease-out' : 'transform 500ms ease-in-out',

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

    // [mq.customMax(768)]: {
    //   width: '150px',
    //   height: 'auto',
    // },
  },
  // BLUR OUT
  blurOut: {
    transformOrigin: '50% 70%',
    filter: 'blur(7px)',
    transform: 'scale(1.1, 1.1)',
    transition: 'filter 900ms ease-out, transform 900ms ease-out',
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
       animation: `${animations.carSwayDamped} 4500ms 1`,
    },
  },
}));
