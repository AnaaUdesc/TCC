import { Box, Container } from "@mui/material";
import Header from "../Componentes/header";
import Footer from "../Componentes/Footer";

export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container sx={{ flexGrow: 1 }}>
        <Header />
        <Box>asdasd</Box>
      </Container>
      <Footer />
    </Box>
  );
}
