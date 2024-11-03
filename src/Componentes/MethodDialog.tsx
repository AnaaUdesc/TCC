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
import { getColorByScore, ScoresRepresentativos } from "./Card";
import { AttachMoney, CalendarMonth } from "@mui/icons-material";
import { GoGoal } from "react-icons/go";
import RequirementProgressView, {
  LightTooltip,
} from "./RequirementProgressView";
import { useGlobalContext } from "../GlobalProvider";
import { CgRead } from "react-icons/cg";
import React from "react";
import {
  getReferenceValueByRequirementId,
  getScoreByKey,
  getMethodOrTechniqueById,
} from "../utils";

interface MethodDialogProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  classificationIcons?: React.ReactNode[];
  fullDescription: React.ReactNode;
  goodPractices?: React.ReactNode;
  attentionPoints?: string[];
  more?: string[];
  exemples?: React.ReactNode;
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
  const { getSelectedValuesByRequirementId } = useGlobalContext();

  const requirementsProps: {
    title: string;
    children: React.ReactNode;
    icon: React.ReactNode;
    progress?: number;
  }[] = [
    {
      title: "Orçamento relativo",
      children: (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography>Valor de referência do método:</Typography>
          {getReferenceValueByRequirementId(
            "orcamento_relativo",
            methodId
          )?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
          <Typography>
            <br />
            Valor de input:
          </Typography>
          {getSelectedValuesByRequirementId("orcamento_relativo")?.map(
            (ref) => (
              <Typography key={ref}>{ref}</Typography>
            )
          )}
        </Box>
      ),
      icon: <AttachMoney />,
      progress: getScoreByKey(scoresRepresentativos, "orcamento_relativo"),
    },
    {
      title: "Tempo",
      children: (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography>Valor de referência do método:</Typography>
          {getReferenceValueByRequirementId("tempo", methodId)?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
          <Typography>
            <br />
            Valor de input:
          </Typography>
          {getSelectedValuesByRequirementId("tempo")?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
        </Box>
      ),
      icon: <CalendarMonth />,
      progress: getScoreByKey(scoresRepresentativos, "tempo"),
    },
    {
      title: "Participação do usuário",
      children: (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography>Valor de referência do método:</Typography>
          {getReferenceValueByRequirementId(
            "quantidade_de_usuarios",
            methodId
          )?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
          <Typography>
            <br />
            Valor de input:
          </Typography>
          {getSelectedValuesByRequirementId("quantidade_de_usuarios")?.map(
            (ref) => (
              <Typography key={ref}>{ref}</Typography>
            )
          )}
        </Box>
      ),
      icon: <Group />,
      progress: getScoreByKey(scoresRepresentativos, "quantidade_de_usuarios"),
    },
    {
      title: "Objetivo da avaliação",
      children: (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography>Valor de referência do método:</Typography>
          {getReferenceValueByRequirementId(
            "objetivos_da_avaliacao",
            methodId
          )?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
          <Typography>
            <br />
            Valor de input:
          </Typography>
          {getSelectedValuesByRequirementId("objetivos_da_avaliacao")?.map(
            (ref) => (
              <Typography key={ref}>{ref}</Typography>
            )
          )}
        </Box>
      ),
      icon: <GoGoal />,
      progress: getScoreByKey(scoresRepresentativos, "objetivos_da_avaliacao"),
    },
    {
      title: "Tipo de dado coletado",
      children: (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography>Valor de referência do método:</Typography>
          {getReferenceValueByRequirementId(
            "tipo_de_dado_coletado",
            methodId
          )?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
          <Typography>
            <br />
            Valor de input:
          </Typography>
          {getSelectedValuesByRequirementId("tipo_de_dado_coletado")?.map(
            (ref) => (
              <Typography key={ref}>{ref}</Typography>
            )
          )}
        </Box>
      ),
      icon: <PieChart />,
      progress: getScoreByKey(scoresRepresentativos, "tipo_de_dado_coletado"),
    },
    {
      title: "Disponibilidade de especialista",
      children: (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography>Valor de referência do método:</Typography>
          {getReferenceValueByRequirementId(
            "quantidade_de_especialistas",
            methodId
          )?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
          <Typography>
            <br />
            Valor de input:
          </Typography>
          {getSelectedValuesByRequirementId("quantidade_de_especialistas")?.map(
            (ref) => (
              <Typography key={ref}>{ref}</Typography>
            )
          )}
        </Box>
      ),
      icon: <CgRead />,
      progress: getScoreByKey(
        scoresRepresentativos,
        "quantidade_de_especialistas"
      ),
    },
    {
      title: "Nivel de fidelidade do sistema",
      children: (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography>Valor de referência do método:</Typography>
          {getReferenceValueByRequirementId(
            "nivel_de_fidelidade_do_sistema",
            methodId
          )?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
          <Typography>
            <br />
            Valor de input:
          </Typography>
          {getSelectedValuesByRequirementId(
            "nivel_de_fidelidade_do_sistema"
          )?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
        </Box>
      ),
      icon: <PersonalVideo />,
      progress: getScoreByKey(
        scoresRepresentativos,
        "nivel_de_fidelidade_do_sistema"
      ),
    },
    {
      title: "Modalidade da avaliação",
      children: (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography>Valor de referência do método:</Typography>
          {getReferenceValueByRequirementId(
            "modalidade_da_avaliacao",
            methodId
          )?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
          <Typography>
            <br />
            Valor de input:
          </Typography>
          {getSelectedValuesByRequirementId("modalidade_da_avaliacao")?.map(
            (ref) => (
              <Typography key={ref}>{ref}</Typography>
            )
          )}
        </Box>
      ),
      icon: <VideoChat />,
      progress: getScoreByKey(scoresRepresentativos, "modalidade_da_avaliacao"),
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
          <Box sx={{ padding: 6, paddingTop: 4 }}>
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
