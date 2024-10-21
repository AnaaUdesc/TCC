import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        height: "260px",
        display: "flex",
        backgroundColor: "secondary.main",
        bottom: 0,
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingY: "50px",
            paddingBottom: "20px",
            height: "100%",
          }}
        >
          <Box>
            <Typography variant="h4">LOGO</Typography>
            <Typography variant="h4" color="#ffff">
              LOGO
            </Typography>
          </Box>
          <Box
            sx={{
              alignSelf: "flex-end",
            }}
          >
            <Typography color="#ffff" variant="caption">
              &copy; Todos os direitos reservados
            </Typography>
          </Box>

          {/* Navegação do rodapé */}
          <Box>
            <Link to="/#" style={{ textDecoration: "none" }}>
              <Typography
                color="#ffff"
                sx={{
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Sobre Nós
              </Typography>
            </Link>
            <Link to="/contato" style={{ textDecoration: "none" }}>
              <Typography
                color="#ffff"
                sx={{
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Contato
              </Typography>
            </Link>
            <Link to="/#" style={{ textDecoration: "none" }}>
              <Typography
                color="#ffff"
                sx={{
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Sobre Avaliação
              </Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
