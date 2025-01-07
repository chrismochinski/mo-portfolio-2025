import { useState, useEffect } from "react";
import { Anchor, Box, Flex, Title, Text } from "@mantine/core";
import { useHomeStyles } from ".";
import { Triangles, FerrisWheelThick, Bubbles, FerrisWheelFull } from "../../components";
import { useGlobalStyles } from "../../Global";
import "./Home.scss";

export function Home() {
  const { classes: globalClasses } = useGlobalStyles();
  // for now, "navigation" is a huge left-side ferris wheel
  const [isNavigationVisible, setIsNavigationVisible] = useState(false);
  const [showFerrisWheelIcon, setShowFerrisWheelIcon] = useState(false);
  const { classes, cx } = useHomeStyles({ isNavigationVisible });

  useEffect(() => {
    // show starter icon after short delay on page load
    const timer = setTimeout(() => setShowFerrisWheelIcon(true), 1500);
    return () => clearTimeout(timer); // Cleanup timeout
  }, []);


  const toggleNavigation = () => {
    setIsNavigationVisible(!isNavigationVisible);
  };

  return (
    <Box className={classes.homeWrapper}>
      <Box className={cx(globalClasses.row, classes.homeInnerWrapper)}>
        <Box
          className={cx(globalClasses.container, classes.homeContentWrapper)}
        >
          <Title
            className={globalClasses.z10}
            order={1}
            fz="xxl"
            my={0}
            mx="auto"
            ta="center"
            fw={600}
            lh="lg"
          >
            Hi, friends.
          </Title>
          <Title
            className={cx(globalClasses.z10, globalClasses.balance)}
            order={2}
            my={0}
            mx="auto"
            ta="center"
            mb="md"
            lh="sm"
            fw={500}
          >
            Thanks so much for visiting. Or stumbling upon.
          </Title>

          <Text
            className={cx(globalClasses.balance, globalClasses.z10)}
            component="p"
            fz="sm"
            ta="center"
            pb="md"
            my="xs"
          >
            I'm still working on this. Please check back.
          </Text>
          <Flex
            className={globalClasses.z10}
            gap="md"
            justify="center"
            align="center"
            mt={0}
            mb="sm"
          >
            <Anchor
              href="https://github.com/chrismochinski"
              target="_blank"
              fz="xs"
            >
              Mo's Github
            </Anchor>
            <Anchor
              href="https://chrismochinski.github.io/"
              target="_blank"
              fz="xs"
            >
              Mo's Old Site
            </Anchor>
            <Anchor href="https://characterstrong.com" target="_blank" fz="xs">
              CharacterStrong
            </Anchor>
          </Flex>

          <Anchor
            onClick={toggleNavigation}
            mt="sm"
            mb="lg"
            className={cx(globalClasses.z10, classes.ferrisWheelIconButton, showFerrisWheelIcon && "show")}
          >
            <FerrisWheelThick isNavigationVisible={isNavigationVisible} />
          </Anchor>
          <Triangles />
          <Bubbles />
        </Box>
      </Box>

      {/* REFACTOR WITH NEW CLEANER MENU COMPONENT  */}
      {/* REFACTOR WITH NEW CLEANER MENU COMPONENT  */}
      {/* REFACTOR WITH NEW CLEANER MENU COMPONENT  */}
      <Box className={classes.navigationFerrisWheel}
        onMouseEnter={() => console.log("EFFECTS HERE!")}
      >
        <FerrisWheelFull />
      </Box>
    </Box>
  );
}
