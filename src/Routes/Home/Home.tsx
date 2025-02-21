import { useEffect } from 'react';
import { Box, Title } from '@mantine/core';
import { useGlobalStyles, useSiteContext, useHomeStyles } from '@mo';

export function Home() {
  const {
    isNavigationVisible,
    setIsNavigationVisible,
    isMenuFullyLoaded,
    isNavigating,
    setIsNavigating,
  } = useSiteContext();
  const { classes: globalClasses } = useGlobalStyles();
  const { classes, cx } = useHomeStyles({ isMenuFullyLoaded, isNavigating });

  useEffect(() => {
    document.title = 'Home | Mo';

    if (!isNavigationVisible) {
      setIsNavigationVisible(true);
    }

    if (isNavigating) {
      console.log('%cNavigation DONE', 'color: limegreen; font-size: 1.15rem; font-weight: 700;');
      setIsNavigating(false);
    }
  }, [setIsNavigationVisible, isNavigationVisible, isNavigating, setIsNavigating]);

  return (
    <Box className={cx(classes.homeWrapper)} id="home">
      <Box
        pos="relative"
        className={cx(globalClasses.columnCenter, classes.salutation, globalClasses.z10)}
      >
        <Title
          className={globalClasses.textContrastShadow}
          order={1}
          my="xs"
          mx="auto"
          ta="center"
          fw={800}
        >
          Hi, friends.
        </Title>
        <Title
          className={cx(globalClasses.balance, globalClasses.textContrastShadow)}
          order={4}
          mt={0}
          mx="auto"
          ta="center"
          mb="md"
          fw={500}
        >
          My name is Mo, and this is a website.
        </Title>
      </Box>
    </Box>
  );
}
