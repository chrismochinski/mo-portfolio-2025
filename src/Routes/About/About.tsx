import { useEffect } from 'react';
import { Box, Text, Title } from '@mantine/core';
import { useAboutStyles, useSiteContext } from '@mo';

export function About() {
  const { isNavigationVisible, setIsNavigationVisible } = useSiteContext();
  const { classes, cx } = useAboutStyles();

  useEffect(() => {
    setIsNavigationVisible(true);
    document.title = 'About | Mo';
  }, [isNavigationVisible, setIsNavigationVisible]);

  return (
    <Box className={cx(classes.aboutWrapper)} id="about">
      {/* About Title Animation */}
      <Title order={1}>About</Title>

      {/* Subtitle Animation */}
      <Title order={4} fw={400} pt="xs" my="sm">
        My name is Chris. Most people call me Mo.
      </Title>

      {/* Paragraph Animation */}
      <Text component="p" fw={300}>
        I get very excited about turning ideas into things that help people. When those things are
        deemed impossible, I get more excited.
      </Text>
    </Box>
  );
}
