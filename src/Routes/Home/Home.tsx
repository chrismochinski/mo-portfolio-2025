import { useEffect } from 'react';
import { Box, Title, Text } from '@mantine/core';
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
    <Box className={cx(classes.homeWrapper)} id="home">
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
          mb="md"
          fw={400}
        >
          My name is Mo, and this is a website.
        </Title>
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
