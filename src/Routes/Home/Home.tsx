import { useState } from 'react';
import { Anchor, Box, Flex, Title, Text } from '@mantine/core';
import { useHomeStyles } from '.';
import { FerrisWheelIcon, Bubbles, AwesomeMenu } from '../../components';
import { useGlobalStyles } from '../../Global';
import './Home.scss';

export function Home() {
  const { classes: globalClasses } = useGlobalStyles();
  const [isNavigationVisible, setIsNavigationVisible] = useState(false);
  const [showFerrisWheelIcon, setShowFerrisWheelIcon] = useState(true);
  const { classes, cx } = useHomeStyles({ isNavigationVisible, showFerrisWheelIcon });

  const toggleNavigation = () => {
    setIsNavigationVisible(!isNavigationVisible);
    setShowFerrisWheelIcon(false);
  };

  return (
    <Box className={classes.homeWrapper}>
      <Box className={cx(globalClasses.row, classes.homeInnerWrapper)}>
        <Box className={cx(globalClasses.container, classes.homeContentWrapper)}>
          <Box className={cx(globalClasses.columnCenter, classes.salutation, globalClasses.z10)}>
            <Title order={1} fz="xl" mt={0} mb="xs" mx="auto" ta="center" fw={600} lh="lg">
              Hi, friends.
            </Title>
            <Title
              className={globalClasses.balance}
              order={3}
              my={0}
              mx="auto"
              ta="center"
              mb="md"
              lh="sm"
              fw={500}
            >
              This site is a work in progress,<br />but it's gonna be rad.
            </Title>

            <Text
              className={globalClasses.balance}
              component="p"
              fz="sm"
              ta="center"
              pb="md"
              mt="xs"
              mb={0}
            >
              Thanks for visiting.
            </Text>

            <Flex
              className={classes.personalLinks}
              gap="md"
              justify="center"
              align="center"
              mt={0}
              mb="sm"
            >
              <Anchor
                className={classes.personalAnchorText}
                href="https://github.com/chrismochinski"
                target="_blank"
                fz="xs"
              >
                Mo's Github
              </Anchor>
              <Anchor
                className={classes.personalAnchorText}
                href="https://chrismochinski.github.io/"
                target="_blank"
                fz="xs"
              >
                Mo's Old Site
              </Anchor>
              <Anchor
                className={classes.personalAnchorText}
                href="https://characterstrong.com"
                target="_blank"
                fz="xs"
              >
                CharacterStrong
              </Anchor>
            </Flex>
          </Box>

          <Anchor
            onClick={toggleNavigation}
            mt="sm"
            mb="lg"
            className={cx(globalClasses.z10, classes.ferrisWheelIconButton)}
          >
            <FerrisWheelIcon
              isNavigationVisible={isNavigationVisible}
              showFerrisWheelIcon={showFerrisWheelIcon}
            />
          </Anchor>
        </Box>
        <Bubbles />
        <AwesomeMenu isNavigationVisible={isNavigationVisible} />
      </Box>
    </Box>
  );
}
