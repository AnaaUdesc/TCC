import { Box, Tooltip, Typography } from "@mui/material";

export default function Header() {
  return (
    <>
      <Box
        component="header"
        sx={{
          height: "100px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box>
          <Tooltip
            arrow
            placement="right"
            title={
              <Typography>
                <b>
                  Ferramenta de Apoio a Seleção de Método para Avaliação de
                  Usabilidade.
                </b>
                <br />
                <br />
                Logotipo e nome da ferramenta ainda em desenvolvimento.
              </Typography>
            }
          >
            <Typography variant="h5">LOGO</Typography>
            <Typography variant="h5" color="secondary">
              LOGO
            </Typography>
          </Tooltip>
        </Box>
      </Box>
    </>
  );
}
