import {
  Box,
  Button,
  Chip,
  Menu as MuiMenu,
  Container,
  Divider,
  IconButton,
  MenuItem,
  SvgIcon,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import Card from "../Componentes/Card";
import Footer from "../Componentes/Footer";
import Header from "../Componentes/Header";
import PageviewIcon from "@mui/icons-material/Pageview";
import { MethodProps, methods } from "../db/methods";
import { technics } from "../db/tecnicas";
import {
  ArrowRight,
  Delete,
  QuestionAnswer,
  Search,
  Share,
  Visibility,
} from "@mui/icons-material";
import { useMemo, useState } from "react";
import { useGlobalContext } from "../GlobalProvider";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Menu from "../Componentes/Menu";
import { getMethodOrTechniqueById, isTechnique } from "../utils";

export default function HomePage() {
  const [openMethods, setOpenMethods] = useState(false);
  const [focused, setFocused] = useState(false);
  const [search, setSearch] = useState("");
  const [anchorMethods, setAnchorMethods] = useState<HTMLDivElement | null>(
    null
  );
  const [selectedMethodType, setSelectedMethodType] = useState<
    "Observação" | "Inspeção" | "Investigação" | "all"
  >("all");

  const [selectedType, setSelectedType] = useState<"method" | "technique">(
    "method"
  );

  const handleOpenMethodsMenu = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!openMethods) {
      return;
    }

    setAnchorMethods(event.currentTarget);
  };

  const handleCloseMethodsMenu = () => {
    setAnchorMethods(null);
  };

  const openMethodsMenu = Boolean(anchorMethods);

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

  const results: MethodProps[] = useMemo(() => {
    if (selectedType === "technique") {
      return technics;
    }
    if (selectedType === "method") {
      return methods.filter((method) => {
        if (selectedMethodType === "all") {
          return true;
        } else {
          return method?.classifications?.includes(selectedMethodType);
        }
      });
    }

    return [];
  }, [selectedMethodType, selectedType]);

  const filtered = useMemo(() => {
    return results.filter((item) => {
      return (
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [results, search]);

  const result: {
    id: string;
    scoreGeneral: number;
    scoresRepresentativos: {
      [key: string]: {
        score: number;
        scoreRepresentativo: number;
      };
    };
  }[] = useMemo(
    () =>
      filtered.map((item) => {
        const resultCalculate = handleScoreByMethod(item.id);

        return {
          id: item.id,
          scoreGeneral: Math.round(Number(resultCalculate.scoreGeral)),
          scoresRepresentativos: resultCalculate.scoresRepresentativos,
        };
      }),
    [filtered, handleScoreByMethod]
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

  const handleSetSelectedMethodType = (type: string) => {
    setSelectedMethodType(type as "Observação" | "Inspeção" | "Investigação");
    setSelectedType("method");
    handleCloseMethodsMenu();
  };

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
            <Box
              sx={{
                display: "flex",
                // alignItems: "center",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
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
              <Box
                sx={{
                  backgroundColor: "#E7EFF0",
                  borderRadius: openMethods ? 2 : 5,
                  padding: 2,
                  maxWidth: 150,
                  minWidth: 150,
                  mr: -2,
                  cursor: "pointer",
                  position: "absolute",
                  zIndex: 1,
                  right: 16,
                }}
                onClick={() => setOpenMethods((prev) => !prev)}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ fontWeight: 500 }}>
                    {selectedType === "method" ? "Métodos" : "Técnicas"}
                  </Typography>
                  {openMethods ? (
                    <SvgIcon
                      sx={{
                        color: "#adadad",
                      }}
                      fontSize="small"
                    >
                      <IoIosArrowUp />
                    </SvgIcon>
                  ) : (
                    <SvgIcon
                      sx={{
                        color: "#adadad",
                      }}
                      fontSize="small"
                    >
                      <IoIosArrowDown />
                    </SvgIcon>
                  )}
                </Box>
                {openMethods && (
                  <Box
                    sx={{
                      paddingY: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      mt: 1,
                    }}
                  >
                    <Box
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setSelectedType("technique");
                      }}
                    >
                      Técnicas
                    </Box>
                    <Divider />
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        cursor: "pointer",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        handleOpenMethodsMenu(e);
                      }}
                    >
                      Métodos <ArrowRight />
                    </Box>
                    <MuiMenu
                      anchorEl={anchorMethods}
                      open={openMethodsMenu}
                      onClose={handleCloseMethodsMenu}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                    >
                      <Tooltip
                        title="Métodos de inspeção envolvem a interação do avaliador com o sistema, sem a participação direta do usuário. O objetivo é identificar antecipadamente problemas que os usuários possam encontrar, examinando detalhadamente a interface."
                        placement="left"
                        arrow
                      >
                        <MenuItem
                          sx={{ gap: 1 }}
                          onClick={() => {
                            handleSetSelectedMethodType("Inspeção");
                          }}
                        >
                          <Box
                            sx={{
                              borderRadius: 50,
                              backgroundColor: "#86ADB5",
                              width: 30,
                              height: 30,
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <PageviewIcon
                              fontSize="small"
                              sx={{
                                color: "#ffff",
                              }}
                            />
                          </Box>
                          <Typography>Inspeção</Typography>
                        </MenuItem>
                      </Tooltip>
                      <Divider />
                      <Tooltip
                        title="Métodos de observação envolvem mínima interação do avaliador com o usuário e o sistema. Os dados são obtidos ao observar o usuário interagindo com o sistema, permitindo identificar problemas reais."
                        placement="left"
                        arrow
                      >
                        <MenuItem
                          sx={{ gap: 1 }}
                          onClick={() => {
                            handleSetSelectedMethodType("Observação");
                          }}
                        >
                          <Box
                            sx={{
                              borderRadius: 50,
                              backgroundColor: "#86ADB5",
                              width: 30,
                              height: 30,
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Visibility
                              fontSize="small"
                              sx={{
                                color: "#ffff",
                              }}
                            />
                          </Box>
                          <Typography>Observação</Typography>
                        </MenuItem>
                      </Tooltip>
                      <Divider />
                      <Tooltip
                        title="Métodos de investigação envolvem maior interação dialogada entre avaliador e usuário, permitindo acesso direto a suas opiniões, expectativas e comportamentos."
                        placement="left"
                        arrow
                      >
                        <MenuItem
                          sx={{ gap: 1 }}
                          onClick={() => {
                            handleSetSelectedMethodType("Investigação");
                          }}
                        >
                          <Box
                            sx={{
                              borderRadius: 50,
                              backgroundColor: "#86ADB5",
                              width: 30,
                              height: 30,
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <QuestionAnswer
                              fontSize="small"
                              sx={{
                                color: "#ffff",
                              }}
                            />
                          </Box>
                          <Typography>Investigação</Typography>
                        </MenuItem>
                      </Tooltip>
                      <Divider />
                      <MenuItem
                        sx={{ gap: 1 }}
                        onClick={() => {
                          handleSetSelectedMethodType("all");
                        }}
                      >
                        <Box
                          sx={{
                            borderRadius: 50,
                            backgroundColor: "#86ADB5",
                            width: 30,
                            height: 30,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#ffff",
                              fontWeight: 650,
                              fontSize: "1.2rem",
                            }}
                          >
                            M
                          </Typography>
                        </Box>
                        <Typography>Todos</Typography>
                      </MenuItem>
                    </MuiMenu>
                  </Box>
                )}
              </Box>
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
                <Tooltip
                  arrow
                  placement="right"
                  title={<Typography>Em desenvolvimento</Typography>}
                >
                  <IconButton>
                    <Share fontSize="small" style={{ color: "gray" }} />
                  </IconButton>
                </Tooltip>
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
                  key={result.id}
                  {...(getMethodOrTechniqueById(result.id) as MethodProps)}
                  scoreGeral={result.scoreGeneral}
                  scoresRepresentativos={result.scoresRepresentativos}
                  isTechnique={isTechnique(result.id)}
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
