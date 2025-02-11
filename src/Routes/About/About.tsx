import { useEffect } from 'react';
import { Box, Text } from '@mantine/core';
import { motion } from 'framer-motion';
import { useAboutStyles, useSiteContext } from '@mo';

export function About() {
  const { isNavigationVisible, setIsNavigationVisible, isNavigating } = useSiteContext();
  const { classes, cx } = useAboutStyles();

  useEffect(() => {
    setIsNavigationVisible(true);
    document.title = 'About | Mo';
  }, [isNavigationVisible, setIsNavigationVisible]);

  return (
    <Box className={cx(classes.aboutWrapper)} id="about">
      {/* About Title Animation */}
      <Text
        component={motion.h1}
        initial={{ x: '100%', opacity: 0, filter: 'blur(10px)' }}
        animate={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
        exit={isNavigating ? { x: '-100%', opacity: 0, filter: 'blur(10px)' } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        About
      </Text>

      {/* Subtitle Animation */}
      <Text
        component={motion.h4}
        fw={400}
        pt="xs"
        my="sm"
        initial={{ x: '120%', opacity: 0, filter: 'blur(10px)' }}
        animate={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
        exit={isNavigating ? { x: '-120%', opacity: 0, filter: 'blur(10px)' } : {}}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      >
        My name is Chris. Most people call me Mo.
      </Text>

      {/* Paragraph Animation */}
      <Text
        component={motion.p}
        fw={300}
        initial={{ x: '150%', opacity: 0, filter: 'blur(15px)' }}
        animate={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
        exit={isNavigating ? { x: '-150%', opacity: 0, filter: 'blur(15px)' } : {}}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
      >
        I get very excited about turning ideas into things that help people. When those things are
        deemed impossible, I get more excited.
      </Text>
    </Box>
  );
}
