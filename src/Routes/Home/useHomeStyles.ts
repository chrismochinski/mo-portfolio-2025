import { createStyles } from "@mantine/emotion";
import * as animations from "../../Global/Animations";

export const useHomeStyles = createStyles((theme) => ({
  homeWrapper: {
    backgroundColor: theme.colors.custom[0],
  },

  logo: {
    width: 60,
    margin: "auto",
    display: "block",
  },

  viteLogo: {
    animation: `${animations.slowSpinReverse} 10s linear infinite`,
  },

}));
