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
  classifications?: string[];
  description: string;
  image: string;
  fullDescription: React.ReactNode;
  goodPractices?: React.ReactNode;
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
    classifications: ["Investigação"],
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
        <br />
        <li>
          Recomenda-se realizar um teste piloto a fim de medir o tempo gasto
          pelo usuário, a clareza das perguntas, validar a ordem das questões,
          entre outros pontos a serem observados na criação de um formulário;
          <br />
        </li>
        <br />
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
        <br />
        <li>
          Devemos tomar cuidado para não incluirmos muitas perguntas abertas em
          um questionário, pois isso pode desmotivar os respondentes a
          completá-los.
        </li>
      </Typography>
    ),

    more: [
      "https://leanpub.com/ihc-ux",
      "https://www.researchgate.net/profile/Marco-Winckler-3/publication/228816116_Avaliacao_de_usabilidade_de_sites_Web/links/02bfe510a614de7879000000/Avaliacao-de-usabilidade-de-sites-Web.pdf",
    ],
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
    classifications: ["Observação"],
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
        Teste usado para avaliar a qualidade de interação do usuário com o
        sistema, medir impactos, identificar desconfortos observando o uso do
        produto.
        <br />
        <br />
        Para realizar o teste, um grupo de usuários é convidado a realizar um
        conjunto pré estabelecido de tarefas usando o sistema num ambiente
        controlado.
        <br />
        <br />
        Durante as experiências de uso observadas, são registrados vários dados
        sobre o desempenho dos participantes na realização das tarefas e suas
        opiniões e sentimentos decorrentes de suas experiências de uso.
        Posteriormente, as dificuldades percebidas transformam-se em melhorias
        no sistema.
        <br />
        <br />
        A sessão de teste pode ser remota ou presencial.
        <br />
        <br />
        O teste pode ser realizado em um sistemas de nível de fidelidade baixo,
        médio ou alto.
        <br />
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        <b>Cenário: </b> Uma loja virtual quer melhorar sua página de checkout
        para reduzir o abandono de carrinho.
        <br />
        <br />
        Objetivo do Teste:
        <ul>
          <li>
            Avaliar se os usuários conseguem finalizar uma compra facilmente;
          </li>
          <li>Identificar barreiras no fluxo;</li>
          <li>Medir o tempo necessário para concluir a tarefa.</li>
        </ul>
        Preparação:
        <ul>
          <li>Convidar 5 participantes representando o público-alvo;</li>
          <li>
            Criar um cenário: "Imagine que você está comprando um presente e
            precisa finalizar a compra rapidamente."
          </li>
          <li>Estipular tarefas claras para serem realizadas.</li>
        </ul>
        Execução:
        <ul>
          <li>
            Os usuários são observados enquanto navegam e tentam concluir a
            compra;
          </li>
          <li>
            O avaliador coleta dados sobre dificuldades enfrentadas, tempo de
            conclusão e comentários do participante;
          </li>
          <li>
            Nesta etapa pode-se utilizar a técnica de Pensar em Voz Alta e/ou
            Gravação e Análise;
          </li>
          <li>
            Depois do uso do produto pode-se aplicar um questionário ou
            entrevista indagando o usuário sobre a interação com o produto.
          </li>
        </ul>
        Resultado:
        <ul>
          <li>
            Um participante teve dificuldade em encontrar o botão "Finalizar
            Compra";
          </li>
          <li>
            Dois mencionaram que o campo de cupom de desconto era confuso.
          </li>
        </ul>
        Ação:
        <ul>
          <li>Redesenhar o botão para maior visibilidade;</li>
          <li>Melhorar as instruções no campo de cupom.</li>
        </ul>
      </Typography>
    ),
    goodPractices: (
      <Typography variant="body1">
        <li>
          O avaliador moderador do teste deve interagir o mínimo possível com o
          participante.
        </li>
        <br />
        <li>
          Não deve-se sobrecarregar os participantes com tarefas excessivas.
        </li>
        <br />
        <li>
          Ao convidar os participantes, deve-se deixar claro que, no teste de
          usabilidade, o objeto da avaliação é a interface e não o participante.
        </li>
        <br />
        <li>
          Recomenda-se apresentar ao participante, no início do teste, o Termo
          de Consentimento Livre e Esclarecido, mesmo que de forma simplificada,
          pois trata sobre a confidencialidade dos dados, entre outros pontos
          importantes de uma pesquisa. Disponível em:{" "}
          <a
            href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gov.br%2Febserh%2Fpt-br%2Fhospitais-universitarios%2Fregiao-nordeste%2Fhupes-ufba%2Fensino-e-pesquisa%2Fpesquisa-e-inovacao-tecnologica%2Fsubmissao-de-projetos-1%2Ftcle.doc&psig=AOvVaw1YNWk0ZpMGSNEcw0J6-FsR&ust=1732466041736000&source=images&cd=vfe&opi=89978449&ved=0CAQQn5wMahcKEwiImOemmfOJAxUAAAAAHQAAAAAQBA"
            target="_blank"
          >
            Termo de Consentimento.
          </a>
        </li>
        <br />
        <li>
          Recomenda-se realizar um teste piloto antes do início dos testes com
          usuários do público alvo, este teste tem por objetivo verificar se as
          tarefas estão claras e quanto tempo em média dura o teste todo. Assim,
          o roteiro de tarefas pode ser ajustado conforme necessário.
        </li>
      </Typography>
    ),

    attentionPoints: (
      <Typography variant="body1">
        <br />
        <li>
          Se o nível de fidelidade do sistema usado for de baixa ou média
          fidelidade é importante prestar atenção na distinção entre problemas
          inerentes à baixa fidelidade do protótipo e questões de usabilidade.
        </li>
        <br />
      </Typography>
    ),

    more: [
      "https://www.nngroup.com/articles/usability-testing-101/",
      "https://d1wqtxts1xzle7.cloudfront.net/68609415/MTODOS_DE_AVALIAO_DE_USABILIDADE_CARACTE20210804-9499-1ppz8h9.pdf?1628125973=&response-content-disposition=inline%3B+filename%3DMetodos_De_Avaliacao_De_Usabilidade_Cara.pdf&Expires=1732382846&Signature=ZC8Njbg-JPd5jLOrMyJZvponvdfl-qA8dxsfn~PT6rjuaWSYN9DgLdjY4m8l-eBoDQ2nT7-jfyjST5KS6caS-Y~o17tPB9Nacmx9u4AvPoZlr0VKoxdDIPjaxT-KkzVCswENkvW4LBz4sxPRIiwcHDvWM~Sb~MLbokoTSbhvVVHGSUKYjbJK96Uo4sE2mo0U3-86hfLoISOU4Uu7pS-lhkzzTDiHy4erJtNuQaBwa~~~x3i5nzh1YQuG4~eiFlzfxP~Qjq48DDMf1cI8B1GshB8wFE-BNMMVwLHDZVF1vj1E7-QOy68MeW8G413uS77U91sweUJlf6QknaEiWxM9qQ__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA",
      "https://leanpub.com/ihc-ux",
    ],
    relatedMethods: [
      "pensar_em_voz_alta",
      "gravacao_e_analise",
      "prototipacao_em_baixa_fidelidade",
      "entrevista",
      "questionarios",
      "sus",
    ],
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
    classifications: ["Investigação"],
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
        Conversa guiada entre avaliador e usuário com objetivo de obter
        informações qualitativas sobre o sistema pós uso do sistema.
        <br />
        <br />
        A entrevista é uma abordagem qualitativa de coleta de dados que permite
        explorar em profundidade as percepções, experiências e opiniões dos
        participantes sobre o uso do produto, após usa-lo. Ela pode ser
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
        <br />
        As entrevistas também podem ser realizadas presencialmente ou de
        remotamente.
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        <b>Cenário:</b> Após o usuário testar um sistema de gerenciamento de
        tarefas, o objetivo é entender sua percepção sobre a interface, a
        facilidade de navegação e a eficiência ao realizar tarefas.
        <ul>
          <b>Preparação:</b>
          <li>
            <b>Objetivo da Entrevista:</b> Avaliar como o usuário percebeu a
            interface do sistema, sua facilidade de navegação e a eficiência ao
            realizar tarefas.
          </li>
          <li>
            <b>Roteiro de Perguntas:</b>
            <ul>
              <li>
                "Houve algum momento em que você sentiu dificuldade em entender
                como prosseguir?"
              </li>
              <li>
                "Existe algo que você mudaria no sistema para melhorar sua
                experiência?"
              </li>
            </ul>
          </li>
          <li>
            <b>Teste Piloto:</b> Realizar uma entrevista piloto para garantir
            que as perguntas estão claras, verificar o tempo médio da entrevista
            e ajustar a ordem das perguntas, se necessário.
          </li>
        </ul>
        <br />
        <b>Execução do Teste:</b>
        <ul>
          <li>
            <b>Convidar os Participantes:</b> O avaliador convida 5-10
            participantes para realizar a tarefa de gerenciar tarefas no
            sistema.
          </li>
          <li>
            <b>Realização das Perguntas:</b> Durante a entrevista, o avaliador
            faz as perguntas estruturadas e também segue perguntas adicionais
            com base nas respostas dos participantes.
          </li>
        </ul>
        <br />
        <b>Resultados Esperados:</b>
        <ul>
          <li>
            <b>Análise de Dificuldades:</b> O participante pode relatar
            dificuldades, como "não sabia onde clicar para adicionar uma
            tarefa".
          </li>
          <li>
            <b>Feedback para Melhoria:</b> O participante pode sugerir
            melhorias, como "seria bom se as opções principais estivessem mais
            destacadas".
          </li>
        </ul>
        <br />
        <b>Conclusão do Exemplo:</b>
        <ul>
          <li>
            <b>Insight:</b> A dificuldade em encontrar a opção de adicionar
            tarefas indicaria uma área crítica de melhoria.
          </li>
          <li>
            <b>Recomendação:</b> Tornar as opções de criação de tarefas mais
            visíveis na interface.
          </li>
        </ul>
      </Typography>
    ),
    goodPractices: (
      <Typography variant="body1">
        Informe os participantes sobre o propósito da entrevista, e mantenha uma
        abordagem amigável e acolhedora. <br />
        <br />
        Recomenda-se apresentar ao participante, no início da entrevista, o
        Termo de Consentimento Livre e Esclarecido, mesmo que de forma
        simplificada, pois trata sobre a confidencialidade dos dados, entre
        outros pontos importantes de uma pesquisa. Disponível em:{" "}
        <a
          href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gov.br%2Febserh%2Fpt-br%2Fhospitais-universitarios%2Fregiao-nordeste%2Fhupes-ufba%2Fensino-e-pesquisa%2Fpesquisa-e-inovacao-tecnologica%2Fsubmissao-de-projetos-1%2Ftcle.doc&psig=AOvVaw1YNWk0ZpMGSNEcw0J6-FsR&ust=1732466041736000&source=images&cd=vfe&opi=89978449&ved=0CAQQn5wMahcKEwiImOemmfOJAxUAAAAAHQAAAAAQBA"
          target="_blank"
        >
          Termo de Consentimento;
        </a>
        <br />
        <br />
        Utilize questões que incentivem os participantes a compartilhar suas
        perspectivas e experiências detalhadas, evitando respostas de "sim" ou
        "não".
        <br />
        <br />
        Usar a técnica de gravação e análise pode ajudar a mitigar o problema da
        atenção divida do avaliador entre prestar atenção ao participante e
        anotar suas percepções e respostas, já que a gravação permite revisar as
        falas diversas vezes, captando dados não observados em tempo real.
      </Typography>
    ),

    attentionPoints: (
      <Typography variant="body1">
        O entrevistador deve evitar influenciar as respostas dos entrevistados
        com a formulação das perguntas, expressões faciais, gestos ou entonação
        de voz.
        <br />
        <br />
        Entrevistas coletam dados relatados, não observados, e enfrentam as
        seguintes limitações:
        <ul>
          <li>
            <b>Memória falha:</b> Os participantes podem esquecer detalhes,
            especialmente de eventos distantes.
          </li>
          <li>
            <b>Detalhes ausentes:</b> Sem saber o que é relevante, podem omitir
            informações importantes.
          </li>
          <li>
            <b>Viés de desejabilidade social:</b> As pessoas podem ajustar
            respostas para parecerem melhores ou mais aceitáveis socialmente.
          </li>
        </ul>
        <br />
      </Typography>
    ),

    more: [
      "https://leanpub.com/ihc-ux",
      "https://www.nngroup.com/articles/user-interviews/",
    ],
    relatedMethods: [
      "gravacao_e_analise",
      "teste_de_usabilidade",
      "teste_de_usabilidade_competitivo",
      "estudo_de_campo",
    ],
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
    classifications: ["Inspeção"],
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
        Inspeção detalhada de interface efetuada por um especialista, buscando
        por falhas na conformidade com uma lista de critérios denominados
        heurísticas, que descrevem características desejáveis da interação e da
        interface.
        <br />
        <br />
        Conhecidos como heurísticas de Nielsen essas diretrizes são incluem
        tópicos sobre : Consistência e padronização, prevenção de erros,
        feedback do sistema, entre outros.
        <br />
        <br />
        Pode ser realizado de forma remota ou presencial pelo avaliador
        especialista.
        <br />
        <br />
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        <li>
          <b>Cenário: </b> Três avaliadores especialistas foram contratados para
          avaliar a um site de comércio eletrônico.
          <ol>
            <li>
              Os avaliadores notaram uma violação da heurística de consistência
              e padrões de Nielsen, onde os botões de "Adicionar ao Carrinho"
              tinham cores diferentes nas páginas de produtos e no carrinho de
              compras.
            </li>
            <br />
            <li>
              Isso pode causar confusão no usuário, dificultando a navegação.
              <ol>
                <li>
                  Localização: Página de produto e página do carrinho de
                  compras.
                </li>
                <li>
                  Classificação: Dois Classificaram como Grande. Um do
                  especialistas classificou como Catastrófico.
                </li>
              </ol>
            </li>
            <br />
            <li>
              Na reunião final entre os avaliadores, chegaram à conclusão de que
              a consistência nas cores dos botões é essencial para a usabilidade
              e recomendam a unificação da cor e que o grau de gravidade é
              apenas Grande mesmo, pois afeta a clareza da interação, mas não
              impede o funcionamento do sistema.
            </li>
            <br />
          </ol>
        </li>
      </Typography>
    ),

    attentionPoints: (
      <Typography variant="body1">
        <li>Recomenda-se a participação entre três e cinco especialistas.</li>
        <br />
        <li>
          Não deve-se realizar sessões longas, pois o desempenho do avaliador
          diminui muito com o passar do tempo, e ele deixa de produzir dados de
          qualidade.
        </li>
      </Typography>
    ),

    more: [
      "https://leanpub.com/ihc-ux",
      "https://dl.acm.org/doi/abs/10.1145/97243.97281",
      "https://www.ingenieriasimple.com/usabilidad/HeuristicEvaluation.pdf",
      "https://dl.acm.org/doi/abs/10.1145/142750.142834",
      "https://www.researchgate.net/profile/Marco-Winckler-3/publication/228816116_Avaliacao_de_usabilidade_de_sites_Web/links/02bfe510a614de7879000000/Avaliacao-de-usabilidade-de-sites-Web.pdf",
    ],
    relatedMethods: [],
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
    classifications: ["Investigação"],
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
      "https://sistemascolaborativos.uniriotec.br/wp-content/uploads/sites/18/2019/06/SC-cap23-metodologia.pdf",
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
    classifications: ["Inspeção"],
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
    classifications: ["Investigação"],
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
    classifications: ["Observação"],
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
        Não exige a participação do avaliador durante o teste e guarda todas as
        ações do usuário, o que é de difícil aquisição em outras técnicas.
        <br />
        <br />
        Atualmente existem ferramentas que auxiliam na captura e análise destes
        logs, onde podem identificar padrões de comportamento, o caminho
        percorrido pelos usuários, tempo das ações, analisar as palavras-chaves
        informadas pelos usuários às ferramentas de busca, e erros de
        solicitações.
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        <b>Contexto: </b>
        Uma equipe de pesquisa deseja avaliar a eficiência de um novo recurso em
        uma ferramenta de edição colaborativa:{" "}
        <b>"Sugestões Inteligentes de Texto"</b>. O objetivo é entender como os
        usuários interagem com o recurso em um ambiente controlado.
        <br />
        <br />
        <b>Setup do Estudo:</b>
        <br />
        <ol>
          <li>
            <b>Cenário Controlado:</b>
            <br />
            - Convide 10 participantes para realizar tarefas pré-definidas em um
            laboratório, como criar e editar um documento em grupo.
            <br />
            - Instrua os participantes a utilizar as "Sugestões Inteligentes de
            Texto" quando relevante.
            <br />
          </li>
          <br />
          <li>
            <b>Configuração dos Logs:</b>
            <br />
            - Registre eventos específicos, como:
            <br />
            <ul>
              <li>
                A quantidade de vezes que o recurso de sugestão é ativado.
              </li>
              <li>Quantas sugestões são aceitas, rejeitadas ou ignoradas.</li>
              <li>
                Tempo médio entre a aparição de uma sugestão e a ação do
                usuário.
              </li>
              <li>
                Sequência de interações (ex.: alternância entre edição manual e
                uso da sugestão).
              </li>
            </ul>
          </li>
          <br />
          <li>
            <b>Coleta de Dados:</b>
            <br />
            Todos os dados de interação são registrados por meio de logs
            configurados no software, complementados com gravação de tela para
            validação posterior.
            <br />
          </li>
        </ol>
        <br />
        <b>Análise dos Logs:</b>
        <br />
        <ul>
          <li>
            <b>Quantitativa:</b>
            <br />
            - 60% das sugestões foram aceitas.
            <br />
            - Em média, os usuários levaram 4 segundos para decidir aceitar ou
            rejeitar uma sugestão.
            <br />
            - O recurso foi ativado 15 vezes por tarefa, em média.
            <br />
          </li>
          <br />
          <li>
            <b>Qualitativa:</b>
            <br />
            - Observando a sequência de eventos, nota-se que os usuários
            frequentemente editam manualmente após aceitar uma sugestão,
            indicando ajustes finos.
            <br />
            - Combinar com comentários dos participantes revela que algumas
            sugestões são úteis, mas falta personalização em contextos
            específicos.
            <br />
          </li>
        </ul>
        <br />
        <b>Resultados e Ações:</b>
        <br />
        <ul>
          <li>
            Ajustar o algoritmo de sugestão para oferecer opções mais
            personalizadas com base no contexto.
          </li>
          <li>
            Melhorar a interface para permitir a edição direta da sugestão antes
            de inseri-la no texto.
          </li>
        </ul>
      </Typography>
    ),
    goodPractices: (
      <Typography variant="body1">
        <br />
        <li>
          Quanto mais participantes na avaliação, mais precisos serão os dados
          gerados.
        </li>
        <br />
      </Typography>
    ),

    attentionPoints: (
      <Typography variant="body1">
        <li>
          Arquivos de logs não contém informação que permitem responder com
          certeza se o usuário encontrou a informação que procurava. Por isso,
          recomenda-se utiliza-lo junto com outros métodos capazes de coletar
          esse tipo de informação, como questionário e entrevista.
        </li>

        <br />
        <br />
        <li>
          Informe os usuários e obtenha consentimento para coleta de dados,
          respeitando regulamentos como a LGPD.
        </li>

        <br />
      </Typography>
    ),

    more: [
      "https://www.researchgate.net/profile/Marco-Winckler-3/publication/228816116_Avaliacao_de_usabilidade_de_sites_Web/links/02bfe510a614de7879000000/Avaliacao-de-usabilidade-de-sites-Web.pdf",
      "https://www.teses.usp.br/teses/disponiveis/100/100131/tde-06032013-161410/publico/MarcusCerratoDissertacaoCorrigida.pdf",
      "https://www.nngroup.com/articles/search-log-analysis/",
    ],
    relatedMethods: ["gravacao_e_analise", "entrevista", "questionarios"],

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
    classifications: ["Investigação"],
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
    classifications: ["Inspeção"],
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
    classifications: ["Inspeção"],
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
        Avalia a comunicabilidade de uma solução. O objetivo da inspeção
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
        <li>
          Se houver mais de um avaliador, eles devem trabalhar em conjunto em
          todas as atividades.
        </li>
        <br />
        <br />
        <li>
          Caso o sistema avaliado possua mais de um perfil de usuário, cada
          avaliador pode ficar responsável por inspecionar a interface sob o
          ponto de vista de um dos perfis.
        </li>
      </Typography>
    ),

    attentionPoints: (
      <Typography variant="body1">
        <li>
          O método exige experiência do avaliador em semiologia e engenharia
          semiótica.
        </li>
        <br />
        <br />
        <br />
      </Typography>
    ),

    more: ["https://leanpub.com/ihc-ux"],
    relatedMethods: [],
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
    classifications: ["Observação"],
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

    more: ["https://www.nngroup.com/articles/field-studies/"],
    relatedMethods: [],
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
    classifications: ["Observação"],
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
    classifications: ["Observação"],
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
      "Tipo de Teste de Usabilidade cujo objetivo é comparar sistemas semelhantes, sejam eles sistemas concorrentes ou apenas versões diferentes no mesmo sistema.",
    image: teste_de_usabilidade_competitivo,
    fullDescription: (
      <Typography variant="body1">
        <br />
        Tipo de Teste de Usabilidade cujo objetivo é comparar sistemas
        semelhantes, sejam eles sistemas concorrentes ou apenas versões
        diferentes no mesmo sistema.
        <br />
        <br />
        Para realizar o teste, um grupo de usuários é convidado a realizar um
        conjunto pré estabelecido de tarefas usando os dois sistemas em
        sequência num ambiente controlado.
        <br />
        <br />
        Foque em tarefas que podem ser concluídas em todos os produtos
        comparados, bem como em tarefas em que os produtos oferecem diferentes
        abordagens para informações, funcionalidade ou design.
        <br />
        <br /> A sessão de teste pode ser remota ou presencial.
        <br />
        <br />
        O teste pode ser realizado em um sistemas de nível de fidelidade baixo,
        médio ou alto.
        <br />
        <br />
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        <b>Cenário:</b> <br />
        Você está desenvolvendo um sistema de sorteio de letras para jogos como
        Stop. Um concorrente também oferece uma ferramenta similar. O objetivo é
        comparar a usabilidade entre o seu sistema e o do concorrente para ver
        qual oferece a melhor experiência ao usuário. <br />
        <br />
        <b>Objetivo do Teste:</b> <br />
        Comparar os dois sistemas em termos de rapidez, facilidade de uso e
        satisfação do usuário ao realizar o sorteio de letras. <br />
        <br />
        <b>Preparação:</b>
        <ul>
          <li>Convidar 6 participantes representando jogadores de Stop.</li>
          <li>
            Definir uma tarefa: "Sorteie 3 letras para o jogo, sem personalizar
            configurações."
          </li>
        </ul>
        <b>Execução:</b>
        <ul>
          <li>
            Os participantes interagem com ambos os sistemas, realizando a
            tarefa de sorteio.
          </li>
          <li>
            Dados coletados: <br />
            - Tempo para completar o sorteio. <br />
            - Número de cliques. <br />
            - Erros cometidos. <br />- Feedback verbal.
          </li>
        </ul>
        <b>Resultados:</b>
        <ul>
          <li>
            <b>Seu Sistema:</b> Conclusão média em 15 segundos, fácil acesso ao
            botão de sorteio, mas falta de opções de personalização.
          </li>
          <li>
            <b>Sistema Concorrente:</b> Conclusão média em 12 segundos, mais
            opções de personalização, mas com confusão no layout.
          </li>
        </ul>
        <b>Ação:</b>
        <ul>
          <li>
            Embora o sistema concorrente tenha sido ligeiramente mais rápido, os
            usuários preferiram a simplicidade e clareza do seu sistema.
          </li>
          <li>
            A recomendação foi melhorar as opções de personalização sem
            comprometer a simplicidade.
          </li>
        </ul>
      </Typography>
    ),
    goodPractices: (
      <Typography variant="body1">
        <li>
          O avaliador moderador do teste deve interagir o mínimo possível com o
          participante;
        </li>
        <br />
        <li>
          Não deve-se sobrecarregar os participantes com tarefas excessivas,
          especialmente porque o participante realizará cada tarefa duas ou três
          vezes, dependendo da quantidade de produtos comparados;
        </li>
        <br />
        <li>
          Ao convidar os participantes, deve-se deixar claro que, no teste de
          usabilidade, o objeto da avaliação são as interfaces e não o
          participante;
        </li>
        <br />
        <li>
          Recomenda-se apresentar ao participante, no início do teste, o Termo
          de Consentimento Livre e Esclarecido, mesmo que de forma simplificada,
          pois trata sobre a confidencialidade dos dados, entre outros pontos
          importantes de uma pesquisa. Disponível em:{" "}
          <a
            href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gov.br%2Febserh%2Fpt-br%2Fhospitais-universitarios%2Fregiao-nordeste%2Fhupes-ufba%2Fensino-e-pesquisa%2Fpesquisa-e-inovacao-tecnologica%2Fsubmissao-de-projetos-1%2Ftcle.doc&psig=AOvVaw1YNWk0ZpMGSNEcw0J6-FsR&ust=1732466041736000&source=images&cd=vfe&opi=89978449&ved=0CAQQn5wMahcKEwiImOemmfOJAxUAAAAAHQAAAAAQBA"
            target="_blank"
          >
            Termo de Consentimento;
          </a>
        </li>
        <br />
        <li>
          Recomenda-se realizar um teste piloto antes do início dos testes com
          usuários do público alvo, este teste tem por objetivo verificar se as
          tarefas estão claras e quanto tempo em média dura o teste todo. Assim,
          o roteiro de tarefas pode ser ajustado conforme necessário;
        </li>
        <br />
        <li>
          Embora você queira observar o que os usuários fazem, em vez de apenas
          pedir a opinião deles , será benéfico pedir aos participantes no final
          da sessão para comparar os sites que eles usaram. Comparar os dois
          designs pode ajudar os usuários a verbalizar o que estava claro ou
          confuso em cada design e pode ajudar você a obter mais insights sobre
          os pontos fortes e fracos. Para isso pode-se realizar uma entrevista
          ou um questionário;
        </li>
        <br />
        <li>
          Alterne qual produto é testado primeiro para cada usuário. Isso ajuda
          a evitar que enviesam os resultados do seu estudo.
        </li>
      </Typography>
    ),

    attentionPoints: (
      <Typography variant="body1">
        <li>
          Se o nível de fidelidade dos sistemas usados for de baixa ou média
          fidelidade é importante prestar atenção na distinção entre problemas
          inerentes à baixa fidelidade do protótipo e questões de usabilidade.
        </li>
        <br />
      </Typography>
    ),

    more: [
      "https://www.nngroup.com/articles/competitive-usability-evaluations/",
      "https://www.nngroup.com/articles/usability-testing-101/",
    ],
    relatedMethods: [
      "teste_de_usabilidade",
      "pensar_em_voz_alta",
      "gravacao_e_analise",
      "entrevista",
      "questionarios",
    ],
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
    classifications: ["Observação"],
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
