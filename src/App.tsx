import React from "react";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import Routes from "./Routes";
import { Toaster } from "react-hot-toast";
import "./styles/_main.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7cb474",
      dark: "#2f9e44",
    },
    secondary: {
      main: "#f0c040",
    },
    text: {
      primary: "#1e293b",
      secondary: "#64748b",
    },
    background: {
      default: "#fefefe",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontSize: 16,
    fontWeightBold: 700,
    fontWeightMedium: 500,
    fontWeightRegular: 300,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Toaster />
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
