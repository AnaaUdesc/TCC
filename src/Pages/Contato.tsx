import { Construction } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Footer from "../Componentes/Footer";
import Header from "../Componentes/Header";
import { useEffect } from "react";

export default function ContatoPage() {
  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          gap: "20px",
        }}
      >
        <Construction sx={{ fontSize: 70 }} />
        <Typography variant="h3">Página de Contato</Typography>
        <Typography variant="h5" color="gray">
          {" "}
          em desenvolvimento
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{ borderRadius: 5 }}
          onClick={() => window.history.back()}
        >
          Voltar
        </Button>
      </Box>
      <Footer />
    </Box>
  );
}
