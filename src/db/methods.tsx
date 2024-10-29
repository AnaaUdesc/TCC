import { QuestionAnswer, Visibility } from "@mui/icons-material";
import PageviewIcon from "@mui/icons-material/Pageview";
import { Tooltip, Typography } from "@mui/material";
import teste_de_usabilidade from "../assets/teste_de_usabilidade.jpg";
import avaliacao_heuristica from "../assets/avaliacao_heuristica.jpg";
import grupos_focais from "../assets/grupos_focais.jpg";
export interface MethodProps {
  id: string;
  title: string;
  classificationIcons: React.ReactNode[];
  description: string;
  image: string;
  fullDescription: React.ReactNode;
  goodPractices: string[];
  attentionPoints: string[];
  more: string;
  exemples?: string[];
  relatedMethods?: string[];
  needANDReference?: {
    requirement: string;
    values: string[];
  }[];
  cantANDReference?: string[];
  needORReference?: string[];
  unNeedORReference?: string[];
  cantORReference?: string[];
}

export const methods: MethodProps[] = [
  {
    id: "teste_de_usabilidade",
    title: "Teste de Usabilidade",
    classificationIcons: [
      <Tooltip title="Método" arrow placement="top">
        <Typography variant="h6" color="#ffff" fontWeight={700}>
          M
        </Typography>
      </Tooltip>,

      <Tooltip title="Observação" arrow placement="top">
        <Visibility sx={{ color: "#ffff" }} />
      </Tooltip>,
    ],
    description:
      "Avaliar a qualidade de interação do usuário com o sistema, medir impactos, identificar desconfortos observando o uso do produto.",
    image: teste_de_usabilidade,
    fullDescription: (
      <Typography variant="body1">
        Avaliar a qualidade de interação do usuário com o sistema, medir
        impactos, identificar desconfortos observando o uso do produto.
        <br />
        <br />
        Avaliar a qualidade de interação do usuário com o sistema, medir
        impactos, identificar desconfortos..
        <br />
        <br />
        Avaliar a qualidade de interação do usuário com o sistema, medir
        impactos, identificar desconfortos observando o uso do produto.Avaliar a
        qualidade de interação do usuário com o sistema, medir impactos,
        identificar desconfortos observando o uso do produto.
      </Typography>
    ),
    goodPractices: [
      "Interaja o mínimo possível com o usuário.",
      "Estas infromaçoes estrão em tópicos 2",
      "Este é o topico 3",
    ],
    attentionPoints: [
      "Estas infromaçoes estrão em tópicos, esse é o topico 1",
      "Estas infromaçoes estrão em tópicos, esse é o topico 1",
      "Estas infromaçoes estrão em tópicos, esse é o topico 1",
      "Estas infromaçoes estrão em tópicos, esse é o topico 1",
    ],
    more: "https://www.google.com",
    needANDReference: [
      {
        requirement: "objetivos_da_avaliacao",
        values: ["Usabilidade", "Acessibilidade"],
      },
      {
        requirement: "tipo_de_dado_coletado",
        values: ["tipo_de_dado_coletado_qualitativo"],
      },
      {
        requirement: "participacao_do_usuario",
        values: ["participacao_do_usuario_sim"],
      },
    ],
    cantANDReference: [
      "objetivos_da_avaliacao_ergonomia",
      "objetivos_da_avaliacao_qualidade_conformidade",
      "objetivos_da_avaliacao_comparacao",
      "objetivos_da_avaliacao_validar_informacoes",
      "objetivos_da_avaliacao_comunicabilidade",
      "tipo_de_dado_coletado_quantitativo",
      "participacao_do_usuario_nao",
    ],
    needORReference: [
      "orcamento_relativo_medio",
      "tempo_baixo",
      "quantidade_de_usuarios_1_5",
    ],
    unNeedORReference: [
      "tempo_medio",
      "tempo_alto",
      "orcamento_relativo_alto",
      "quantidade_de_usuarios_5_10",
      "quantidade_de_usuarios_10_20",
      "quantidade_de_usuarios_20_mais",
    ],
    cantORReference: ["orcamento_relativo_baixo"],
  },

  // {
  //   id: "avaliacao_heuristica",
  //   title: "Avaliação Heurística",
  //   classificationIcons: [
  //     <Tooltip title="Método" arrow placement="top">
  //       <Typography variant="h6" color="#ffff" fontWeight={700}>
  //         M
  //       </Typography>
  //     </Tooltip>,

  //     <Tooltip title="Inspeção" arrow placement="top">
  //       <PageviewIcon sx={{ color: "#ffff" }} />
  //     </Tooltip>,
  //   ],
  //   description:
  //     "Inspeção detalhada de interface efetuada por um especialista, buscando por falhas na conformidade com uma lista de critérios denominados heurísticas.",
  //   image: avaliacao_heuristica,
  //   fullDescription: (
  //     <Typography variant="body1">
  //       Avaliar a qualidade de interação do usuário com o sistema, medir
  //       impactos, identificar desconfortos observando o uso do produto.
  //       <br />
  //       <br />
  //       Avaliar a qualidade de interação do usuário com o sistema, medir
  //       impactos, identificar desconfortos..
  //       <br />
  //       <br />
  //       Avaliar a qualidade de interação do usuário com o sistema, medir
  //       impactos, identificar desconfortos observando o uso do produto.Avaliar a
  //       qualidade de interação do usuário com o sistema, medir impactos,
  //       identificar desconfortos observando o uso do produto.
  //     </Typography>
  //   ),
  //   goodPractices: [
  //     "Interaja o mínimo possível com o usuário.",
  //     "Estas infromaçoes estrão em tópicos 2",
  //     "Este é o topico 3",
  //   ],
  //   attentionPoints: [
  //     "Estas infromaçoes estrão em tópicos, esse é o topico 1",
  //     "Estas infromaçoes estrão em tópicos, esse é o topico 1",
  //     "Estas infromaçoes estrão em tópicos, esse é o topico 1",
  //     "Estas infromaçoes estrão em tópicos, esse é o topico 1",
  //   ],
  //   more: "https://www.google.com",
  //   needANDReference: [
  //     "objetivos_da_avaliacao_usabilidade",
  //     "objetivos_da_avaliacao_ergonomia",
  //     "objetivos_da_avaliacao_qualidade_conformidade",
  //     "tipo_de_dado_coletado_qualitativo",
  //     "participacao_do_especialista_sim",
  //   ],
  //   cantANDReference: [
  //     "objetivos_da_avaliacao_acessibilidade",
  //     "objetivos_da_avaliacao_comparacao",
  //     "objetivos_da_avaliacao_validar_informacoes",
  //     "objetivos_da_avaliacao_comunicabilidade",
  //     "tipo_de_dado_coletado_quantitativo",
  //     "participacao_do_especialista_nao",
  //   ],
  //   needORReference: [
  //     "orcamento_relativo_baixo",
  //     "tempo_baixo",
  //     "quantidade_de_especialistas_2_4",
  //   ],
  //   unNeedORReference: [
  //     "orcamento_relativo_medio",
  //     "orcamento_relativo_alto",
  //     "tempo_medio",
  //     "tempo_alto",
  //     "quantidade_de_especialistas_5_mais",
  //   ],
  //   cantORReference: ["quantidade_de_especialistas_1"],
  // },
  // {
  //   id: "grupos_focais",
  //   title: "Grupos Focais",
  //   classificationIcons: [
  //     <Tooltip title="Método" arrow placement="top">
  //       <Typography variant="h6" color="#ffff" fontWeight={700}>
  //         M
  //       </Typography>
  //     </Tooltip>,

  //     <Tooltip title="Investigação" arrow placement="top">
  //       <QuestionAnswer sx={{ color: "#ffff" }} />
  //     </Tooltip>,
  //   ],
  //   description:
  //     "Entrevista/conversa com grupo de 6 a 12 pessoas para obtenção de dados qualitativos (opiniões, experiências e críticas) após a utilização do produto.",
  //   image: grupos_focais,
  //   fullDescription: (
  //     <Typography variant="body1">
  //       Avaliar a qualidade de interação do usuário com o sistema, medir
  //       impactos, identificar desconfortos observando o uso do produto.
  //       <br />
  //       <br />
  //       Avaliar a qualidade de interação do usuário com o sistema, medir
  //       impactos, identificar desconfortos..
  //       <br />
  //       <br />
  //       Avaliar a qualidade de interação do usuário com o sistema, medir
  //       impactos, identificar desconfortos observando o uso do produto.Avaliar a
  //       qualidade de interação do usuário com o sistema, medir impactos,
  //       identificar desconfortos observando o uso do produto.
  //     </Typography>
  //   ),
  //   goodPractices: [
  //     "Interaja o mínimo possível com o usuário.",
  //     "Estas infromaçoes estrão em tópicos 2",
  //     "Este é o topico 3",
  //   ],
  //   attentionPoints: [
  //     "Estas infromaçoes estrão em tópicos, esse é o topico 1",
  //     "Estas infromaçoes estrão em tópicos, esse é o topico 1",
  //     "Estas infromaçoes estrão em tópicos, esse é o topico 1",
  //     "Estas infromaçoes estrão em tópicos, esse é o topico 1",
  //   ],
  //   more: "https://www.google.com",
  //   needANDReference: [
  //     "objetivos_da_avaliacao_usabilidade",
  //     "objetivos_da_avaliacao_ergonomia",
  //     "objetivos_da_avaliacao_comparacao",
  //     "tipo_de_dado_coletado_qualitativo",
  //     "participacao_do_usuario_sim",
  //     "modalidade_presencial",
  //   ],
  //   cantANDReference: [
  //     "objetivos_da_avaliacao_acessibilidade",
  //     "objetivos_da_avaliacao_qualidade_conformidade",
  //     "objetivos_da_avaliacao_validar_informacoes",
  //     "objetivos_da_avaliacao_comunicabilidade",
  //     "tipo_de_dado_coletado_quantitativo",
  //     "participacao_do_usuario_nao",
  //     "modalidade_remota",
  //   ],
  //   needORReference: [
  //     "orcamento_relativo_baixo",
  //     "tempo_baixo",
  //     "quantidade_de_usuarios_5_10",
  //   ],
  //   unNeedORReference: [
  //     "orcamento_relativo_medio",
  //     "orcamento_relativo_alto",
  //     "tempo_medio",
  //     "tempo_alto",
  //     "quantidade_de_usuarios_10_20",
  //     "quantidade_de_usuarios_20_mais",
  //   ],
  //   cantORReference: ["quantidade_de_usuarios_1_5"],
  // },
];
