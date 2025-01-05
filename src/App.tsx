import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { MantineEmotionProvider } from "@mantine/emotion";
import { Home } from "./Routes";
import "./App.scss";

import { globalTheme } from "./Global";

function App() {
  return (
    <MantineEmotionProvider>
      <MantineProvider theme={globalTheme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </MantineProvider>
    </MantineEmotionProvider>
  );
}

export default App;
