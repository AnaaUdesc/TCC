import { Box, Container, Typography } from "@mui/material";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";
import logo_cct from "../assets/logo_cct.jpg";
export default function AboutUsPage() {
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
        <Typography variant="h3" align="center" color="secondary">
          Sobre Nós
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" sx={{ maxWidth: 800, padding: 6 }}>
            Esta ferramenta foi desenvolvida como parte de um projeto de
            pesquisa de Trabalho de Conclusão de Curso (TCC) do curso de
            Bacharelado em Ciência da Universidade do Estado de Santa Catarina
            (UDESC) - Centro de Ciências Tenológicas (CCT) - Joinville/SC.
            <br />
            <br />
            <Typography variant="body1">
              O projeto foi orientado pela professora Dra. Isabela Gasparini e
              pelo coorientador Dr. Natã Miccael Barbosa e desenvolvido por Ana
              Clara Barbosa dos Santos, no ano de 2024.
            </Typography>
            <br />
            <Typography variant="body1">
              O objetivo da ferramenta é apoiar a seleção de métodos de
              avaliação de usabilidade, ranqueando métodos mais adequados ao
              contexto informado pelo usuário.
              <br />
              <br />A monografia completa, intitulada "Ferramenta de Apoio à
              Seleção de Métodos para Avaliação da Usabilidade" pode ser
              acessada em:{" "}
              <a
                href="../assets/TCC2_Ana_Clara.pdf"
                download="TCC2_Ana_Clara.pdf"
              >
                TCC_Ana_Clara.pdf
              </a>
            </Typography>
          </Typography>
          <Box
            sx={{
              backgroundColor: "white",
              padding: 2,
              borderRadius: 2,
              maxHeight: 500,
              maxWidth: 700,
              marginBottom: 25,
            }}
          >
            <img
              src={logo_cct}
              alt="Logo do CCT"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
