import {
  Close,
  Group,
  PersonalVideo,
  PieChart,
  Share,
  VideoChat,
} from "@mui/icons-material";
import {
  Dialog,
  Box,
  IconButton,
  Typography,
  Link,
  Divider,
  CircularProgress,
} from "@mui/material";
import { ScoresRepresentativos } from "./Card";
import { AttachMoney, CalendarMonth } from "@mui/icons-material";
import { GoGoal } from "react-icons/go";
import RequirementProgressView, {
  RequirementProgressViewProps,
} from "./RequirementProgressView";
import { CgRead } from "react-icons/cg";
import React from "react";
import {
  getScoreByKey,
  getMethodOrTechniqueById,
  getColorByScore,
} from "../utils";
import RequirementTooltipOrCompatibility from "./RequirementTooltipOrCompatibility";
import RequirementTooltipAndCompatibility from "./RequirementTooltipAndCompatibility";
import { LightTooltip } from "./LightTooltip";

interface MethodDialogProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  classificationIcons?: React.ReactNode[];
  fullDescription: React.ReactNode;
  goodPractices?: React.ReactNode;
  attentionPoints?: React.ReactNode;
  exemples?: React.ReactNode;
  more?: string[];
  image: string;
  relatedMethods?: string[];
  onMethodClick?: (id: string) => void;
  scoreGeral?: number;
  id: string;
  scoresRepresentativos?: ScoresRepresentativos;
}

export default function MethodDialog({
  id: methodId,
  open,
  handleClose,
  title,
  classificationIcons,
  fullDescription,
  goodPractices,
  attentionPoints,
  more,
  exemples,
  image,
  relatedMethods,
  onMethodClick,
  scoreGeral,
  scoresRepresentativos = {},
}: MethodDialogProps) {
  const requirementsProps: RequirementProgressViewProps[] = [
    {
      title: "Orçamento relativo",
      children: (
        <RequirementTooltipOrCompatibility
          requirementId="orcamento_relativo"
          methodId={methodId}
        />
      ),
      icon: <AttachMoney />,
      progress: getScoreByKey(scoresRepresentativos, "orcamento_relativo"),
      requirementId: "orcamento_relativo",
    },
    {
      title: "Tempo",
      children: (
        <RequirementTooltipOrCompatibility
          requirementId="tempo"
          methodId={methodId}
        />
      ),
      icon: <CalendarMonth />,
      progress: getScoreByKey(scoresRepresentativos, "tempo"),
      requirementId: "tempo",
    },
    {
      title: "Participação do usuário",
      children: (
        <RequirementTooltipOrCompatibility
          requirementId="quantidade_de_usuarios"
          methodId={methodId}
        />
      ),
      icon: <Group />,
      progress: getScoreByKey(scoresRepresentativos, "quantidade_de_usuarios"),
      requirementId: "quantidade_de_usuarios",
    },
    {
      title: "Objetivo da avaliação",
      children: (
        <RequirementTooltipAndCompatibility
          requirementId="objetivos_da_avaliacao"
          methodId={methodId}
          compatibility={getScoreByKey(
            scoresRepresentativos,
            "objetivos_da_avaliacao"
          )}
        />
      ),
      icon: <GoGoal />,
      progress: getScoreByKey(scoresRepresentativos, "objetivos_da_avaliacao"),
      requirementId: "objetivos_da_avaliacao",
    },
    {
      title: "Tipo de dado coletado",
      children: (
        <RequirementTooltipAndCompatibility
          requirementId="tipo_de_dado_coletado"
          methodId={methodId}
          compatibility={getScoreByKey(
            scoresRepresentativos,
            "tipo_de_dado_coletado"
          )}
        />
      ),
      icon: <PieChart />,
      progress: getScoreByKey(scoresRepresentativos, "tipo_de_dado_coletado"),
      requirementId: "tipo_de_dado_coletado",
    },
    {
      title: "Disponibilidade de especialista",
      children: (
        <RequirementTooltipOrCompatibility
          requirementId="quantidade_de_especialistas"
          methodId={methodId}
        />
      ),
      icon: <CgRead />,
      progress: getScoreByKey(
        scoresRepresentativos,
        "quantidade_de_especialistas"
      ),
      requirementId: "quantidade_de_especialistas",
    },
    {
      title: "Nível de fidelidade do sistema",
      children: (
        <RequirementTooltipOrCompatibility
          requirementId="nivel_de_fidelidade_do_sistema"
          methodId={methodId}
        />
      ),
      icon: <PersonalVideo />,
      progress: getScoreByKey(
        scoresRepresentativos,
        "nivel_de_fidelidade_do_sistema"
      ),
      requirementId: "nivel_de_fidelidade_do_sistema",
    },
    {
      title: "Modalidade da avaliação",
      children: (
        <RequirementTooltipAndCompatibility
          requirementId="modalidade_da_avaliacao"
          methodId={methodId}
          compatibility={getScoreByKey(
            scoresRepresentativos,
            "modalidade_da_avaliacao"
          )}
        />
      ),
      icon: <VideoChat />,
      progress: getScoreByKey(scoresRepresentativos, "modalidade_da_avaliacao"),
      requirementId: "modalidade_da_avaliacao",
    },
  ];

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xl"
      PaperProps={{
        sx: {
          borderRadius: 2,
          paddingBottom: 20,
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <IconButton
          onClick={handleClose}
          size="small"
          sx={{
            position: "absolute",
            right: 10,
            top: 10,

            backgroundColor: "#000",
            opacity: 0.65,
            transition: "all 0.2s",

            ":hover": {
              backgroundColor: "#000",
              opacity: 0.8,
            },
          }}
        >
          <Close
            sx={{
              color: "#fff",
            }}
          />
        </IconButton>
        <Box
          sx={{
            backgroundImage: `url(${image})`,
            width: "100%",
            minWidth: "100px",
            minHeight: "600px",
            height: "auto",
            borderRadius: 2,
            backgroundPosition: "center", // Para centralizar a imagem
            backgroundSize: "cover", // Para cobrir o Box com a imagem
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 6,
            paddingBottom: 0,
          }}
        >
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Typography variant="h4" noWrap fontWeight={600}>
              {title}
            </Typography>

            <Box sx={{ display: "flex", gap: 1, margin: 1 }}>
              {classificationIcons?.map((icon, index) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 50,
                    backgroundColor: "#86ADB5",
                    width: 24,
                    height: 24,
                    p: 2,
                  }}
                  key={index}
                >
                  {icon}
                </Box>
              ))}
            </Box>
          </Box>
          <IconButton>
            <Share fontSize="large" style={{ color: "gray" }} />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
          <Box sx={{ padding: 6, paddingTop: 4, width: "2200px" }}>
            <Typography
              sx={{
                marginTop: 1,
                marginBottom: 7,
              }}
            >
              {fullDescription}
            </Typography>

            {exemples && (
              <>
                <Typography
                  variant="h5"
                  fontWeight={600}
                  sx={{ marginTop: 2, marginBottom: 2 }}
                >
                  Exemplo de Utilização
                </Typography>
                <Box sx={{ marginBottom: 7 }}>{exemples}</Box>
              </>
            )}
            {goodPractices && (
              <>
                <Typography
                  variant="h5"
                  fontWeight={600}
                  sx={{ marginTop: 2, marginBottom: 2 }}
                >
                  Boas Práticas e Dicas
                </Typography>
                <Box sx={{ marginBottom: 7 }}>{goodPractices}</Box>
              </>
            )}
            {attentionPoints && (
              <>
                <Typography
                  variant="h5"
                  fontWeight={600}
                  sx={{ marginTop: 2, marginBottom: 2 }}
                >
                  Pontos de Atenção ou Desvantagens
                </Typography>
                <Box sx={{ marginBottom: 7 }}>{attentionPoints}</Box>
              </>
            )}
            {more && more.length > 0 && (
              <>
                <Typography
                  variant="h5"
                  fontWeight={600}
                  sx={{ marginTop: 2, marginBottom: 2 }}
                >
                  Indicação de Leitura e Referências
                </Typography>
                <Box sx={{ marginBottom: 7 }}>
                  {more?.map((link, index) => (
                    <Typography key={index} sx={{ marginBottom: 2 }}>
                      <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                      >
                        {link.length > 60 ? `${link.slice(0, 60)}...` : link}
                      </Link>
                    </Typography>
                  ))}
                </Box>
              </>
            )}
            {relatedMethods && relatedMethods.length > 0 && (
              <>
                <Typography
                  variant="h5"
                  fontWeight={600}
                  sx={{ marginTop: 2, marginBottom: 2 }}
                >
                  Métodos e Técnicas Para Uso Combinado
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: 4,
                    flexWrap: "wrap",
                  }}
                >
                  {relatedMethods?.map((relatedMethodOrTechnic) => {
                    const related = getMethodOrTechniqueById(
                      relatedMethodOrTechnic
                    );

                    return (
                      <Box
                        key={related?.id}
                        sx={{
                          backgroundColor: "#E7EFF0",
                          width: 350,
                          height: 450,
                          borderRadius: 2,
                          paddingTop: 0,
                          cursor: "pointer",
                          display: "flex",
                          flexDirection: "column",
                        }}
                        onClick={() => onMethodClick?.(related?.id || "")}
                      >
                        <Box
                          sx={{
                            backgroundImage: `url(${related?.image})`,
                            width: "100%",
                            minWidth: "100px",
                            minHeight: "200px",
                            height: "auto",
                            borderRadius: 2,
                            backgroundPosition: "center", // Para centralizar a imagem
                            backgroundSize: "cover", // Para cobrir o Box com a imagem
                          }}
                        />
                        <Box
                          sx={{
                            padding: 2,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "100%",
                            flex: 1,
                          }}
                        >
                          <Box>
                            <Typography variant="h6" fontWeight={600}>
                              {related?.title}
                            </Typography>
                            <Typography
                              sx={{
                                color: "#3E3E3E",
                                fontStyle: "italic",
                                marginTop: 3,
                              }}
                            >
                              {related?.description}
                            </Typography>
                          </Box>

                          <Box sx={{ display: "flex", gap: 1 }}>
                            {related?.classificationIcons.map((icon, index) => (
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  borderRadius: 50,
                                  backgroundColor: "#86ADB5",
                                  width: 24,
                                  height: 24,
                                  p: 2,
                                }}
                                key={index}
                              >
                                {icon}
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </>
            )}
          </Box>
          <Divider
            sx={{
              mt: 6,
              height: "700px",
            }}
            orientation="vertical"
            flexItem
          />
          <Box
            sx={{
              p: 6,

              width: "800px",
            }}
          >
            <Typography variant="h5" fontWeight={600}>
              Compatibilidades
            </Typography>
            <Typography
              variant="h6"
              fontWeight={500}
              fontStyle={"italic"}
              sx={{ marginTop: 2 }}
            >
              Total
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
                my: 1,
              }}
            >
              <LightTooltip
                title={
                  <Typography>
                    A <b>compatibilidade geral</b> representa o percentual de
                    adequação deste método aos requisitos que você forneceu,
                    combinados com as condições necessárias para o funcionamento
                    deste método.
                    <br />
                    <br />
                    Você encontrará justificativas sobre essa porcentagem
                    observando as porcentagens <b>'Por requisito'</b>, listadas
                    abaixo.
                  </Typography>
                }
                arrow
                placement="left"
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "inline-flex",
                  }}
                >
                  <CircularProgress
                    variant="determinate"
                    sx={{
                      color: "#d9d9d9",
                    }}
                    size={100}
                    thickness={5}
                    value={100}
                  />
                  <CircularProgress
                    variant="determinate"
                    sx={{
                      color: getColorByScore(scoreGeral ?? 0),
                      position: "absolute",
                      left: 0,
                    }}
                    size={100}
                    thickness={5}
                    value={scoreGeral}
                  />

                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: "absolute",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: 600 }}
                    >
                      {scoreGeral}%
                    </Typography>
                  </Box>
                </Box>
              </LightTooltip>
            </Box>

            <Typography
              variant="h6"
              fontWeight={500}
              fontStyle={"italic"}
              sx={{ marginTop: 5, marginBottom: 2 }}
            >
              Por requisito
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                mt: 1,
              }}
            >
              {requirementsProps.map((requirement) => (
                <RequirementProgressView
                  key={requirement.title}
                  progress={requirement.progress ?? 0}
                  title={requirement.title}
                  icon={requirement.icon}
                  requirementId={requirement.requirementId}
                >
                  {requirement.children}
                </RequirementProgressView>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}
