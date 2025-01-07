import { createStyles } from "@mantine/emotion";

export interface HomeStylesProps {
  isNavigationVisible: boolean;
}

export const useHomeStyles = createStyles(
  (_, { isNavigationVisible }: HomeStylesProps) => ({
    homeWrapper: {
      overflow: "hidden",
      height: "100vh",
    },

    homeInnerWrapper: {
      height: "100vh",
    },

    homeContentWrapper: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "500px",
      marginInline: "auto 14%",
    },

    ferrisWheelIconButton: {
      cursor: isNavigationVisible ? "default" : "pointer",
      pointerEvents: isNavigationVisible ? "none" : "auto",
      transition: "transform 1300ms ease-out, opacity 900ms ease-out, filter 900ms ease-out",
      filter: "blur(16px) brightness(0.5)", // Temporarily hide icon
      transform: "translateY(60px)",
      opacity: 0,
      "&.show": {
        transform: "translateY(0)",
        opacity: 1,
        filter: "none",
      },
    },

    // --------------
    // --------------
    // --------------
    // --------------
    // different component later - navigation
    // --------------
    // --------------
    navigationFerrisWheel: {
      position: "absolute",
      top: "50%",
      right: "100%",
      transform: isNavigationVisible
        ? "translateY(-50%) translateX(36%)"
        : "translateY(-50%) translateX(-10%)",
      height: "80vh",
      transition: "transform 2000ms ease-out",
      //TEMPORARY SVG VERSION

      svg: {
        height: "80vh",
        width: "auto",
      },
    },
  }),
);
