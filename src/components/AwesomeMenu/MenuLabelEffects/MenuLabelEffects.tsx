import { Box, Text } from '@mantine/core';
import { useMenuLabelEffects, useSiteContext } from '@mo';


export function MenuLabelEffects() {
    const { linkName } = useSiteContext();
  const { classes, cx } = useMenuLabelEffects();

  return (
    <Box className={classes.menuLabelEffectsContainer}>
      <Box id="home-tooltip" className={cx(classes.tooltip, linkName === 'Home' && 'active')}>
        <Text component="span">Home</Text>
      </Box>
      <Box id="about-tooltip" className={cx(classes.tooltip, linkName === 'About' && 'active')}>
        <Text component="span">About</Text>
      </Box>
      <Box
        id="projects-tooltip"
        className={cx(classes.tooltip, linkName === 'Projects' && 'active')}
      >
        <Text component="span">Projects</Text>
      </Box>
      <Box id="contact-tooltip" className={cx(classes.tooltip, linkName === 'Contact' && 'active')}>
        <Text component="span">Contact</Text>
      </Box>
    </Box>
  );
}
