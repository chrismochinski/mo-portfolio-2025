import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SiteProvider } from './context';
import { HelmetProvider } from 'react-helmet-async';
import { useColorScheme } from '@mantine/hooks';
import { MantineProvider } from '@mantine/core';
import { PageHelmet, Layout, Intro, Home, About, Projects, Contact, globalTheme } from '@mo';

function App() {
  const colorScheme = useColorScheme();

  return (
    <HelmetProvider>
      <MantineProvider theme={{ ...globalTheme, colorScheme }} withGlobalStyles withNormalizeCSS>
        <SiteProvider>
          <Router>
            <PageHelmet
              title="Welcome"
              description="The portfolio site of Chris 'Mo' Mochinski, as of 2025, featuring tons of wackadoodle effects and animations as well as maybe a few actual professional accolades."
            />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Intro />} />
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
              </Route>
            </Routes>
          </Router>
        </SiteProvider>
      </MantineProvider>
    </HelmetProvider>
  );
}

export default App;
