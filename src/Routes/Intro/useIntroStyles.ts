import { createStyles } from '@mantine/core';
import { colors, mq } from '@mo';

const addOpacity = (hex: string, opacity: number) => {
  // Convert hex to RGBA and apply opacity
  const alpha = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, '0');
  return `${hex}${alpha}`;
};

interface IntroStylesProps {
  isNavigationVisible: boolean;
  deviceType: 'mobile' | 'tablet' | 'desktop';
}

export const useIntroStyles = createStyles(
  (theme, { isNavigationVisible, deviceType }: IntroStylesProps) => ({
    // blur box to help text visibility
    introButtonWrapper: {
      position: 'absolute',
      width: '200px',
      height: '300px',
      inset: 'auto auto auto auto',
      margin: 'auto',
      borderRadius: '50%',
      zIndex: 1,
      backdropFilter: 'blur(2px)',
      WebkitBackdropFilter: 'blur(2px)',
      background: `radial-gradient(circle, 
    ${addOpacity(theme.colorScheme === 'dark' ? colors.black : colors.white, 0.8)} 30%, 
    ${addOpacity(theme.colorScheme === 'dark' ? colors.black : colors.white, 0.01)} 60%, 
    transparent 100%)`,
      // GRADUAL BLUR DECREASE toward edges
      maskImage:
        'radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)',
      WebkitMaskImage:
        'radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)',
      //idea //important blur mobile????

      [mq.customMax(991)]: {
        height: deviceType !== 'desktop' ? '100vh' : '300px',
        width: deviceType !== 'desktop' ? '100vw' : '200px',
        borderRadius: deviceType !== 'desktop' ? '0' : '50%',
        maskImage: 'none',
        WebkitMaskImage: 'none',
        backdropFilter: isNavigationVisible ? 'blur(0)' : 'blur(5px)',
        WebkitBackdropFilter: isNavigationVisible ? 'blur(0)' : 'blur(5px)',
        background: isNavigationVisible ? 'transparent' : `${colors.black}20`,
        transition: 'backdrop-filter 900ms ease-out, background 900ms ease-out',
      },
    },
    // actual button with icon + text
    ferrisWheelIconButton: {
      marginInline: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      rowGap: '0.25em',
      zIndex: 2,
      cursor: isNavigationVisible ? 'default' : 'pointer',
      pointerEvents: isNavigationVisible ? 'none' : 'auto',
      opacity: isNavigationVisible ? 0 : 1,
      transform: isNavigationVisible ? 'translateY(0)' : 'translateY(-30px)',
      transition: 'transform 1400ms ease-out, opacity 900ms ease-out',
      [mq.customMax(768)]: {},
    },
  })
);
