import ContatoPage from "./Pages/Contato";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import themeOptions from "./theme";
import HomePage from "./Pages/Home";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { GlobalProvider } from "./GlobalProvider";
import AboutUsPage from "./Pages/AboutUs";
import AboutEvaluationPage from "./Pages/AboutEvaluation";
const theme = createTheme(themeOptions);

const router = createHashRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/contato" element={<ContatoPage />} />
      <Route path="/aboutUs" element={<AboutUsPage />} />
      <Route path="/aboutEvaluation" element={<AboutEvaluationPage />} />
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
