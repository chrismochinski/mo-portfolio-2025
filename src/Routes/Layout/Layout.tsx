import { useEffect } from 'react';
import { Box } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { useLayoutStyles } from '.';
import { Bubbles, AwesomeMenu } from '../../components';
import { useGlobalStyles } from '../../Global';
import { useSiteContext } from '../../context';

export function Layout() {
  const { isNavigationVisible, setIsNavigationVisible } = useSiteContext();
  const { classes: globalClasses } = useGlobalStyles();
  const { classes, cx } = useLayoutStyles();

  useEffect(() => {
    if (location.pathname === '/home') {
      setIsNavigationVisible(true);
    }
  }, [setIsNavigationVisible]);

  return (
    <Box className={classes.layoutWrapper}>
      <Box className={cx(globalClasses.row, classes.layoutInnerWrapper)}>
        {/* Persistent Elements */}
        <Bubbles isNavigationVisible={isNavigationVisible} />
        <AwesomeMenu isNavigationVisible={isNavigationVisible} />
        <Box className={classes.layoutContentWrapper} id="layout-content-wrapper">
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
