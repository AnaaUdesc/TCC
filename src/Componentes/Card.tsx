import { Box, Button, Divider, Typography } from "@mui/material";
import { MethodProps } from "../db/methods";

// Importando a imagem
import React from "react";

interface CardProps extends MethodProps {
  matchTotal: number;
}

export default function Card({
  description,
  image,
  title,
  classificationIcons,
  matchTotal,
}: CardProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#ffff",
        borderRadius: 2,
        display: "flex",
        padding: 2,
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          width: 161,
          height: 261,
          minWidth: 161,
          minHeight: 261,
          borderRadius: 2,
          backgroundSize: "cover", // Para cobrir o Box com a imagem
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          paddingX: 2,
        }}
      >
        <Typography sx={{ marginBottom: -3 }} variant="h5">
          {title}
        </Typography>
        <Typography>{description}</Typography>
        <Button>Ver detalhes</Button>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box>Porcentagens</Box>
    </Box>
  );
}
