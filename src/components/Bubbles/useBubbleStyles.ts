import { createStyles } from '@mantine/core';
import { colors, addOpacity, mq } from '@mo';

interface BubbleStylesProps {
  deviceType: 'mobile' | 'tablet' | 'desktop';
}


export const useBubbleStyles = createStyles((theme, { deviceType }: BubbleStylesProps) => ({
  bubblesContainer: {
    pointerEvents: 'none',
    width: 'clamp(300px, calc(55%), 800px)',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: 0,
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    mixBlendMode: theme.colorScheme === 'dark' ? 'lighten' : 'normal',
    zIndex: 1,
    [mq.customMax(991)]: {
      zIndex: deviceType !== "desktop" ? 2 : 0,
    },
    [mq.customMax(768)]: {
      width: '100vw',
      height: '100vh',

    },
  },
  bubblesFront: {
    width: '50%',
    height: '100%',
    position: 'absolute',
    opacity: 1,
    filter: 'blur(0)',
    display: 'block',
    top: 0,
    left: 0,
    zIndex: 1,
    transitionProperty: 'display opacity filter',
    transitionDuration: '3000ms',
    transitionBehavior: 'allow-discrete',
    '&.navigation-visible': {
      opacity: 0,
      filter: 'blur(5px)',
      display: 'none',
      '@startingStyle': {
        display: 'block',
        opacity: 1,
      },
    },
  },

  bubblesLight: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 0,
    
  },

  bubblesRightFade: {

    position: 'absolute',
    top: 0,
    right: 0,
    width: 'clamp(200px, 70%, 500px)',
    height: '100vh',
    pointerEvents: 'none', // Ensure clicks pass through
    zIndex: 1,

    // 🔥 Corrected Gradient: Left (transparent) → Right (theme color)
    background: `linear-gradient(to right, 
    ${addOpacity(theme.colorScheme === 'dark' ? colors.black : colors.white, 0)} 0%,  
    ${addOpacity(theme.colorScheme === 'dark' ? colors.black : colors.white, 0.1)} 25%,  
    ${addOpacity(theme.colorScheme === 'dark' ? colors.black : colors.white, 0.3)} 50%,  
    ${addOpacity(theme.colorScheme === 'dark' ? colors.black : colors.white, 0.6)} 75%,  
    ${addOpacity(theme.colorScheme === 'dark' ? colors.black : colors.white, 1)} 100%)`,

    // ✅ Gradual blur effect: Stronger on the right
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',

    // ✅ Gradual transparency mask
    maskImage:
      'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.6) 75%, rgba(255,255,255,1) 100%)',
    WebkitMaskImage:
      'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.6) 75%, rgba(255,255,255,1) 100%)',
      [mq.customMax(768)]: { 
        display: 'none',
      },
  },

}));
