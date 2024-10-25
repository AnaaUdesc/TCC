import { Visibility } from "@mui/icons-material";
import { Tooltip, Typography } from "@mui/material";
import teste_de_usabilidade from "../assets/teste_de_usabilidade.jpg"; // Importando a imagem diretamente

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
  },
  // {
  //   title: "Teste de Usabilidade",
  //   classificationIcons: [],
  //   description:
  //     "Avaliar a qualidade de interação do usuário com o sistema, medir impactos, identificar desconfortos observando o uso do produto.",
  //   image: "teste_de_usabilidade.png",
  // },
  // {
  //   title: "Teste de Usabilidade",
  //   classificationIcons: [],
  //   description:
  //     "Avaliar a qualidade de interação do usuário com o sistema, medir impactos, identificar desconfortos observando o uso do produto.",
  //   image: "teste_de_usabilidade.png",
  // },
  // {
  //   title: "Teste de Usabilidade",
  //   classificationIcons: [],
  //   description:
  //     "Avaliar a qualidade de interação do usuário com o sistema, medir impactos, identificar desconfortos observando o uso do produto.",
  //   image: "teste_de_usabilidade.png",
  // },
  // {
  //   title: "Teste de Usabilidade",
  //   classificationIcons: [],
  //   description:
  //     "Avaliar a qualidade de interação do usuário com o sistema, medir impactos, identificar desconfortos observando o uso do produto.",
  //   image: "teste_de_usabilidade.png",
  // },
  // {
  //   title: "Teste de Usabilidade",
  //   classificationIcons: [],
  //   description:
  //     "Avaliar a qualidade de interação do usuário com o sistema, medir impactos, identificar desconfortos observando o uso do produto.",
  //   image: "teste_de_usabilidade.png",
  // },
];
