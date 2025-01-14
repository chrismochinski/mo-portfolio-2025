import { useEffect, useRef } from 'react';
import { Box } from '@mantine/core';
import { useBubbleStyles, colorVariants } from '@mo';
import particlesConfig from './bubbles-config.json';

declare global {
  interface Window {
    particlesJS: (id: string, config: Record<string, unknown>) => void;
  }
}

export interface BubblesProps {
  isNavigationVisible: boolean;
}

/**
 * @component Bubbles
 * @description Bubbles component, using particles.js library and config in /public folder
 * @returns Bubbles component
 * @param props - BubblesProps
 */
export function Bubbles(props: BubblesProps) {
  const { isNavigationVisible } = props;
  const { cx, classes } = useBubbleStyles();
  const containerRef = useRef<HTMLDivElement>(null);

  const bubbleColors = [
    colorVariants.red.primary,
    colorVariants.red.shades[0],
    colorVariants.red.shades[1],
    colorVariants.red.shades[2],
    colorVariants.red.shades[3],
    colorVariants.orange.primary,
    colorVariants.orange.shades[1],
    colorVariants.orange.shades[2],
    colorVariants.gold.shades[3],
    colorVariants.gold.shades[4],
    colorVariants.purple.shades[0],
  ];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/particles.js';
    script.async = true;

    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-container-light', {
          ...particlesConfig,
          particles: {
            ...particlesConfig.particles,
            number: { value: isNavigationVisible ? 27 : 21 }, // Fewer particles for one layer
            density: { enable: true, value_area: 1400 },
            color: { value: bubbleColors },
            move: { speed: isNavigationVisible ? 8 : 0.5 },
          },
        });
        window.particlesJS('particles-container', {
          ...particlesConfig,
          particles: {
            ...particlesConfig.particles,
            number: { value: 33 }, // Higher density for another layer
            density: { enable: true, value_area: 1400 },
            color: { value: bubbleColors },
            move: { speed: isNavigationVisible ? 8 : 0.5 },
          },
        });
      }
    };

    document.body.appendChild(script);
  }, []);

  return (
    <Box className={classes.bubblesContainer} id="bubbles-container">
      <Box
        className={cx(classes.bubblesFront, isNavigationVisible && 'navigation-visible')}
        ref={containerRef}
        id="particles-container"
      />
      <Box className={classes.bubblesLight} ref={containerRef} id="particles-container-light" />
    </Box>
  );
}
