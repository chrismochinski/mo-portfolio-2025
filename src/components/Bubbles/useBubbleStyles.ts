import { createStyles } from "@mantine/emotion";

export const useBubbleStyles = createStyles(() => ({
  bubblesContainer: {
    width: "max(40%, 500px)",
    position: "absolute",
    top: 0,
    left: 0,
    height: "100vh",
    // this container holds the bottom two, with bubbles left and bubbles Light on the right, flex, to create illusion of bubbles lessening from left to right
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    zIndex: 0, // revisit
  },
  bubbles: {
    width: "55%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },

  bubblesLight: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    right: 0,
  },
}));