import { useEffect } from 'react';
import { Box, Title, Text } from '@mantine/core';
import { useContactStyles, useSiteContext } from '@mo';

export function Contact() {
  const { isNavigationVisible, setIsNavigationVisible } = useSiteContext();
  const { classes, cx } = useContactStyles();

  useEffect(() => {
    setIsNavigationVisible(true);
    document.title = 'Contact | Mo';
  }, [isNavigationVisible, setIsNavigationVisible]);

  return (
    <Box className={cx(classes.contactWrapper)}>
      <Title order={1}>Contact</Title>
      <Text component="h4" fw={400} pt="xs" my="sm">
        Coming soon
      </Text>
      <Text component="p" fw={200}>
        ( but feel free to email{' '}
        <Text
          component="a"
          className={classes.emailLink}
          fw={600}
          href="mailto:mo@chrismochinski.com"
        >
          mo@chrismochinski.com
        </Text>
        {' '})
      </Text>
    </Box>
  );
}
