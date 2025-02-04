import { createStyles } from '@mantine/core';
import { colors } from '@mo';
import { addOpacity } from '@mo';

export const useBubbleStyles = createStyles((theme) => ({
  bubblesContainer: {
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
  },

  bubblesRightFade: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 'clamp(14%, 200px, 40%)',
    height: '100vh',
    pointerEvents: 'none', // Ensure clicks pass through
    zIndex: 1,

    // 🔥 Corrected Gradient: Left (transparent) → Right (theme color)
    background: `linear-gradient(to right, 
      ${addOpacity(theme.colorScheme === 'dark' ? colors.black : colors.white, 0)} 0%,  
      ${addOpacity(theme.colorScheme === 'dark' ? colors.black : colors.white, 0.5)} 10%,  
      ${addOpacity(theme.colorScheme === 'dark' ? colors.black : colors.white, 0.8)} 90%,  
      ${addOpacity(theme.colorScheme === 'dark' ? colors.black : colors.white, 1)} 99%)`,

    // ✅ Gradual blur effect: Stronger on the right
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',

    // ✅ Gradual transparency mask
    maskImage: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
    WebkitMaskImage: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
  },

}));
