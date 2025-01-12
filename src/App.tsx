import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SiteProvider } from './context';
import { useColorScheme } from '@mantine/hooks';
import { MantineProvider } from '@mantine/core';
import { Layout, Intro, Home, About, Projects, Contact, globalTheme } from '@mo';
// import './index.css';

function App() {
  const colorScheme = useColorScheme();

  return (
    <MantineProvider theme={{ ...globalTheme, colorScheme }} withGlobalStyles withNormalizeCSS>
      <SiteProvider>
        <Router>
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
  );
}

export default App;
