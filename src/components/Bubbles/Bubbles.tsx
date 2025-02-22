import { useEffect, useRef } from 'react';
import { Box } from '@mantine/core';
import { useBubbleStyles, colorVariants, useSiteContext } from '@mo';
import particlesConfig from './bubbles-config.json';

declare global {
  interface Window {
    particlesJS: (id: string, config: Record<string, unknown>) => void;
  }
}

/**
 * @component Bubbles
 * @description Bubbles component, using particles.js library and config in /public folder
 * @returns Bubbles component
 * @param props - BubblesProps
 */
export function Bubbles() {
  const { isNavigationVisible, deviceType } = useSiteContext();
  const { cx, classes } = useBubbleStyles({ deviceType });
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
            number: { value: 24 }, // Fewer particles for one layer
            density: { enable: true, value_area: 1400 },
            color: { value: bubbleColors },
          },
        });
        window.particlesJS('particles-container', {
          ...particlesConfig,
          particles: {
            ...particlesConfig.particles,
            number: { value: 16 }, // Fewer particles for one layer
            density: { enable: true, value_area: 1400 },
            color: { value: bubbleColors },
          },
        });
        // one more for mobile only that is a little more opacity low see-through, in the BACK layer, and has a generally SMALLER range of sizes
        window.particlesJS('particles-container-mobile', {
          ...particlesConfig,
          particles: {
            ...particlesConfig.particles,
            number: { value: 16 }, // Fewer particles for one layer
            density: { enable: true, value_area: 1400 },
            color: { value: bubbleColors },
            opacity: { value: 0.6, random: true, anim: { opacity_min: 0.1 } },
            size: { value: 16, random: true, anim: { size_min: 4 } },
            move: { speed: 1.4 },
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
      <Box className={classes.bubblesMobile} ref={containerRef} id="particles-container-mobile" />
      <Box className={classes.bubblesRightFade} />
    </Box>
  );
}
