import { createStyles } from "@mantine/emotion";
import * as animations from "../../Global/Animations";

export const useTrianglesStyles = createStyles(() => ({
  trianglesSvg: {
    position: "absolute",
    height: "100vh",
    width: "1200px",
    minHeight: "100vh",
    left: "-270px",
    // left: '400px',
    top: "50%",
    transform: "translateY(-50%)",
    "& > path": {
      animation: `${animations.moveAround} infinite ease-in-out`,
    },
  },

  shape: {
    transformBox: "fill-box",
    transformOrigin: "center",
    cursor: "pointer",
    transition: "transform 300ms ease-out",
    "&:hover": {
      transform: "scale(1.15)",
    },
  },
}));
