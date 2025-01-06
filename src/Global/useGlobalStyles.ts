import { MantineThemeOverride } from "@mantine/core";
import { createStyles } from "@mantine/emotion";
import * as animations from "./Animations";

export const globalTheme: MantineThemeOverride = {
  colors: {
    custom: [
      "#191716", // black
      "#66101F", // red
      "#f28f3b", // orange
      "#4ECDC4", // teal
      "#eef36a", // yellow
      "#3D348B", // blue
      "#ffffff", // white
      "#5171A5", // light blue
      "#758190", // gray
      "#575757", // dark gray
      "#C0C0C0", // light gray
    ],
  },

  breakpoints: {
    xs: "575px",
    sm: "768px",
    md: "991px",
    lg: "1200px",
    xl: "1400px",
  },

  spacing: {
    xs: "clamp(2px, 0.5vw, 4px)",
    sm: "clamp(4px, 0.75vw, 8px)",
    md: "clamp(8px, 1vw, 16px)",
    lg: "clamp(16px, 1.25vw, 32px)",
    xl: "clamp(32px, 1.5vw, 64px)",
    xxl: "clamp(64px, 1.75vw, 128px)",
  },

  fontSizes: {
    xs: "clamp(14px, 1vw, 16px)",
    sm: "clamp(1rem, 1.35vw, 1.125rem)",
    md: "clamp(1.125rem, 1.75vw, 1.25rem)",
    xl: "clamp(2rem, 3vw, 3rem)",
    xxl: "clamp(3rem, 4vw, 4rem)",
  },

  lineHeights: {
    xs: "1.125em",
    sm: "1.25em",
    md: "1.35em",
    lg: "1.5em",
    xl: "1.75em",
    xxl: "2em",
  },
};

export const useGlobalStyles = createStyles(() => ({
  bitter: {
    fontFamily: "'Bitter', serif",
  },
  afacad: {
    fontFamily: "'Afacad', sans-serif",
  },
  raleway: {
    fontFamily: "'Raleway', sans-serif",
  },
  ralewayDots: {
    fontFamily: "'Raleway Dots', sans-serif",
  },
  doto: {
    fontFamily: "'Doto', sans-serif",
  },
  poppins: {
    fontFamily: "'Poppins', sans-serif",
  },

  balance: {
    textWrap: "balance",
  },

  row: {
    marginBlock: "max(calc(1.5vw + 1.5vw), 2em)",
    paddingInline: "max(6vw, (100vw - 1280px)/2)",
  },

  container: {
    containerType: "inline-size",
  },

  columnCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  // ---------- Z-INDEXES ---------- //

  z0: {
    zIndex: 0,
  },
  z1: {
    zIndex: 1,
  },
  z2: {
    zIndex: 2,
  },
  z3: {
    zIndex: 3,
  },
  z4: {
    zIndex: 4,
  },
  z5: {
    zIndex: 5,
  },
  z6: {
    zIndex: 6,
  },
  z7: {
    zIndex: 7,
  },
  z8: {
    zIndex: 8,
  },
  z9: {
    zIndex: 9,
  },
  z10: {
    zIndex: 10,
  },

  // ------------------------------------------ //
  // ------------------------------------------ //
  // --------------- ANIMATIONS --------------- //
  // ------------------------------------------ //
  // ------------------------------------------ //

  slowSpin: {
    animation: `${animations.slowSpin} 10s linear infinite`,
    animationDelay: "3000ms",
  },

  slowSpinReverse: {
    animation: `${animations.slowSpinReverse} 10s linear infinite`,
    animationDelay: "3000ms",
  },

  ferrisWheelCarSway: {
    animation: `${animations.slowSpinReverse} 20s linear infinite`,
    animationDelay: "3000ms",
  },

  barSpin: {
    animation: `${animations.slowSpin} 20s linear infinite`,
    animationDelay: "3000ms",
  },

  moveAround: {
    animation: `${animations.moveAround} infinite`,
  },
}));
