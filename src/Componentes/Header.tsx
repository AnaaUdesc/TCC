import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        height: "100px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h5">LOGO</Typography>
        <Typography variant="h5" color="secondary">
          LOGO
        </Typography>
      </Box>
    </Box>
  );
}
