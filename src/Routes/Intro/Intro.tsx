import { Anchor, Title } from '@mantine/core';
import { FerrisWheelIcon } from '../../components';
import { useGlobalStyles } from '../../Global';
import { useIntroStyles } from '.';
import { useSiteContext } from '../../context';
import { useNavigate } from 'react-router-dom';

export function Intro() {
  const { isNavigationVisible, toggleNavigation, setIntroIconHovered, introIconHovered } =
    useSiteContext();
  const { classes: globalClasses } = useGlobalStyles();
  const { classes, cx } = useIntroStyles({ isNavigationVisible });
  const navigate = useNavigate();

  const handleClick = () => {
    toggleNavigation();
    setTimeout(() => {
      navigate('/home');
    }, 1000);
  };

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
