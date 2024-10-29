import {
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import Card from "../Componentes/Card";
import Footer from "../Componentes/Footer";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import { methods } from "../db/methods";
import { Delete, Search, Share } from "@mui/icons-material";
import { useState } from "react";

export default function HomePage() {
  const [focused, setFocused] = useState(false);

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
              marginX: 4,
              display: "flex", // Para que o conteúdo dentro seja flexível
              flexDirection: "column",
              gap: 2,
              flexGrow: 1,
            }}
          >
            <Box>
              <TextField
                sx={{
                  fieldset: {
                    border: "none",
                  },
                  borderRadius: 4,

                  backgroundColor: "#Ffff",
                }}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                fullWidth
                slotProps={{
                  ...(!focused && {
                    input: {
                      sx: {
                        borderRadius: 4,
                        backgroundColor: "#Ffff",
                      },
                      startAdornment: (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <Search fontSize="medium" color="secondary" />
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontStyle={"italic"}
                          >
                            Buscar
                          </Typography>
                        </Box>
                      ),
                    },
                  }),
                }}
              />
            </Box>
            <Box>
              <Typography
                sx={{ fontWeight: 600, fontSize: "1.5rem", marginBottom: -1.0 }}
              >
                Resultados
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{
                    color: "#000000",
                    fontWeight: 600,
                    fontStyle: "italic",
                  }}
                >
                  X
                </Typography>
                <Typography
                  sx={{
                    fontStyle: "italic",
                    color: "#666666",
                    marginLeft: 1,
                    fontWeight: 200,
                  }}
                >
                  resultados encontrados
                </Typography>
                <IconButton>
                  <Share fontSize="small" style={{ color: "gray" }} />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                border: 0.8,
                borderRadius: 1.7,
                padding: 2,
                paddingTop: 1,
                width: "100%",
                borderColor: "rgba(13, 96, 112, 0.5)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: 1 }}
                >
                  Seleções Aplicadas
                </Typography>
                <Button
                  size="small"
                  color="secondary"
                  startIcon={
                    <Delete
                      sx={{
                        width: 16,
                        height: 16,
                        mr: -0.5,
                      }}
                    />
                  }
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 300,
                      textTransform: "none",
                      fontSize: "0.7rem",
                    }}
                  >
                    Limpar Tudo
                  </Typography>
                </Button>
              </Box>
              <Box>
                <Chip
                  size="small"
                  label="Seleção 1"
                  onDelete={() => {}}
                  sx={{
                    backgroundColor: "#d3e3e4",
                    fontSize: "0.75rem",
                    fontWeight: 300,
                    color: "#000", // Corrigido de "#00000" para "#000"
                    "& .MuiChip-deleteIcon": {
                      color: "#0D6070", // Altere aqui para a cor desejada
                    },
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              {methods.map((method) => (
                <Card key={method.id} {...method} />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
