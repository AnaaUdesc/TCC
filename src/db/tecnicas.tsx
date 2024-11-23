import { Tooltip, Typography } from "@mui/material";
import pensar_em_voz_alta from "../assets/pensar_em_voz_alta.jpg"; // Importando a imagem diretamente
import gravacao_e_analise from "../assets/gravacao_e_analise.jpg"; // Importando a imagem diretamente
import prototipacao_em_baixa_fidelidade from "../assets/prototipacao_em_baixa_fidelidade.jpg";
import heatmaps from "../assets/heatmaps.png";
import { MethodProps } from "./methods";

export const technics: MethodProps[] = [
  {
    id: "pensar_em_voz_alta",
    title: "Pensar em Voz Alta",
    description:
      "Utilizada para compreender o pensamento do usuário, onde ele verbaliza suas ações e pensamentos enquanto interage com o sistema.",
    image: pensar_em_voz_alta,
    classificationIcons: [
      <Tooltip title="Técnica" arrow placement="top">
        <Typography variant="h6" color="#ffff" fontWeight={700}>
          T
        </Typography>
      </Tooltip>,
    ],
    fullDescription: (
      <Typography variant="body1">
        Pensar em voz alta, do inglês <i>think aloud</i>, é uma técnica
        utilizada para compreender o pensamento do usuário, onde ele verbaliza
        suas ações e pensamentos enquanto utiliza o sistema.
        <br />
        <br />
        A utilização desta técnica elimina a necessidade de interpretação pelo
        avaliador do que se passa na mente do usuário, pois o usuário expressa
        diretamente o que está pensando.
        <br />
        <br />
        Eliminar a necessidade de interpretação pode ser interessante, evitando
        falhas na comunicação, especialmente quando o avaliador não tem
        experiência suficiente em interpretar as ações do usuário em avaliações
        de usabilidade.
        <br />
        <br />
        É uma técnica considerada simples e útil, e pode ser facilmente aplicada
        com métodos de observação, como teste de usabilidade, por exemplo.
        <br />
        <br />
        Por meio desta técnica pode-se obter dados qualitativos, por exemplo:
        <br />
        <Typography sx={{ paddingLeft: 2 }}>
          <li>Dúvidas quanto aos elementos da interface;</li>
          <li>Dificuldades do participante;</li>
          <li>Opiniões;</li>
          <li>Insights;</li>
          <li>Até mesmo sugestões de melhorias.</li>
        </Typography>
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        Ao realizar um teste de usabilidade — aquele onde o avaliador observa o
        participante realizando tarefas em um sistema — o avaliador pode
        solicitar ao participante antes do início da avaliação que faça uso da
        técnica, verbalizando o que pensa enquanto realiza as tarefas.
        <br />
        <br />
        Pensamentos do tipo:
        <br />
        <Typography sx={{ paddingLeft: 2 }}>
          <li>"Acho que esse botão me levará à tela de cadastro";</li>
          <li>"Estou buscando pela seção de Configuração neste menu".</li>
        </Typography>
        <br />
        São exemplos de pensamentos que podem ser expressos pelo participante, e
        através deles pode-se tomar decisões de redesign ou adaptação do sistema
        de acordo com as expectativas do usuário.
      </Typography>
    ),

    goodPractices: (
      <Typography variant="body1">
        <li>
          Uma boa prática é avisar o participante de que ele pode expressar os
          questionamentos que se passam na sua mente, mas que você ou o
          avaliador observador não responderão todas as dúvidas.
        </li>
        <br />

        <li>
          Recomenda-se responder apenas as dúvidas que não estejam relacionadas
          às dificuldades de usabilidade do sistema, como por exemplo, uma
          dúvida causada pelo baixo nível de fidelidade do sistema avaliado:
          <br />
          <br />
          <Typography sx={{ paddingLeft: 2, color: "#555555" }}>
            <i>
              O participante pode clicar em um botão que deveria levá-lo a
              alguma tela, mas o sistema não realiza a ação esperada, pois o
              protótipo usado na avaliação é parcialmente navegável, e ele
              pergunta em voz alta o porquê a ação não aconteceu.
            </i>
            <br />
            <br />
          </Typography>
          Neste caso, recomenda-se responder à dúvida, pois ela não está
          relacionada à usabilidade do sistema, mas sim à falta de fidelidade do
          protótipo.
        </li>
      </Typography>
    ),
    attentionPoints: (
      <Typography variant="body1">
        <li>
          Esta técnica depende muito do participante: alguns podem se distrair e
          parar de falar enquanto realizam alguma atividade. Outros podem gastar
          mais tempo e esforço relatando o que pensam do que executando as
          tarefas solicitadas.
        </li>
        <br />
        <li>
          Se não for aplicada de forma adequada, essa técnica pode interferir
          nos resultados da avaliação, como, por exemplo, no tempo de execução
          das tarefas, pois o participante pode gastar mais tempo pensando e
          falando, e esse tempo extra acaba impactando no tempo total da
          avaliação.
        </li>
      </Typography>
    ),

    more: ["https://doi.org/10.26522/brocked.v12i2.38"],
  },
  {
    id: "gravacao_e_analise",
    title: "Gravação e Análise",
    description:
      "Registrar a interação do usuário, capturando suas ações por vídeo ou falas em áudio, garantindo que nenhum detalhe seja perdido, para análise posterior.",
    image: gravacao_e_analise,
    classificationIcons: [
      <Tooltip title="Técnica" arrow placement="top">
        <Typography variant="h6" color="#ffff" fontWeight={700}>
          T
        </Typography>
      </Tooltip>,
    ],
    fullDescription: (
      <Typography variant="body1">
        Registrar a interação do usuário, capturando suas ações por vídeo ou
        falas em áudio, garante que nenhum detalhe seja perdido para análise
        posterior.
        <br />
        <br />
        A gravação é recomendada especialmente em situações com apenas um
        avaliador. Sem a gravação, o avaliador precisa anotar eventos enquanto
        observa, dividindo sua atenção. Essa divisão pode comprometer a
        qualidade das anotações, a eficiência da observação e o foco no usuário,
        resultando em uma análise menos precisa.
        <br />
        <br />
        A gravação pode ser usada posteriormente para análise de dados. Caso
        seja apenas em áudio, o conteúdo pode ser transcrito com a ajuda de
        ferramentas e softwares específicos.
        <br />
        <br />É indispensável obter a autorização do participante antes de
        gravá-lo. O participante deve estar ciente da gravação. Recomenda-se
        utilizar o{" "}
        <b>
          {" "}
          Termo de Autorização para Gravação de Voz e/ou Registro de Imagens
          (Fotos e/ou Vídeos)
        </b>{" "}
        , disponível em:
        <a
          href="https://www.gov.br/ebserh/pt-br/hospitais-universitarios/regiao-nordeste/huol-ufrn/ensino-e-pesquisa/comite-de-etica-em-pesquisa-cep/documentos/documentos-necessarios-para-submissao-de-projetos-de-pesquisa-que-serao-realizados-no-huol/termo-de-autorizacao-para-gravacao-de-voz-e-registro-de-imagens-1.docx"
          target="_blank"
        >
          Termo de Autorização.
        </a>
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        <br />
        <li>
          <b>Cenário 1: </b> Durante uma discussão em grupo focal, o grupo de
          participantes compartilham opiniões e experiências sobre o uso de um
          aplicativo:
          <ol>
            <li>
              Os participantes autorizam a gravação de áudio por meio do Termo
              de Autorização;
            </li>
            <br />
            <li>
              O avaliador posiciona o gravador em um local onde pode capturar
              todas as vozes da sala, mas procura manter o gravador discreto;
            </li>
            <br />
            <li>
              A gravação de áudio é utilizada para registrar todas as falas do
              grupo;
            </li>
            <br />
            <li>
              Posteriormente, o material é analisado para identificar insights,
              padrões de comportamento e sugestões de melhorias a partir das
              perspectivas dos participantes.
            </li>
            <br />
          </ol>
        </li>

        <br />
        <br />
        <li>
          <b>Cenário 2:</b> Um designer conduz um teste remoto de usabilidade em
          que o participante interage com um protótipo digital:
          <ol>
            <li>
              O participante autoriza a gravação da sessão por meio do Termo de
              Autorização;
            </li>
            <br />
            <li>
              A gravação de tela e áudio é feita para capturar os movimentos do
              cursor, as falas do participante, as ações realizadas e o tempo
              gasto em cada tarefa;
            </li>
            <br />
            <li>
              Isso permite analisar como o participante navega pelo sistema e
              identificar padrões ou obstáculos na interação.
            </li>
          </ol>
        </li>

        <br />
      </Typography>
    ),

    goodPractices: (
      <Typography variant="body1">
        <li>
          Testar os equipamentos antes de iniciar a gravação. Realize um vídeo
          ou áudio de teste antes de cada sessão de avaliação.
        </li>
        <br />
        <li>
          Criar uma cópia de backup das gravações imediatamente após o término
          de cada sessão.
        </li>
        <br />
        <br />
      </Typography>
    ),
    attentionPoints: (
      <Typography variant="body1">
        <li>
          Um ponto importante ao realizar gravações é, após informar o
          participante e obter sua autorização, minimizar a presença do gravador
          de áudio ou câmera de vídeo. Isso ajuda a evitar constrangimentos e
          garante que a interação com o participante seja o mais natural
          possível.
        </li>
        <br />
      </Typography>
    ),

    more: [
      "https://books.google.com.br/books?hl=pt-BR&lr=&id=dKmqDAAAQBAJ&oi=fnd&pg=PA1&dq=FLICK,+Uwe.+Introdu%C3%A7%C3%A3o+%C3%A0+pesquisa+qualitativa.+3rd+ed.+Porto+Alegre:+ArtMed,+2008.+E-book.+p.266.+ISBN+9788536318523.+&ots=JiDcO21Prp&sig=eba9p7Xf3bI6MnfShFQ2Kf3-kro#v=onepage&q&f=false",
      "http://www.irece.faced.ufba.br/twiki/pub/GEC/TrabalhoAno2006/a_video_gravacao_como_registro.pdf",
    ],
    relatedMethods: [
      "teste_de_usabilidade",
      "grupos_focais",
      "entrevista",
      "teste_de_usabilidade_competitivo",
      "avaliacao_cooperativa",
      "estudo_de_campo",
      "eye_tracking",
    ],
  },
  {
    id: "prototipacao_em_baixa_fidelidade",
    title: "Prototipação em Baixa Fidelidade",
    description:
      "Um protótipo é uma representação limitada de um design, a qual contém estrutura miníma suficiente para ser testada com usuário.",
    image: prototipacao_em_baixa_fidelidade,
    classificationIcons: [
      <Tooltip title="Técnica" arrow placement="top">
        <Typography variant="h6" color="#ffff" fontWeight={700}>
          T
        </Typography>
      </Tooltip>,
    ],
    fullDescription: (
      <Typography variant="body1">
        Um protótipo é uma representação limitada de um design ou partes dele, a
        qual contém estrutura miníma suficiente para ser testada com usuário,
        pode ser em papel, maquete, wireframes entre outros.
        <br />
        <br />
        Técnica usada para coletar informações de uso sem muito custo e esforço.
        <br />
        <br />
        Também usada para comparar alternativas de design sem precisar de fato
        implementa-las.
        <br />
        <br />
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        <br />
        <li>
          <b>Cenário: </b> Um avaliador convida usuários para realizar um teste
          de usabilidade em aplicativo de entrega de comida utilizando
          protótipos desenhados à mão.
          <ol>
            <li>
              São fornecidas tarefas, como selecionar um restaurante, adicionar
              itens ao carrinho e finalizar um pedido.
            </li>
            <br />
            <li>
              Durante o teste, o usuário verbaliza suas ações e faz gestos para
              interagir com as telas em papel.
            </li>
            <br />
            <li>
              O avaliador, atuando como “computador”, troca as telas simulando a
              ação do sistema conforme o progresso da tarefa.
            </li>
          </ol>
        </li>
      </Typography>
    ),

    goodPractices: (
      <Typography variant="body1">
        <li>
          Não se preocupe com detalhes visuais ou estéticos, foque no conceito
          de interação apresentado na interface.
        </li>
        <br />
        <li>
          Utilize materiais de baixo custo, como papel, caneta, post-its, entre
          outros. Se preferir uma abordagem digital, utilize ferramentas como
          Figma, Balsamiq, Draw.io entre outras.
        </li>
      </Typography>
    ),
    attentionPoints: (
      <Typography variant="body1">
        <li>
          É importante prestar atenção na distinção entre problemas inerentes à
          baixa fidelidade do protótipo e questões de usabilidade.
        </li>
        <br />
      </Typography>
    ),

    more: [
      "https://books.google.com.br/books?hl=pt-BR&lr=&id=YgBojJsVLGMC&oi=fnd&pg=PP1&dq=Snyder,+Carolyn+(2003).+Paper+Prototyping:+The+Fast+and+Easy+Way+to+Design+and+Refine+User+Interfaces.+Morgan+Kaufmann+Publishers+Inc.,+San+Francisco,+CA,+USA&ots=1pXQvTZ18D&sig=3ryTPb__gzYzayFIHUjT28i1p94#v=onepage&q&f=false",
      "https://copec.eu/congresses/icece2013/proc/works/36.pdf",
    ],
    relatedMethods: [
      "teste_de_usabilidade",
      "teste_de_usabilidade_competitivo",
      "entrevista",
      "grupos_focais",
    ],
  },
  {
    id: "heatmaps",
    title: "Heatmaps - Mapas de Calor",
    description:
      "Técnica de agrupamento de dados para obter informações sobre a atenção do usuário em determinados pontos da interface.",
    image: heatmaps,
    classificationIcons: [
      <Tooltip title="Técnica" arrow placement="top">
        <Typography variant="h6" color="#ffff" fontWeight={700}>
          T
        </Typography>
      </Tooltip>,
    ],
    fullDescription: (
      <Typography variant="body1">
        Técnica de agrupamento de dados individuais para formar mapas de calor
        que podem ser produzidos analisando cliques de mouse e/ou rastreamento
        ocular, obtendo informações sobre a atenção do usuário em determinados
        pontos da interface.
        <br />
        <br />
        As imagens com representação térmica mostram as tendências visuais dos
        participantes, indicando comportamentos padrões do grupo.
        <br />
        <br />
        Pode-se obter insights sobre o fluxo de leitura de uma página por
        exemplo, áreas que passam despercebidas, entre outros.
        <br />
        <br />
      </Typography>
    ),
    exemples: (
      <Typography variant="body1">
        <br />
        <li>
          <b>Cenário: </b> Um portal de notícias identifica, por meio da análise
          de logs, que muitos usuários abandonam a página inicial sem clicar nos
          artigos sugeridos.
          <ol>
            <li>
              No entanto, os logs não mostram quais áreas da página atraem mais
              cliques.
            </li>
            <br />
            <li>
              Para complementar, são gerados heatmaps de cliques a partir da
              interação dos usuários.
            </li>
            <br />
            <li>
              Os mapas revelam que a maioria dos cliques ocorre nos anúncios e
              nos menus laterais, enquanto os links principais de artigos
              recebem pouca atenção.
            </li>
            <br />
            <li>
              Combinando os dados, o portal reorganiza o layout, destacando os
              artigos para aumentar a taxa de engajamento.
            </li>
          </ol>
        </li>
      </Typography>
    ),

    goodPractices: (
      <Typography variant="body1">
        <li>
          Quanto mais participantes na avaliação, mais precisos serão os mapas
          de calor gerados.
        </li>
        <br />
        <li>
          Pode-se utilizar softwares especializados para auxiliar na produção
          deste tipo de informação gráfica.
        </li>
      </Typography>
    ),
    attentionPoints: (
      <Typography variant="body1">
        <li>Heatmaps não explicam "por que" algo atrai ou distrai.</li> <br />
        <li>
          É uma técnica recomendada como complemento na análise de dados, mas
          não deve ser utilizada como a única fonte de informação em uma
          pesquisa.
        </li>
        <br />
      </Typography>
    ),

    more: [
      "https://www.nngroup.com/articles/heatmap-visualizations-signifiers/",
      "https://www.researchgate.net/profile/Joana-Pinto-12/publication/284512589_Eye_tracking_and_usability_Combining_methods_to_understand_user_behavior_on_online_search_engines/links/5654621208aefe619b19dd12/Eye-tracking-and-usability-Combining-methods-to-understand-user-behavior-on-online-search-engines.pdf",
    ],
    relatedMethods: [
      "eye_tracking",
      "teste_de_usabilidade",
      "teste_de_usabilidade_competitivo",
      "analise_de_logs",
    ],
  },
];
