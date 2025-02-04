import { useEffect } from 'react';
import { Box, Title, Text } from '@mantine/core';
import { useGlobalStyles, useContactStyles, useSiteContext } from '@mo';

export function Contact() {
  const { isNavigationVisible, setIsNavigationVisible } = useSiteContext();
  const { classes, cx } = useContactStyles();
  const { classes: globalClasses } = useGlobalStyles();

  useEffect(() => {
    setIsNavigationVisible(true);
    document.title = 'Contact | Mo';
  }, [isNavigationVisible, setIsNavigationVisible]);

  return (
    <Box className={cx(globalClasses.row, classes.contactWrapper)}>
      <Title order={1}>Contact</Title>
      <Text component="h4" fw={400} pt="xs" my="sm">
        Coming soon
      </Text>
      <Text component="p" fw={200}>
        (but feel free to email{' '}
        <Text component="span" fw={600}>
          mo@chrismochinski.com
        </Text>
        )
      </Text>
    </Box>
  );
}
