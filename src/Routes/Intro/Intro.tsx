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
    introIconHovered,
    setIsNavigating,
  } = useSiteContext();
  const [greetingsVisible, setGreetingsVisible] = useState(false);
  const [allowHoverEffects, setAllowHoverEffects] = useState(false);
  const [animateLine, setAnimateLine] = useState(false);
  const [clickTrigger, setClickTrigger] = useState(false);
  
  const { classes: globalClasses } = useGlobalStyles();
  const { classes, cx } = useIntroStyles({ isNavigationVisible, deviceType, introIconHovered, allowHoverEffects });
  const navigate = useNavigate();

  useEffect(() => {
    if (isNavigationVisible) {
      setAllowHoverEffects(false);
      setGreetingsVisible(false);
    } else {
      // Start line animation after page load delay
      const lineTimeout = setTimeout(() => {
        setAnimateLine(true);

        // Start Ferris wheel animation *after* line animation completes
        setTimeout(() => {
          setGreetingsVisible(true);

          // 🚀 Reveal Greetings *after* Ferris Wheel animation (small buffer)
          // setTimeout(() => {
          //   setLineDrawn(true);

            // 🚀 Allow hover effects after a delay (ensuring animation is fully done)
            setTimeout(() => setAllowHoverEffects(true), 800); // Delay overflow: visible
          // }, 240);
        }, 220);
      }, 200);

      setHasInteractedWithIntroIcon(false);
      setIsNavigationVisible(false);

      return () => clearTimeout(lineTimeout);
    }
  }, [setIsNavigationVisible, setHasInteractedWithIntroIcon, isNavigationVisible]);

  const handleClick = () => {
    setIsNavigating(true);
    setAnimateLine(false);
    setClickTrigger(false);

    console.log('%cNavigating...', 'color: #ff00ff; font-size: 1.15rem; font-weight: 700;');
  
    void document.getElementById("intro-line")?.offsetWidth; // 🚀 Force reflow to restart animation
  
    setTimeout(() => {
      setAnimateLine(true);
      setClickTrigger(true);
    }, 10); // Small delay ensures class removal
  
    toggleNavigation();
    
    setTimeout(() => {
      navigate('/home');
    }, 1000);
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
    <Box id="intro" className={globalClasses.z20}>
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
          <FerrisWheelIcon greetingsVisible={greetingsVisible} />
        </Box>
        <Box
          className={cx(
            classes.introUnderlineBox,
            animateLine && 'active',
            clickTrigger && 'clicked'
          )}
        />
        <Box
          className={cx(
            classes.greetingsHideWrapper,
            greetingsVisible && 'entered',
            allowHoverEffects && 'interactive',
            clickTrigger && 'clicked'
          )}
        >
          <Greetings />
        </Box>
      </Anchor>

      <Box className={classes.introButtonWrapper} />
    </Box>
  );
}
