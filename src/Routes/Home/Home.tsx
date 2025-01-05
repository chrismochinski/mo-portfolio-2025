import { Anchor, Box, Flex, Image, Title, Text } from "@mantine/core";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import { useHomeStyles } from ".";
import { Triangles } from "../../components/Triangles";
import { useGlobalStyles } from "../../Global";
import "./Home.scss";

export function Home() {
  const { classes, cx } = useHomeStyles();
  const { classes: globalClasses } = useGlobalStyles();

  return (
    <Box className={classes.homeWrapper}>
      <Triangles />
      <Box className={cx(globalClasses.row, classes.homeInnerWrapper)}>
        <Box className={globalClasses.container}>
          <Flex gap="xl" justify="center" align="center" mt="md" mb="lg">
            <Anchor href="https://chrismochinski.com" target="_blank" fz="sm">
              Mo's Old Website
            </Anchor>
            <Anchor href="https://characterstrong.com.com" target="_blank" fz="sm">
              CS Website
            </Anchor>
            <Anchor href="https://chrismochinski.netlify.app" target="_blank" fz="sm">
              Mo's V2 App Idea
            </Anchor>
          </Flex>
          <Title order={1} fz="xxl" m="auto" ta="center" fw={600}>
            Here is some h1 header text
          </Title>

          <Text className={globalClasses.balance} component="p" fz="sm" ta="center" pb="lg">
            This will be a subtitle and will be super long Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quidem magni libero doloribus ullam aspernatur nisi asperiores?
            Quibusdam voluptate corporis similique!
          </Text>

          <Flex gap="xxl" justify="center" align="flex-end" mt="xl" mb="lg">
            <Anchor href="https://vite.dev" target="_blank" className={globalClasses.columnCenter}>
              <Image
                width="90px"
                height="auto"
                src={viteLogo}
                className={cx(globalClasses.slowSpinReverse)}
                alt="Vite logo"
              />
              <Title order={4} fw={500}>
                Vite logo
              </Title>
            </Anchor>

            <Anchor href="https://react.dev" target="_blank" className={globalClasses.columnCenter}>
              <Image
                width="90px"
                height="auto"
                src={reactLogo}
                className={cx(globalClasses.slowSpin)}
                alt="React logo"
              />
              <Title order={4} fw={500}>
                React logo
              </Title>
            </Anchor>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
