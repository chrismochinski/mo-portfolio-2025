import { createStyles } from "@mantine/emotion";

export const useFerrisWheelIconStyles = createStyles(() => ({
  ferrisWheelIconSvg: {
    width: "120px",
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
        '&#center-wheel': {
          fill: ''
        },
      },
    },

  },
  // BLUR OUT
  blurOut: {
    transformOrigin: '50% 70%',
    filter: "blur(13px)",
    transform: 'scale(1.2, 0.8)',
    transition: "filter 1400ms ease-out, transform 1200ms ease-out",
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
    opacity: 0.8,
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
