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
