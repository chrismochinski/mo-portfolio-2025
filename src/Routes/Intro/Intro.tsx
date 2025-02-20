import { useEffect, useState } from 'react';
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
    setIsNavigationVisible,
    setHasInteractedWithIntroIcon,
    deviceType,
  } = useSiteContext();
  const [animateLine, setAnimateLine] = useState(false);
  const [lineDrawn, setLineDrawn] = useState(false);
  const [greetingsVisible, setGreetingsVisible] = useState(false);
  const [allowHoverEffects, setAllowHoverEffects] = useState(false);
  const { classes: globalClasses } = useGlobalStyles();
  const { classes, cx } = useIntroStyles({ isNavigationVisible, deviceType });
  const navigate = useNavigate();

  useEffect(() => {
    // Start line animation after page load delay
    const lineTimeout = setTimeout(() => {
      setAnimateLine(true);

      // Start Ferris wheel animation *after* line animation completes
      setTimeout(() => {
        setLineDrawn(true);

        // 🚀 Reveal Greetings *after* Ferris Wheel animation (small buffer)
        setTimeout(() => {
          setGreetingsVisible(true);

          // 🚀 Allow hover effects after a delay (ensuring animation is fully done)
          setTimeout(() => setAllowHoverEffects(true), 500); // Delay overflow: visible
        }, 300);
      }, 400);
    }, 700);

    setHasInteractedWithIntroIcon(false);
    setIsNavigationVisible(false);

    return () => clearTimeout(lineTimeout);
  }, [setIsNavigationVisible, setHasInteractedWithIntroIcon]);

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
    if (allowHoverEffects) {
      setHasInteractedWithIntroIcon(true);
      setIntroIconHovered(true);
    }
  };
  const handleMouseLeave = () => {
    if (allowHoverEffects) {
      setIntroIconHovered(false);
    }
  };

  return (
    <Box id="intro">
      <PageHelmet keywords={introKeywords} />
      <Anchor
        aria-label="Enter the site"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        my={0}
        className={cx(globalClasses.z20, classes.ferrisWheelIconButton)}
      >
        <Box className={cx(classes.ferrisWheelHideWrapper, allowHoverEffects && 'interactive')}>
          <FerrisWheelIcon lineDrawn={lineDrawn} />
        </Box>
        <Box
          className={cx(
            classes.introUnderlineBox,
            animateLine && 'active',
            lineDrawn && 'animateUp'
          )}
        />
        <Box
          className={cx(
            classes.greetingsHideWrapper,
            greetingsVisible && 'entered',
            allowHoverEffects && 'interactive'
          )}
        >
          <Greetings />
        </Box>
      </Anchor>

      <Box className={classes.introButtonWrapper} />
    </Box>
  );
}
