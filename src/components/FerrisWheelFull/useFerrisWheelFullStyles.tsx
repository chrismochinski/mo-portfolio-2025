import { createStyles } from "@mantine/emotion";


export const useFerrisWheelFullStyles = createStyles(() => ({
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

  car: {
    transformOrigin: "center",
    transformBox: "fill-box",
  },
}));