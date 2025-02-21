import { useEffect } from 'react';
import { Box, Text } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import {
  useLayoutStyles,
  Bubbles,
  AwesomeMenu,
  MobileMenu,
  useSiteContext,
  useGlobalStyles,
} from '@mo';

export function Layout() {
  const { setIsNavigationVisible, isMenuFullyLoaded, deviceType } = useSiteContext();
  const { classes, cx } = useLayoutStyles();
  const { classes: globalClasses } = useGlobalStyles();

  useEffect(() => {
    if (location.pathname === '/home') {
      setIsNavigationVisible(true);
    }
  }, [setIsNavigationVisible]);

  return (
    <Box className={classes.layoutWrapper} id="layout-outermost-wrapper">
      {/* DELETELATER  */}
      <Text
        component="h6"
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          padding: '0.5em',
          fontSize: '12px',
          zIndex: 10,
          opacity: 0.6,
        }}
        fw={400}
        m="0"
        color="gray"
      >
        {deviceType}
      </Text>
      {/* DELETELATER  */}
      <Box className={classes.layoutInnerWrapper} id="layout-innermost-wrapper">
        <Bubbles />
        <AwesomeMenu />
        <MobileMenu />
        <Box className={classes.layoutContentWrapper} id="layout-content-wrapper">
          <Outlet key={location.pathname} />

          {isMenuFullyLoaded && (
            <Text
              className={cx(
                globalClasses.z20,
                globalClasses.textContrastShadow,
                globalClasses.copyright
              )}
              component="h6"
              ta="center"
              pb="md"
              my="sm"
              fw={300}
            >
              Copyright © 2025 Wreck Shop Media LLC.{' '}
              <Text component="span">All rights reserved.</Text>
            </Text>
          )}
        </Box>
      </Box>
    </Box>
  );
}
