import { useEffect } from 'react';
import { Box, Title, Text } from '@mantine/core';
import { useGlobalStyles, useAboutStyles, useSiteContext } from '@mo';

export function About() {
  const { isNavigationVisible, setIsNavigationVisible } = useSiteContext();
  const { classes, cx } = useAboutStyles();
  const { classes: globalClasses } = useGlobalStyles();

  useEffect(() => {
    setIsNavigationVisible(true); ;
    document.title = 'About | Mo';
  }, [isNavigationVisible, setIsNavigationVisible]);



  return (
    <Box className={cx(globalClasses.row, classes.aboutWrapper)}>
      <Title order={1}>About</Title>
      <Text component="h4" pt="xs">
        Coming soon...
      </Text>
    </Box>
  );
}
