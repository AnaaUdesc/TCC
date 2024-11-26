import { Box, Container, Typography } from "@mui/material";
import Footer from "../Componentes/Footer";
import Header from "../Componentes/Header";
import { useEffect } from "react";

export default function AboutEvaluationPage() {
  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          flexGrow: 1,
          display: "flex", // Para que o conteúdo dentro seja flexível
          flexDirection: "column",
        }}
      >
        <Header />
        <Typography variant="h3" align="center" color="secondary">
          Sobre Avaliação
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{ maxWidth: 800, padding: 6, marginBottom: 20 }}
          >
            A tecnologia abrange diversas áreas, incluindo a Interação
            Humano-Computador (IHC), que estuda como as pessoas interagem com
            dispositivos computacionais. <br /> <br />
            Todo projeto de software passa por várias fases, desde a concepção
            da ideia, levantamento de requisitos, prototipação/desenvolvimento
            em código e avaliação. <br /> <br />A fase de avaliação pode incluir
            formas distintas de avaliar, como, por exemplo, testes funcionais
            para verificar o funcionamento de botões ou avaliações de
            usabilidade, que questionam se os elementos estão no lugar certo,
            possuem os nomes corretos e são visíveis para os usuários. Esta
            segunda maneira de avaliar é o foco da ferramenta.
            <br />
            <br />
            Ainda assim, pode-se encontrar aqui métodos que avaliam outros
            aspectos da interação humano-computador, como a acessibilidade e
            comunicabilidade por exemplo, mas estes conceitos continuam
            intimamente relacionados a usabilidade. <br />
            <br />
            <Typography variant="h5">
              Benefícios da fase de avaliação
            </Typography>
            <ul>
              <li>
                A possibilidade de verificar problemas reais de usabilidade em
                um contexto real de uso, e não apenas problemas imaginários;
              </li>{" "}
              <br />
              <li>
                Problemas identificados podem ser corrigidos antes que o produto
                seja lançado;
              </li>{" "}
              <br />
              <li>O tempo para colocar o produto no mercado diminui;</li> <br />
              <li>
                Permite verificar se o produto atende aos critérios de qualidade
                desejados;
              </li>{" "}
              <br />
              <li>
                Verificar se o sistema apoia adequadamente o usuário a atingir
                seus objetivos e medir o esforço necessário para atingir este
                objetivo;
              </li>{" "}
              <br />
              <li>
                Medir o grau de gravidade dos erros de interface, e diminuir o
                número de erros que o usuário cometerá;
              </li>{" "}
              <br />
              <li>Aumenta a satisfação do usuário;</li> <br />
              <li>
                O usuário final sempre terá uma opinião após usar o produto, é
                melhor saber a opinião dele antes do lançamento no mercado do
                que depois;
              </li>{" "}
              <br />
              <li>
                As vantagens ainda estendem-se a longo prazo, gerando menos
                investimento em suporte e treinamento;
              </li>{" "}
              <br />
              <li>
                Economia de tempo e esforço se a escolha do método for adequada,
                pois é necessário planejar: o quê, quando, onde, como avaliar,
                orçamento, prazo, equipamentos disponíveis, disponibilidade de
                participantes, bem como os dados a serem coletados e produzidos.
                Se o método escolhido for inadequado, todo esse trabalho será
                inútil e gerará retrabalho, custo de tempo, esforço e até
                financeiro;
              </li>{" "}
              <br />
              <li>
                Mostra o profissionalismo e preocupação com o usuário;
              </li>{" "}
              <br />
              <li>
                A escolha do método que não condiz com as necessidades e
                objetivos da avaliação pode acarretar em dados produzidos que
                não condizem com a realidade, ou seja, dados não confiáveis.
                Consequentemente, levam a más decisões de design.
              </li>{" "}
              <br />
            </ul>
          </Typography>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
