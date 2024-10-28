import { Box, Container } from "@mui/material";
import Card from "../Componentes/Card";
import Footer from "../Componentes/Footer";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import { methods } from "../db/methods";
import { calculateTotalMatch } from "../utils/calculate";

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
        maxWidth="xl"
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
            flexDirection: "row",
            paddingX: 12,
            paddingY: 4,
          }}
        >
          <Menu />
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              gap: 3,

              marginX: 4,
            }}
          >
            {methods.map((method) => (
              <Card {...method} matchTotal={calculateTotalMatch(method.id)} />
            ))}
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
