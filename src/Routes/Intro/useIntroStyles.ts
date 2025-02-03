import { createStyles } from '@mantine/core';
import { colors } from '@mo';

const addOpacity = (hex: string, opacity: number) => {
  // Convert hex to RGBA and apply opacity
  const alpha = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, '0');
  return `${hex}${alpha}`;
};

interface IntroStylesProps {
  isNavigationVisible: boolean;
}

export const useIntroStyles = createStyles((theme, { isNavigationVisible }: IntroStylesProps) => ({
  introButtonWrapper: {
    position: 'absolute',
    width: '280px',
    height: '400px',
    inset: 'auto',
    margin: 'auto',
    borderRadius: '50%',
    zIndex: 1,
    backdropFilter: 'blur(2px)',
    WebkitBackdropFilter: 'blur(2px)',
    background: `radial-gradient(circle, 
    ${addOpacity(theme.colorScheme === 'dark' ? colors.black : colors.white, 0.6)} 5%, 
    ${addOpacity(theme.colorScheme === 'dark' ? colors.black : colors.white, 0.1)} 50%, 
    transparent 100%)`,
    // GRADUAL BLUR DECREASE toward edges
    maskImage:
      'radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)',
    WebkitMaskImage:
      'radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)',
  },
  ferrisWheelIconButton: {
    margin: 'auto',
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
  },
}));
