import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Anchor } from '@mantine/core';
import {
  Greetings,
  FerrisWheelIcon,
  PageHelmet,
  useGlobalStyles,
  useIntroStyles,
  useSiteContext,
  introKeywords,
} from '@mo';

export function Intro() {
  const {
    isNavigationVisible,
    toggleNavigation,
    setIntroIconHovered,
    introIconHovered,
    setIsNavigationVisible,
    setHasInteractedWithIntroIcon,
    deviceType,
  } = useSiteContext();
  const { classes: globalClasses } = useGlobalStyles();
  const { classes, cx } = useIntroStyles({ isNavigationVisible, deviceType });
  const navigate = useNavigate();

  const handleClick = () => {
    toggleNavigation();
    setTimeout(() => {
      navigate('/home');
    }, 1200);
  };

  useEffect(() => {
    setHasInteractedWithIntroIcon(false);
    setIsNavigationVisible(false);
  }, [setIsNavigationVisible, setHasInteractedWithIntroIcon]);

  const handleMouseEnter = () => {
    setHasInteractedWithIntroIcon(true);
    setIntroIconHovered(true);
  };
  const handleMouseLeave = () => setIntroIconHovered(false);

  return (
    <>
      <PageHelmet keywords={introKeywords} />
      <Anchor
        aria-label="Enter the site"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        my={0}
        className={cx(globalClasses.z20, classes.ferrisWheelIconButton)}
      >
        <FerrisWheelIcon
          isNavigationVisible={isNavigationVisible}
          introIconHovered={introIconHovered}
        />
        <Greetings />
      </Anchor>

      <Box className={classes.introButtonWrapper} />
    </>
  );
}
