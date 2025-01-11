import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { SiteProvider } from './context';
import { MantineEmotionProvider } from '@mantine/emotion';
import { Layout, Intro, Home } from './Routes';

import { globalTheme } from './Global';

function App() {
  return (
    <MantineEmotionProvider>
      <MantineProvider theme={globalTheme}>
        <SiteProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Intro />} />
                <Route path="home" element={<Home />} />
              </Route>
            </Routes>
          </Router>
        </SiteProvider>
      </MantineProvider>
    </MantineEmotionProvider>
  );
}

export default App;
