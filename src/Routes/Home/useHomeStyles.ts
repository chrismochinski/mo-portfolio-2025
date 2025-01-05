import { createStyles } from "@mantine/emotion";
// import { useGlobalStyles } from "../../Global";

// const global = useGlobalStyles();

export const useHomeStyles = createStyles((theme) => ({
  homeWrapper: {
    backgroundColor: theme.colors.custom[5],
  },

  logo: {
    width: 200,
    height: 200,
    margin: "auto",
    display: "block",
  },

}));
