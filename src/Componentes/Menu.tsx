import {
  AttachMoney,
  CalendarMonth,
  Groups,
  PersonalVideo,
  PieChart,
  VideoChat,
} from "@mui/icons-material";
import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { CgRead } from "react-icons/cg";
import { GoGoal } from "react-icons/go";
import ItemMenu from "./ItemMenu";
import { useGlobalContext } from "../GlobalProvider";
import { CONSTANTES } from "../constantes";

export default function Menu() {
  const [specialistRadios, setSpecialistRadios] = useState("");
  const [userParticipationRadios, setUserParticipationRadios] = useState("");
  const [nivelDeFidelidade, setNivelDeFidelidade] = useState("");
  const [orcamentoRelativo, setOrcamentoRelativo] = useState("");
  const [tempo, setTempo] = useState("");

  const handleChangeSpecialistRadios = (value: string) => {
    setSpecialistRadios(value);
  };

  const handleChangeUserParticipationRadios = (value: string) => {
    setUserParticipationRadios(value);
  };

  const handleChangeNivelDeFidelidade = (value: string) => {
    setNivelDeFidelidade(value);
  };

  const handleChangeOrcamentoRelativo = (value: string) => {
    setOrcamentoRelativo(value);
  };

  const handleChangeTempo = (value: string) => {
    setTempo(value);
  };

  const {
    getRequirementLength,
    handleCheckboxChange,
    handleRadioChange,
    handleClearRequirement,
  } = useGlobalContext();

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: 2,
          width: 320,
          padding: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            color: "#00000",
            margin: 2,
          }}
        >
          Informar Requisitos
        </Typography>
        <ItemMenu
          icon={<GoGoal />}
          requirementsLength={getRequirementLength("objetivos_da_avaliacao")}
          name="Objetivo da avaliação"
          tooltipTile={
            <>
              <Typography>
                O objetivo de uma avaliação diz respeito ao que se deseja medir
                ao avaliar um sistema.
              </Typography>
            </>
          }
        >
          <FormGroup sx={{ marginBottom: 4 }}>
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="secondary"
                  sx={{ color: "secondary.main" }}
                  onChange={(e) => {
                    handleCheckboxChange(
                      e,
                      "objetivos_da_avaliacao",
                      "Usabilidade"
                    );
                  }}
                />
              }
              label={
                <Tooltip
                  arrow
                  placement="right"
                  title={
                    <Typography>
                      Refere-se a avaliação de um sistema em relação a :{" "}
                      <ul>
                        <li>Eficiência;</li>
                        <li>Facilidade de aprendizado;</li>
                        <li>Facilidade de recordação;</li>
                        <li>Prevenção a erros;</li>
                        <li>Satisfação do usuário.</li>
                      </ul>
                      Compondo assim, a usabilidade.
                    </Typography>
                  }
                >
                  <Typography sx={{ fontWeight: 300 }}>Usabilidade</Typography>
                </Tooltip>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="secondary"
                  sx={{ color: "secondary.main" }}
                  onChange={(e) => {
                    handleCheckboxChange(
                      e,
                      "objetivos_da_avaliacao",
                      "Acessibilidade"
                    );
                  }}
                />
              }
              label={
                <Tooltip
                  arrow
                  placement="right"
                  title={
                    <Typography>
                      Para pessoas com deficiência, como: auditiva, visual.
                    </Typography>
                  }
                >
                  <Typography sx={{ fontWeight: 300 }}>
                    Acessibilidade
                  </Typography>
                </Tooltip>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="secondary"
                  sx={{ color: "secondary.main" }}
                  onChange={(e) => {
                    handleCheckboxChange(
                      e,
                      "objetivos_da_avaliacao",
                      "Ergonomia"
                    );
                  }}
                />
              }
              label={
                <Tooltip
                  arrow
                  placement="right"
                  title={
                    <Typography>
                      Adaptabilidade do sistema a tarefas e ambientes para que
                      sejam confortáveis e eficientes para os usuários.
                    </Typography>
                  }
                >
                  <Typography sx={{ fontWeight: 300 }}>Ergonomia</Typography>
                </Tooltip>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="secondary"
                  sx={{ color: "secondary.main" }}
                  onChange={(e) => {
                    handleCheckboxChange(
                      e,
                      "objetivos_da_avaliacao",
                      "Qualidade/Conformidade"
                    );
                  }}
                />
              }
              label={
                <Tooltip
                  arrow
                  placement="right"
                  title={
                    <Typography>
                      Conformidade com algum padrão pré estabelecido. Como: W3C,
                      heurísticas de Nielsen ou alguma documentação de
                      requisitos.
                    </Typography>
                  }
                >
                  <Typography sx={{ fontWeight: 300 }}>
                    Qualidade/Conformidade
                  </Typography>
                </Tooltip>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="secondary"
                  sx={{ color: "secondary.main" }}
                  onChange={(e) => {
                    handleCheckboxChange(
                      e,
                      "objetivos_da_avaliacao",
                      "Comparação"
                    );
                  }}
                />
              }
              label={
                <Tooltip
                  arrow
                  placement="right"
                  title={
                    <Typography>
                      Comparação com outro sistema ou versão anterior do mesmo
                      sistema.
                    </Typography>
                  }
                >
                  <Typography sx={{ fontWeight: 300 }}>Comparação</Typography>
                </Tooltip>
              }
            />

            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="secondary"
                  sx={{ color: "secondary.main" }}
                  onChange={(e) => {
                    handleCheckboxChange(
                      e,
                      "objetivos_da_avaliacao",
                      "Validar Informações"
                    );
                  }}
                />
              }
              label={
                <Tooltip
                  arrow
                  placement="right"
                  title={
                    <Typography>
                      Mais especificamente, validar o agrupamento de
                      informações. Exemplo: Agrupamento de itens em um menu.
                    </Typography>
                  }
                >
                  <Typography sx={{ fontWeight: 300 }}>
                    Validar informações
                  </Typography>
                </Tooltip>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="secondary"
                  sx={{ color: "secondary.main" }}
                  onChange={(e) => {
                    handleCheckboxChange(
                      e,
                      "objetivos_da_avaliacao",
                      "Comunicabilidade"
                    );
                  }}
                />
              }
              label={
                <Tooltip
                  arrow
                  placement="right"
                  title={
                    <Typography>
                      Avaliam a qualidade da recepção da metacomunicação do
                      designer com o usuário. Metacomunicação pode ser
                      compreendida como a mensagem passada do designer para os
                      usuários sobre a comunicação usuário–sistema por meio de
                      artefatos da interface.
                    </Typography>
                  }
                >
                  <Typography sx={{ fontWeight: 300 }}>
                    Comunicabilidade
                  </Typography>
                </Tooltip>
              }
            />
          </FormGroup>
        </ItemMenu>
        <Divider sx={{ borderColor: "#E3E3E3", marginX: 2 }} />
        <ItemMenu
          tooltipTile={
            <>
              <Typography>
                É o orçamento monetário comparativo entre diferentes métodos, ou
                seja, um relativo ao outro.
                <br />
                <br />
                Por exemplo: um método que utiliza um questionário aplicado a
                cinco pessoas remotamente é mais barato do que um que exige a
                contratação de dois especialistas por um mês inteiro. <br />
                <br />O valor também pode variar de acordo com o <u>tempo</u> de
                avaliação e o <u>tamanho</u> do sistema.
              </Typography>
            </>
          }
          icon={<AttachMoney />}
          name="Orçamento Relativo"
          requirementsLength={getRequirementLength("orcamento_relativo")}
        >
          <FormGroup
            sx={{ marginBottom: 4 }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleChangeOrcamentoRelativo(e.target.value as string);
            }}
          >
            <RadioGroup
              onChange={(e) => {
                handleRadioChange(e, "orcamento_relativo");
              }}
              name="orcamento_relativo"
              defaultValue=""
            >
              <FormControlLabel
                control={
                  <Radio
                    size="small"
                    color="secondary"
                    sx={{ color: "secondary.main" }}
                    checked={orcamentoRelativo === "baixo"}
                    onClick={(event) => {
                      event.stopPropagation();
                      if (orcamentoRelativo === "baixo") {
                        setOrcamentoRelativo("");
                        handleClearRequirement(["orcamento_relativo"]);
                      }
                    }}
                  />
                }
                value="baixo"
                label={<Typography sx={{ fontWeight: 300 }}>Baixo</Typography>}
              />
              <FormControlLabel
                control={
                  <Radio
                    size="small"
                    color="secondary"
                    sx={{ color: "secondary.main" }}
                    checked={orcamentoRelativo === "medio"}
                    onClick={(event) => {
                      event.stopPropagation();
                      if (orcamentoRelativo === "medio") {
                        setOrcamentoRelativo("");
                        handleClearRequirement(["orcamento_relativo"]);
                      }
                    }}
                  />
                }
                value="medio"
                label={<Typography sx={{ fontWeight: 300 }}>Médio</Typography>}
              />
              <FormControlLabel
                control={
                  <Radio
                    size="small"
                    color="secondary"
                    sx={{ color: "secondary.main" }}
                    checked={orcamentoRelativo === "alto"}
                    onClick={(event) => {
                      event.stopPropagation();
                      if (orcamentoRelativo === "alto") {
                        setOrcamentoRelativo("");
                        handleClearRequirement(["orcamento_relativo"]);
                      }
                    }}
                  />
                }
                value="alto"
                label={<Typography sx={{ fontWeight: 300 }}>Alto</Typography>}
              />
            </RadioGroup>
          </FormGroup>
        </ItemMenu>

        <Divider sx={{ borderColor: "#E3E3E3", marginX: 2 }} />
        <ItemMenu
          icon={<CalendarMonth />}
          name="Tempo"
          tooltipTile={
            <>
              <Typography>
                É o tempo total de avaliação, incluindo:
                <ul>
                  <li>Planejamento da avaliação;</li>
                  <li>Execução;</li>
                  <li>Análise de dados.</li>
                </ul>
                <br />
                Esse tempo pode variar conforme o <u>tamanho</u> do sistema e de
                acordo com o <u>método escolhido</u>.
              </Typography>
            </>
          }
          requirementsLength={getRequirementLength("tempo")}
        >
          <FormGroup
            sx={{ marginBottom: 4 }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleChangeTempo(e.target.value as string);
            }}
          >
            <RadioGroup
              onChange={(e) => {
                handleRadioChange(e, "tempo");
              }}
              name="tempo"
              defaultValue=""
            >
              <FormControlLabel
                control={
                  <Radio
                    size="small"
                    color="secondary"
                    sx={{ color: "secondary.main" }}
                    checked={tempo === "baixo"}
                    onClick={(event) => {
                      event.stopPropagation();
                      if (tempo === "baixo") {
                        setTempo("");
                        handleClearRequirement(["tempo"]);
                      }
                    }}
                  />
                }
                value="baixo"
                label={<Typography sx={{ fontWeight: 300 }}>Baixo</Typography>}
              />
              <FormControlLabel
                control={
                  <Radio
                    size="small"
                    color="secondary"
                    sx={{ color: "secondary.main" }}
                    checked={tempo === "medio"}
                    onClick={(event) => {
                      event.stopPropagation();
                      if (tempo === "medio") {
                        setTempo("");
                        handleClearRequirement(["tempo"]);
                      }
                    }}
                  />
                }
                value="medio"
                label={<Typography sx={{ fontWeight: 300 }}>Médio</Typography>}
              />
              <FormControlLabel
                control={
                  <Radio
                    size="small"
                    color="secondary"
                    sx={{ color: "secondary.main" }}
                    checked={tempo === "alto"}
                    onClick={(event) => {
                      event.stopPropagation();
                      if (tempo === "alto") {
                        setTempo("");
                        handleClearRequirement(["tempo"]);
                      }
                    }}
                  />
                }
                value="alto"
                label={<Typography sx={{ fontWeight: 300 }}>Alto</Typography>}
              />
            </RadioGroup>
          </FormGroup>
        </ItemMenu>

        <Divider sx={{ borderColor: "#E3E3E3", marginX: 2 }} />
        <ItemMenu
          icon={<PieChart />}
          name="Tipo de dado coletado"
          tooltipTile={
            <Typography>
              Refere-se à natureza dos dados finais obtidos por meio da
              aplicação do método.
            </Typography>
          }
          requirementsLength={getRequirementLength("tipo_de_dado_coletado")}
        >
          <FormGroup sx={{ marginBottom: 4 }}>
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="secondary"
                  sx={{ color: "secondary.main" }}
                  onChange={(e) => {
                    handleCheckboxChange(
                      e,
                      "tipo_de_dado_coletado",
                      "Qualitativo"
                    );
                  }}
                />
              }
              label={
                <Tooltip
                  arrow
                  placement="right"
                  title={
                    <Typography>
                      <b>Dados Qualitativos</b>: Referem-se a dados uteis para
                      responder perguntas do tipo: <br />
                      <br /> '
                      <b>
                        <u>Por que </u>
                      </b>
                      os usuários não conseguem completar a tarefa x ?'.
                      <br />
                      <br />
                      Exemplo de dado coletado: opiniões do usuário e
                      compreensão de comportamentos.
                    </Typography>
                  }
                >
                  <Typography sx={{ fontWeight: 300 }}>Qualitativos</Typography>
                </Tooltip>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="secondary"
                  sx={{ color: "secondary.main" }}
                  onChange={(e) => {
                    handleCheckboxChange(
                      e,
                      "tipo_de_dado_coletado",
                      "Quantitativo"
                    );
                  }}
                />
              }
              label={
                <Tooltip
                  arrow
                  placement="right"
                  title={
                    <Typography>
                      <b>Dados Quantitativos</b>: Referem-se a dados uteis para
                      responder perguntas do tipo: <br />
                      <br />'
                      <b>
                        <u>Quantos </u>
                      </b>
                      usuários não conseguem completar a tarefa x ?' <br />
                      <br />
                      Exemplo de dados coletados: quantidades, porcentagens,
                      tempo, etc.
                    </Typography>
                  }
                >
                  <Typography sx={{ fontWeight: 300 }}>
                    Quantitativos
                  </Typography>
                </Tooltip>
              }
            />
          </FormGroup>
        </ItemMenu>
        <Divider sx={{ borderColor: "#E3E3E3", marginX: 2 }} />
        <ItemMenu
          icon={<CgRead />}
          name="Disponibilidade de Especialista"
          tooltipTile={
            <>
              <Typography>
                Um especialista é uma pessoa que possui conhecimentos
                aprofundados sobre a área de usabilidade. Capaz de:
                <ul>
                  <li>Fornecer orientações técnicas;</li>
                  <li>Identificar problemas;</li>
                  <li>Aplicar métodos;</li>
                  <li>
                    Sugerir melhorias com base em sua experiência e expertise.;
                  </li>
                </ul>
              </Typography>
            </>
          }
          requirementsLength={getRequirementLength(
            "participacao_do_especialista"
          )}
        >
          <FormGroup
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleChangeSpecialistRadios(e.target.value as string);
            }}
          >
            <FormControl>
              <FormLabel
                id="demo-radio-buttons-group-label"
                sx={{
                  fontWeight: 550,
                  color: "#000",
                  marginTop: 1,
                }}
              >
                Há especialista disponível?
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
                sx={{ paddingX: 2, marginBottom: 2 }}
                onChange={(e) => {
                  handleRadioChange(e, "participacao_do_especialista");
                }}
              >
                <FormControlLabel
                  value="sim"
                  control={
                    <Radio
                      size="small"
                      color="secondary"
                      checked={specialistRadios === "sim"}
                      onClick={(event) => {
                        event.stopPropagation();
                        if (specialistRadios === "sim") {
                          setSpecialistRadios("");
                          handleClearRequirement([
                            "participacao_do_especialista",
                            "quantidade_de_especialistas",
                          ]);
                        }
                      }}
                    />
                  }
                  label="Sim"
                />
                <FormControlLabel
                  value="nao"
                  control={
                    <Radio
                      checked={specialistRadios === "nao"}
                      size="small"
                      color="secondary"
                      onClick={(event) => {
                        event.stopPropagation();
                        handleClearRequirement(["quantidade_de_especialistas"]);

                        if (specialistRadios === "nao") {
                          setSpecialistRadios("");
                          handleClearRequirement([
                            "participacao_do_especialista",
                            "quantidade_de_especialistas",
                          ]);
                        }
                      }}
                    />
                  }
                  label="Não"
                />
              </RadioGroup>
            </FormControl>
          </FormGroup>
          {specialistRadios === "sim" && (
            <FormGroup sx={{ marginBottom: 4 }}>
              <FormControl>
                <FormLabel
                  id="demo-radio-buttons-group-label"
                  sx={{
                    fontWeight: 550,
                    color: "#000",
                    marginBottom: 1,
                    marginTop: 2,
                  }}
                >
                  Quantos especialistas disponíveis?
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  // defaultValue="1"
                  name="radio-buttons-group"
                  sx={{ paddingX: 2 }}
                  onChange={(e) => {
                    handleRadioChange(e, "quantidade_de_especialistas");
                  }}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio size="small" color="secondary" />}
                    label="1"
                  />
                  <FormControlLabel
                    value="2_4"
                    control={<Radio size="small" color="secondary" />}
                    label="2 a 4"
                  />
                  <FormControlLabel
                    value="5+"
                    control={<Radio size="small" color="secondary" />}
                    label="5 ou mais"
                  />
                </RadioGroup>
              </FormControl>
            </FormGroup>
          )}
        </ItemMenu>
        <Divider sx={{ borderColor: "#E3E3E3", marginX: 2 }} />
        <ItemMenu
          icon={<PersonalVideo />}
          name="Nível de Fidelidade do Sistema"
          tooltipTile={
            <>
              <Typography>
                Refere-se ao grau de fidelidade do sistema atual em relação à
                sua versão final prevista.
              </Typography>
            </>
          }
          requirementsLength={getRequirementLength(
            "nivel_de_fidelidade_do_sistema"
          )}
        >
          <FormGroup
            sx={{ marginBottom: 4 }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleChangeNivelDeFidelidade(e.target.value as string);
            }}
          >
            <RadioGroup
              onChange={(e) => {
                handleRadioChange(e, "nivel_de_fidelidade_do_sistema");
              }}
              name="nivelDeFidelidade"
              defaultValue=""
            >
              <FormControlLabel
                control={
                  <Radio
                    size="small"
                    color="secondary"
                    sx={{ color: "secondary.main" }}
                    checked={nivelDeFidelidade === "baixa"}
                    onClick={(event) => {
                      event.stopPropagation();
                      if (nivelDeFidelidade === "baixa") {
                        setNivelDeFidelidade("");
                        handleClearRequirement([
                          "nivel_de_fidelidade_do_sistema",
                        ]);
                      }
                    }}
                  />
                }
                value="baixa"
                label={
                  <Tooltip
                    arrow
                    placement="right"
                    title={
                      <Typography>
                        <br />
                        <b>Fidelidade Baixa</b>: protótipos não funcionais.
                        <br />
                        <br />
                        Exemplos: wireframes, protótipos em papel, protótipos
                        digitais estáticos, etc.
                        <br />
                        <br />
                      </Typography>
                    }
                  >
                    <Typography sx={{ fontWeight: 300 }}>Baixa</Typography>
                  </Tooltip>
                }
              />
              <FormControlLabel
                control={
                  <Radio
                    size="small"
                    color="secondary"
                    sx={{ color: "secondary.main" }}
                    checked={nivelDeFidelidade === "media"}
                    onClick={(event) => {
                      event.stopPropagation();
                      if (nivelDeFidelidade === "media") {
                        setNivelDeFidelidade("");
                        handleClearRequirement([
                          "nivel_de_fidelidade_do_sistema",
                        ]);
                      }
                    }}
                  />
                }
                value="media"
                label={
                  <Tooltip
                    arrow
                    placement="right"
                    title={
                      <Typography>
                        <br />
                        <b>Fidelidade Média</b>: protótipos digitais com
                        funcionalidades limitadas. <br />
                        <br /> Exemplos: protótipos minimamente navegáveis,
                        sejam eles implementados em código ou ferramentas como
                        Figma.
                        <br />
                        <br />
                      </Typography>
                    }
                  >
                    <Typography sx={{ fontWeight: 300 }}>Média</Typography>
                  </Tooltip>
                }
              />
              <FormControlLabel
                control={
                  <Radio
                    size="small"
                    color="secondary"
                    sx={{ color: "secondary.main" }}
                    checked={nivelDeFidelidade === "alta"}
                    onClick={(event) => {
                      event.stopPropagation();
                      if (nivelDeFidelidade === "alta") {
                        setNivelDeFidelidade("");
                        handleClearRequirement([
                          "nivel_de_fidelidade_do_sistema",
                        ]);
                      }
                    }}
                  />
                }
                value="alta"
                label={
                  <Tooltip
                    arrow
                    placement="right"
                    title={
                      <Typography>
                        <br />
                        <b>Fidelidade Alta</b>: sistema com todas ou quase todas
                        as funcionalidades previstas implementadas. <br />
                        <br /> Exemplos: MVP (Produto Mínimo Viável) ou o
                        próprio sistema final.
                        <br />
                        <br />
                      </Typography>
                    }
                  >
                    <Typography sx={{ fontWeight: 300 }}>Alta</Typography>
                  </Tooltip>
                }
              />
            </RadioGroup>
          </FormGroup>
        </ItemMenu>

        <Divider sx={{ borderColor: "#E3E3E3", marginX: 2 }} />
        <ItemMenu
          icon={<Groups />}
          name="Participação do Usuário"
          tooltipTile={
            <>
              <Typography>
                Usuário é a pessoa que utiliza/utilizará o sistema final. Um
                representante do público alvo desejado.
              </Typography>
            </>
          }
          requirementsLength={getRequirementLength("participacao_do_usuario")}
        >
          <FormGroup
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleChangeUserParticipationRadios(e.target.value as string);
            }}
          >
            <FormControl>
              <FormLabel
                id="demo-radio-buttons-group-label"
                sx={{
                  fontWeight: 550,
                  color: "#000",
                  marginTop: 1,
                }}
              >
                Há usuários disponíveis?
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
                sx={{ paddingX: 2, marginBottom: 2 }}
                onChange={(e) => {
                  handleRadioChange(e, "participacao_do_usuario");
                }}
              >
                <FormControlLabel
                  value="sim"
                  control={
                    <Radio
                      size="small"
                      color="secondary"
                      checked={userParticipationRadios === "sim"}
                      onClick={(event) => {
                        event.stopPropagation();
                        if (userParticipationRadios === "sim") {
                          setUserParticipationRadios("");
                          handleClearRequirement([
                            "participacao_do_usuario",
                            CONSTANTES.QUANTIDADE_DE_USUARIOS,
                          ]);
                        }
                      }}
                    />
                  }
                  label="Sim"
                />
                <FormControlLabel
                  value="nao"
                  control={
                    <Radio
                      checked={userParticipationRadios === "nao"}
                      onClick={(event) => {
                        event.stopPropagation();
                        handleClearRequirement([
                          CONSTANTES.QUANTIDADE_DE_USUARIOS,
                        ]);

                        if (userParticipationRadios === "nao") {
                          setUserParticipationRadios("");
                          handleClearRequirement([
                            "participacao_do_usuario",
                            CONSTANTES.QUANTIDADE_DE_USUARIOS,
                          ]);
                        }
                      }}
                      size="small"
                      color="secondary"
                    />
                  }
                  label="Não"
                />
              </RadioGroup>
            </FormControl>
          </FormGroup>
          <FormGroup>
            {userParticipationRadios === "sim" && (
              <FormControl>
                <FormLabel
                  id="demo-radio-buttons-group-label"
                  sx={{
                    fontWeight: 550,
                    color: "#000",
                    marginBottom: 1,
                    marginTop: 2,
                  }}
                >
                  Quantos usuários disponíveis?
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  // defaultValue="1-5"
                  name="radio-buttons-group"
                  sx={{ paddingX: 2, marginBottom: 2 }}
                  onChange={(e) => {
                    handleRadioChange(e, CONSTANTES.QUANTIDADE_DE_USUARIOS);
                  }}
                >
                  <FormControlLabel
                    value="1-5"
                    control={<Radio size="small" color="secondary" />}
                    label="1 a 5"
                  />
                  <FormControlLabel
                    value="5-10"
                    control={<Radio size="small" color="secondary" />}
                    label="5 a 10"
                  />
                  <FormControlLabel
                    value="10-20"
                    control={<Radio size="small" color="secondary" />}
                    label="10 a 20"
                  />
                  <FormControlLabel
                    value="20+"
                    control={<Radio size="small" color="secondary" />}
                    label="20 ou mais"
                  />
                </RadioGroup>
              </FormControl>
            )}
          </FormGroup>
        </ItemMenu>
        <Divider sx={{ borderColor: "#E3E3E3", marginX: 2 }} />
        <ItemMenu
          icon={<VideoChat />}
          name="Modalidade da Avaliação"
          tooltipTile={
            <>
              <Typography>
                Refere-se ao formato da avaliação, podendo ser:
                <ul>
                  <li>
                    <b>Remota</b>: realizada à distância, sem a presença física
                    do avaliador e/ou usuário.
                  </li>
                  <li>
                    <b>Presencial</b>: realizada com a presença física do
                    avaliador e/ou usuário.
                  </li>
                </ul>
              </Typography>
            </>
          }
          requirementsLength={getRequirementLength("modalidade_da_avaliacao")}
        >
          <FormGroup sx={{ marginBottom: 4 }}>
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="secondary"
                  sx={{ color: "secondary.main" }}
                  onChange={(e) => {
                    handleCheckboxChange(
                      e,
                      "modalidade_da_avaliacao",
                      "Remota"
                    );
                  }}
                />
              }
              label={<Typography sx={{ fontWeight: 300 }}>Remota</Typography>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="secondary"
                  sx={{ color: "secondary.main" }}
                  onChange={(e) => {
                    handleCheckboxChange(
                      e,
                      "modalidade_da_avaliacao",
                      "Presencial"
                    );
                  }}
                />
              }
              label={
                <Typography sx={{ fontWeight: 300 }}>Presencial</Typography>
              }
            />
          </FormGroup>
        </ItemMenu>
      </Box>
    </>
  );
}
