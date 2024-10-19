import { ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  shape: {
    borderRadius: 10,
  },
  palette: {
    background: {
      default: "#F5F5F5",
    },
    primary: {
      main: "#1D1D1B",
    },
    secondary: {
      main: "#0D6070",
    },
    text: {
      primary: "#000000",
      secondary: "#666666",
    },
    // success: {
    //   main: "#95C11F",
    //   "100": "#E7F7D3",
    // },
    // warning: {
    //   main: "#FFA500",
    //   "100": "#FFF7E5",
    // },
    // info: {
    //   main: "#5075B9",
    // },
  },
  typography: {
    fontFamily: "Poppins",
  },
};

export default themeOptions;
