import { useEffect } from 'react';
import { Box, Text } from '@mantine/core';
import { motion } from 'framer-motion';
import { useGlobalStyles, useSiteContext, useHomeStyles } from '@mo';

export function Home() {
  const { isNavigationVisible, setIsNavigationVisible, isNavigating } = useSiteContext();
  const { classes: globalClasses } = useGlobalStyles();
  const { classes, cx } = useHomeStyles({ isNavigationVisible });

  useEffect(() => {
    // revisit need?? double set?
    setIsNavigationVisible(true);
    document.title = 'Home | Mo';
  }, [setIsNavigationVisible, isNavigationVisible]);

  console.log('isNavigating', isNavigating);

  return (
    <Box className={cx(classes.homeWrapper)} id="home">
      <Box className={cx(globalClasses.columnCenter, classes.salutation, globalClasses.z10)}>
        <Text
          className={globalClasses.textContrastShadow}
          component={motion.h1}
          my="xs"
          mx="auto"
          ta="center"
          fw={800}
          initial={{ x: '-100%', opacity: 0, filter: 'blur(7px)', skewX: 30 }}
          animate={{ x: 0, opacity: 1, filter: 'blur(0px)', skewX: 0 }}
          exit={{ x: '100%', opacity: 0, filter: 'blur(8px)' }}
          transition={{
            x: { duration: 0.5, ease: 'easeOut', delay: 0 },
            opacity: { duration: 0.3, ease: 'easeOut', delay: 0 },
            filter: { duration: 0.5, ease: 'easeOut', delay: 0.1 },
            skewX: { duration: 0.2, ease: 'easeOut', delay: 0.3 },
          }}
        >
          Hi, friends.
        </Text>
        <Text
          className={cx(globalClasses.balance, globalClasses.textContrastShadow)}
          component={motion.h4}
          mt={0}
          mx="auto"
          ta="center"
          mb="md"
          fw={400}
          initial={{ x: '100%', opacity: 0, filter: 'blur(6px)' }}
          animate={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={isNavigating ? { x: '100%', opacity: 0, filter: 'blur(8px)' } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
        >
          My name is Mo, and this is a website.
        </Text>
      </Box>

     
    </Box>
  );
}
