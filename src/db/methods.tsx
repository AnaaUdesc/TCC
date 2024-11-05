import { QuestionAnswer, Visibility } from "@mui/icons-material";
import PageviewIcon from "@mui/icons-material/Pageview";
import { Tooltip, Typography } from "@mui/material";
import teste_de_usabilidade from "../assets/teste_de_usabilidade.jpg";
import avaliacao_heuristica from "../assets/avaliacao_heuristica.jpg";
import grupos_focais from "../assets/grupos_focais.jpg";
import sus from "../assets/sus.jpg";
import percurso_cognitivo from "../assets/percurso_cognitivo.jpg";
import analise_de_logs from "../assets/analise_de_logs.jpg";
import questionarios from "../assets/questionarios.jpg";
import avaliacao_cooperativa from "../assets/avaliacao_cooperativa.jpg";
import avaliacao_semiotica from "../assets/avaliacao_semiotica.jpg";
import estudo_de_campo from "../assets/estudo_de_campo.jpg";
import eye_tracking from "../assets/eye_tracking.jpg";
// import card_sorting from "../assets/card_sorting.jpg";
import entrevista from "../assets/entrevista.jpg";
import avaliacao_de_comunicabilidade from "../assets/avaliacao_de_comunicabilidade.jpg";
import avaliacao_baseada_em_documento from "../assets/avaliacao_baseada_em_documento.jpg";
import teste_de_usabilidade_competitivo from "../assets/teste_de_usabilidade_competitivo.jpg";
import { CONSTANTES } from "../constantes";

export interface MethodProps {
  id: string;
  title: string;
  classificationIcons: React.ReactNode[];
  description: string;
  image: string;
  fullDescription: React.ReactNode;
  goodPractices: React.ReactNode;
  attentionPoints: React.ReactNode;
  more: string[];
  exemples?: React.ReactNode;
  relatedMethods?: string[];
  needANDReference?: {
    requirement: string;
    values: string[];
  }[];
  canceledRequirements?: string[];
  cantANDReference?: string[];
  needORReference?: {
    requirement: string;
    values: string[];
  }[];
  unNeedORReference?: {
    requirement: string;
    values: string[];
  }[];
}

export const methods: MethodProps[] = [
  {
    id: "questionarios",
    title: "Questionários",
    classificationIcons: [
      <Tooltip title="Método" arrow placement="top">
        <Typography variant="h6" color="#ffff" fontWeight={700}>
          M
        </Typography>
      </Tooltip>,

      <Tooltip title="Investigação" arrow placement="top">
        <QuestionAnswer sx={{ color: "#ffff" }} />
      </Tooltip>,
    ],
    description:
      "Formulário físico ou online criado pelo avaliador e encaminhado aos usuários com objetivo de coletar informações sobre o uso do sistema.",
    image: questionarios,
    fullDescription: (
      <Typography variant="body1">
        <br />
        <br />
        <br />
        <br />
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        Descrição de um exemplo de Utilização/aplicação do método.
      </Typography>
    ),
    goodPractices: (
      <Typography variant="body1">
        Estas serão as informações do tópicos 1. <br />
        Estas serão as informações do tópicos 2. <br />
        Este é o tópico 3.
      </Typography>
    ),

    attentionPoints: (
      <Typography variant="body1">
        Estas informações estarão em tópicos, esse é o tópico 1<br />
        Estas informações estarão em tópicos, esse é o tópico 2<br />
        Estas informações estarão em tópicos, esse é o tópico 3<br />
        Estas informações estarão em tópicos, esse é o tópico 4<br />
      </Typography>
    ),

    more: ["https://www.google.com"],
    relatedMethods: ["", ""],
    needANDReference: [
      {
        requirement: "objetivos_da_avaliacao",
        values: ["Usabilidade", "Ergonomia"],
      },
    ],
    needORReference: [
      { requirement: "orcamento_relativo", values: ["baixo"] },
      { requirement: "tempo", values: ["baixo"] },
      { requirement: CONSTANTES.QUANTIDADE_DE_USUARIOS, values: ["6-10"] },
      {
        requirement: "quantidade_de_especialistas",
        values: ["nenhum"],
      },
      {
        requirement: "nivel_de_fidelidade_do_sistema",
        values: ["media"],
      },
    ],
    unNeedORReference: [
      { requirement: "orcamento_relativo", values: ["medio", "alto"] },
      { requirement: "tempo", values: ["alto", "medio"] },
      { requirement: "nivel_de_fidelidade_do_sistema", values: ["alta"] },
      {
        requirement: CONSTANTES.QUANTIDADE_DE_USUARIOS,
        values: ["11-20", "21+"],
      },
    ],
    canceledRequirements: ["modalidade_da_avaliacao", "tipo_de_dado_coletado"],
  },
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
        <br />
        <br />
        <br />
        <br />
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        Descrição de um exemplo de Utilização/aplicação do método.
      </Typography>
    ),
    goodPractices: (
      <Typography variant="body1">
        Estas serão as informações do tópicos 1. <br />
        Estas serão as informações do tópicos 2. <br />
        Este é o tópico 3.
      </Typography>
    ),

    attentionPoints: (
      <Typography variant="body1">
        Estas informações estarão em tópicos, esse é o tópico 1<br />
        Estas informações estarão em tópicos, esse é o tópico 2<br />
        Estas informações estarão em tópicos, esse é o tópico 3<br />
        Estas informações estarão em tópicos, esse é o tópico 4<br />
      </Typography>
    ),

    more: ["https://www.google.com"],
    relatedMethods: ["pensar_em_voz_alta", "gravacao_e_analise"],
    needANDReference: [
      {
        requirement: "objetivos_da_avaliacao",
        values: ["Usabilidade", "Acessibilidade"],
      },
      {
        requirement: "tipo_de_dado_coletado",
        values: ["Qualitativo"],
      },
    ],
    needORReference: [
      {
        requirement: "orcamento_relativo",
        values: ["medio"],
      },
      {
        requirement: "tempo",
        values: ["medio"],
      },
      {
        requirement: CONSTANTES.QUANTIDADE_DE_USUARIOS,
        values: ["6-10"],
      },
      {
        requirement: "nivel_de_fidelidade_do_sistema",
        values: ["baixa", "media", "alta"],
      },
      {
        requirement: "quantidade_de_especialistas",
        values: ["nenhum"],
      },
    ],
    unNeedORReference: [
      {
        requirement: "orcamento_relativo",
        values: ["alto"],
      },
      {
        requirement: "tempo",
        values: ["alto"],
      },
      {
        requirement: CONSTANTES.QUANTIDADE_DE_USUARIOS,
        values: ["11-20", "21+"],
      },
    ],
    canceledRequirements: ["modalidade_da_avaliacao"],
  },
  {
    id: "entrevista",
    title: "Entrevistas",
    classificationIcons: [
      <Tooltip title="Método" arrow placement="top">
        <Typography variant="h6" color="#ffff" fontWeight={700}>
          M
        </Typography>
      </Tooltip>,

      <Tooltip title="Investigação" arrow placement="top">
        <QuestionAnswer sx={{ color: "#ffff" }} />
      </Tooltip>,
    ],
    description:
      "Conversa guiada entre avaliador e usuário com objetivo de obter informações qualitativas sobre o sistema pós uso do sistema. ",
    image: entrevista,
    fullDescription: (
      <Typography variant="body1">
        <br />
        <br />
        <br />
        <br />
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        Descrição de um exemplo de Utilização/aplicação do método.
      </Typography>
    ),
    goodPractices: (
      <Typography variant="body1">
        Estas serão as informações do tópicos 1. <br />
        Estas serão as informações do tópicos 2. <br />
        Este é o tópico 3.
      </Typography>
    ),

    attentionPoints: (
      <Typography variant="body1">
        Estas informações estarão em tópicos, esse é o tópico 1<br />
        Estas informações estarão em tópicos, esse é o tópico 2<br />
        Estas informações estarão em tópicos, esse é o tópico 3<br />
        Estas informações estarão em tópicos, esse é o tópico 4<br />
      </Typography>
    ),

    more: ["https://www.google.com"],
    relatedMethods: ["gravacao_e_analise"],
    needANDReference: [
      {
        requirement: "objetivos_da_avaliacao",
        values: ["Usabilidade", "Ergonomia"],
      },
      {
        requirement: "tipo_de_dado_coletado",
        values: ["Qualitativo"],
      },
    ],
    needORReference: [
      // {
      //   requirement: "orcamento_relativo",
      //   values: ["medio"],
      // },
      {
        requirement: "tempo",
        values: ["medio"],
      },
      {
        requirement: CONSTANTES.QUANTIDADE_DE_USUARIOS,
        values: ["6-10"],
      },
      {
        requirement: "quantidade_de_especialistas",
        values: ["nenhum"],
      },
    ],
    unNeedORReference: [
      // {
      //   requirement: "orcamento_relativo",
      //   values: ["alto"],
      // },
      {
        requirement: "tempo",
        values: ["alto"],
      },
      {
        requirement: CONSTANTES.QUANTIDADE_DE_USUARIOS,
        values: ["11-20", "21+"],
      },
    ],
    canceledRequirements: [
      "modalidade_da_avaliacao",
      "nivel_de_fidelidade_do_sistema",
    ],
  },
  {
    id: "avaliacao_heuristica",
    title: "Avaliação Heurística",
    classificationIcons: [
      <Tooltip title="Método" arrow placement="top">
        <Typography variant="h6" color="#ffff" fontWeight={700}>
          M
        </Typography>
      </Tooltip>,

      <Tooltip title="Inspeção" arrow placement="top">
        <PageviewIcon sx={{ color: "#ffff" }} />
      </Tooltip>,
    ],
    description:
      "Inspeção detalhada de interface efetuada por um especialista, buscando por falhas na conformidade com uma lista de critérios denominados heurísticas.",
    image: avaliacao_heuristica,
    fullDescription: (
      <Typography variant="body1">
        <br />
        <br />
        <br />
        <br />
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        Descrição de um exemplo de Utilização/aplicação do método.
      </Typography>
    ),
    goodPractices: (
      <Typography variant="body1">
        Estas serão as informações do tópicos 1. <br />
        Estas serão as informações do tópicos 2. <br />
        Este é o tópico 3.
      </Typography>
    ),

    attentionPoints: (
      <Typography variant="body1">
        Estas informações estarão em tópicos, esse é o tópico 1<br />
        Estas informações estarão em tópicos, esse é o tópico 2<br />
        Estas informações estarão em tópicos, esse é o tópico 3<br />
        Estas informações estarão em tópicos, esse é o tópico 4<br />
      </Typography>
    ),

    more: ["https://www.google.com"],
    relatedMethods: ["", ""],
    needANDReference: [
      {
        requirement: "objetivos_da_avaliacao",
        values: ["Usabilidade", "Ergonomia", "Qualidade / Conformidade"],
      },
      { requirement: "tipo_de_dado_coletado", values: ["Qualitativo"] },
    ],
    needORReference: [
      { requirement: "orcamento_relativo", values: ["baixo"] },
      { requirement: "tempo", values: ["baixo"] },
      { requirement: "quantidade_de_especialistas", values: ["2_4"] },
      {
        requirement: "quantidade_de_usuarios",
        values: ["nenhum"],
      },
    ],
    unNeedORReference: [
      { requirement: "orcamento_relativo", values: ["medio", "alto"] },
      { requirement: "tempo", values: ["medio", "alto"] },
      { requirement: "quantidade_de_especialistas", values: ["5+"] },
    ],
    canceledRequirements: [
      "modalidade_da_avaliacao",
      "nivel_de_fidelidade_do_sistema",
    ],
  },

  {
    id: "grupos_focais",
    title: "Grupos Focais",
    classificationIcons: [
      <Tooltip title="Método" arrow placement="top">
        <Typography variant="h6" color="#ffff" fontWeight={700}>
          M
        </Typography>
      </Tooltip>,

      <Tooltip title="Investigação" arrow placement="top">
        <QuestionAnswer sx={{ color: "#ffff" }} />
      </Tooltip>,
    ],
    description:
      "Entrevista/conversa com grupo de 6 a 12 pessoas para obtenção de dados qualitativos (opiniões, experiências e críticas) após a utilização do produto.",
    image: grupos_focais,
    fullDescription: (
      <Typography variant="body1">
        <br />
        <br />
        <br />
        <br />
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        Descrição de um exemplo de Utilização/aplicação do método.
      </Typography>
    ),
    goodPractices: (
      <Typography variant="body1">
        Estas serão as informações do tópicos 1. <br />
        Estas serão as informações do tópicos 2. <br />
        Este é o tópico 3.
      </Typography>
    ),

    attentionPoints: (
      <Typography variant="body1">
        Estas informações estarão em tópicos, esse é o tópico 1<br />
        Estas informações estarão em tópicos, esse é o tópico 2<br />
        Estas informações estarão em tópicos, esse é o tópico 3<br />
        Estas informações estarão em tópicos, esse é o tópico 4<br />
      </Typography>
    ),

    more: ["https://www.google.com"],
    relatedMethods: [],
    needANDReference: [
      {
        requirement: "objetivos_da_avaliacao",
        values: ["Usabilidade", "Ergonomia", "Comparação"],
      },
      { requirement: "tipo_de_dado_coletado", values: ["Qualitativo"] },
      { requirement: "modalidade_da_avaliacao", values: ["Presencial"] },
    ],
    needORReference: [
      { requirement: "orcamento_relativo", values: ["baixo"] },
      { requirement: "tempo", values: ["baixo"] },
      { requirement: CONSTANTES.QUANTIDADE_DE_USUARIOS, values: ["6-10"] },
      {
        requirement: "quantidade_de_especialistas",
        values: ["nenhum"],
      },
    ],
    unNeedORReference: [
      { requirement: "orcamento_relativo", values: ["medio", "alto"] },
      { requirement: "tempo", values: ["medio", "alto"] },
      {
        requirement: CONSTANTES.QUANTIDADE_DE_USUARIOS,
        values: ["11-20", "21+"],
      },
    ],
    canceledRequirements: ["nivel_de_fidelidade_do_sistema"],
  },
  {
    id: "percurso_cognitivo",
    title: "Percurso Cognitivo",
    classificationIcons: [
      <Tooltip title="Método" arrow placement="top">
        <Typography variant="h6" color="#ffff" fontWeight={700}>
          M
        </Typography>
      </Tooltip>,

      <Tooltip title="Inspeção" arrow placement="top">
        <PageviewIcon sx={{ color: "#ffff" }} />
      </Tooltip>,
    ],
    description:
      "Um especialista coloca-se no papel de usuário ao interagir com o sistema, com o intuito de realizar tarefas pré definidas identificando possíveis falhas ou acertos nesse percurso.",
    image: percurso_cognitivo,
    fullDescription: (
      <Typography variant="body1">
        <br />
        <br />
        <br />
        <br />
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        Descrição de um exemplo de Utilização/aplicação do método.
      </Typography>
    ),
    goodPractices: (
      <Typography variant="body1">
        Estas serão as informações do tópicos 1. <br />
        Estas serão as informações do tópicos 2. <br />
        Este é o tópico 3.
      </Typography>
    ),

    attentionPoints: (
      <Typography variant="body1">
        Estas informações estarão em tópicos, esse é o tópico 1<br />
        Estas informações estarão em tópicos, esse é o tópico 2<br />
        Estas informações estarão em tópicos, esse é o tópico 3<br />
        Estas informações estarão em tópicos, esse é o tópico 4<br />
      </Typography>
    ),

    more: ["https://www.google.com"],
    relatedMethods: ["", ""],
    needANDReference: [
      {
        requirement: "objetivos_da_avaliacao",
        values: ["Usabilidade"],
      },
      {
        requirement: "tipo_de_dado_coletado",
        values: ["Qualitativo"],
      },
    ],
    needORReference: [
      { requirement: "orcamento_relativo", values: ["baixo"] },
      { requirement: "tempo", values: ["baixo"] },
      { requirement: CONSTANTES.QUANTIDADE_DE_USUARIOS, values: ["nenhum"] },
      {
        requirement: "quantidade_de_especialistas",
        values: ["1"],
      },
    ],
    unNeedORReference: [
      { requirement: "orcamento_relativo", values: ["medio", "alto"] },
      { requirement: "tempo", values: ["medio", "alto"] },
      {
        requirement: "quantidade_de_especialistas",
        values: ["1", "2-4", "5+"],
      },
    ],
    canceledRequirements: [
      "nivel_de_fidelidade_do_sistema",
      "modalidade_da_avaliacao",
    ],
  },
  {
    id: "sus",
    title: "SUS - System Usability Scale",
    classificationIcons: [
      <Tooltip title="Método" arrow placement="top">
        <Typography variant="h6" color="#ffff" fontWeight={700}>
          M
        </Typography>
      </Tooltip>,

      <Tooltip title="Investigação" arrow placement="top">
        <QuestionAnswer sx={{ color: "#ffff" }} />
      </Tooltip>,
    ],
    description:
      "Questionário aplicado ao usuário logo após o uso o sistema. O questionário abrange aspectos variados de um sistema como : suporte, treinamento, conhecimento prévio e complexidade.",
    image: sus,
    fullDescription: (
      <Typography variant="body1">
        <br />
        <br />
        <br />
        <br />
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        Descrição de um exemplo de Utilização/aplicação do método.
      </Typography>
    ),
    goodPractices: (
      <Typography variant="body1">
        Estas serão as informações do tópicos 1. <br />
        Estas serão as informações do tópicos 2. <br />
        Este é o tópico 3.
      </Typography>
    ),

    attentionPoints: (
      <Typography variant="body1">
        Estas informações estarão em tópicos, esse é o tópico 1<br />
        Estas informações estarão em tópicos, esse é o tópico 2<br />
        Estas informações estarão em tópicos, esse é o tópico 3<br />
        Estas informações estarão em tópicos, esse é o tópico 4<br />
      </Typography>
    ),

    more: [
      "https://d1wqtxts1xzle7.cloudfront.net/31452632/sus-libre.pdf?1392436529=&response-content-disposition=inline%3B+filename%3DSus_a_quick_and_dirty_usability_scale.pdf&Expires=1730216135&Signature=UvVabRNBtXiVJ2QcbYdkX5Wa9CDg3EpgSnj4VbOA82e10v1SO5JBemN9c4qlxryR1x7JvjHh1PiB0J3nsD9nsETgw07Z3CyHm5qLbXvqnk~XNj9xUwvXL~gmOYNFyhIg8eMCG91-MjKqKucPajST66VabKas1WFWBIbwleU2dXYhr2EEuW8m7L6v73~rPGu-rN~5~VFbLNkfyRZTq25opmTP4vm~~Df4uz47Kb4fdBHasRSragHFPhk33fMA4EvhXxxLl2Y55DoRU0N069Zt3~96vTZt7L-mkRyV-EidboK5VLGfqzBulZpdyANrfR3dV-LMgXMEeozigBXsbOJt-Q__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA",
      "https://dialnet.unirioja.es/servlet/articulo?codigo=8435578",
    ],
    relatedMethods: ["", ""],

    needANDReference: [
      {
        requirement: "objetivos_da_avaliacao",
        values: ["Usabilidade"],
      },
    ],
    needORReference: [
      { requirement: "orcamento_relativo", values: ["baixo"] },
      { requirement: "tempo", values: ["baixo"] },
      { requirement: "nivel_de_fidelidade_do_sistema", values: ["alta"] },
      { requirement: CONSTANTES.QUANTIDADE_DE_USUARIOS, values: ["6-10"] },
      {
        requirement: "quantidade_de_especialistas",
        values: ["nenhum"],
      },
      {
        requirement: "tipo_de_dado_coletado",
        values: ["Quantitativo"],
      },
    ],
    unNeedORReference: [
      { requirement: "orcamento_relativo", values: ["medio", "alto"] },
      { requirement: "tempo", values: ["medio", "alto"] },
      {
        requirement: CONSTANTES.QUANTIDADE_DE_USUARIOS,
        values: ["11-20", "21+"],
      },
    ],
    canceledRequirements: ["modalidade_da_avaliacao"],
  },
  {
    id: "analise_de_logs",
    title: "Análise de Logs",
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
      "Examina as interações do usuário através de arquivos de logs gerados durante o uso do sistema, interferindo minimamente nas tarefas e preservando o contexto do trabalho.",
    image: analise_de_logs,
    fullDescription: (
      <Typography variant="body1">
        <br />
        <br />
        <br />
        <br />
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        Descrição de um exemplo de Utilização/aplicação do método.
      </Typography>
    ),
    goodPractices: (
      <Typography variant="body1">
        Estas serão as informações do tópicos 1. <br />
        Estas serão as informações do tópicos 2. <br />
        Este é o tópico 3.
      </Typography>
    ),

    attentionPoints: (
      <Typography variant="body1">
        Estas informações estarão em tópicos, esse é o tópico 1<br />
        Estas informações estarão em tópicos, esse é o tópico 2<br />
        Estas informações estarão em tópicos, esse é o tópico 3<br />
        Estas informações estarão em tópicos, esse é o tópico 4<br />
      </Typography>
    ),

    more: ["https://www.google.com"],
    relatedMethods: ["", ""],

    needANDReference: [
      {
        requirement: "objetivos_da_avaliacao",
        values: ["Usabilidade"],
      },
      {
        requirement: "tipo_de_dado_coletado",
        values: ["Quantitativo"],
      },
      {
        requirement: "modalidade_da_avaliacao",
        values: ["Remota"],
      },
    ],
    needORReference: [
      { requirement: "orcamento_relativo", values: ["baixo"] },
      { requirement: "tempo", values: ["medio"] },
      { requirement: CONSTANTES.QUANTIDADE_DE_USUARIOS, values: ["11-20"] },
      {
        requirement: "quantidade_de_especialistas",
        values: ["nenhum"],
      },
      {
        requirement: "nivel_de_fidelidade_do_sistema",
        values: ["alta"],
      },
    ],
    unNeedORReference: [
      { requirement: "orcamento_relativo", values: ["medio", "alto"] },
      { requirement: "tempo", values: ["alto"] },
      {
        requirement: CONSTANTES.QUANTIDADE_DE_USUARIOS,
        values: ["21+"],
      },
    ],
  },

  {
    id: "avaliacao_cooperativa",
    title: "Avaliação Cooperativa",
    classificationIcons: [
      <Tooltip title="Método" arrow placement="top">
        <Typography variant="h6" color="#ffff" fontWeight={700}>
          M
        </Typography>
      </Tooltip>,

      <Tooltip title="Investigação" arrow placement="top">
        <QuestionAnswer sx={{ color: "#ffff" }} />
      </Tooltip>,
    ],
    description:
      "O usuário utiliza o sistema e pode interagir com o avaliador enquanto usa, questionando e externalizando pensamentos, fazem a avaliação em conjunto.",
    image: avaliacao_cooperativa,
    fullDescription: (
      <Typography variant="body1">
        <br />
        <br />
        <br />
        <br />
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        Descrição de um exemplo de Utilização/aplicação do método.
      </Typography>
    ),
    goodPractices: (
      <Typography variant="body1">
        Estas serão as informações do tópicos 1. <br />
        Estas serão as informações do tópicos 2. <br />
        Este é o tópico 3.
      </Typography>
    ),

    attentionPoints: (
      <Typography variant="body1">
        Estas informações estarão em tópicos, esse é o tópico 1<br />
        Estas informações estarão em tópicos, esse é o tópico 2<br />
        Estas informações estarão em tópicos, esse é o tópico 3<br />
        Estas informações estarão em tópicos, esse é o tópico 4<br />
      </Typography>
    ),

    more: ["https://www.google.com"],
    relatedMethods: ["", ""],
    needANDReference: [
      {
        requirement: "objetivos_da_avaliacao",
        values: ["Usabilidade", "Ergonomia"],
      },
      {
        requirement: "tipo_de_dado_coletado",
        values: ["Qualitativo"],
      },
    ],
    needORReference: [
      { requirement: "orcamento_relativo", values: ["baixo"] },
      { requirement: "tempo", values: ["baixo"] },
      { requirement: CONSTANTES.QUANTIDADE_DE_USUARIOS, values: ["1-5"] },
      {
        requirement: "quantidade_de_especialistas",
        values: ["nenhum"],
      },
      {
        requirement: "nivel_de_fidelidade_do_sistema",
        values: ["media"],
      },
    ],
    unNeedORReference: [
      { requirement: "orcamento_relativo", values: ["medio", "alto"] },
      { requirement: "tempo", values: ["alto", "medio"] },
      { requirement: "nivel_de_fidelidade_do_sistema", values: ["alta"] },
      {
        requirement: CONSTANTES.QUANTIDADE_DE_USUARIOS,
        values: ["6-10", "11-20", "21+"],
      },
    ],
    canceledRequirements: ["modalidade_da_avaliacao"],
  },
  {
    id: "avaliacao_baseada_em_documento",
    title: "Avaliação Baseada em Documento",
    classificationIcons: [
      <Tooltip title="Método" arrow placement="top">
        <Typography variant="h6" color="#ffff" fontWeight={700}>
          M
        </Typography>
      </Tooltip>,

      <Tooltip title="Inspeção" arrow placement="top">
        <PageviewIcon sx={{ color: "#ffff" }} />
      </Tooltip>,
    ],
    description:
      "Especialista inspeciona a interface e verifica sua conformidade com algum documento pré redigido ou padrões estabelecidos.",
    image: avaliacao_baseada_em_documento,
    fullDescription: (
      <Typography variant="body1">
        <br />
        Esse tipo de avaliação permite que o especialista inspecione a interface
        e verifique a conformidade com algum documento pré redigido ou padrões
        estabelecidos, como : um guia de estilo, documento de requisitos do
        software, padrões de acessibilidade, W3C, etc.
        <br />
        <br />
        <br />
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        Descrição de um exemplo de Utilização/aplicação do método.
      </Typography>
    ),
    goodPractices: (
      <Typography variant="body1">
        Estas serão as informações do tópicos 1. <br />
        Estas serão as informações do tópicos 2. <br />
        Este é o tópico 3.
      </Typography>
    ),

    attentionPoints: (
      <Typography variant="body1">
        Estas informações estarão em tópicos, esse é o tópico 1<br />
        Estas informações estarão em tópicos, esse é o tópico 2<br />
        Estas informações estarão em tópicos, esse é o tópico 3<br />
        Estas informações estarão em tópicos, esse é o tópico 4<br />
      </Typography>
    ),

    more: ["https://www.google.com"],
    relatedMethods: ["", ""],
    needANDReference: [
      {
        requirement: "objetivos_da_avaliacao",
        values: ["Qualidade / Conformidade", "Acessibilidade"],
      },
      {
        requirement: "tipo_de_dado_coletado",
        values: ["Qualitativo"],
      },
    ],
    needORReference: [
      { requirement: "orcamento_relativo", values: ["baixo"] },
      { requirement: "tempo", values: ["baixo"] },
      { requirement: "quantidade_de_especialistas", values: ["1"] },
      {
        requirement: CONSTANTES.QUANTIDADE_DE_USUARIOS,
        values: ["nenhum"],
      },
      {
        requirement: "nivel_de_fidelidade_do_sistema",
        values: ["alta"],
      },
    ],
    unNeedORReference: [
      { requirement: "orcamento_relativo", values: ["medio", "alto"] },
      { requirement: "tempo", values: ["alto", "medio"] },
      {
        requirement: "quantidade_de_especialistas",
        values: ["2-4", "5+"],
      },
    ],
    canceledRequirements: ["modalidade_da_avaliacao"],
  },
  {
    id: "inspecao_semiotica",
    title: "Inspeção Semiótica",
    classificationIcons: [
      <Tooltip title="Método" arrow placement="top">
        <Typography variant="h6" color="#ffff" fontWeight={700}>
          M
        </Typography>
      </Tooltip>,

      <Tooltip title="Inspeção" arrow placement="top">
        <PageviewIcon sx={{ color: "#ffff" }} />
      </Tooltip>,
    ],
    description:
      "Avalia a comunicabilidade de uma solução. O objetivo é avaliar a qualidade da emissão da metacomunicação do designer codificada na interface.",
    image: avaliacao_semiotica,
    fullDescription: (
      <Typography variant="body1">
        <br />
        avalia a comunicabilidade de uma solução. O objetivo da inspeção
        semiótica é avaliar a qualidade da emissão da metacomunicação do
        designer codificada na interface.
        <br />
        <br />
        <br />
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        Descrição de um exemplo de Utilização/aplicação do método.
      </Typography>
    ),
    goodPractices: (
      <Typography variant="body1">
        Estas serão as informações do tópicos 1. <br />
        Estas serão as informações do tópicos 2. <br />
        Este é o tópico 3.
      </Typography>
    ),

    attentionPoints: (
      <Typography variant="body1">
        Estas informações estarão em tópicos, esse é o tópico 1<br />
        Estas informações estarão em tópicos, esse é o tópico 2<br />
        Estas informações estarão em tópicos, esse é o tópico 3<br />
        Estas informações estarão em tópicos, esse é o tópico 4<br />
      </Typography>
    ),

    more: ["https://www.google.com"],
    relatedMethods: ["", ""],
    needANDReference: [
      {
        requirement: "objetivos_da_avaliacao",
        values: ["Comunicabilidade"],
      },
      {
        requirement: "tipo_de_dado_coletado",
        values: ["Qualitativo"],
      },
    ],
    needORReference: [
      { requirement: "orcamento_relativo", values: ["medio"] },
      { requirement: "tempo", values: ["medio"] },
      { requirement: "quantidade_de_especialistas", values: ["1"] },
      {
        requirement: CONSTANTES.QUANTIDADE_DE_USUARIOS,
        values: ["nenhum"],
      },
      {
        requirement: "nivel_de_fidelidade_do_sistema",
        values: ["alta"],
      },
    ],
    unNeedORReference: [
      { requirement: "orcamento_relativo", values: ["alto"] },
      { requirement: "tempo", values: ["alto"] },
      {
        requirement: "quantidade_de_especialistas",
        values: ["2-4", "5+"],
      },
    ],
    canceledRequirements: ["modalidade_da_avaliacao"],
  },
  {
    id: "estudo_de_campo",
    title: "Estudo de Campo",
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
      "Estudo de Campo é uma nomenclatura generalista para métodos que se caracterizem pela observação do usuário final em seu ambiente real. O objetivo é coletar dados e insight de situações reais de uso. ",
    image: estudo_de_campo,
    fullDescription: (
      <Typography variant="body1">
        <br />
        avalia a comunicabilidade de uma solução. O objetivo da inspeção
        semiótica é avaliar a qualidade da emissão da metacomunicação do
        designer codificada na interface.
        <br />
        <br />
        <br />
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        Descrição de um exemplo de Utilização/aplicação do método.
      </Typography>
    ),
    goodPractices: (
      <Typography variant="body1">
        Estas serão as informações do tópicos 1. <br />
        Estas serão as informações do tópicos 2. <br />
        Este é o tópico 3.
      </Typography>
    ),

    attentionPoints: (
      <Typography variant="body1">
        Estas informações estarão em tópicos, esse é o tópico 1<br />
        Estas informações estarão em tópicos, esse é o tópico 2<br />
        Estas informações estarão em tópicos, esse é o tópico 3<br />
        Estas informações estarão em tópicos, esse é o tópico 4<br />
      </Typography>
    ),

    more: ["https://www.google.com"],
    relatedMethods: ["", ""],
    needANDReference: [
      {
        requirement: "objetivos_da_avaliacao",
        values: ["Ergonomia"],
      },
      {
        requirement: "tipo_de_dado_coletado",
        values: ["Qualitativo"],
      },
      { requirement: "modalidade_da_avaliacao", values: ["Presencial"] },
    ],
    needORReference: [
      { requirement: "orcamento_relativo", values: ["medio"] },
      { requirement: "tempo", values: ["baixo"] },
      { requirement: "quantidade_de_especialistas", values: ["nenhum"] },
      {
        requirement: CONSTANTES.QUANTIDADE_DE_USUARIOS,
        values: ["1-5"],
      },
      {
        requirement: "nivel_de_fidelidade_do_sistema",
        values: ["alta"],
      },
    ],
    unNeedORReference: [
      { requirement: "orcamento_relativo", values: ["alto"] },
      { requirement: "tempo", values: ["medio", "alto"] },
      {
        requirement: CONSTANTES.QUANTIDADE_DE_USUARIOS,
        values: ["6-10", "11-20", "21+"],
      },
    ],
  },
  {
    id: "eye_tracking",
    title: "Eye Tracking",
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
      " Método que  rastreia o movimento e aspecto dos olhos do usuário ao interagir com a interface, promovendo dados sobre o comportamento implícito da usabilidade e experiência do usuário. Usado com auxílio de hardware especializado. ",
    image: eye_tracking,
    fullDescription: (
      <Typography variant="body1">
        <br />
        Método usado com auxílio de hardware especializado, que rastreia o
        movimento e aspecto dos olhos do usuário ao interagir com a interface,
        promovendo dados sobre o comportamento implícito da usabilidade e
        experiência do usuário
        <br />
        <br />
        <br />
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        Descrição de um exemplo de Utilização/aplicação do método.
      </Typography>
    ),
    goodPractices: (
      <Typography variant="body1">
        Estas serão as informações do tópicos 1. <br />
        Estas serão as informações do tópicos 2. <br />
        Este é o tópico 3.
      </Typography>
    ),

    attentionPoints: (
      <Typography variant="body1">
        Estas informações estarão em tópicos, esse é o tópico 1<br />
        Estas informações estarão em tópicos, esse é o tópico 2<br />
        Estas informações estarão em tópicos, esse é o tópico 3<br />
        Estas informações estarão em tópicos, esse é o tópico 4<br />
      </Typography>
    ),

    more: ["https://www.google.com"],
    relatedMethods: ["", ""],
    needANDReference: [
      {
        requirement: "objetivos_da_avaliacao",
        values: ["Usabilidade"],
      },
      {
        requirement: "tipo_de_dado_coletado",
        values: ["Quantitativo"],
      },
      { requirement: "modalidade_da_avaliacao", values: ["Presencial"] },
    ],
    needORReference: [
      { requirement: "orcamento_relativo", values: ["alto"] },
      { requirement: "tempo", values: ["alto"] },
      { requirement: "quantidade_de_especialistas", values: ["1"] },
      {
        requirement: CONSTANTES.QUANTIDADE_DE_USUARIOS,
        values: ["11-20"],
      },
      {
        requirement: "nivel_de_fidelidade_do_sistema",
        values: ["alta"],
      },
    ],
    unNeedORReference: [
      {
        requirement: CONSTANTES.QUANTIDADE_DE_USUARIOS,
        values: ["21+"],
      },
      {
        requirement: "quantidade_de_especialistas",
        values: ["2-4", "5+"],
      },
    ],
  },
  // { Incompleto
  //   id: "card_sorting",
  //   title: "Card Sorting - Classificação de Cartões",
  //   classificationIcons: [
  //     <Tooltip title="Método" arrow placement="top">
  //       <Typography variant="h6" color="#ffff" fontWeight={700}>
  //         M
  //       </Typography>
  //     </Tooltip>,

  //     <Tooltip title="Observação" arrow placement="top">
  //       <Visibility sx={{ color: "#ffff" }} />
  //     </Tooltip>,
  //   ],
  //   description:
  //     "Usuários ordenam informações dadas a eles em cartões, o objetivo é compreender a estrutura de informação pensada pelos usuários, como a organização de itens de um menu por exemplo, ou a  lógica de inserção de novos itens em uma organização lógica pré estabelecida. Na fase de avaliação utiliza-se para análise comparativa, a fim de validar aquilo que já existe no sistema.",
  //   image: card_sorting,
  //   fullDescription: (
  //     <Typography variant="body1">
  //       <br />
  //       Método usado com auxílio de hardware especializado, que rastreia o
  //       movimento e aspecto dos olhos do usuário ao interagir com a interface,
  //       promovendo dados sobre o comportamento implícito da usabilidade e
  //       experiência do usuário
  //       <br />
  //       <br />
  //       <br />
  //     </Typography>
  //   ),
  //   exemples: (
  //     <Typography variant="body1">
  //       Descrição de um exemplo de Utilização/aplicação do método.
  //     </Typography>
  //   ),
  //   goodPractices: (
  //     <Typography variant="body1">
  //       Estas serão as informações do tópicos 1. <br />
  //       Estas serão as informações do tópicos 2. <br />
  //       Este é o tópico 3.
  //     </Typography>
  //   ),

  //   attentionPoints: (
  //     <Typography variant="body1">
  //       Estas informações estarão em tópicos, esse é o tópico 1<br />
  //       Estas informações estarão em tópicos, esse é o tópico 2<br />
  //       Estas informações estarão em tópicos, esse é o tópico 3<br />
  //       Estas informações estarão em tópicos, esse é o tópico 4<br />
  //     </Typography>
  //   ),

  //   more: ["https://www.google.com"],
  //   relatedMethods: ["", ""],
  //   needANDReference: [
  //     {
  //       requirement: "objetivos_da_avaliacao",
  //       values: ["Validar Informações"],
  //     },
  //     {
  //       requirement: "tipo_de_dado_coletado",
  //       values: ["Quantitativo"],
  //     },
  //     { requirement: "modalidade_da_avaliacao", values: ["Presencial"] },
  //   ],
  //   needORReference: [
  //     { requirement: "orcamento_relativo", values: ["alto"] },
  //     { requirement: "tempo", values: ["alto"] },
  //     { requirement: "quantidade_de_especialistas", values: ["1"] },
  //     {
  //       requirement: CONSTANTES.QUANTIDADE_DE_USUARIOS,
  //       values: ["11-20"],
  //     },
  //     {
  //       requirement: "nivel_de_fidelidade_do_sistema",
  //       values: ["alta"],
  //     },
  //   ],
  //   unNeedORReference: [
  //     {
  //       requirement: CONSTANTES.QUANTIDADE_DE_USUARIOS,
  //       values: ["21+"],
  //     },
  //     {
  //       requirement: "quantidade_de_especialistas",
  //       values: ["2-4", "5+"],
  //     },
  //   ],
  // },

  {
    id: "teste_de_usabilidade_competitivo",
    title: "Teste de Usabilidade Competitivo",
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
      "Tipo de Teste de Usabilidade cujo objetivo é comparar boas alternativas de design entre sistemas semelhantes, sejam eles sistemas concorrentes ou apenas versões diferentes no mesmo sistema.",
    image: teste_de_usabilidade_competitivo,
    fullDescription: (
      <Typography variant="body1">
        <br />
        <br />
        <br />
        <br />
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        Descrição de um exemplo de Utilização/aplicação do método.
      </Typography>
    ),
    goodPractices: (
      <Typography variant="body1">
        Estas serão as informações do tópicos 1. <br />
        Estas serão as informações do tópicos 2. <br />
        Este é o tópico 3.
      </Typography>
    ),

    attentionPoints: (
      <Typography variant="body1">
        Estas informações estarão em tópicos, esse é o tópico 1<br />
        Estas informações estarão em tópicos, esse é o tópico 2<br />
        Estas informações estarão em tópicos, esse é o tópico 3<br />
        Estas informações estarão em tópicos, esse é o tópico 4<br />
      </Typography>
    ),

    more: ["https://www.google.com"],
    relatedMethods: ["pensar_em_voz_alta", "gravacao_e_analise"],
    needANDReference: [
      {
        requirement: "objetivos_da_avaliacao",
        values: ["Usabilidade", "Comparação"],
      },
      {
        requirement: "tipo_de_dado_coletado",
        values: ["Qualitativo"],
      },
    ],
    needORReference: [
      {
        requirement: "orcamento_relativo",
        values: ["medio"],
      },
      {
        requirement: "tempo",
        values: ["medio"],
      },
      {
        requirement: CONSTANTES.QUANTIDADE_DE_USUARIOS,
        values: ["6-10"],
      },
      {
        requirement: "nivel_de_fidelidade_do_sistema",
        values: ["baixa", "media", "alta"],
      },
      {
        requirement: "quantidade_de_especialistas",
        values: ["nenhum"],
      },
    ],
    unNeedORReference: [
      {
        requirement: "orcamento_relativo",
        values: ["alto"],
      },
      {
        requirement: "tempo",
        values: ["alto"],
      },
      {
        requirement: CONSTANTES.QUANTIDADE_DE_USUARIOS,
        values: ["11-20", "21+"],
      },
    ],
    canceledRequirements: ["modalidade_da_avaliacao"],
  },

  {
    id: "avaliacao_de_comunicabilidade",
    title: "Avaliação de Comunicabilidade",
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
      "Especialistas observam usuário usando o sistema e avaliam a qualidade da recepção da metacomunicação do designer com o usuário, identificando principalmente rupturas na comunicação. ",
    image: avaliacao_de_comunicabilidade,
    fullDescription: (
      <Typography variant="body1">
        <br />
        avalia a comunicabilidade de uma solução. O objetivo da inspeção
        semiótica é avaliar a qualidade da emissão da metacomunicação do
        designer codificada na interface.
        <br />
        <br />
        <br />
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        Descrição de um exemplo de Utilização/aplicação do método.
      </Typography>
    ),
    goodPractices: (
      <Typography variant="body1">
        Estas serão as informações do tópicos 1. <br />
        Estas serão as informações do tópicos 2. <br />
        Este é o tópico 3.
      </Typography>
    ),

    attentionPoints: (
      <Typography variant="body1">
        Estas informações estarão em tópicos, esse é o tópico 1<br />
        Estas informações estarão em tópicos, esse é o tópico 2<br />
        Estas informações estarão em tópicos, esse é o tópico 3<br />
        Estas informações estarão em tópicos, esse é o tópico 4<br />
      </Typography>
    ),

    more: ["https://www.google.com"],
    relatedMethods: ["gravacao_e_analise"],
    needANDReference: [
      {
        requirement: "objetivos_da_avaliacao",
        values: ["Comunicabilidade"],
      },
      {
        requirement: "tipo_de_dado_coletado",
        values: ["Qualitativo"],
      },
      { requirement: "modalidade_da_avaliacao", values: ["Presencial"] },
    ],
    needORReference: [
      { requirement: "orcamento_relativo", values: ["medio"] },
      { requirement: "tempo", values: ["medio"] },
      { requirement: "quantidade_de_especialistas", values: ["1"] },
      {
        requirement: CONSTANTES.QUANTIDADE_DE_USUARIOS,
        values: ["6-10"],
      },
      {
        requirement: "nivel_de_fidelidade_do_sistema",
        values: ["alta"],
      },
    ],
    unNeedORReference: [
      { requirement: "orcamento_relativo", values: ["alto"] },
      { requirement: "tempo", values: ["alto"] },
      {
        requirement: "quantidade_de_especialistas",
        values: ["2-4", "5+"],
      },
      {
        requirement: CONSTANTES.QUANTIDADE_DE_USUARIOS,
        values: ["11-20", "21+"],
      },
    ],
  },
];
