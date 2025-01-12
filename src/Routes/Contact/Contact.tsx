import { Box, Title, Text } from '@mantine/core';
import { useContactStyles } from '@mo';

export function Contact() {
  const { classes } = useContactStyles();
  return (
    <Box className={classes.contactWrapper}>
      <Title order={1}>Contact</Title>
      <Text component="p">Coming soon...</Text>
    </Box>
  );
}
