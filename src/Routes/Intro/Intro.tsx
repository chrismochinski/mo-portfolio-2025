import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Anchor, Title } from '@mantine/core';
import { FerrisWheelIcon, useGlobalStyles, useIntroStyles, useSiteContext } from '@mo';

export function Intro() {
  const {
    isNavigationVisible,
    toggleNavigation,
    setIntroIconHovered,
    introIconHovered,
    setIsNavigationVisible,
  } = useSiteContext();
  const { classes: globalClasses } = useGlobalStyles();
  const { classes, cx } = useIntroStyles({ isNavigationVisible });
  const navigate = useNavigate();

  const handleClick = () => {
    toggleNavigation();
    setTimeout(() => {
      navigate('/home');
    }, 1000);
  };

  useEffect(() => {
    setIsNavigationVisible(false);
    document.title = "I'm Mo.";
  }, []);

  const handleMouseEnter = () => setIntroIconHovered(true); // Hover starts
  const handleMouseLeave = () => setIntroIconHovered(false); // Hover ends

  return (
    <Anchor
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      my={0}
      className={cx(globalClasses.z10, classes.ferrisWheelIconButton)}
    >
      <FerrisWheelIcon
        isNavigationVisible={isNavigationVisible}
        introIconHovered={introIconHovered}
      />
      <Title order={5}>Let's Party</Title>
    </Anchor>
  );
}
