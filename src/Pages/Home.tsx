import { Box, Container } from "@mui/material";
import Header from "../Componentes/header";
import Footer from "../Componentes/Footer";
import Menu from "../Componentes/Menu";

export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container
        sx={{
          flexGrow: 1,
          display: "flex", // Para que o conteúdo dentro seja flexível
          flexDirection: "column",
        }}
      >
        <Header />
        <Box
          sx={{
            border: 1,
            borderRadius: 2,
            borderColor: "#86ADB5",
            flexGrow: 1,
            marginBottom: -2,
            display: "flex", // Para que o conteúdo dentro seja flexível
            flexDirection: "column",
            paddingX: 12,
            paddingY: 4,
          }}
        >
          <Menu />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}