import ContatoPage from "./Pages/Contato";
import { createTheme, ThemeProvider } from "@mui/material";
import themeOptions from "./theme";
import HomePage from "./Pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
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
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
