import { Anchor, Box, Flex, Title, Text } from '@mantine/core';
import { useHomeStyles } from '.';
import { useGlobalStyles } from '../../Global';
import { useSiteContext } from '../../context';

import './Home.scss';

export function Home() {
  const { isNavigationVisible } = useSiteContext();
  const { classes: globalClasses } = useGlobalStyles();
  const { classes, cx } = useHomeStyles({ isNavigationVisible });

  return (
    <Box className={classes.homeWrapper} id="home">
      <Box className={cx(globalClasses.columnCenter, classes.salutation, globalClasses.z10)}>
        <Title order={1} my="xs" mx="auto" ta="center">
          Hi, friends.
        </Title>
        <Title className={globalClasses.balance} order={4} mt={0} mx="auto" ta="center" mb="sm">
          This site is a work in progress,
          <br />
          but it's gonna be rad.
        </Title>

        <Text className={globalClasses.balance} component="p" ta="center" pb="md" my="md">
          Please check back soon.
        </Text>

        <Flex className={classes.personalLinks} gap="lg" justify="center" align="center" mt={0}>
          <Anchor
            className={classes.personalAnchorText}
            href="https://github.com/chrismochinski"
            target="_blank"
          >
            Mo's Github
          </Anchor>
          <Anchor
            className={classes.personalAnchorText}
            href="https://chrismochinski.github.io/"
            target="_blank"
          >
            Mo's Old Site
          </Anchor>
          <Anchor
            className={classes.personalAnchorText}
            href="https://characterstrong.com"
            target="_blank"
          >
            CharacterStrong
          </Anchor>
        </Flex>
      </Box>

      <Text className={classes.copyright} component="h6" ta="center" pb="md" my="sm">
        Copyright © 2025 Wreck Shop Media LLC. All rights reserved.
      </Text>
    </Box>
  );
}
