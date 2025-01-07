import { Anchor, Box, Flex, Title, Text } from "@mantine/core";
import { useHomeStyles } from ".";
import { Triangles, FerrisWheelFull, FerrisWheelThick } from "../../components";
import { useGlobalStyles } from "../../Global";
import "./Home.scss";

export function Home() {
  const { classes, cx } = useHomeStyles();
  const { classes: globalClasses } = useGlobalStyles();

  return (
    <Box className={classes.homeWrapper}>
      <Box className={cx(globalClasses.row, classes.homeInnerWrapper)}>
        <Box className={cx(globalClasses.container, classes.homeContentWrapper)}>
          <Title
            className={globalClasses.z10}
            order={1}
            fz="xxl"
            my={0}
            mx="auto"
            ta="center"
            fw={600}
            lh="lg">
            Hi, friends!
          </Title>
          <Title
            className={cx(globalClasses.z10, globalClasses.balance)}
            order={2}
            my={0}
            mx="auto"
            ta="center"
            mb="md"
            lh="sm"
            fw={500}>
            Thanks so much for visiting. Or stumbling upon.
          </Title>

          <Text
            className={cx(globalClasses.balance, globalClasses.z10)}
            component="p"
            fz="sm"
            ta="center"
            pb="md"
            my="xs">
            I'm still working on this. Please check back.
          </Text>
          <Flex
            className={globalClasses.z10}
            gap="md"
            justify="center"
            align="center"
            mt={0}
            mb="sm">
            <Anchor href="https://github.com/chrismochinski" target="_blank" fz="xs">
              Mo's Github
            </Anchor>
            <Anchor href="https://chrismochinski.github.io/" target="_blank" fz="xs">
              Mo's Old Site
            </Anchor>
            <Anchor href="https://characterstrong.com" target="_blank" fz="xs">
              CharacterStrong
            </Anchor>
          </Flex>

          <Box mt="sm" mb="lg" className={globalClasses.z10}>
            <FerrisWheelFull />
            <FerrisWheelThick />
          </Box>
          <Triangles />
        </Box>
      </Box>
    </Box>
  );
}
