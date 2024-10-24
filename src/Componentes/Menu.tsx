import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import ItemMenu from "./ItemMenu";
import { CgRead } from "react-icons/cg";
import { GoGoal } from "react-icons/go";
import {
  AttachMoney,
  CalendarMonth,
  Close,
  Groups,
  MenuBook,
  PersonalVideo,
  PieChart,
  VideoChat,
} from "@mui/icons-material";
import { useState } from "react";

export default function Menu() {
  const [specialistRadios, setSpecialistRadios] = useState("");

  const handleChangeSpecialistRadios = (value: string) => {
    setSpecialistRadios(value);
  };

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
                />
              }
              label={
                <Typography sx={{ fontWeight: 300 }}>Ergonomia</Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="secondary"
                  sx={{ color: "secondary.main" }}
                />
              }
              label={
                <Tooltip
                  arrow
                  placement="right"
                  title={
                    <Typography>
                      Conformidade com algum padrão pré estabelecido. Como: W3C
                      ou alguma documentação de requisitos.
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
                />
              }
              label={
                <Tooltip
                  arrow
                  placement="right"
                  title={<Typography>Preciso descrever algo aqui</Typography>}
                >
                  <Typography sx={{ fontWeight: 300 }}>
                    Comunicabilidade
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
                />
              }
              label={
                <Tooltip
                  arrow
                  placement="right"
                  title={<Typography>Preciso descrever algo aqui</Typography>}
                >
                  <Typography sx={{ fontWeight: 300 }}>
                    Metacomunicação
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
        >
          <FormGroup sx={{ marginBottom: 4 }}>
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="secondary"
                  sx={{ color: "secondary.main" }}
                />
              }
              label={<Typography sx={{ fontWeight: 300 }}>Baixo</Typography>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="secondary"
                  sx={{ color: "secondary.main" }}
                />
              }
              label={<Typography sx={{ fontWeight: 300 }}>Médio</Typography>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="secondary"
                  sx={{ color: "secondary.main" }}
                />
              }
              label={<Typography sx={{ fontWeight: 300 }}>Alto</Typography>}
            />
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
                acordo com o <u>método escolhido</u>, podendo levar de 2 dias a
                2 meses e meio.
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
                />
              }
              label={<Typography sx={{ fontWeight: 300 }}>Baixo</Typography>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="secondary"
                  sx={{ color: "secondary.main" }}
                />
              }
              label={<Typography sx={{ fontWeight: 300 }}>Médio</Typography>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="secondary"
                  sx={{ color: "secondary.main" }}
                />
              }
              label={<Typography sx={{ fontWeight: 300 }}>Alto</Typography>}
            />
          </FormGroup>
        </ItemMenu>
        <Divider sx={{ borderColor: "#E3E3E3", marginX: 2 }} />
        <ItemMenu icon={<PieChart />} name="Tipo de dado coletado">
          <FormGroup sx={{ marginBottom: 4 }}>
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="secondary"
                  sx={{ color: "secondary.main" }}
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
                />
              }
              label={
                <Tooltip
                  arrow
                  placement="right"
                  title={
                    <Typography>
                      <b>Dados Quantitativos</b>: Referem-se a dados uteis para
                      responder perguntas do tipo <br />
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
        >
          <FormGroup
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(e: any) =>
              handleChangeSpecialistRadios(e.target.value as string)
            }
          >
            <FormControl>
              <FormLabel
                id="demo-radio-buttons-group-label"
                sx={{
                  fontWeight: 550,
                  color: "#000",
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                Há especialista disponível?
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
                sx={{ paddingX: 2 }}
              >
                <FormControlLabel
                  value="sim"
                  control={
                    <Radio
                      size="small"
                      color="secondary"
                      checked={specialistRadios === "sim"}
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
                    />
                  }
                  label="Não"
                />
              </RadioGroup>
              <Button
                onClick={() => handleChangeSpecialistRadios("")}
                endIcon={<Close />}
              >
                Limpar opções
              </Button>
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
                    marginTop: 4,
                  }}
                >
                  Quantos especialistas disponíveis?
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="1"
                  name="radio-buttons-group"
                  sx={{ paddingX: 2 }}
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
                Refere-se ao grau de fidelidade do sistema atual em relação sua
                versão final prevista.
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
                />
              }
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
                <Checkbox
                  size="small"
                  color="secondary"
                  sx={{ color: "secondary.main" }}
                />
              }
              label={
                <Tooltip
                  arrow
                  placement="right"
                  title={
                    <Typography>
                      <br />
                      <b>Fidelidade Média</b>: protótipos digitais com
                      funcionalidades limitadas. <br />
                      <br /> Exemplos: protótipos minimamente navegáveis, sejam
                      eles em implementados em código ou ferramentas, como
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
                <Checkbox
                  size="small"
                  color="secondary"
                  sx={{ color: "secondary.main" }}
                />
              }
              label={
                <Tooltip
                  arrow
                  placement="right"
                  title={
                    <Typography>
                      <br />
                      <b>Fidelidade Alta</b>: sistema com todas ou quase todas
                      as funcionalidades previstas implementadas. <br />
                      <br /> Exemplos: MVP (Produto Mínimo Viável) ou o próprio
                      sistema final.
                      <br />
                      <br />
                    </Typography>
                  }
                >
                  <Typography sx={{ fontWeight: 300 }}>Alta</Typography>
                </Tooltip>
              }
            />
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
        >
          <FormGroup sx={{ marginBottom: 4 }}>
            <FormControl>
              <FormLabel
                id="demo-radio-buttons-group-label"
                sx={{
                  fontWeight: 550,
                  color: "#000",
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                Há usuários disponíveis?
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
                sx={{ paddingX: 2 }}
              >
                <FormControlLabel
                  value="sim"
                  control={<Radio size="small" color="secondary" />}
                  label="Sim"
                />
                <FormControlLabel
                  value="nao"
                  control={<Radio size="small" color="secondary" />}
                  label="Não"
                />
                <FormControlLabel
                  value="nenhum"
                  control={<Radio size="small" color="secondary" />}
                  label="Limpar opções"
                />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel
                id="demo-radio-buttons-group-label"
                sx={{
                  fontWeight: 550,
                  color: "#000",
                  marginBottom: 1,
                  marginTop: 4,
                }}
              >
                Quantos usuários disponíveis?
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="1-5"
                name="radio-buttons-group"
                sx={{ paddingX: 2 }}
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
          </FormGroup>
        </ItemMenu>
        <Divider sx={{ borderColor: "#E3E3E3", marginX: 2 }} />
        <ItemMenu icon={<VideoChat />} name="Modalidade da Avaliação">
          <FormGroup sx={{ marginBottom: 4 }}>
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="secondary"
                  sx={{ color: "secondary.main" }}
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
