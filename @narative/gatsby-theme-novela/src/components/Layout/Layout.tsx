import React, { useEffect } from 'react';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import { useColorMode } from 'theme-ui';

import NavigationFooter from '@components/Navigation/Navigation.Footer';
import NavigationHeader from '@components/Navigation/Navigation.Header';
import ArticlesContextProvider from '../../sections/articles/Articles.List.Context';

import { globalStyles } from '@styles';
import ScrollUpButton from 'react-scroll-up-button';

/**
 * <Layout /> needs to wrap every page as it provides styles, navigation,
 * and the main structure of each page. Within Layout we have the <Container />
 * which hides a lot of the mess we need to create our Desktop and Mobile experiences.
 */
const Layout: React.FC<{}> = ({ children }) => {
  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;

  //Change all KaTeX colors
  if (typeof document !== `undefined`) {
    Array.from(document.getElementsByClassName('katex-display')).forEach(
      (element) => {
        element.style.color = isDark ? 'white' : 'black';
      },
    );
  }

  useEffect(() => {
    parent.postMessage({ theme: colorMode }, '*');
  }, [colorMode]);

  return (
    <ArticlesContextProvider>
      <Container>
        <Global styles={globalStyles} />
        <NavigationHeader />
        {children}
        <NavigationFooter />
      </Container>
      <ScrollUpButtonContainer>
        <ScrollUpButton
          StopPosition={0}
          ShowAtPosition={150}
          EasingType="easeOutCubic"
          AnimationDuration={500}
          ContainerClassName="ScrollUpButton__Container"
          style={{ width: 32, height: 32, outline: 'none' }}
          ToggledStyle={{ outline: 'none' }}
        ></ScrollUpButton>
      </ScrollUpButtonContainer>
    </ArticlesContextProvider>
  );
};

export default Layout;

const Container = styled.div`
  position: relative;
  background: ${(p) => p.theme.colors.background};
  transition: ${(p) => p.theme.colorModeTransition};
  min-height: 100vh;
`;

const ScrollUpButtonContainer = styled.div`
  .ScrollUpButton__Container {
    @media (max-width: 767px) {
      display: none;
    }
  }
`;
