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
  Tooltip,
} from "@mui/material";
import { MethodProps, methods } from "../db/methods";
import { technics } from "../db/tecnicas";
import { getColorByScore, getMethodOrTechniqueById } from "./Card";
import { AttachMoney, CalendarMonth } from "@mui/icons-material";
import { GoGoal } from "react-icons/go";
import RequirementProgressView, {
  LightTooltip,
} from "./RequirementProgressView";
import { requirements } from "../db/requirements";
import { useGlobalContext } from "../GlobalProvider";
import { CgRead } from "react-icons/cg";

const getReferenceValueByRequirementId = (
  requirementId: string,
  methodId: string
) => {
  const method = getMethodOrTechniqueById(methodId);
  const requirement = requirements.find((req) => req.id === requirementId);

  if (!method || !requirement) {
    return [];
  }

  if (requirement.type === "AND") {
    return (
      method.needANDReference?.find((ref) => ref.requirement === requirementId)
        ?.values || []
    );
  } else {
    return (
      method.needORReference?.find((ref) => ref.requirement === requirementId)
        ?.values || []
    );
  }
};

interface MethodDialogProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  classificationIcons?: React.ReactNode[];
  fullDescription: React.ReactNode;
  goodPractices?: string[];
  attentionPoints?: string[];
  more?: string[];
  exemples?: string[];
  image: string;
  relatedMethods?: string[];
  onMethodClick?: (id: string) => void;
  scoreGeral?: number;
  id: string;
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
}: MethodDialogProps) {
  const { getSelectedValuesByRequirementId } = useGlobalContext();

  const selectedObjetivos = getSelectedValuesByRequirementId(
    "objetivos_da_avaliacao"
  );
  const referenceObjetivos = getReferenceValueByRequirementId(
    "objetivos_da_avaliacao",
    methodId
  );

  const selectedOrcamento =
    getSelectedValuesByRequirementId("orcamento_relativo");
  const referenceOrcamento = getReferenceValueByRequirementId(
    "orcamento_relativo",
    methodId
  );

  const selectedTempo = getSelectedValuesByRequirementId("tempo");
  const referenceTempo = getReferenceValueByRequirementId("tempo", methodId);

  const selectedTipoDeDado = getSelectedValuesByRequirementId(
    "tipo_de_dado_coletado"
  );
  const referenceTipoDeDado = getReferenceValueByRequirementId(
    "tipo_de_dado_coletado",
    methodId
  );

  const selectedEspecialista = getSelectedValuesByRequirementId(
    "quantidade_de_especialistas"
  );
  const referenceEspecialista = getReferenceValueByRequirementId(
    "quantidade_de_especialistas",
    methodId
  );

  const selectedFidelidade = getSelectedValuesByRequirementId(
    "nivel_de_fidelidade_do_sistema"
  );

  const referenceFidelidade = getReferenceValueByRequirementId(
    "nivel_de_fidelidade_do_sistema",
    methodId
  );

  const selectedUsers = getSelectedValuesByRequirementId(
    "quantidade_de_usuarios"
  );

  const referenceUsers = getReferenceValueByRequirementId(
    "quantidade_de_usuarios",
    methodId
  );

  const selectedModalidade = getSelectedValuesByRequirementId(
    "modalidade_da_avaliacao"
  );

  const referenceModalidade = getReferenceValueByRequirementId(
    "modalidade_da_avaliacao",
    methodId
  );

  const requirementsProps: {
    title: string;
    children: React.ReactNode;
    icon: React.ReactNode;
  }[] = [
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
          {referenceObjetivos?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
          <Typography>
            <br />
            Valor de input:
          </Typography>
          {selectedObjetivos?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
        </Box>
      ),
      icon: <GoGoal />,
    },
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
          {referenceOrcamento?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
          <Typography>
            <br />
            Valor de input:
          </Typography>
          {selectedOrcamento?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
        </Box>
      ),
      icon: <AttachMoney />,
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
          {referenceTempo?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
          <Typography>
            <br />
            Valor de input:
          </Typography>
          {selectedTempo?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
        </Box>
      ),
      icon: <CalendarMonth />,
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
          {referenceTipoDeDado?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
          <Typography>
            <br />
            Valor de input:
          </Typography>
          {selectedTipoDeDado?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
        </Box>
      ),

      icon: <PieChart />,
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
          {referenceEspecialista?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
          <Typography>
            <br />
            Valor de input:
          </Typography>
          {selectedEspecialista?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
        </Box>
      ),

      icon: <CgRead />,
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
          {referenceFidelidade?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
          <Typography>
            <br />
            Valor de input:
          </Typography>
          {selectedFidelidade?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
        </Box>
      ),

      icon: <PersonalVideo />,
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
          {referenceUsers?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
          <Typography>
            <br />
            Valor de input:
          </Typography>
          {selectedUsers?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
        </Box>
      ),
      icon: <Group />,
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
          {referenceModalidade?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
          <Typography>
            <br />
            Valor de input:
          </Typography>
          {selectedModalidade?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
        </Box>
      ),

      icon: <VideoChat />,
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
          <Box sx={{ padding: 6 }}>
            <Typography
              sx={{
                marginTop: 1,
                marginBottom: 7,
              }}
            >
              {fullDescription}
            </Typography>

            {exemples && exemples.length > 0 && (
              <>
                <Typography
                  variant="h5"
                  fontWeight={600}
                  sx={{ marginTop: 2, marginBottom: 2 }}
                >
                  Exemplo de Utilização
                </Typography>
                <Box sx={{ marginBottom: 7 }}>
                  {exemples?.map((exemple, index) => (
                    <Typography sx={{ marginBottom: 1 }} key={index}>
                      {exemple}
                    </Typography>
                  ))}
                </Box>
              </>
            )}
            {goodPractices && goodPractices.length > 0 && (
              <>
                <Typography
                  variant="h5"
                  fontWeight={600}
                  sx={{ marginTop: 2, marginBottom: 2 }}
                >
                  Boas Práticas e Dicas
                </Typography>
                <Box sx={{ marginBottom: 7 }}>
                  {goodPractices?.map((practice, index) => (
                    <Typography sx={{ marginBottom: 1 }} key={index}>
                      {practice}
                    </Typography>
                  ))}
                </Box>
              </>
            )}
            {attentionPoints && attentionPoints.length > 0 && (
              <>
                <Typography
                  variant="h5"
                  fontWeight={600}
                  sx={{ marginTop: 2, marginBottom: 2 }}
                >
                  Pontos de Atenção ou Desvantagens
                </Typography>
                <Box sx={{ marginBottom: 7 }}>
                  {attentionPoints?.map((point, index) => (
                    <Typography key={index} sx={{ marginBottom: 2 }}>
                      {point}
                    </Typography>
                  ))}
                </Box>
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
              mt: 8,
              height: "700px",
            }}
            orientation="vertical"
            flexItem
          />
          <Box
            sx={{
              p: 6,
              mt: 1,
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
                  progress={0}
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
