import { useEffect } from 'react';
import { Box, Text } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import { Outlet } from 'react-router-dom';

import { useLayoutStyles, Bubbles, AwesomeMenu, useSiteContext, useGlobalStyles } from '@mo';

export function Layout() {
  const { setIsNavigationVisible, isMenuFullyLoaded } = useSiteContext();
  const { classes, cx } = useLayoutStyles();
  const { classes: globalClasses } = useGlobalStyles();

  useEffect(() => {
  if (location.pathname === '/home') {
      setIsNavigationVisible(true);
    }
  }, [setIsNavigationVisible]);

  return (
    <Box className={classes.layoutWrapper}>
      <Box className={classes.layoutInnerWrapper}>
        <Bubbles />
        <AwesomeMenu />
        <Box className={classes.layoutContentWrapper} id="layout-content-wrapper">
          <AnimatePresence mode="wait">
            <Outlet key={location.pathname} />
          </AnimatePresence>

          {isMenuFullyLoaded && (
            <Text
              className={cx(globalClasses.textContrastShadow, globalClasses.copyright)}
              component={motion.h6}
              ta="center"
              pb="md"
              my="sm"
              fw={300}
              initial={{ y: '100%', opacity: 0, filter: 'blur(5px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
            >
              Copyright © 2025 Wreck Shop Media LLC. All rights reserved.
            </Text>
          )}
        </Box>
      </Box>
    </Box>
  );
}
