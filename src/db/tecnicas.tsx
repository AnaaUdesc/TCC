import { Typography } from "@mui/material";
import teste_de_usabilidade from "../assets/teste_de_usabilidade.jpg"; // Importando a imagem diretamente

export interface TecnicaProps {
  id: string;
  title: string;
  description: string;
  image: string;
  fullDescription: React.ReactNode;
  goodPractices: string[];
  attentionPoints: string[];
  more: string;
  exemples?: string[];
}

export const methods: TecnicaProps[] = [
  {
    id: "pensar_em_voz_alta",
    title: "Pensar em Voz Alta",
    description:
      "Utilizada para compreender o pensamento do usuário, onde ele verbaliza suas ações e pensamentos enquanto utiliza o sistema. Isso elimina a necessidade de interpretação pelo avaliador, pois o usuário expressa diretamente o que está pensando.",
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
  },
];
