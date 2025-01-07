import { createStyles } from "@mantine/emotion";

export const useFerrisWheelThickStyles = createStyles(() => ({
  ferrisWheelSvg: {
    width: "150px",
    height: "150px",

    "& > g": {
      transformOrigin: "center",
      transformBox: "fill-box",
    },

    "@media (prefers-color-scheme: dark)": {
      "& path": {
        fill: "#FFFFFF",
        stroke: "#FFFFFF",
        '&[fill="white"]': {
          fill: "#000000",
        },
      },
      "& circle": {
        stroke: "#FFFFFF",
        '&[stroke="white"]': {
          stroke: "#000000",
        },
      },
    },
  },

  // -----------------------
  // -----------------------
  // UPDATED THICKER OPTION
  // -----------------------
  // -----------------------
  ferrisWheelThickSvg: {
    width: "200px",
    height: "200px",
    padding: "min(0.5em, 1vw)",

    "& *": {
      transformOrigin: "center",
      transformBox: "fill-box",
    },

    "@media (prefers-color-scheme: dark)": {
      "& path": {
        fill: "#FFFFFF",
        stroke: "#FFFFFF",
        '&[fill="white"]': {
          fill: "#000000",
        },
      },
      "& circle": {
        stroke: "#FFFFFF",
        '&[stroke="white"]': {
          stroke: "#000000",
        },
      },
    },
  },

  carsGroup: {
    transformOrigin: "center",
    transformBox: "fill-box",
  },

  barsGroup: {
    transformOrigin: "center",
    transformBox: "fill-box",
  },

  car: {
    transformOrigin: "center",
    transformBox: "fill-box",
  },
}));
