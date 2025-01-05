import { MantineThemeOverride } from "@mantine/core";
import { createStyles } from "@mantine/emotion";
// import { slowSpin, slowSpinReverse } from "./Animations";

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
      "#323031", // dark gray
      "#9f9f9f", // light gray
    ],
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

  // ------------------------------------------ //
  // ------------------------------------------ //
  // --------------- ANIMATIONS --------------- //
  // ------------------------------------------ //
  // ------------------------------------------ //

    // slowSpin: {
    //     animation: `${slowSpin} 10s linear infinite`,
    // },
    // slowSpinReverse: {
    //     animation: `${slowSpinReverse} 10s linear infinite`,
    // },

}));
