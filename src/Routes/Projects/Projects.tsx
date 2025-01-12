import { Box, Title, Text } from '@mantine/core';
import { useProjectsStyles } from '@mo';

export function Projects() {
  const { classes } = useProjectsStyles();
  return (
    <Box className={classes.projectsWrapper}>
      <Title order={1}>Projects</Title>
      <Text component="p">Coming soon...</Text>
    </Box>
  );
}
