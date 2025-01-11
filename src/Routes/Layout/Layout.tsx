import { useEffect } from 'react';
import { Box } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { useLayoutStyles } from '.';
import { Bubbles, AwesomeMenu } from '../../components';
import { useSiteContext } from '../../context';

export function Layout() {
  const { isNavigationVisible, setIsNavigationVisible } = useSiteContext();
  const { classes } = useLayoutStyles();

  useEffect(() => {
    if (location.pathname === '/home') {
      setIsNavigationVisible(true);
    }
  }, [setIsNavigationVisible]);

  return (
    <Box className={classes.layoutWrapper}>
      <Box className={classes.layoutInnerWrapper}>
        {/* Persistent Elements */}
        <Bubbles isNavigationVisible={isNavigationVisible} />
        <AwesomeMenu />
        <Box className={classes.layoutContentWrapper} id="layout-content-wrapper">
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
