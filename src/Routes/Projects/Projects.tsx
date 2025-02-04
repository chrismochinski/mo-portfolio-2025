import { useEffect } from 'react';
import { Box, Title, Text, Flex, Anchor } from '@mantine/core';
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
      <Text component="h3" pt="xs" fw={400} my="xs">
        Coming soon!
      </Text>
      <Text component="h5" pt="xs" fw={400} my="md">
     For now, chiggity-check these out:
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
  );
}
