import { createStyles } from '@mantine/core';
import { colors } from '@mo';

export const useMenuLabelEffects = createStyles((theme) => ({
  tooltip: {
    textTransform: 'uppercase',
    position: 'absolute',
    transformOrigin: '-200% 50%',
    transform: 'translateY(-50%) translateX(10%) scaleX(1)',
    color: theme.colorScheme === 'dark' ? colors.white : colors.black,
    transition:
      'transform 350ms ease-out, letter-spacing 300ms ease-out 300ms, opacity 350ms ease-out, left 400ms ease-out',
    opacity: 0,
    letterSpacing: '-0.6em',
    fontSize: 'clamp(1.4rem, 3vw, 1.75rem)',
    fontWeight: 700,
    pointerEvents: 'none',
    zIndex: 10,
    '&#home-tooltip': {
      top: '24%',
      left: '330px',
      '&:before': {
        width: '14em',
        background: `linear-gradient(to right, transparent, ${colors.darkBlue}CC)`,
      },
      '&:after': {
        width: '16em',
        background: `linear-gradient(to right, transparent, ${colors.darkBlue}50)`,
      },
      '&.active': {
        left: '360px',
      },
    },
    '&#about-tooltip': {
      top: '40%',
      left: '430px',
      '&:before': {
        width: '14.5em',
        background: `linear-gradient(to right, transparent, ${colors.gold}CC)`,
      },
      '&:after': {
        width: '16.5em',
        background: `linear-gradient(to right, transparent, ${colors.gold}50)`,
      },
      '&.active': {
        left: '460px',
      },
    },
    '&#projects-tooltip': {
      top: '58%',
      left: '430px',

      '&:before': {
        width: '16.25em',
        background: `linear-gradient(to right, transparent, ${colors.orange}99)`,
      },
      '&:after': {
        width: '18.25em',
        background: `linear-gradient(to right, transparent, ${colors.orange}30)`,
      },
      '&.active': {
        left: '430px',
      },
    },
    '&#contact-tooltip': {
      top: '74%',
      left: '330px',
      '&:before': {
        width: '16.2em',
        background: `linear-gradient(to right, transparent, ${colors.emerald}DD)`,
      },
      '&:after': {
        width: '18.2em',
        background: `linear-gradient(to right, transparent, ${colors.emerald}50)`,
      },
      '&.active': {
        left: '460px',
      },
    },
    // top border (for now! Make SVG later)
    '&::before': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      top: '70%',
      left: '-10em',
      borderRadius: '0.5em',
      height: '0.2em',
      transformOrigin: '0% 50%',
      transform: 'scaleX(0) scaleY(1)',
      opacity: 0,
      transition: 'transform 350ms ease-out, opacity 350ms ease-out',
    },
    // after element is slightly darker and taller, behind the before and tooltip, higher, and a bit wider each
    '&::after': {
      content: '""',
      position: 'absolute',
      zIndex: -2,
      bottom: '89.5%',
      left: '-10.5em',
      borderRadius: '0.25em',
      height: '0.3em',
      transformOrigin: '80%% -40%',
      transform: 'scaleX(1) scaleY(12)',
      opacity: 0,
      transition: 'transform 350ms ease-out, opacity 350ms ease-out',
    },
    '&.active': {
      transform: 'translateY(-50%) scaleX(1)',
      opacity: 1,
      transformOrigin: '0% 50%',
      letterSpacing: '0.15em',
      transition:
        'transform 350ms ease-out 100ms, opacity 350ms ease-out 100ms, left 400ms ease-out 100ms, letter-spacing 360ms ease-out 120ms',
      '&:before': {
        transition: 'transform 350ms ease-out, opacity 350ms ease-out',
        transform: 'scaleX(1) scaleY(4)',
        opacity: 1,
      },
      '&:after': {
        transition: 'transform 330ms ease-out 150ms, opacity 330ms ease-out 150ms',
        transform: 'scaleX(1) scaleY(8)',
        opacity: 1,
      },
    },
  },
}));
