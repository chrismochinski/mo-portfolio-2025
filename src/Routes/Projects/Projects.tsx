import { useEffect } from 'react';
import { Box, Title, Text } from '@mantine/core';
import { useGlobalStyles, useProjectsStyles, useSiteContext } from '@mo';

export function Projects() {
  const { isNavigationVisible, setIsNavigationVisible } = useSiteContext();
  const { classes, cx } = useProjectsStyles();
  const { classes: globalClasses } = useGlobalStyles();

  useEffect(() => {
    setIsNavigationVisible(true);
    document.title = 'Projects | Mo';
  }, [isNavigationVisible, setIsNavigationVisible]);

  return (
    <Box className={cx(globalClasses.row, classes.projectsWrapper)}>
      <Title order={1}>Projects</Title>
      <Text component="h4" pt="xs">
        Coming soon.
      </Text>
    </Box>
  );
}
