import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  direction: "rtl",
  breakpoints: {
    values: {
      xs: 320,
      sm: 750,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      light: "#DCE9D5",
      main: "#274215",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      //   light: "#0066ff",
      main: "#908B0B",
      //   // dark: will be calculated from palette.secondary.main,
      //   contrastText: "#ffcc00",
    },

    error: {
      main: "#A52A2A",
    },
    text: {
      primary: {
        light: "#DCE9D5",
        main: "#55624C",
        dark: "#274215",
      },

      secondary: {
        main: "#ffffff",
      },
    },

    background: {
      default: "#F5F5F5",
      paper: "#D9D9D9",
      green: "#DCE9D5",
      darkGreen: "#14220B",
    },
  },
  typography: {
    fontFamily: "IRANYekan",
  },
});

export default responsiveFontSizes(theme);
