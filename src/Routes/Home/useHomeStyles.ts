import { createStyles } from "@mantine/emotion";

export const useHomeStyles = createStyles(() => ({
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
}));
