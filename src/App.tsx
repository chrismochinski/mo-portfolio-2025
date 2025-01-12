import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SiteProvider } from './context';
import { MantineProvider } from '@mantine/core';
import { Layout, Intro, Home } from './Routes';

import { globalTheme } from './Global';

function App() {
  return (
    <MantineProvider theme={globalTheme} withGlobalStyles withNormalizeCSS>
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
    </MantineProvider>
  );
}

export default App;
