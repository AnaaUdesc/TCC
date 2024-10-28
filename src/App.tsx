import ContatoPage from "./Pages/Contato";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import themeOptions from "./theme";
import HomePage from "./Pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { GlobalProvider } from "./GlobalProvider";
const theme = createTheme(themeOptions);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/contato" element={<ContatoPage />} />
    </Route>
  )
);

function App() {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <CssBaseline />
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
