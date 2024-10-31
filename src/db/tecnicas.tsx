import { Tooltip, Typography } from "@mui/material";
import pensar_em_voz_alta from "../assets/pensar_em_voz_alta.jpg"; // Importando a imagem diretamente
import gravacao_e_analise from "../assets/gravacao_e_analise.jpg"; // Importando a imagem diretamente

export interface TecnicaProps {
  id: string;
  title: string;
  description: string;
  image: string;
  classificationIcons: React.ReactNode[];
  fullDescription: React.ReactNode;
  goodPractices?: string[];
  attentionPoints?: string[];
  more?: string[];
  exemples?: string[];
}

export const technics: TecnicaProps[] = [
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
        Pensar em voz alta, do inglês <i>think alound</i>, é uma técnica
        utilizada para compreender o pensamento do usuário, onde ele verbaliza
        suas ações e pensamentos enquanto utiliza o sistema.
        <br />
        <br />
        A utilização desta técnica elimina a necessidade de interpretação pelo
        avaliador do que se passa na mente do usuário, pois o usuário expressa
        diretamente o que está pensando. Eliminar a necessidade de interpretação
        pode ser interessante, evitando falhas na comunicação, especialmente
        quando o avaliador não tem experiência suficiente em interpretar as
        ações do usuário em avaliações de usabilidade.
        <br />
        <br />
        É uma técnica considerada simples e útil, e pode ser facilmente aplicada
        com métodos de observação, como teste de usabilidade por exemplo.
        <br />
        <br />
        Por meio desta técnica pode-se obter dados qualitativos: dúvidas quanto
        aos elementos da interface, dificuldades do participante, opiniões,
        insights, e até mesmo sugestões de melhorias.
      </Typography>
    ),
    exemples: [
      "Ao realizar um teste de usabilidade, aquele onde o avaliador observa o participante realizando tarefas em um sistema, o avaliador pode solicitar ao participante antes do inicio da avaliação que faça uso da técnica, verbalizando o que pensa enquanto realiza as tarefas. Pensamentos do tipo 'Acho que esse botão me levará a tela de cadastro', 'Estou buscando pela seção de Configuração neste menu', são exemplos de pensamentos que podem ser expressos pelo participante.",
    ],

    goodPractices: [
      "Uma boa prática é avisar o participante de que ele pode expressar os questionamentos que se passam na sua mente, mas que você ou o avaliador observador não responderão todas as dúvidas.",
      "Recomenda-se responder apenas as dúvidas que não estejam relacionadas as dificuldades de usabilidade do sistema. Como por exemplo, uma dúvida causadas pelo baixo nível de fidelidade do sistema avaliado: o participante pode clicar em um botão que deveria leva-lo a alguma tela, no caso de ser um protótipo parcialmente navegável, o botão pode não realizar a ação esperada, e o participante pode perguntar o porquê. Neste caso, recomenda-se responder a dúvida, pois ela não está relacionada a usabilidade do sistema, mas sim a falta de fidelidade do protótipo.",
    ],
    attentionPoints: [
      "Esta técnica depende muito do participante: alguns podem se distrair e parar de falar enquanto realizam alguma atividade. Outros podem gastar mais tempo e esforço relatando o que pensam do que executando as tarefas solicitadas.",
      "Se não for aplicada de forma adequada, essa técnica pode interferir nos resultados da avaliação, como, por exemplo, no tempo de execução das tarefas, pois o participante pode gastar mais tempo pensando e falando e esse tempo acaba sendo contabilizado na avaliação.",
    ],
    more: ["https://doi.org/10.26522/brocked.v12i2.38"],
  },
  {
    id: "gravacao_e_analise",
    title: "Gravação e Análise",
    description:
      "Registrar a interação do usuário, capturando suas ações por audio ou vídeo, garantindo que nenhum detalhe seja perdido, para análise posterior.",
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
    more: ["https://www.google.com"],
  },
];
