import { createStyles } from '@mantine/emotion';
import { colors } from '../../Global';

export interface HomeStylesProps {
  isNavigationVisible: boolean;
  showFerrisWheelIcon: boolean;
}

export const useHomeStyles = createStyles(
  (_, { isNavigationVisible, showFerrisWheelIcon }: HomeStylesProps) => ({
    homeWrapper: {
      overflow: 'hidden',
      height: '100vh',
    },

    homeInnerWrapper: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },

    homeContentWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '500px',
      marginInline: 'auto',
      width: '100%',
    },

    personalLinks: {
      filter: isNavigationVisible ? 'none' : 'blur(3px)',
      opacity: isNavigationVisible ? 1 : 0,
      transition: 'filter 1000ms ease-out 1200ms, opacity 1000ms ease-out 1200ms',
    },

    personalAnchorText: {
      color: colors.lightBlue,
      transition:
        'color 400ms ease-out, letter-spacing 400ms ease-out, fontWeight 400ms ease-out, padding-inline 400ms ease-out',
      letterSpacing: 'normal',
      fontWeight: 400,
      '&:hover': {
        fontWeight: 500,
        paddingInline: '0.5em',
        color: colors.emerald,
        letterSpacing: '0.085em',
        transition:
          'color 140ms ease-out, letter-spacing 140ms ease-out, fontWeight 200ms ease-out, padding-inline 200ms ease-out',
      },
    },

    // DISAPPEARING
    ferrisWheelIconButton: {
      position: 'absolute',
      inset: 'auto',
      margin: 'auto',
      cursor: isNavigationVisible ? 'default' : 'pointer',
      pointerEvents: isNavigationVisible ? 'none' : 'auto',

      opacity: showFerrisWheelIcon ? 1 : 0,
      transform: showFerrisWheelIcon ? 'translateY(0)' : 'translateY(-30px)',
      transition: 'transform 1400ms ease-out, opacity 900ms ease-out',
    },

    // DISAPPEARING
    salutation: {
      transformOrigin: '50% 50%',
      opacity: showFerrisWheelIcon ? 0 : 1,
      filter: showFerrisWheelIcon ? 'blur(14px)' : 'none',
      transform: showFerrisWheelIcon ? 'translateY(-50px) scaleX(1.2)' : 'translateY(0) scaleX(1)',
      transition: 'transform 1400ms ease-out, opacity 900ms ease-out, filter 900ms ease-out',
    },
  })
);
