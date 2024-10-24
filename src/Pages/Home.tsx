import { Box, Container } from "@mui/material";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";
import Menu from "../Componentes/Menu";
import Card from "../Componentes/Card";
import React from "react";
import { methods } from "../db/methods";

export default function HomePage() {
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
        <Box
          sx={{
            border: 1,
            borderRadius: 2,
            borderColor: "#86ADB5",
            flexGrow: 1,
            marginBottom: -2,
            display: "flex", // Para que o conteúdo dentro seja flexível
            flexDirection: "row",
            paddingX: 12,
            paddingY: 4,
          }}
        >
          <Menu />
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              gap: 3,

              marginX: 4,
            }}
          >
            {methods.map((method) => (
              <Card
                title={method.title}
                classificationIcons={method.classificationIcons}
                description={method.description}
                image={method.image}
                matchTotal={0}
              />
            ))}
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
