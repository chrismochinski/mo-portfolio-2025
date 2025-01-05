import { Anchor, Box, Image, Title } from "@mantine/core";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "./Home.scss";
import { useHomeStyles } from ".";
import { useGlobalStyles } from "../../Global";

export function Home() {

    const { classes, cx } = useHomeStyles();
    const { classes: globalClasses } = useGlobalStyles();

  return (
    <Box className={classes.homeWrapper}>
      <Box>
        <Anchor href="https://vite.dev" target="_blank">
          <Image src={viteLogo} className={classes.logo} alt="Vite logo" />
        </Anchor>
        <Anchor href="https://react.dev" target="_blank">
          <Image src={reactLogo} className={cx(classes.logo)} alt="React logo" />
        </Anchor>
      </Box>
      <Title order={1} className="title">BEEF</Title>
    </Box>
  );
}
