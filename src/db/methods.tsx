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
        Formulário físico ou online criado pelo avaliador e enviado aos usuários
        com o objetivo de coletar informações sobre o uso do sistema.
        <br />
        <br />
        Questionários são flexíveis e podem ser aplicados a poucos ou muitos
        participantes, inclusive a pessoas geograficamente distantes.
        <br />
        <br />
        A flexibilidade de aplicação de um questionário também se deve ao tipo
        de dado que pode ser coletado, podendo ser qualitativo ou quantitativo.
        Para obtenção de dados qualitativos, recomenda-se o uso de perguntas
        abertas, que permitem ao usuário expressar sua opinião de forma livre.
        Já para dados quantitativos, recomenda-se o uso de perguntas fechadas,
        que permitem ao usuário escolher entre opções pré-definidas.
        <br />
        <br />É considerado um método de baixo custo e de fácil aplicação. Não é
        necessário um especialista da área para a formulação das questões, mas
        para dados mais precisos sobre a usabilidade do sistema, recomenda-se
        aplicar o questionário após o uso de um sistema com nível de fidelidade
        média ou alta.
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        <li>
          Exemplo de pergunta aberta em um questionário de avaliação de
          usabilidade:
          <br />
          <Typography sx={{ paddingX: 2, color: "gray", fontStyle: "italic" }}>
            "Qual foi a sessão mais difícil de encontrar? Por que?"
            <br />
            <br />
          </Typography>
        </li>
        <li>
          Exemplo de pergunta fechada em um questionário de avaliação de
          usabilidade:
          <br />
          <Typography sx={{ paddingX: 2, color: "gray", fontStyle: "italic" }}>
            "Quão fácil foi encontrar a sessão de pagamento da compra?" <br /> (
            ) Muito fácil <br />
            ( ) Fácil <br />
            ( ) Neutro <br />
            ( ) Difícil <br /> ( ) Muito difícil
          </Typography>
        </li>
      </Typography>
    ),
    goodPractices: (
      <Typography variant="body1">
        <li>
          Devem ser cuidadosamente formulados para evitar ambiguidades, pois não
          há interação direta com o respondente para sanar dúvidas de
          interpretação;
        </li>
        <li>
          Recomenda-se realizar um teste piloto a fim de medir o tempo gasto
          pelo usuário, a clareza das perguntas, validar a ordem das questões,
          entre outros pontos a serem observados na criação de um formulário;
          <br />
        </li>
        <li>
          A quantidade ideal de perguntas deve variar de acordo com o tipo de
          pergunta, recomenda-se que questionários com perguntas abertas tenham
          menos perguntas que questionários com perguntas fechadas.
        </li>
      </Typography>
    ),

    attentionPoints: (
      <Typography variant="body1">
        <li>
          Perguntas negativas precisam de atenção especial, pois podem confundir
          o usuário, alguns pesquisadores optam por omitir esse tipo de
          pergunta, outros preferem usá-las justamente para ajudar a verificar a
          consistência das respostas dos usuários; <br />
        </li>
        <li>
          Devemos tomar cuidado para não incluirmos muitas perguntas abertas em
          um questionário, pois isso pode desmotivar os respondentes a
          completá-los.
        </li>
      </Typography>
    ),

    more: ["https://www.google.com"],
    relatedMethods: [],
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
        Avaliar a qualidade de interação do usuário com o sistema, medir
        impactos, identificar desconfortos observando o uso do produto.
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
        A técnica de entrevista é uma abordagem qualitativa de coleta de dados
        que permite explorar em profundidade as percepções, experiências e
        opiniões dos participantes sobre um determinado tema. Ela pode ser
        estruturada, semiestruturada ou não estruturada, dependendo do nível de
        flexibilidade desejado nas perguntas.
        <br />
        <br />
        A estrutura da entrevista refere-se ao roteiro de perguntas, que pode
        ser pré-definido(estruturado) ou adaptado conforme as respostas dos
        participantes(semi-estruturado). A flexibilidade da entrevista permite
        que o avaliador aprofunde-se em questões específicas, explorando
        diferentes perspectivas e experiências. Ou ainda o avaliador por optar
        por não roteirizar a entrevista.
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
        Inspeção detalhada de interface efetuada por um especialista, buscando
        por falhas na conformidade com uma lista de critérios denominados
        heurísticas.
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
        Entrevista/conversa com grupo de 6 a 12 pessoas para obtenção de dados
        qualitativos (opiniões, experiências e críticas) após a utilização do
        produto.
        <br />
        <br />
        Dentre os métodos de avaliação, o grupo de foco está definido como um
        dos mais informais, tendo apenas uma lista de assuntos que deve ser
        seguida para a conversa / entrevista com os usuários.
        <br />
        <br />
        Este método permite obter reações de forma mais espontânea. Possibilita
        a descoberta de problemas inesperados e a evidenciação de aspectos do
        projeto mais importantes para os usuários, assim como uma grande rapidez
        na obtenção de informações com um número significativo de usuários.
        <br />
        <br />
        Pode ser usado para análise competitiva, ou seja, comparando sistemas
        concorrentes ou diferentes versões do mesmo sistema, a fim de analisar
        características atrativas ou desagradáveis para o público-alvo.
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        <Typography variant="h6">
          Cenário de Exemplo: Desenvolvimento de um Aplicativo de Saúde
        </Typography>
        <p>
          Imagine que uma equipe de desenvolvimento está criando um novo
          aplicativo de saúde focado em melhorar o bem-estar dos usuários,
          oferecendo funcionalidades como monitoramento de hábitos, lembretes de
          atividade física e orientações de nutrição. A equipe quer entender
          melhor o que potenciais usuários pensam sobre o design inicial e as
          funcionalidades propostas, então decide realizar um grupo focal.
        </p>

        <Typography variant="h6">Objetivos do Grupo Focal</Typography>
        <ul>
          <li>
            A relevância das funcionalidades propostas (monitoramento de
            atividades, lembretes, dicas de nutrição).
          </li>
          <br />
          <li>A clareza e usabilidade da interface inicial.</li>
          <br />
          <li>
            Ideias e expectativas dos participantes sobre o que um aplicativo de
            saúde ideal deveria oferecer.
          </li>
          <br />
        </ul>

        <Typography variant="h6">
          Passo a Passo para Conduzir o Grupo Focal
        </Typography>
        <ol>
          <li>
            <strong>Seleção dos Participantes:</strong> A equipe seleciona entre
            6 a 8 participantes representativos do público-alvo: adultos entre
            25 e 50 anos, interessados em saúde e que usam dispositivos móveis
            regularmente.
          </li>
          <br />

          <li>
            <strong>Definição das Perguntas-Chave:</strong>
            <ul>
              <li>
                "Quais funcionalidades você acha mais úteis em um aplicativo de
                saúde?"
              </li>
              <li>"O que acha do layout desta tela inicial?"</li>
              <li>
                "Quais dificuldades você vê ao usar esse tipo de aplicativo
                diariamente?"
              </li>
              <br />
            </ul>
          </li>

          <li>
            <strong>Condução do Grupo Focal:</strong>
            <ul>
              <li>
                O moderador (facilitador) inicia a sessão, explica o objetivo e
                as regras, e incentiva todos a participarem ativamente.
              </li>
              <li>
                As perguntas são feitas uma a uma, e o moderador facilita a
                conversa, garantindo que cada participante tenha a chance de
                expressar suas opiniões.
              </li>
              <li>
                Observadores (se houver) tomam notas sobre reações não verbais,
                pontos de consenso e divergência.
              </li>
              <br />
            </ul>
          </li>

          <li>
            <strong>Registro e Análise de Dados:</strong>
            <ul>
              <li>
                Com a permissão dos participantes, a sessão é gravada para
                revisão posterior.
              </li>
              <li>
                Após o grupo focal, o moderador e os observadores analisam os
                dados coletados, destacando os principais pontos de interesse e
                feedback recorrente dos participantes.
              </li>
              <br />
            </ul>
          </li>

          <li>
            <strong>Uso do Feedback:</strong> As informações coletadas são
            usadas para ajustar o design e funcionalidades do aplicativo,
            assegurando que ele atenda às expectativas dos usuários. Por
            exemplo, se vários participantes expressarem que gostariam de um
            acompanhamento nutricional mais interativo, a equipe pode priorizar
            essa funcionalidade na próxima versão.
          </li>
        </ol>
      </Typography>
    ),
    goodPractices: (
      <Typography variant="body1">
        É importante que hajam mais pessoas além do condutor da avaliação para a
        coleta de dados e observação das interações entre os participantes, pois
        o avaliador estará focado em conduzir a conversa e pode deixar escapar
        informações importantes. <br />
        <br />
        Usar a técnica de gravação e análise pode ajudar a mitigar esse
        problema, já que a gravação permite revisar o experimento diversas
        vezes, captando dados não observados em tempo real.
      </Typography>
    ),

    attentionPoints: (
      <Typography variant="body1">
        É fundamental equilibrar os perfis dos participantes, pois a exposição
        de opiniões pessoais em grupo traz desafios a serem considerados, como a
        vergonha em expressar opiniões divergentes em meio ao grupo ou a
        influência de perfis dominantes ou manipuladores. <br />
      </Typography>
    ),

    more: [
      "https://www.researchgate.net/publication/306375261_METODOS_DE_AVALIACAO_DE_USABILIDADE_CARACTERISTICAS_E_APLICACOES",
    ],
    relatedMethods: ["gravacao_e_analise"],
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
        Um especialista coloca-se no papel de usuário ao interagir com o
        sistema, com o intuito de realizar tarefas pré definidas identificando
        possíveis falhas ou acertos nesse percurso, de modo a observar os
        trajetos cognitivos estabelecidos pelo usuário durante a utilização da
        interface
        <br />
        <br />
        É diferente de outros métodos por não verificar apenas a conformidade
        ergonômica. É uma técnica que possui como principal objetivo avaliar a
        facilidade de aprendizagem da interface pelo usuário, principalmente com
        foco na aprendizagem por meio da exploração. Esse método foi motivado
        pela preferência de muitas pessoas em “aprenderem fazendo”, em vez de
        aprenderem através de treinamentos, leitura de manuais etc.
        <br /> <br />
        Por meio deste método é possível identificar se as informações que
        constam na interface levam ao usuário a executar a tarefa de forma
        correta, ou se leva ao erro
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        <Typography variant="h6">
          Cenário Exemplo: Avaliação de um Sistema de E-commerce
        </Typography>
        <Typography variant="body1">
          Uma equipe de desenvolvimento está testando a usabilidade de um novo
          sistema de e-commerce para assegurar que os usuários consigam concluir
          uma compra sem dificuldades.
          <br />
          <br />
          <strong>Objetivo</strong>
          <br />
          Identificar possíveis obstáculos no fluxo de compra e aprimorar a
          experiência do usuário.
          <br />
          <br />
          <strong>Passo a Passo</strong>
          <br />
          <ol>
            <li>
              <strong>Definir Tarefas-Chave</strong>
              <br />
              As principais tarefas do usuário são:
              <ul>
                <li>Buscar um produto específico.</li>
                <li>Adicionar o produto ao carrinho.</li>
                <li>
                  Finalizar a compra (preenchendo dados e confirmando o
                  pagamento).
                </li>
                <br />
              </ul>
            </li>
            <li>
              <strong>Estabelecer o Perfil do Usuário-Tipo</strong>
              <br />
              Usuário com conhecimento básico de internet e pouca experiência no
              site. Isso ajuda a equipe a prever ações e dificuldades.
            </li>
            <br />
            <li>
              <strong>Realizar o Percurso Cognitivo (etapa por etapa)</strong>
              <br />
              Para cada etapa, a equipe se faz as seguintes perguntas:
              <ul>
                <li>O usuário sabe o que fazer nesta etapa?</li>
                <li>O usuário entende como fazer a ação necessária?</li>
                <li>
                  A interface oferece feedback suficiente para confirmar a ação?
                </li>
                <br />
              </ul>
            </li>
            <li>
              <strong>Exemplo de Perguntas por Tarefa:</strong>
              <ul>
                <li>
                  <strong>Buscar Produto</strong>: O campo de busca está visível
                  e é claro? Os resultados levam o usuário ao produto desejado?
                </li>
                <li>
                  <strong>Adicionar ao Carrinho</strong>: O botão de "Adicionar
                  ao Carrinho" é fácil de encontrar e intuitivo? A ação é
                  confirmada?
                </li>
                <li>
                  <strong>Finalizar Compra</strong>: O usuário encontra o botão
                  de checkout e preenche as informações com facilidade? Recebe
                  uma confirmação clara?
                </li>
                <br />
              </ul>
            </li>
            <li>
              <strong>Registro das Observações</strong>
              <br />A equipe anota problemas como botões pouco visíveis, falta
              de feedback ou confusão nos campos de preenchimento.
            </li>
            <br />
            <li>
              <strong>Análise e Melhorias</strong>
              <br />
              Com base nas observações, a equipe prioriza ajustes necessários,
              como destacar elementos importantes ou simplificar campos
              confusos.
            </li>
          </ol>
        </Typography>
      </Typography>
    ),
    goodPractices: (
      <Typography variant="body1">
        O percurso cognitivo pode ser realizado por um ou mais avaliadores. Se
        houver mais de um avaliador, todos devem realizar todas as atividades em
        conjunto <br />
      </Typography>
    ),

    attentionPoints: (
      <Typography variant="body1">
        Quanto mais próxima e fiel for a representação da interface da solução
        final, melhores serão as condições de o avaliador prever a facilidade
        que o usuário terá para aprender a realizar as tarefas em questão.
        <br />
      </Typography>
    ),

    more: [
      "https://www.researchgate.net/publication/306375261_METODOS_DE_AVALIACAO_DE_USABILIDADE_CARACTERISTICAS_E_APLICACOES",
    ],
    relatedMethods: [],
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
        Questionário aplicado ao usuário logo após o uso o sistema. O
        questionário abrange aspectos variados de um sistema como : suporte,
        treinamento, conhecimento prévio e complexidade.
        <br />
        <br />
        O SUS consiste em uma escala de 10 afirmações, cada uma avaliada em uma
        escala de 1 a 5, e gera uma pontuação entre 0 e 100 que representa a
        usabilidade percebida do sistema.
        <br />
        <br />
        Algumas vantagens do SUS incluem:
        <li>
          Simplicidade: Fácil de aplicar e de interpretar, não necessita de
          especialista.
        </li>
        <li>
          Comparabilidade: Permite comparar a usabilidade entre versões
          diferentes do mesmo sistema ou com outros sistemas, se aplicado uma
          vez a cada sistema e comparado os valores finais.
        </li>
        <li>Flexibilidade: Aplicação remota ou presencial. </li>
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        Algumas das afirmações incluídas no SUS são:
        <li>Eu acho que gostaria de usar este sistema com frequência.</li>
        <li>Eu achei o sistema desnecessariamente complexo.</li>
        <li>Eu achei o sistema fácil de usar.</li>
        <li>
          Eu precisaria da ajuda de uma pessoa técnica para usar o sistema.
        </li>
        <br />
        <br />O participante responde cada afirmação dessa com uma escala de 1 a
        5, onde 1 é discordo totalmente e 5 é concordo totalmente.
      </Typography>
    ),
    goodPractices: (
      <Typography>
        Como o SUS foi projetado originalmente em inglês, recomenda-se buscar
        por uma tradução confiável, que não altere a semântica das questões
        originais.
      </Typography>
    ),

    attentionPoints: (
      <Typography variant="body1">
        <li>
          {" "}
          O SUS não fornece detalhes específicos sobre problemas de usabilidade,
          mas uma visão geral quantitativa. Portanto, ele é mais útil quando
          usado em conjunto com métodos qualitativos, como entrevistas ou teste
          de usabilidade, que ajudam a identificar e entender os problemas
          específicos mencionados pelos usuários.
        </li>
        <li>
          Desenvolvido para aplicação com sistemas cuja nivel de fidelidade seja
          alto.
        </li>
      </Typography>
    ),

    more: [
      "https://rickvanderzwet.nl/trac/personal/export/72/liacs/hci/docs/SUS-questionaire.pdf",
      "https://dialnet.unirioja.es/servlet/articulo?codigo=8435578",
    ],
    relatedMethods: ["entrevista", "teste_de_usabilidade"],

    needANDReference: [
      {
        requirement: "objetivos_da_avaliacao",
        values: ["Usabilidade", "Comparação"],
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
        Examina as interações do usuário através de arquivos de logs gerados
        durante o uso do sistema, interferindo minimamente nas tarefas e
        preservando o contexto do trabalho.
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
        <br />O usuário utiliza o sistema e pode interagir com o avaliador
        enquanto usa, questionando e externalizando pensamentos, fazem a
        avaliação em conjunto. <br />
        <br />
        Inicialmente o designer da interface ou avaliador prescreve as tarefas
        que o entrevistado terá que percorrer, observando ações inesperadas do
        sistema, páginas que entraram por erro, entre outros problemas.
        <br />
        <br />
        Diferente de outras técnicas que irão fornecer listas longas de
        problemas a serem corrigidos, a avaliação cooperativa permite verificar
        pontualmente os problemas mais importantes com o mínimo de esforço
        possível.
        <br />
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        <Typography variant="h6">Cenário de Exemplo</Typography>
        <p>
          Imagine que você está desenvolvendo um sistema de cadastro de clientes
          para uma empresa. A interface já está parcialmente pronta, e agora é o
          momento de obter feedback dos usuários para ajustar o design e a
          usabilidade antes do lançamento.
        </p>

        <Typography variant="h6">
          Passo a Passo para a Avaliação Cooperativa
        </Typography>
        <ol>
          <li>
            <strong>Escolha dos Participantes:</strong> Selecione alguns
            usuários reais ou potenciais do sistema (por exemplo, funcionários
            da equipe de atendimento da empresa que usarão o sistema de
            cadastro).
          </li>
          <br />

          <li>
            <strong>Planejamento das Tarefas:</strong> Defina algumas tarefas
            que os usuários deverão realizar, como:
            <ul>
              <li>Cadastrar um novo cliente.</li>
              <li>Atualizar informações de um cliente já cadastrado.</li>
              <li>Buscar um cliente no sistema.</li>
            </ul>
            As tarefas devem representar cenários típicos de uso, que ajudam a
            testar os principais fluxos da interface.
          </li>
          <br />

          <li>
            <strong>Explicação do Processo:</strong> Explique aos participantes
            que eles devem verbalizar cada ação que realizam e o que estão
            pensando enquanto usam o sistema. Por exemplo, se encontrarem algo
            confuso ou fizerem uma escolha, devem explicar o motivo da decisão
            em voz alta.
          </li>
          <br />

          <li>
            <strong>Realização da Avaliação:</strong>
            <ul>
              <li>
                O designer ou avaliador acompanha o participante enquanto ele
                executa as tarefas, observando as ações e ouvindo os
                comentários.
              </li>
              <li>
                Durante a interação, o avaliador registra as ações inesperadas,
                como páginas acessadas por erro, elementos confusos na tela ou
                dificuldades para encontrar funções.
              </li>
              <li>
                O avaliador tenta evitar interromper o participante com
                perguntas, mas anota questões para serem discutidas ao final da
                tarefa.
              </li>
              <br />
            </ul>
          </li>

          <li>
            <strong>Discussão Pós-Tarefa:</strong> Após o usuário concluir as
            tarefas, o avaliador faz perguntas sobre ações específicas
            observadas, como:
            <ul>
              <li>
                "Você mencionou que teve dificuldade em encontrar o botão de
                salvar. O que acha que poderia melhorar nessa parte da
                interface?"
              </li>
              <li>
                "Quando você se confundiu com a ordem dos campos, o que você
                pensou naquele momento?"
              </li>
              <br />
            </ul>
          </li>

          <li>
            <strong>Registro dos Resultados:</strong> Documente os principais
            pontos de dificuldade e sugestões dadas pelos participantes. Esse
            feedback servirá de base para melhorias no design da interface,
            considerando os problemas mais críticos identificados.
            <br />
          </li>
        </ol>
      </Typography>
    ),
    goodPractices: (
      <Typography variant="body1">
        É indicado que o avaliador tome nota dos questionamentos e ações que o
        usuário realiza. <br />
      </Typography>
    ),

    attentionPoints: (
      <Typography variant="body1">
        Este método não é indicado para aplicações iniciais ou protótipos de
        baixa fidelidade, pois há a necessidade de que se tenha já informações
        sólidas a respeito das tarefas a serem executadas e como serão
        executadas dentro da interface
        <br />
        <br />
        O avaliador deve fazer questionamentos acerca da ação do usuário, o que
        pode ocasionar a interrupção da realização da tarefa. Dessa forma muitos
        avaliadores procuram deixar os questionamentos para o fim do teste, mas
        acabam correndo o risco de que alguns usuários apresentem problemas para
        relembrar o que tinham feito ou pensado durante a ação.
        <br />
        <br />
      </Typography>
    ),

    more: [
      "https://www.researchgate.net/publication/306375261_METODOS_DE_AVALIACAO_DE_USABILIDADE_CARACTERISTICAS_E_APLICACOES",
    ],
    relatedMethods: ["pensar_em_voz_alta"],
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
        Estudo de Campo é uma nomenclatura generalista para métodos que se
        caracterizem pela observação do usuário final em seu ambiente real. O
        objetivo é coletar dados e insight de situações reais de uso.
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
      "Tipo de Teste de Usabilidade cujo objetivo é comparar duas alternativas de design entre sistemas semelhantes, sejam eles sistemas concorrentes ou apenas versões diferentes no mesmo sistema.",
    image: teste_de_usabilidade_competitivo,
    fullDescription: (
      <Typography variant="body1">
        <br />
        Tipo de Teste de Usabilidade cujo objetivo é comparar duas alternativas
        de design entre sistemas semelhantes, sejam eles sistemas concorrentes
        ou apenas versões diferentes no mesmo sistema.
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
        Especialistas observam usuário usando o sistema e avaliam a qualidade da
        recepção da metacomunicação do designer com o usuário, identificando
        principalmente rupturas na comunicação.
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
