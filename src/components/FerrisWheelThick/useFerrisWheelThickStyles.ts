import { createStyles } from "@mantine/emotion";

export const useFerrisWheelThickStyles = createStyles(() => ({

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
      '& [id*="wheel"]': {
        "& circle": {
          stroke: "#FFFFFF",
          '&[stroke="white"]': {
            stroke: "#000000",
          },
        },
      },
    },
  },

  baseBack: {
    path: {
      fill: "#555555",

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
      stroke: "#FFFFFF",
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
