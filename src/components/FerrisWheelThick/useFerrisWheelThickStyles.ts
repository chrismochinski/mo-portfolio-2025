import { createStyles } from "@mantine/emotion";

export const useFerrisWheelThickStyles = createStyles(() => ({
  ferrisWheelThickSvg: {
    width: "150px",
    height: "auto",
    aspectRatio: "1/1",
    padding: "min(0.5em, 1vw)",

    "& *": {
      transformOrigin: "center",
      transformBox: "fill-box",
    },

    transformOrigin: "center",
    transformBox: "fill-box",

    "@media (prefers-color-scheme: dark)": {
      "& path": {
        fill: "#F9F9F9",
        stroke: "#F9F9F9",
        '&[fill="white"]': {
          fill: "#000000",
        },
      },
      '& [id*="wheel"]': {
        "& circle": {
          stroke: "#F9F9F9",
          '&[stroke="white"]': {
            stroke: "#000000",
          },
        },
      },
    },
  },

  baseBack: {
    path: {
      fill: "#444444",

      "@media (prefers-color-scheme: dark)": {
        fill: "#999999",
      },
    },
  },

  wheelMask: {
    circle: {
      mixBlendMode: "difference",

      "@media (prefers-color-scheme: dark)": {
        mixBlendMode: "overlay",
      },
    },
  },

  wheelFill: {
    "@media (prefers-color-scheme: dark)": {
      stroke: "#F9F9F9",
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
