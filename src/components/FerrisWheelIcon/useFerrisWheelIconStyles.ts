import { createStyles } from '@mantine/core';
import { colors } from '@mo';
import * as animations from '@mo';

interface FerrisWheelIconStylesProps {
  introIconHovered: boolean;
  
}

export const useFerrisWheelIconStyles = createStyles(
  (theme, { introIconHovered }: FerrisWheelIconStylesProps) => ({
    ferrisWheelIconSvg: {
      width: '155px',
      height: 'auto',
      aspectRatio: '1/1',
      marginInline: 'auto',
      transformBox: 'fill-box',
      transformOrigin: '50% 100%',
      transform: introIconHovered ? 'translateY(-2%)' : 'translateY(120%)',
      transition: introIconHovered ? 'transform 200ms ease-out' : 'transform 500ms ease-in-out',
      '& *': {
        transformOrigin: 'center',
        transformBox: 'fill-box',
      },

      path: {
        fill: theme.colorScheme === 'dark' ? colors.white : colors.black,
        stroke: theme.colorScheme === 'dark' ? colors.white : colors.black,
      },
      '& #center-wheel': {
        fill: theme.colorScheme === 'dark' ? colors.white : colors.black,
      },

      '&.enter': {
        transform: 'translateY(0)',
        transition: 'transform 600ms ease-out',
      },

      '&.squishAway': {
        transformOrigin: '50% 50%',
        transform: 'translateY(100%) scaleY(0.6) rotate(4deg)',
        transition: 'transform 500ms ease-out',
      },
      
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
  })
);
