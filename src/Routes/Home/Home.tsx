import { useEffect, useState } from 'react';
import { Box, Title } from '@mantine/core';
import { useGlobalStyles, useSiteContext, useHomeStyles } from '@mo';

export function Home() {
  const { setIsNavigating } = useSiteContext();
  const [animateHomeElements, setAnimateHomeElements] = useState(false);
  const { classes: globalClasses } = useGlobalStyles();
  const { classes, cx } = useHomeStyles({ animateHomeElements });

  useEffect(() => {
    document.title = 'Home | Mo';

    console.log('%cHome animations started!', 'color: blue; font-size: 1.15rem; font-weight: 700;');

    setAnimateHomeElements(true); // ✅ Start page animations
    setIsNavigating(false);
  }, [setIsNavigating]);

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
