import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Anchor, Title } from '@mantine/core';
import {
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
  } = useSiteContext();
  const { classes: globalClasses } = useGlobalStyles();
  const { classes, cx } = useIntroStyles({ isNavigationVisible });
  const navigate = useNavigate();

  const handleClick = () => {
    toggleNavigation();
    setTimeout(() => {
      navigate('/home');
    }, 1200);
  };

  useEffect(() => {
    setIsNavigationVisible(false);
  }, [ setIsNavigationVisible ]);

  const handleMouseEnter = () => setIntroIconHovered(true); // Hover starts
  const handleMouseLeave = () => setIntroIconHovered(false); // Hover ends

  return (
    <>
      <PageHelmet
        keywords={introKeywords}
      />
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
    </>
  );
}
