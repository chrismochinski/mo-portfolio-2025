import { useEffect } from 'react';
import { Anchor, Box, Flex, Title, Text } from '@mantine/core';
import { useGlobalStyles, useSiteContext, useHomeStyles } from '@mo';

export function Home() {
  const { isNavigationVisible, setIsNavigationVisible } = useSiteContext();
  const { classes: globalClasses } = useGlobalStyles();
  const { classes, cx } = useHomeStyles({ isNavigationVisible });

  useEffect(() => {
    // revisit need?? double set?
    setIsNavigationVisible(true);
    document.title = 'Home | Mo';
  }, [setIsNavigationVisible, isNavigationVisible]);

  return (
    <Box className={cx(globalClasses.row, classes.homeWrapper)} id="home">
      <Box className={cx(globalClasses.columnCenter, classes.salutation, globalClasses.z10)}>
        <Title
          className={globalClasses.textContrastShadowSubtle}
          order={1}
          my="xs"
          mx="auto"
          ta="center"
          fw={800}
        >
          Hi, friends.
        </Title>
        <Title
          className={cx(globalClasses.balance, globalClasses.textContrastShadowSubtle)}
          order={4}
          mt={0}
          mx="auto"
          ta="center"
          mb="sm"
          fw={500}
        >
          This site is a work in progress,
          <br />
          but it's gonna be rad.
        </Title>

        <Text
          className={cx(globalClasses.balance, globalClasses.textContrastShadowSubtle)}
          component="p"
          ta="center"
          pb="md"
          my="md"
        >
          Please check back soon.
        </Text>

        <Flex
          className={classes.personalLinks}
          gap="min(1em, 2vw)"
          justify="center"
          align="center"
          mt={0}
        >
          <Anchor
            fz="sm"
            className={cx(globalClasses.textContrastShadowSubtle, classes.personalAnchorText)}
            href="https://github.com/chrismochinski"
            target="_blank"
          >
            My Github
          </Anchor>
          <Anchor
            fz="sm"
            className={cx(globalClasses.textContrastShadowSubtle, classes.personalAnchorText)}
            href="https://chrismochinski.github.io/"
            target="_blank"
          >
            My Old Site
          </Anchor>
          <Anchor
            fz="sm"
            className={cx(globalClasses.textContrastShadowSubtle, classes.personalAnchorText)}
            href="https://characterstrong.com"
            target="_blank"
          >
            CharacterStrong
          </Anchor>
        </Flex>
      </Box>

      <Text
        className={cx(globalClasses.textContrastShadow, classes.copyright)}
        component="h6"
        ta="center"
        pb="md"
        my="sm"
        fw={300}
      >
        Copyright © 2025 Wreck Shop Media LLC. All rights reserved.
      </Text>
    </Box>
  );
}
