import { MantineThemeOverride } from "@mantine/core";
import { createStyles } from "@mantine/emotion";
import * as animations from "./Animations";

export const globalTheme: MantineThemeOverride = {
  colors: {
    custom: [
      // $names are SCSS variables
      "#000000", // $trueBlack
      "#191716", // $black
      "#F9F9F9", // $white
      "#FFFFFF", // $trueWhite
      "#911E1E", // $red
      "#FF8800", // $orange
      '#D4B879', // $gold
      "#F9EA9A", // $yellow
      "#79D49E", // $emerald
      "#11C7FF", // $lightBlue
      '#145C9E', // $darkBlue
      "#611E91", // $purple
      "#D5D5D5", // $lightGray
      "#758190", // $gray
      "#575757", // $darkGray
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
    // marginBlock: "max(calc(1.5vw + 1.5vw), 2em)", // revisit
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
    animationDelay: "2000ms",
  },

  ferrisWheelSpin: {
    animation: `${animations.slowSpin} 15s linear infinite`,
    animationDelay: "2000ms",
  },

  slowSpinReverse: {
    animation: `${animations.slowSpinReverse} 10s linear infinite`,
    animationDelay: "2000ms",
  },

  ferrisWheelCarSpinReverse: {
    animation: `${animations.slowSpinReverse} 30s linear infinite`,
    animationDelay: "2000ms",
  },


  // replace with particles.js ??
  moveAround: {
    animation: `${animations.moveAround} infinite`,
  },
}));
