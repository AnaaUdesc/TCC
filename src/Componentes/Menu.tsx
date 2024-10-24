import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  SvgIcon,
  Tooltip,
  Typography,
} from "@mui/material";
import ItemMenu from "./ItemMenu";
import { CgRead } from "react-icons/cg";
import { GoGoal } from "react-icons/go";
import {
  AttachMoney,
  CalendarMonth,
  Groups,
  MenuBook,
  PanToolAlt,
  PersonalVideo,
  Toll,
  VideoChat,
} from "@mui/icons-material";

export default function Menu() {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: 2,
        flexGrow: 1,
        width: 320,
        padding: 1,
      }}
    >
      <ItemMenu
        icon={<GoGoal />}
        name="Objetivo da avaliação"
        tooltipTile={
          <>
            <Typography sx={{ fontWeight: 350 }} variant="body2">
              O objetivo de uma avaliação diz respeito ao que se deseja medir ao
              avaliar um sistema.
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
                    Compondo assim a usabilidade.
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
                <Typography sx={{ fontWeight: 300 }}>Acessibilidade</Typography>
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
            label={<Typography sx={{ fontWeight: 300 }}>Ergonomia</Typography>}
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
                    Conformidade com algum padrão pré estabelecido. Como: W3C ou
                    alguma documentação de requisitos.
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
                    Mais especificamente, validar o agrupamento de informações.
                    Exemplo: Agrupamento de itens em um menu.
                  </Typography>
                }
              >
                <Typography sx={{ fontWeight: 300 }}>
                  Validar informações
                </Typography>
              </Tooltip>
            }
          />

          {/* <FormControlLabel
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
                  <>
                    <Typography>
                      Sejam eles quantitativos ou qualitativos.
                      <Typography>
                        <br />
                        <b> Qualitativos</b>: Referem-se a dados uteis para
                        responder perguntas do tipo '<b>Por que </b>
                        os usuários não conseguiram completar a tarefa x ?'.
                        Exemplo de dado coletado: opiniões do usuário e
                        compreensão de comportamentos.
                      </Typography>
                      <Typography>
                        <br />
                        <b>Quantitativos</b>: Referem-se a dados uteis para
                        responder perguntas do tipo '<b>Quantos </b>
                        usuários não conseguiram completar a tarefa x ?' Exemplo
                        de dados coletados: quantidades, porcentagens, tempo,
                        etc.
                      </Typography>
                    </Typography>
                  </>
                }
              >
                <Typography sx={{ fontWeight: 300 }}>Coletar dados</Typography>
              </Tooltip>
            }
          /> */}
        </FormGroup>
      </ItemMenu>
      <Divider sx={{ borderColor: "#E3E3E3", marginX: 2 }} />
      <ItemMenu
        tooltipTile={
          <>
            <Typography sx={{ fontWeight: 350 }} variant="body2">
              É o custo monetário comparativo entre diferentes métodos.
              <br />
              <br />
              Por exemplo, um método que utiliza um questionário aplicado a
              cinco pessoas remotamente é mais barato do que um que exige o
              pagamento de dois especialistas por um mês. <br />
              <br />O custo também pode variar de acordo com o tempo de
              avaliação e o tamanho do sistema.
            </Typography>
          </>
        }
        icon={<AttachMoney />}
        name="Custo Relativo"
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
            <Typography sx={{ fontWeight: 350 }} variant="body2">
              É o tempo total de avaliação, incluindo planejamento, execução e
              análise de dados do método escolhido.
              <br />
              <br /> Esse tempo pode variar conforme o tamanho do sistema a ser
              avaliado e de acordo com o método escolhido, podendo levar de 2
              dias a 2 meses e meio.
            </Typography>
          </>
        }
      >
        {" "}
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
      <ItemMenu icon={<PanToolAlt />} name="Quanto vs Quali">
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
              <Typography sx={{ fontWeight: 300 }}>Quantitativos</Typography>
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
              <Typography sx={{ fontWeight: 300 }}>Qualitativos</Typography>
            }
          />
        </FormGroup>
      </ItemMenu>
      <Divider sx={{ borderColor: "#E3E3E3", marginX: 2 }} />
      <ItemMenu icon={<CgRead />} name="Disponibilidade de especialista">
        <Checkbox />
        <Checkbox />
      </ItemMenu>
      <Divider sx={{ borderColor: "#E3E3E3", marginX: 2 }} />
      <ItemMenu icon={<PersonalVideo />} name="Nível de Fidelidade do Sistema">
        <Checkbox />
        <Checkbox />
      </ItemMenu>
      <Divider sx={{ borderColor: "#E3E3E3", marginX: 2 }} />
      <ItemMenu icon={<Groups />} name="Participação do Usuário">
        <Checkbox />
        <Checkbox />
      </ItemMenu>
      <Divider sx={{ borderColor: "#E3E3E3", marginX: 2 }} />
      <ItemMenu icon={<VideoChat />} name="Modalidade">
        <Checkbox />
        <Checkbox />
      </ItemMenu>
      <Divider sx={{ borderColor: "#E3E3E3", marginX: 2 }} />
      <ItemMenu icon={<MenuBook />} name="Materiais de Apoio">
        <Checkbox />
        <Checkbox />
      </ItemMenu>
    </Box>
  );
}
