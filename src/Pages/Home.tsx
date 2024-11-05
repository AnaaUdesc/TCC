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
import { MethodProps, methods } from "../db/methods";
import { Delete, Search, Share } from "@mui/icons-material";
import { useMemo, useState } from "react";
import { useGlobalContext } from "../GlobalProvider";

export default function HomePage() {
  const [focused, setFocused] = useState(false);
  const [search, setSearch] = useState("");

  const {
    handleScoreByMethod,
    selectedRequirements,
    handleResetSelectedRequirements,
    handleUnselectRequirement,
  } = useGlobalContext();

  const hasSelectedRequirements = useMemo(() => {
    if (!selectedRequirements) {
      return false;
    } else {
      const newValues = selectedRequirements.flatMap((requirement) => {
        return requirement.selectedValues;
      });
      return newValues.length > 0;
    }
  }, [selectedRequirements]);

  const filteredMethods = useMemo(() => {
    return methods.filter((method) => {
      return (
        method.title.toLowerCase().includes(search.toLowerCase()) ||
        method.description.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [search]);

  const result: {
    methodId: string;
    scoreGeneral: number;
    scoresRepresentativos: {
      [key: string]: {
        score: number;
        scoreRepresentativo: number;
      };
    };
  }[] = useMemo(
    () =>
      filteredMethods.map((method) => {
        const resultCalculate = handleScoreByMethod(method.id);

        return {
          methodId: method.id,
          scoreGeneral: Math.round(Number(resultCalculate.scoreGeral)),
          scoresRepresentativos: resultCalculate.scoresRepresentativos,
        };
      }),
    [filteredMethods, handleScoreByMethod]
  );

  const requirementIdsToTransform = [
    "orcamento_relativo",
    "tempo",
    "nivel_de_fidelidade_do_sistema",
    "quantidade_de_usuarios",
    "quantidade_de_especialistas",
  ];

  const sortedResults = !selectedRequirements
    ? result
    : result
        .sort((a, b) => {
          return a.scoreGeneral - b.scoreGeneral;
        })
        .reverse();

  const newSelectedRequirements: {
    id: string;
    newName: string;
  }[] = [];

  selectedRequirements?.map((requirement) => {
    if (requirementIdsToTransform.includes(requirement.id)) {
      requirement.selectedValues.map((selectedValue) => {
        const id = requirement.id.split("_");

        newSelectedRequirements.push({
          id: requirement.id,
          newName:
            id
              .map((value) => value.charAt(0).toUpperCase() + value.slice(1))
              .join(" ") +
            ": " +
            selectedValue.charAt(0).toUpperCase() +
            selectedValue.slice(1),
        });
      });
    } else {
      requirement.selectedValues.map((selectedValue) => {
        newSelectedRequirements.push({
          id: selectedValue,
          newName: selectedValue,
        });
      });
    }
  });

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
            display: "flex",
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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                slotProps={{
                  ...(!focused &&
                    search === "" && {
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
                  {sortedResults.length ?? 0}
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
            {hasSelectedRequirements && (
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
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      marginBottom: 1,
                    }}
                  >
                    Seleções Aplicadas
                  </Typography>
                  <Button
                    size="small"
                    color="secondary"
                    onClick={handleResetSelectedRequirements}
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

                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    flexWrap: "wrap",
                    mt: 1,
                  }}
                >
                  {newSelectedRequirements?.map((requirement) => (
                    <Chip
                      key={requirement.id}
                      size="small"
                      label={requirement.newName}
                      onDelete={() => handleUnselectRequirement(requirement.id)}
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
                  ))}
                </Box>
              </Box>
            )}
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              {sortedResults.map((result) => (
                <Card
                  key={result.methodId}
                  {...(methods.find(
                    (method) => method.id === result.methodId
                  ) as MethodProps)}
                  scoreGeral={result.scoreGeneral}
                  scoresRepresentativos={result.scoresRepresentativos}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
