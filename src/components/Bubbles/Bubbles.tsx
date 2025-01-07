import { useEffect, useRef } from "react";
import { Box } from "@mantine/core";
import { useBubbleStyles } from ".";
import particlesConfig from "./particles-config.json";

declare global {
  interface Window {
    particlesJS: (id: string, config: Record<string, unknown>) => void;
  }
}

/**
 * @component Bubbles
 * @description Bubbles component, using particles.js library and config in /public folder
 * @returns Bubbles component
 */
export function Bubbles() {
  const { classes } = useBubbleStyles();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically load particles.js
    const script = document.createElement("script");
    script.src = "/particles.js";
    script.async = true;

    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS("particles-container-light", {
          ...particlesConfig,
          particles: {
            ...particlesConfig.particles,
            number: { value: 26 }, // Fewer particles for one layer
            density: { enable: true, value_area: 1400 }
          }
        });
        window.particlesJS("particles-container", {
          ...particlesConfig,
          particles: {
            ...particlesConfig.particles,
            number: { value: 52 }, // Higher density for another layer
            density: { enable: true, value_area: 1400 }
          }
        });
      }
    };

    document.body.appendChild(script);
  }, []);

  return (
    <Box className={classes.bubblesContainer}>
      <Box
        className={classes.bubbles}
        ref={containerRef}
        id="particles-container"
      />
      <Box
        className={classes.bubblesLight}
        ref={containerRef}
        id="particles-container-light"
      />
    </Box>
  );
}
